import { useState } from "react";
import { Link2, ShieldAlert, ShieldCheck, Loader2 } from "lucide-react";
import { Card, CardContent, Input, Button } from "../components/ui/shared";
import { useLanguage } from "../contexts/LanguageContext";

export function PhishingCheck() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<'idle' | 'scanning' | 'safe' | 'unsafe'>('idle');
  const { t } = useLanguage();

  const checkUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    
    setStatus('scanning');
    setTimeout(() => {
      // Simulate check
      if (url.includes("scam") || url.includes("free-money")) {
         setStatus('unsafe');
      } else {
         setStatus('safe');
      }
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 mt-10">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto text-emerald-400">
          <Link2 size={32} />
        </div>
        <h2 className="text-3xl font-bold">{t("phish.title")}</h2>
        <p className="text-slate-400">{t("phish.desc")}</p>
      </div>

      <Card>
        <CardContent className="p-8">
          <form onSubmit={checkUrl} className="flex flex-col sm:flex-row gap-4">
            <Input 
              placeholder="https://example.com" 
              value={url}
              onChange={(e: any) => setUrl(e.target.value)}
              className="py-3 text-lg flex-1"
            />
            <Button type="submit" disabled={status === 'scanning'} className="py-3 px-8 text-lg shrink-0">
              {status === 'scanning' ? <><Loader2 className="animate-spin" /> {t("phish.scanning")}</> : t("phish.verify")}
            </Button>
          </form>

          {status === 'safe' && (
            <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start gap-4">
               <div className="text-emerald-400 shrink-0"><ShieldCheck size={32} /></div>
               <div>
                 <h4 className="font-semibold text-lg text-emerald-400">{t("phish.safe")}</h4>
                 <p className="text-emerald-100/70 mt-1">{t("phish.safeDesc")}</p>
               </div>
            </div>
          )}

          {status === 'unsafe' && (
            <div className="mt-8 p-6 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-4">
               <div className="text-rose-400 shrink-0"><ShieldAlert size={32} /></div>
               <div>
                 <h4 className="font-semibold text-lg text-rose-400">{t("phish.unsafe")}</h4>
                 <p className="text-rose-100/70 mt-1">{t("phish.unsafeDesc")}</p>
               </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <Card className="bg-slate-900/50">
           <CardContent>
             <h4 className="font-medium text-emerald-400 mb-2">{t("phish.spot")}</h4>
             <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
               <li>{t("phish.spot1")}</li>
               <li>{t("phish.spot2")}</li>
               <li>{t("phish.spot3")}</li>
             </ul>
           </CardContent>
         </Card>
         <Card className="bg-slate-900/50">
           <CardContent>
             <h4 className="font-medium text-amber-400 mb-2">{t("phish.todo")}</h4>
             <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
               <li>{t("phish.todo1")}</li>
               <li>{t("phish.todo2")}</li>
               <li>{t("phish.todo3")}</li>
             </ul>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
