"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollProgress {
  progress: number;
  scrollY: number;
  direction: "up" | "down";
}

export function useScrollProgress(): ScrollProgress {
  const [scrollData, setScrollData] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0,
    direction: "down",
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;

    setScrollData((prev) => ({
      progress: Math.min(Math.max(progress, 0), 1),
      scrollY,
      direction: scrollY > prev.scrollY ? "down" : "up",
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollData;
}
