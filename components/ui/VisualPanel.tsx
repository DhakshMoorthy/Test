import { cn } from "@/lib/utils";

interface VisualPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function VisualPanel({ children, className }: VisualPanelProps) {
  return (
    <div className={cn("visual-panel", className)}>
      {children}
    </div>
  );
}
