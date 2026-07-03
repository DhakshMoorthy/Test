import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "white-card p-6",
        hover && "hover:border-accent/20",
        className
      )}
    >
      {children}
    </div>
  );
}
