import { METRICS } from "../../lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Metrics() {
  return (
    <section id="metrics" className="relative overflow-hidden border-y border-[#0a0a0a]/6 bg-[#fafafa]">
      <div className="kw-grid-bg pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-wrap items-stretch justify-between gap-8 md:flex-nowrap">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="kw-metric flex min-w-[140px] flex-1 flex-col items-center text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="text-[2.5rem] font-bold leading-none tracking-tight text-[#0a0a0a] sm:text-[2.75rem]">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-2 text-[14px] leading-snug text-[#0a0a0a]/85">
                {metric.label}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-[#0a0a0a]/40">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
