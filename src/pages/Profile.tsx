import { User, Mail, Shield, Bell, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, Button, Input } from "../components/ui/shared";
import { useLanguage } from "../contexts/LanguageContext";

export function Profile() {
  const { t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      <div className="flex items-center gap-6 mb-8">
         <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center">
            <User size={40} className="text-slate-400" />
         </div>
         <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-slate-400 flex items-center gap-2 mt-1">
              <Shield size={16} className="text-emerald-400" /> {t("prof.prem")}
            </p>
         </div>
      </div>

      <Card>
        <CardHeader title={t("prof.info")} icon={User} action={<Button variant="ghost">{t("prof.edit")}</Button>} />
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 block mb-1">{t("prof.name")}</label>
              <Input defaultValue="John Doe" readOnly className="bg-slate-900 border-transparent" />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1">{t("prof.email")}</label>
              <Input defaultValue="john.doe@example.com" readOnly className="bg-slate-900 border-transparent" />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1">{t("prof.phone")}</label>
              <Input defaultValue="+1 (555) 000-0000" readOnly className="bg-slate-900 border-transparent" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title={t("prof.sec")} icon={Lock} />
        <CardContent className="space-y-4 divide-y divide-slate-800">
           <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-200">{t("prof.pass")}</p>
                <p className="text-sm text-slate-400">{t("prof.passDesc")}</p>
              </div>
              <Button variant="secondary">{t("prof.update")}</Button>
           </div>
           <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-slate-200">{t("prof.twoFA")}</p>
                <p className="text-sm text-slate-400">{t("prof.twoFADesc")}</p>
              </div>
              <Button variant="primary">{t("prof.enable")}</Button>
           </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title={t("prof.notif")} icon={Bell} />
        <CardContent className="space-y-4 divide-y divide-slate-800">
           <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-200">{t("prof.alerts")}</p>
                <p className="text-sm text-slate-400">{t("prof.alertsDesc")}</p>
              </div>
              <div className="w-10 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                 <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow"></div>
              </div>
           </div>
           <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-slate-200">{t("prof.reports")}</p>
                <p className="text-sm text-slate-400">{t("prof.reportsDesc")}</p>
              </div>
              <div className="w-10 h-6 bg-slate-700 rounded-full relative cursor-pointer">
                 <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 shadow"></div>
              </div>
           </div>
        </CardContent>
      </Card>
      
    </div>
  );
}
