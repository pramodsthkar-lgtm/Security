import { useState } from "react";
import { Search, Shield, Smartphone, Key } from "lucide-react";
import { Card, CardContent, CardHeader, Button } from "../components/ui/shared";
import { useLanguage } from "../contexts/LanguageContext";

export function SecurityScan() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  const startScan = () => {
    setScanning(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setScanning(false);
          return 100;
        }
        return p + 5;
      });
    }, 200);
  };

  return (
    <div className="space-y-6">
      <Card className="text-center py-10">
        <div className="mx-auto w-24 h-24 mb-6 relative">
          <div className={`absolute inset-0 border-4 border-slate-800 rounded-full ${scanning ? 'animate-ping opacity-20' : ''}`}></div>
          <div className="absolute inset-0 border-4 border-emerald-500 rounded-full flex items-center justify-center bg-slate-900 z-10">
            <Search className={`text-emerald-400 ${scanning ? 'animate-spin' : ''}`} size={32} />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{t("scan.title")}</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          {t("scan.desc")}
        </p>

        {scanning ? (
          <div className="max-w-xs mx-auto space-y-2">
             <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 transition-all duration-200" style={{ width: `${progress}%` }}></div>
             </div>
             <p className="text-sm text-slate-400">{t("scan.scanning")} {progress}%</p>
          </div>
        ) : (
          <Button onClick={startScan} className="px-8 py-3 text-lg rounded-full">
            {t("scan.start")}
          </Button>
        )}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader title={t("scan.instApps")} icon={Smartphone} />
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400">{t("scan.totalApps")}</span>
              <span className="font-semibold text-lg">142</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{t("scan.riskyApps")}</span>
              <span className="font-semibold text-rose-400">0</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={t("dash.perms")} icon={Shield} />
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400">{t("scan.locAccess")}</span>
              <span className="text-amber-400 text-sm font-medium bg-amber-400/10 px-2 py-1 rounded">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{t("scan.camAccess")}</span>
              <span className="text-slate-200 text-sm font-medium bg-slate-800 px-2 py-1 rounded">5</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={t("scan.passwords")} icon={Key} />
          <CardContent>
             <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400">{t("scan.savedPass")}</span>
              <span className="font-semibold text-lg">48</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{t("scan.weakPass")}</span>
              <span className="text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2 py-1 rounded">0</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
