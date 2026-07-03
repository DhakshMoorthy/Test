"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  direction?: "up" | "down";
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
  direction = "up",
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const obj = { val: 0 };
    const isDecimal = value % 1 !== 0;
    gsap.to(obj, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () =>
        setDisplay(isDecimal ? Math.round(obj.val * 10) / 10 : Math.round(obj.val)),
    });
  }, [value, duration]);

  const arrow = direction === "down" ? "↓" : "↑";

  return (
    <span className={className}>
      {direction && <span className="text-accent mr-1">{arrow}</span>}
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
