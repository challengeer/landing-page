import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    loading?: boolean;
}

export default function Button({ children, variant = "primary", disabled = false, loading = false, ...props }: ButtonProps) {
    const variantClasses = {
        primary: "bg-purple-500 text-white",
        secondary: "bg-white text-purple-500",
    }
    
    return (
        <button
          className={cn(
            "flex items-center justify-center h-12 px-4 rounded-lg cursor-pointer font-medium relative hover:opacity-80",
            variantClasses[variant],
            disabled && "opacity-50 hover:opacity-50"
          )}
          disabled={disabled || loading}
          {...props}
        >
          {loading && (
            <Loader2 className="w-6 h-6 animate-spin absolute" />
          )}
          <div className={`flex items-center gap-2 ${loading ? 'opacity-0' : ''}`}>
            {children}
          </div>
        </button>
    )
}