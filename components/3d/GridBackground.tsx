"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 50;
      const w = canvas.width;
      const h = canvas.height;

      // Draw grid lines with animated opacity
      ctx.beginPath();
      for (let x = 0; x <= w; x += spacing) {
        const offset = Math.sin(x * 0.01 + time) * 2;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y <= h; y += spacing) {
        const offset = Math.sin(y * 0.01 + time + 1) * 2;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }

      ctx.strokeStyle = `rgba(59, 130, 246, ${0.03 + Math.sin(time) * 0.01})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Draw subtle dots at intersections
      for (let x = 0; x <= w; x += spacing) {
        for (let y = 0; y <= h; y += spacing) {
          const dotSize = 0.5 + Math.sin(x * 0.02 + y * 0.02 + time * 2) * 0.3;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0, dotSize), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${0.04 + Math.sin(x * 0.01 + y * 0.01 + time) * 0.02})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
