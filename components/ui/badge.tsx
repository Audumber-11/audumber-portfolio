import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        primary:
          "border-primary/20 bg-primary/10 text-primary",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        glow: "border-primary/30 bg-primary/10 text-primary backdrop-blur-sm shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]",
        glass:
          "border-white/10 bg-white/[0.04] text-foreground backdrop-blur-md",
        gradient:
          "border-transparent text-white bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm",
      },
      size: {
        sm: "h-5 px-2.5 text-[11px]",
        md: "h-6 px-3 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "sm" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
