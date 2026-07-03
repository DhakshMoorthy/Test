import { cn } from "@/lib/utils";
import VisualPanel from "@/components/ui/VisualPanel";

interface SectionLayoutProps {
  id?: string;
  badge: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function SectionLayout({
  id,
  badge,
  title,
  description,
  children,
  visual,
  reverse = false,
  className,
}: SectionLayoutProps) {
  return (
    <section id={id} className={cn("scene-section", className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className={cn(reverse && "lg:order-2")}>
          <span className="section-badge">{badge}</span>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted mt-4 max-w-lg text-base leading-relaxed md:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
        <VisualPanel className={cn(reverse && "lg:order-1")}>
          {visual}
        </VisualPanel>
      </div>
    </section>
  );
}
