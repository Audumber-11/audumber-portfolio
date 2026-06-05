"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let cx = -100;
    let cy = -100;
    let tx = -100;
    let ty = -100;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setHidden(false);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      const interactive = t.closest(
        "a, button, [role=button], [data-cursor=hover], input, textarea, select, label"
      );
      setHovered(!!interactive);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const animate = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      setPos({ x: cx, y: cy });
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - (hovered ? 22 : 6),
          y: pos.y - (hovered ? 22 : 6),
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.4 }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            hovered
              ? "h-11 w-11 bg-white"
              : pressed
              ? "h-3 w-3 bg-white"
              : "h-3 w-3 bg-white"
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          opacity: hidden ? 0 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="h-10 w-10 rounded-full border border-violet-400/50" />
      </motion.div>
    </>
  );
}
