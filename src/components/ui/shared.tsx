export function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ title, description, icon: Icon, action }: { title: string, description?: string, icon?: any, action?: React.ReactNode }) {
  return (
    <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        {Icon && (
          <div className="p-2 bg-slate-800 rounded-lg text-emerald-400 shrink-0">
            <Icon size={20} />
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          {description && <p className="text-sm text-slate-400 truncate">{description}</p>}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = "", 
  ...props 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost', 
  className?: string,
  [x:string]: any 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2",
    danger: "bg-rose-500 hover:bg-rose-600 text-white px-4 py-2",
    ghost: "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 px-4 py-2",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Input({ className = "", ...props }: { className?: string, [x:string]: any }) {
  return (
    <input 
      className={`w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all ${className}`}
      {...props}
    />
  );
}
