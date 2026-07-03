"use client";

import { useMouseGlow } from "@/lib/hooks/useMouseGlow";

export default function MouseGlow() {
  const { position, isVisible } = useMouseGlow();

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: position.x - 180,
        top: position.y - 180,
        width: 360,
        height: 360,
        background: "radial-gradient(circle, rgba(250, 171, 24, 0.07) 0%, transparent 70%)",
        transition: "opacity 0.4s ease",
      }}
      aria-hidden
    />
  );
}
