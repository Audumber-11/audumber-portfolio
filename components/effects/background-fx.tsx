"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export function BackgroundFx() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const stars: Star[] = [];
    const STAR_COUNT = 220;
    const SPEED = 0.4;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * width,
          pz: 0,
        });
        stars[stars.length - 1].pz = stars[stars.length - 1].z;
      }
    };

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fillRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      for (const s of stars) {
        s.pz = s.z;
        s.z -= SPEED * 2;
        if (s.z < 1) {
          s.x = (Math.random() - 0.5) * width;
          s.y = (Math.random() - 0.5) * height;
          s.z = width;
          s.pz = s.z;
        }
        const sx = (s.x / s.z) * 200;
        const sy = (s.y / s.z) * 200;
        const psx = (s.x / s.pz) * 200;
        const psy = (s.y / s.pz) * 200;
        const size = Math.max(0.2, (1 - s.z / width) * 1.8);
        const alpha = Math.max(0.1, 1 - s.z / width);

        ctx.strokeStyle = `rgba(180,160,255,${alpha})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(psx, psy);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    resize();
    initStars();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-50 bg-background" />
      <div className="pointer-events-none fixed inset-0 -z-40 bg-aurora opacity-50" />
      <div className="pointer-events-none fixed inset-0 -z-30 grid-bg opacity-60" />
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 -z-20 h-full w-full opacity-50"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 noise" />
    </>
  );
}
