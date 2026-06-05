import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="relative group">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-medium text-muted-foreground mb-2"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm transition-all duration-200",
            "placeholder:text-muted-foreground/50",
            "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
              : "border-white/10 hover:border-white/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
