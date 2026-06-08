import { useState } from "react";
import { Battery, Wifi, Navigation } from "lucide-react";
import { Card, CardContent, Button } from "../components/ui/shared";
// Using a placeholder map since we might not have a Google Maps key set yet,
// but let's implement the UI wrapper
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export function LostPhone() {
  const [lostMode, setLostMode] = useState(false);
  const position = { lat: 37.7749, lng: -122.4194 }; // SF placeholder

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 overflow-hidden h-[400px] relative bg-slate-800">
          <Map 
            defaultZoom={13} 
            defaultCenter={position} 
            mapId="DEMO_MAP_ID"
            disableDefaultUI={true}
          >
             <AdvancedMarker position={position}>
                <div className="w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-900 shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
             </AdvancedMarker>
          </Map>
          
          <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
            <div className="bg-slate-900/90 backdrop-blur pointer-events-auto px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live GPS Tracking Active</span>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">Device Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Battery size={18} />
                      <span>Battery</span>
                    </div>
                    <span className="font-medium text-emerald-400">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Wifi size={18} />
                      <span>Network</span>
                    </div>
                    <span className="font-medium">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Navigation size={18} />
                      <span>Last Seen</span>
                    </div>
                    <span className="font-medium text-sm">Just now</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="secondary">
                Ring Device
              </Button>
              <Button 
                className="w-full justify-start" 
                variant={lostMode ? 'secondary' : 'danger'}
                onClick={() => setLostMode(!lostMode)}
              >
                {lostMode ? 'Disable Lost Mode' : 'Enable Lost Mode'}
              </Button>
              <Button className="w-full justify-start" variant="primary">
                Secure Erase
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
