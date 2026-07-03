"use client";

import { useMouseGlow } from "@/lib/hooks/useMouseGlow";

export default function MouseGlow() {
  const { position, isVisible } = useMouseGlow();

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] mix-blend-screen"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)",
        transition: "opacity 0.3s ease",
      }}
      aria-hidden
    />
  );
}
