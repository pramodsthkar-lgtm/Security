import { useState } from "react";
import { ShieldCheck, CheckCircle2, CreditCard, Globe } from "lucide-react";
import { Card, CardContent, Button } from "../components/ui/shared";
import { useLanguage } from "../contexts/LanguageContext";
import { languages } from "../translations";

export function Subscription({ onSubscribe }: { onSubscribe: () => void }) {
  const { t, language, setLanguage } = useLanguage();
  const [processing, setProcessing] = useState(false);

  const handleSubscribe = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onSubscribe();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <Globe size={16} className="text-slate-400" />
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
          className="bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-md px-2 py-1 focus:outline-none"
        >
          {languages.map(l => (
            <option key={l.code} value={l.code}>{l.name}</option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-50">{t("nav.brand")} {t("sub.title")}</h1>
          <p className="text-slate-400 mt-2">{t("sub.desc")}</p>
        </div>

        <Card className="bg-slate-900 border-emerald-500/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-lg">
            {t("sub.rec")}
          </div>
          <CardContent className="pt-8">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-slate-50">{t("sub.price")}</span>
              <span className="text-slate-400">{t("sub.month")}</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                <span>{t("sub.feat1")}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                <span>{t("sub.feat2")}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                <span>{t("sub.feat3")}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                <span>{t("sub.feat4")}</span>
              </li>
            </ul>

            <Button 
              onClick={handleSubscribe} 
              disabled={processing}
              className="w-full py-4 text-lg font-medium flex items-center justify-center gap-2"
            >
              {processing ? (
                <span>{t("sub.wait")}</span>
              ) : (
                <>
                  <CreditCard size={20} />
                  {t("sub.btn")}
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
