"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let p = 0;
    const tick = () => {
      p = Math.min(100, p + Math.random() * 12 + 4);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 350);
      }
    };
    const t = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 150);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 bg-aurora opacity-40" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 -m-8 animate-pulse-glow rounded-full bg-violet-500/30 blur-2xl" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-[0_0_60px_-10px_rgba(167,139,250,0.7)]">
                <span className="font-display text-3xl font-bold text-white">A</span>
              </div>
            </motion.div>

            <div className="flex flex-col items-center gap-3">
              <div className="font-display text-2xl font-semibold tracking-tight">
                Audumber<span className="text-violet-400">.</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Crafting experience
              </div>
            </div>

            <div className="flex w-64 flex-col gap-2">
              <div className="h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
