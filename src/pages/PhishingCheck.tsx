import { useState } from "react";
import { Link2, ShieldAlert, ShieldCheck, Loader2 } from "lucide-react";
import { Card, CardContent, Input, Button } from "../components/ui/shared";

export function PhishingCheck() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<'idle' | 'scanning' | 'safe' | 'unsafe'>('idle');

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
        <h2 className="text-3xl font-bold">Phishing Link Checker</h2>
        <p className="text-slate-400">Paste any suspicious link below to verify if it is safe to visit.</p>
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
              {status === 'scanning' ? <><Loader2 className="animate-spin" /> Scanning</> : 'Verify Link'}
            </Button>
          </form>

          {status === 'safe' && (
            <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start gap-4">
               <div className="text-emerald-400 shrink-0"><ShieldCheck size={32} /></div>
               <div>
                 <h4 className="font-semibold text-lg text-emerald-400">Safe to Visit</h4>
                 <p className="text-emerald-100/70 mt-1">We did not find any phishing patterns or malicious content associated with this URL.</p>
               </div>
            </div>
          )}

          {status === 'unsafe' && (
            <div className="mt-8 p-6 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-4">
               <div className="text-rose-400 shrink-0"><ShieldAlert size={32} /></div>
               <div>
                 <h4 className="font-semibold text-lg text-rose-400">Danger: Phishing Detected</h4>
                 <p className="text-rose-100/70 mt-1">This link has been flagged as malicious. Do not visit this site or provide any personal information.</p>
               </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <Card className="bg-slate-900/50">
           <CardContent>
             <h4 className="font-medium text-emerald-400 mb-2">How to spot a fake link</h4>
             <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
               <li>Check for misspellings (e.g. g00gle.com)</li>
               <li>Verify the domain extension</li>
               <li>Avoid unexpected shortened links</li>
             </ul>
           </CardContent>
         </Card>
         <Card className="bg-slate-900/50">
           <CardContent>
             <h4 className="font-medium text-amber-400 mb-2">What to do if you clicked</h4>
             <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
               <li>Disconnect from the internet</li>
               <li>Run a full security scan</li>
               <li>Change compromised passwords</li>
             </ul>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
