import { useState } from "react";
import { METRICS } from "../../lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Metrics() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="metrics" className="relative overflow-hidden border-y border-[#E8A000]/12 bg-[#FFFBF2]">
      <div className="kw-grid-bg pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-wrap items-stretch justify-between gap-6 md:flex-nowrap">
          {METRICS.map((metric, i) => (
            <button
              key={metric.label}
              type="button"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`kw-metric group flex min-w-[140px] flex-1 cursor-default flex-col items-center rounded-2xl border px-4 py-6 text-center transition-all duration-300 ${
                hovered === i
                  ? "border-[#E8A000]/30 bg-white shadow-[0_8px_32px_rgba(232,160,0,0.12)]"
                  : "border-transparent bg-transparent"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p
                className={`text-[2.5rem] font-extrabold leading-none tracking-tight transition-colors duration-300 sm:text-[2.75rem] ${
                  hovered === i ? "text-[#E8A000]" : "text-[#E8A000]"
                }`}
              >
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className={`mt-2 text-[14px] font-semibold leading-snug transition-colors ${hovered === i ? "text-[#0a0a0a]" : "text-[#141414]"}`}>
                {metric.label}
              </p>
              <p className={`mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${hovered === i ? "text-[#E8A000]" : "text-[#525252]"}`}>
                {metric.sub}
              </p>
              {/* bottom accent line */}
              <div
                className={`mt-4 h-[2px] w-10 rounded-full bg-[#E8A000] transition-all duration-300 ${
                  hovered === i ? "w-16 opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
