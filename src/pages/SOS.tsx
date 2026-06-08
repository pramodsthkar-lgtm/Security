import { AlertOctagon, PhoneCall, Share2 } from "lucide-react";
import { Card, CardContent, Button } from "../components/ui/shared";
import { useState } from "react";

export function SOS() {
  const [active, setActive] = useState(false);

  const triggerSOS = () => {
    setActive(true);
    // In a real app this would call APIs or system intents
  };

  return (
    <div className="max-w-xl mx-auto text-center space-y-8 mt-10">
      
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-rose-500">Emergency SOS</h2>
        <p className="text-slate-400">Tap the button below to instantly alert your emergency contacts and share your live location.</p>
      </div>

      <button
        onClick={triggerSOS}
        disabled={active}
        className={`w-64 h-64 rounded-full mx-auto flex items-center justify-center transition-all shadow-2xl relative ${
          active 
            ? 'bg-rose-600 cursor-default scale-95 shadow-rose-900/50' 
            : 'bg-rose-500 hover:bg-rose-400 hover:scale-105 active:scale-95 shadow-rose-500/50 cursor-pointer'
        }`}
      >
        {active && (
          <div className="absolute inset-0 rounded-full border-4 border-rose-500 animate-ping opacity-75"></div>
        )}
        <div className="flex flex-col items-center gap-2">
           <AlertOctagon size={64} className="text-white" />
           <span className="font-bold text-2xl text-white uppercase tracking-widest">{active ? 'Active' : 'SOS'}</span>
        </div>
      </button>

      {active && (
        <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl font-medium animate-pulse">
           Alerting emergency contacts and broadcasting location...
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
         <Card>
           <CardContent className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
                <Share2 size={24} />
              </div>
              <div>
                 <p className="font-semibold">Location Shared</p>
                 <p className="text-sm text-slate-400 text-emerald-400 text-xs mt-1">Status: Active</p>
              </div>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-blue-400">
                  <PhoneCall size={24} />
                </div>
                <div>
                   <p className="font-semibold">Contacts</p>
                   <p className="text-sm text-slate-400 mt-1">3 notified</p>
                </div>
              </div>
              <Button variant="secondary" className="px-3 text-xs">Edit</Button>
           </CardContent>
         </Card>
      </div>

    </div>
  );
}
