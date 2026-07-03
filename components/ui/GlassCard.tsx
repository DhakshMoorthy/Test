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
        "glass rounded-2xl p-6",
        hover &&
          "transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
