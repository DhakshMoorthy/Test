"use client";

import { useEffect, useRef } from "react";

interface AnimatedPathProps {
  d: string;
  className?: string;
  duration?: number;
}

export default function AnimatedPath({
  d,
  className = "",
  duration = 2,
}: AnimatedPathProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.animation = `drawPath ${duration}s ease forwards`;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes drawPath {
        to { stroke-dashoffset: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [d, duration]);

  return (
    <path
      ref={pathRef}
      d={d}
      fill="none"
      stroke="url(#pathGradient)"
      strokeWidth="2"
      className={className}
    />
  );
}
