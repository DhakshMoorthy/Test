"use client";

import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  const { ref, handleMouseMove, handleMouseLeave, handleMouseEnter } = useMagnetic(0.25);

  const variants = {
    primary: "bg-accent text-[#090909] shadow-[0_4px_20px_rgba(250,171,24,0.4)] hover:bg-accent-light hover:shadow-[0_8px_28px_rgba(250,171,24,0.5)]",
    secondary: "bg-white text-foreground border border-border hover:border-accent/40 hover:bg-accent-pale",
    ghost: "text-muted hover:text-accent-dark hover:bg-accent-pale",
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
        "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
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
    </button>
  );
}
