import { HERO } from "../../lib/constants";

const BG_TERMS = [
  "S/4HANA", "FI/CO", "Treasury", "Joule AI", "Analytics",
  "Close Mgmt", "BTP", "Fiori", "Real-Time", "Cloud ERP",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-80px)] flex-col overflow-hidden pb-16 pt-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(232,160,0,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(232,160,0,0.04) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {BG_TERMS.map((term, i) => (
          <span
            key={term}
            className="absolute select-none font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8A000]/[0.07] sm:text-[13px]"
            style={{
              left: `${5 + (i * 8) % 75}%`,
              top: `${10 + (i * 11) % 70}%`,
            }}
          >
            {term}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-6xl flex-col items-center justify-center px-6 text-center sm:px-8">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white/70 px-5 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8A000] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8A000]" />
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#E8A000]">
            {HERO.badge}
          </span>
        </div>

        <p className="mb-2 text-[clamp(1.25rem,2.5vw,2rem)] font-normal text-[#0a0a0a]/55">
          {HERO.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#0a0a0a]">
          <span className="text-[#E8A000]">{HERO.title}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[#0a0a0a]/55">
          {HERO.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {HERO.pills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2.5 text-[13px] font-medium text-[#0a0a0a]/85 shadow-sm backdrop-blur-sm"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E8A000]" />
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ai"
            className="inline-flex rounded-full bg-[#E8A000] px-8 py-3.5 text-[15px] font-semibold text-[#0a0a0a] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,160,0,0.35)]"
          >
            {HERO.primaryCta} →
          </a>
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-3.5 text-[15px] font-medium text-[#0a0a0a]/75 no-underline transition-all hover:border-[#E8A000] hover:text-[#E8A000]"
          >
            {HERO.secondaryCta}
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-16">
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[2rem] font-bold tracking-tight text-[#E8A000] sm:text-[2.25rem]">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-[#0a0a0a]/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
