import { User, Mail, Shield, Bell, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, Button, Input } from "../components/ui/shared";

export function Profile() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      <div className="flex items-center gap-6 mb-8">
         <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center">
            <User size={40} className="text-slate-400" />
         </div>
         <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-slate-400 flex items-center gap-2 mt-1">
              <Shield size={16} className="text-emerald-400" /> Premium Protection
            </p>
         </div>
      </div>

      <Card>
        <CardHeader title="Account Information" icon={User} action={<Button variant="ghost">Edit</Button>} />
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 block mb-1">Full Name</label>
              <Input defaultValue="John Doe" readOnly className="bg-slate-900 border-transparent" />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Email Address</label>
              <Input defaultValue="john.doe@example.com" readOnly className="bg-slate-900 border-transparent" />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1">Phone Number</label>
              <Input defaultValue="+1 (555) 000-0000" readOnly className="bg-slate-900 border-transparent" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Security Settings" icon={Lock} />
        <CardContent className="space-y-4 divide-y divide-slate-800">
           <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-200">Change Password</p>
                <p className="text-sm text-slate-400">Update your account password</p>
              </div>
              <Button variant="secondary">Update</Button>
           </div>
           <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-slate-200">Two-Factor Authentication</p>
                <p className="text-sm text-slate-400">Add an extra layer of security</p>
              </div>
              <Button variant="primary">Enable</Button>
           </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Notifications" icon={Bell} />
        <CardContent className="space-y-4 divide-y divide-slate-800">
           <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-slate-200">Security Alerts</p>
                <p className="text-sm text-slate-400">Get notified about threats instantly</p>
              </div>
              <div className="w-10 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                 <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow"></div>
              </div>
           </div>
           <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-slate-200">Weekly Reports</p>
                <p className="text-sm text-slate-400">Receive a summary of your security status</p>
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
