import { ArrowRight, Play } from "lucide-react";
import { HERO } from "../../lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";

const BG_TERMS = [
  "S/4HANA", "FI/CO", "Treasury", "Joule AI", "Analytics",
  "Close Mgmt", "BTP", "Fiori", "Real-Time", "Cloud ERP",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="kw-hero relative flex min-h-[calc(100vh-80px)] flex-col overflow-hidden pb-16 pt-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="kw-grid-bg absolute inset-0 opacity-[0.04]" />
        <div className="kw-scan-line absolute inset-0 opacity-[0.06]" />
        {BG_TERMS.map((term, i) => (
          <span
            key={term}
            className="absolute select-none font-mono text-[11px] uppercase tracking-[0.2em] text-[#0a0a0a]/[0.06] sm:text-[13px]"
            style={{
              left: `${5 + (i * 8) % 75}%`,
              top: `${10 + (i * 11) % 70}%`,
            }}
          >
            {term}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 text-center sm:px-8">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#0a0a0a]/8 bg-white/80 px-5 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C49200] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C49200]" />
          </span>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0a0a0a]/70">
            {HERO.badge}
          </span>
        </div>

        <p className="mb-2 text-[clamp(1.25rem,2.5vw,2rem)] font-normal text-[#0a0a0a]/55">
          {HERO.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#0a0a0a]">
          {HERO.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[#0a0a0a]/65">
          {HERO.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {HERO.pills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a]/8 bg-white/90 px-4 py-2.5 text-[13px] font-medium text-[#0a0a0a]/85 shadow-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C49200]" />
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-8 py-3.5 text-[15px] font-semibold text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
          >
            {HERO.primaryCta}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a]/12 px-8 py-3.5 text-[15px] font-medium text-[#0a0a0a]/75 no-underline transition-all hover:border-[#0a0a0a]/25 hover:text-[#0a0a0a]"
          >
            <Play className="h-4 w-4 fill-[#0a0a0a]/75" strokeWidth={0} />
            {HERO.secondaryCta}
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-16">
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="kw-stat text-center">
              <p className="text-[2rem] font-bold tracking-tight text-[#0a0a0a] sm:text-[2.25rem]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#0a0a0a]/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
