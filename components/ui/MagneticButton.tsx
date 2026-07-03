"use client";

import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function MagneticButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave, handleMouseEnter } =
    useMagnetic(0.3);

  const variants = {
    primary:
      "bg-accent text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)]",
    secondary:
      "glass text-foreground hover:bg-white/10 border border-white/10",
    ghost: "text-muted hover:text-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </button>
  );
}
