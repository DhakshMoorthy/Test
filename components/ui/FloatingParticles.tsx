"use client";

import { useEffect, useRef } from "react";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export default function FloatingParticles({
  count = 40,
  className = "",
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.0002,
      speedY: (Math.random() - 0.5) * 0.0002,
      opacity: Math.random() * 0.2 + 0.05,
    }));

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > 1) p.speedX *= -1;
        if (p.y < 0 || p.y > 1) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 171, 24, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    />
  );
}
