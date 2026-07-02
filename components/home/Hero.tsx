import { ArrowRight, Play } from "lucide-react";
import { HERO } from "../../lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";
import { SapIcon, type IconName } from "../ui/SapIcon";

const BG_TERMS = [
  "S/4HANA", "FI/CO", "Treasury", "Joule AI",
  "Analytics", "BTP", "Fiori", "Real-Time",
];

/* Live stat chips — look like mini dashboard widgets */
type Chip =
  | { kind: "stat"; value: number; suffix: string; label: string; icon: IconName; anim: "a" | "b" | "c"; pos: Record<string, string>; hide: string }
  | { kind: "live"; label: string; sub: string; icon: IconName; anim: "a" | "b" | "c"; pos: Record<string, string>; hide: string };

const CHIPS: Chip[] = [
  {
    kind: "stat",
    value: 95, suffix: "%", label: "Forecast Accuracy",
    icon: "trend", anim: "b",
    pos: { top: "13%", left: "3%" },
    hide: "hidden lg:flex",
  },
  {
    kind: "live",
    label: "SAP Joule AI", sub: "Embedded AI — Live",
    icon: "automation", anim: "a",
    pos: { top: "10%", right: "4%" },
    hide: "hidden lg:flex",
  },
  {
    kind: "stat",
    value: 60, suffix: "%", label: "Manual Work Reduced",
    icon: "cog", anim: "c",
    pos: { top: "48%", left: "2%" },
    hide: "hidden lg:flex",
  },
  {
    kind: "live",
    label: "S/4HANA Cloud", sub: "GST Ready — Active",
    icon: "settings", anim: "b",
    pos: { top: "44%", right: "2%" },
    hide: "hidden lg:flex",
  },
  {
    kind: "stat",
    value: 35, suffix: "K", label: "Project Hours",
    icon: "chart", anim: "a",
    pos: { bottom: "20%", left: "5%" },
    hide: "hidden xl:flex",
  },
  {
    kind: "live",
    label: "BTP Platform", sub: "Connected — Stable",
    icon: "dashboard", anim: "c",
    pos: { bottom: "22%", right: "5%" },
    hide: "hidden xl:flex",
  },
  {
    kind: "stat",
    value: 80, suffix: "", label: "SAP-Certified",
    icon: "shield", anim: "b",
    pos: { top: "25%", right: "13%" },
    hide: "hidden 2xl:flex",
  },
];

function StatChip({ chip }: { chip: Extract<Chip, { kind: "stat" }> }) {
  return (
    <div
      className={`kw-chip kw-chip-${chip.anim} ${chip.hide} flex-col gap-0`}
      style={chip.pos}
    >
      <div className="mb-0.5 flex items-center gap-1.5">
        <SapIcon name={chip.icon} className="h-3 w-3 text-[#E8A000]" strokeWidth={2} />
        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#0a0a0a]/45">
          {chip.label}
        </span>
      </div>
      <span className="font-mono text-[1.4rem] font-extrabold leading-none tracking-tight text-[#E8A000]">
        <AnimatedCounter value={chip.value} suffix={chip.suffix} duration={2200} />
      </span>
    </div>
  );
}

function LiveChip({ chip }: { chip: Extract<Chip, { kind: "live" }> }) {
  return (
    <div
      className={`kw-chip kw-chip-${chip.anim} ${chip.hide} flex-col gap-0.5`}
      style={chip.pos}
    >
      <div className="flex items-center gap-1.5">
        <SapIcon name={chip.icon} className="h-3 w-3 text-[#0a0a0a]/60" strokeWidth={2} />
        <span className="text-[12px] font-bold text-[#0a0a0a]">{chip.label}</span>
        <span className="ml-0.5 rounded-full bg-[#E8A000] px-1.5 py-0 font-mono text-[8px] font-extrabold uppercase tracking-wider text-[#0a0a0a]">
          Live
        </span>
      </div>
      <p className="font-mono text-[9px] text-[#0a0a0a]/40">{chip.sub}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="kw-hero relative flex min-h-[calc(100vh-68px)] flex-col overflow-hidden pb-16 pt-4"
    >
      {/* background */}
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

      {/* floating chips */}
      {CHIPS.map((chip, i) =>
        chip.kind === "stat"
          ? <StatChip key={i} chip={chip} />
          : <LiveChip key={i} chip={chip} />,
      )}

      {/* content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 text-center sm:px-8">

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

        {/* animated stats */}
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
