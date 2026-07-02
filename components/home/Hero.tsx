import { ArrowRight, Play } from "lucide-react";
import { HERO } from "../../lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";
import { SapIcon } from "../ui/SapIcon";

const BG_TERMS = [
  "S/4HANA", "FI/CO", "Treasury", "Joule AI",
  "Analytics", "BTP", "Fiori", "Real-Time",
];

const CHIPS: {
  label: string;
  icon: "chart" | "shield" | "automation" | "trend" | "dashboard" | "settings" | "rocket" | "cog";
  anim: string;
  style: React.CSSProperties;
  hide?: string;
}[] = [
  {
    label: "SAP Joule AI",
    icon: "automation",
    anim: "kw-chip kw-chip-a",
    style: { top: "13%", left: "4%", animationDelay: "0s" },
    hide: "hidden lg:flex",
  },
  {
    label: "FI / CO Module",
    icon: "chart",
    anim: "kw-chip kw-chip-b",
    style: { top: "11%", right: "5%", animationDelay: "1.4s" },
    hide: "hidden lg:flex",
  },
  {
    label: "GST Compliance",
    icon: "shield",
    anim: "kw-chip kw-chip-c",
    style: { top: "48%", left: "2%", animationDelay: "0.7s" },
    hide: "hidden lg:flex",
  },
  {
    label: "S/4HANA Cloud",
    icon: "settings",
    anim: "kw-chip kw-chip-a",
    style: { top: "46%", right: "2%", animationDelay: "2.1s" },
    hide: "hidden lg:flex",
  },
  {
    label: "SAC Analytics",
    icon: "trend",
    anim: "kw-chip kw-chip-b",
    style: { bottom: "22%", left: "6%", animationDelay: "1s" },
    hide: "hidden xl:flex",
  },
  {
    label: "BTP Platform",
    icon: "dashboard",
    anim: "kw-chip kw-chip-c",
    style: { bottom: "24%", right: "6%", animationDelay: "1.8s" },
    hide: "hidden xl:flex",
  },
  {
    label: "Fiori UX",
    icon: "rocket",
    anim: "kw-chip kw-chip-a",
    style: { top: "28%", right: "12%", animationDelay: "3s" },
    hide: "hidden 2xl:flex",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="kw-hero relative flex min-h-[calc(100vh-68px)] flex-col overflow-hidden pb-16 pt-4"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,160,0,0.07) 0%, transparent 65%)," +
              "radial-gradient(ellipse 35% 35% at 90% 90%, rgba(232,160,0,0.04) 0%, transparent 55%)",
          }}
        />
        <div className="kw-grid-bg absolute inset-0 opacity-[0.038]" />
        <div className="kw-scan-line absolute inset-0 opacity-[0.05]" />

        {/* Faint BG watermark terms */}
        {BG_TERMS.map((term, i) => (
          <span
            key={term}
            className="absolute select-none font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8A000]/[0.09] sm:text-[13px]"
            style={{ left: `${6 + (i * 10) % 72}%`, top: `${8 + (i * 13) % 72}%` }}
          >
            {term}
          </span>
        ))}
      </div>

      {/* Floating chips */}
      {CHIPS.map((chip) => (
        <div
          key={chip.label}
          className={`${chip.anim} ${chip.hide ?? "flex"}`}
          style={chip.style}
        >
          <SapIcon name={chip.icon} className="h-3.5 w-3.5 text-[#E8A000]" strokeWidth={1.75} />
          <span className="font-mono text-[10px] font-semibold text-[#0a0a0a]">
            {chip.label}
          </span>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 text-center sm:px-8">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#E8A000]/30 bg-[#E8A000]/[0.07] px-5 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8A000] opacity-55" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8A000]" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#141414]">
            {HERO.badge}
          </span>
        </div>

        <p className="mb-2 text-[clamp(1.1rem,2.2vw,1.75rem)] font-medium text-[#3d3d3d]">
          {HERO.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#0a0a0a]">
          {HERO.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] font-medium leading-relaxed text-[#3d3d3d]">
          {HERO.subtitle}
        </p>

        {/* Pill badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {HERO.pills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8A000]/25 bg-white px-4 py-2 text-[12px] font-semibold text-[#0a0a0a] shadow-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8A000]" />
              {pill}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-9 py-3.5 text-[15px] font-bold text-[#0a0a0a] no-underline shadow-[0_4px_20px_rgba(232,160,0,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(232,160,0,0.38)]"
          >
            {HERO.primaryCta}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a]/12 bg-white px-8 py-3.5 text-[15px] font-semibold text-[#0a0a0a] no-underline shadow-sm transition-all hover:border-[#E8A000]/50 hover:shadow-[0_4px_16px_rgba(232,160,0,0.15)] hover:text-[#E8A000]"
          >
            <Play className="h-4 w-4 fill-[#0a0a0a]" strokeWidth={0} />
            {HERO.secondaryCta}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-16">
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="kw-stat text-center">
              <p className="text-[2.1rem] font-extrabold tracking-tight text-[#E8A000] sm:text-[2.4rem]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#141414]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
