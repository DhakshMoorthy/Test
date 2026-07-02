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
      className="kw-hero relative flex min-h-[calc(100vh-72px)] flex-col overflow-hidden pb-16 pt-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(232,160,0,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="kw-grid-bg absolute inset-0 opacity-[0.04]" />
        <div className="kw-scan-line absolute inset-0 opacity-[0.06]" />
        {BG_TERMS.map((term, i) => (
          <span
            key={term}
            className="absolute select-none font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8A000]/[0.12] sm:text-[13px]"
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
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#E8A000]/30 bg-[#E8A000]/[0.06] px-5 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8A000] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8A000]" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#141414]">
            {HERO.badge}
          </span>
        </div>

        <p className="mb-2 text-[clamp(1.25rem,2.5vw,2rem)] font-medium text-[#3d3d3d]">
          {HERO.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0a0a0a]">
          {HERO.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] font-medium leading-relaxed text-[#3d3d3d]">
          {HERO.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {HERO.pills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8A000]/25 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0a0a0a] shadow-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8A000]" />
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-8 py-3.5 text-[15px] font-bold text-[#0a0a0a] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,160,0,0.35)]"
          >
            {HERO.primaryCta}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a]/15 px-8 py-3.5 text-[15px] font-semibold text-[#0a0a0a] no-underline transition-all hover:border-[#E8A000]/50 hover:text-[#E8A000]"
          >
            <Play className="h-4 w-4 fill-[#0a0a0a]" strokeWidth={0} />
            {HERO.secondaryCta}
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-16">
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="kw-stat text-center">
              <p className="text-[2rem] font-extrabold tracking-tight text-[#E8A000] sm:text-[2.25rem]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#141414]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
