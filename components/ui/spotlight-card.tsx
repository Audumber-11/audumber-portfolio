"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlight?: boolean;
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, children, spotlight = true, ...props }, ref) => {
    const [element, setElement] = React.useState<HTMLDivElement | null>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!element || !spotlight) return;
      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    return (
      <div
        ref={(node) => {
          setElement(node);
          if (typeof ref === "function") ref(node);
          else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {spotlight && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity,
              background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.06), transparent 40%)`,
            }}
          />
        )}
        {children}
      </div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";

export { SpotlightCard };
