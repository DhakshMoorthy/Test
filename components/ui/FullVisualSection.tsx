import { cn } from "@/lib/utils";

interface FullVisualSectionProps {
  id?: string;
  badge: string;
  title: React.ReactNode;
  description?: string;
  visual: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  bgClass?: string;
  className?: string;
}

export default function FullVisualSection({
  id,
  badge,
  title,
  description,
  visual,
  footer,
  actions,
  bgClass,
  className,
}: FullVisualSectionProps) {
  return (
    <section id={id} className={cn("full-scene", bgClass, className)}>
      {/* Header strip */}
      <div className="full-scene-header">
        <div>
          <span className="section-badge">{badge}</span>
          <h2 className="font-display mt-3 text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted mt-3 max-w-2xl text-base md:text-lg">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>

      {/* Full-bleed illustration */}
      <div className="full-scene-illu">{visual}</div>

      {/* Footer strip */}
      {footer && <div className="full-scene-footer">{footer}</div>}
    </section>
  );
}
