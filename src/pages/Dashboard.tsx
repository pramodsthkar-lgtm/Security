import { ShieldCheck, Smartphone, AlertTriangle, Activity } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/shared";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Risk Score Banner */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <ShieldCheck className="text-emerald-400" size={28} />
            Device Protected
          </h2>
          <p className="text-emerald-100/70 mt-1">Your overall security score is excellent. No immediate threats detected.</p>
        </div>
        <div className="flex-shrink-0 relative w-24 h-24 flex items-center justify-center rounded-full bg-emerald-500/10 border-4 border-emerald-500">
           <span className="text-2xl font-bold text-emerald-400">98%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Last Scan</p>
              <p className="text-lg font-semibold">2 hours ago</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Smartphone size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Apps Secured</p>
              <p className="text-lg font-semibold">142</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-rose-500/20 text-rose-400 rounded-xl">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Threats Blocked</p>
              <p className="text-lg font-semibold">12</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Permissions</p>
              <p className="text-lg font-semibold">Healthy</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Recent Alerts" icon={AlertTriangle} />
          <div className="divide-y divide-slate-800">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 flex gap-4 hover:bg-slate-800/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <p className="font-medium text-slate-200">New system update available</p>
                  <p className="text-sm text-slate-400 mt-1">Install the latest security patch to stay protected.</p>
                  <p className="text-xs text-slate-500 mt-2">Yesterday</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Quick Actions" icon={Activity} />
          <CardContent className="space-y-3">
             <button className="w-full text-left p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between">
               <span className="font-medium">Run Full Scan</span>
               <ShieldCheck size={18} className="text-emerald-400" />
             </button>
             <button className="w-full text-left p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between">
               <span className="font-medium">Check Phishing Links</span>
               <AlertTriangle size={18} className="text-amber-400" />
             </button>
             <button className="w-full text-left p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition flex items-center justify-between">
               <span className="font-medium">Update Emergency Contacts</span>
               <Smartphone size={18} className="text-blue-400" />
             </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
