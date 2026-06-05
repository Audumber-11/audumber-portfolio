"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "./use-mouse";

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.hypot(dx, dy);
    const radius = 120;
    if (dist < radius) {
      const factor = (1 - dist / radius) * strength;
      el.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    } else {
      el.style.transform = `translate(0px, 0px)`;
    }
  }, [x, y, strength]);

  return ref;
}
