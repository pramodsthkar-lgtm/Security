import { useState } from "react";
import { ShieldCheck, Globe } from "lucide-react";
import { Card, CardContent, Input, Button } from "../components/ui/shared";
import { useLanguage } from "../contexts/LanguageContext";
import { languages } from "../translations";

export function Login({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const { t, language, setLanguage } = useLanguage();

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
          <h1 className="text-3xl font-bold text-slate-50">{t("nav.brand")}</h1>
          <p className="text-slate-400 mt-2">{t("login.subtitle")}</p>
        </div>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-8">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              <h2 className="text-xl font-semibold mb-6">{isLogin ? t("login.welcome") : t("login.createAcc")}</h2>
              
              {!isLogin && (
                <div>
                  <label className="text-sm text-slate-400 block mb-1">{t("prof.name")}</label>
                  <Input placeholder="John Doe" required />
                </div>
              )}
              
              <div>
                <label className="text-sm text-slate-400 block mb-1">{t("prof.email")}</label>
                <Input type="email" placeholder="you@example.com" required />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm text-slate-400">{t("prof.pass")}</label>
                  {isLogin && <a href="#" className="text-xs text-emerald-400 hover:underline">{t("login.forgot")}</a>}
                </div>
                <Input type="password" placeholder="••••••••" required />
              </div>

              <Button type="submit" className="w-full py-3 mt-4">
                {isLogin ? t("login.signIn") : t("login.signUp")}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-900 text-slate-500">{t("login.or")}</span>
                </div>
              </div>

              <Button type="button" variant="secondary" className="w-full flex items-center justify-center gap-3 py-3" onClick={onLogin}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.8 15.71 17.58V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                  <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.58C14.73 18.24 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.83 14.1H2.15V16.95C3.96 20.53 7.69 23 12 23Z" fill="#34A853"/>
                  <path d="M5.83 14.1C5.6 13.44 5.47 12.74 5.47 12C5.47 11.26 5.6 10.56 5.83 9.9V7.05H2.15C1.4 8.55 1 10.22 1 12C1 13.78 1.4 15.45 2.15 16.95L5.83 14.1Z" fill="#FBBC05"/>
                  <path d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.35 3.87C17.45 2.1 14.97 1 12 1C7.69 1 3.96 3.47 2.15 7.05L5.83 9.9C6.71 7.3 9.14 5.38 12 5.38Z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-slate-400 mt-6">
          {isLogin ? t("login.noAcc") : t("login.hasAcc")}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-emerald-400 font-medium hover:underline">
            {isLogin ? t("login.signUp") : t("login.signIn")}
          </button>
        </p>
      </div>
    </div>
  );
}
