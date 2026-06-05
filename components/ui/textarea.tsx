import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="relative group">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-medium text-muted-foreground mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[120px] w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm transition-all duration-200",
            "placeholder:text-muted-foreground/50",
            "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none",
            error
              ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
              : "border-white/10 hover:border-white/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-400">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
