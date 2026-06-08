import { ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { 
  ShieldCheck, 
  MapPin, 
  MessageSquareWarning, 
  Bot, 
  AlertOctagon, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  Activity
} from "lucide-react";
import { useState } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: Activity },
    { name: "Security Scan", href: "/scan", icon: ShieldCheck },
    { name: "Lost Phone", href: "/lost-phone", icon: MapPin },
    { name: "Phishing Check", href: "/phishing", icon: MessageSquareWarning },
    { name: "AI Assistant", href: "/ai-expert", icon: Bot },
    { name: "SOS", href: "/sos", icon: AlertOctagon },
    { name: "Profile", href: "/profile", icon: User },
    // { name: "Admin", href: "/admin", icon: Settings },
  ];

  const currentNav = navigation.find(n => n.href === location.pathname) || { name: 'Cyber Shield' };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden w-64 border-r border-slate-800 bg-slate-900/50 md:flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <ShieldCheck size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight">Cyber Shield</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-slate-400 hover:text-slate-50 hover:bg-slate-800"
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-slate-50 hover:bg-slate-800 transition-colors"
          >
            <LogOut size={18} />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-4 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-slate-400 hover:text-slate-50 rounded-md"
            >
              <Menu size={24} />
            </button>
            <span className="font-semibold">{currentNav.name}</span>
          </div>
          
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold">{currentNav.name}</h1>
          </div>

          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <User size={16} className="text-slate-400" />
             </div>
          </div>
        </header>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
             <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
             <div className="relative flex w-64 flex-col bg-slate-900 border-r border-slate-800 h-full">
               <div className="flex items-center justify-between p-4 border-b border-slate-800">
                 <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck size={24} />
                    <span className="font-bold">Cyber Shield</span>
                 </div>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 p-1">
                   <X size={20} />
                 </button>
               </div>
               <nav className="flex-1 p-4 space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "text-slate-300"
                        }`}
                      >
                        <item.icon size={20} />
                        {item.name}
                      </Link>
                    );
                  })}
               </nav>
             </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
