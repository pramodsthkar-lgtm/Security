import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Card, Input } from "../components/ui/shared";
import Markdown from 'react-markdown';
import { useLanguage } from "../contexts/LanguageContext";

export function AIExpert() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    { role: "ai", text: t("ai.init") }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history: messages })
      });
      const data = await res.json();
      
      if (res.ok && data.reply) {
        setMessages(prev => [...prev, { role: "ai", text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: "ai", text: t("ai.errorAPI") }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: "ai", text: t("ai.errorNet") }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-[calc(100vh-8rem)] flex flex-col relative overflow-hidden bg-slate-900 border-slate-800">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === 'ai' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-300'
            }`}>
              {msg.role === 'ai' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className={`px-5 py-4 rounded-2xl max-w-[85%] text-sm ${
              msg.role === 'ai' 
                ? 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-slate-700/50' 
                : 'bg-emerald-600 text-white rounded-tr-none'
            }`}>
               {msg.role === 'ai' ? (
                 <div className="markdown-body prose prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-slate-900 prose-pre:border-slate-800">
                    <Markdown>{msg.text}</Markdown>
                 </div>
               ) : (
                 <p className="whitespace-pre-wrap">{msg.text}</p>
               )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div className="px-5 py-4 rounded-2xl rounded-tl-none bg-slate-800/80 border border-slate-700/50">
              <Loader2 className="animate-spin text-emerald-400" size={20} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-900/50 backdrop-blur-md border-t border-slate-800">
        <form onSubmit={handleSend} className="relative max-w-4xl mx-auto flex gap-3">
          <Input 
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
            placeholder={t("ai.placeholder")}
            className="pl-4 pr-12 py-4 rounded-xl bg-slate-950 border-slate-700"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-lg transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </Card>
  );
}
