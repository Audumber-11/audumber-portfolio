"use client";

import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      setPosition({ x, y });
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return position;
}
