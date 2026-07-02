import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

export default function Card3D({
  children,
  className = "",
  onClick,
  style,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${y * -7}deg) translateZ(6px)`;
    el.style.transition = "transform 0.1s ease";
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    el.style.transition = "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
}
