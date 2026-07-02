import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { DELIVERY } from "../../lib/constants";
import SectionHeader from "./SectionHeader";
import { CheckIcon, SapIcon } from "./SapIcon";

type PhaseDetail = (typeof DELIVERY.phaseDetails)[number];

function PhaseNode({
  phase,
  title,
  active,
  done,
  index,
  onClick,
}: {
  phase: string;
  title: string;
  active: boolean;
  done: boolean;
  index: number;
  onClick: () => void;
}) {
  const shortTitle = title.split(":")[0];

  return (
    <div className="flex flex-1 flex-col items-center gap-4">
      <button
        type="button"
        onClick={onClick}
        aria-current={active ? "step" : undefined}
        className={`kw-path-node font-mono text-[15px] font-extrabold tracking-tight ${
          active ? "active" : done ? "done" : "idle"
        }`}
      >
        {phase}
        {active && (
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[#E8A000]/20 animate-ping" />
        )}
      </button>
      <div className="max-w-[100px] text-center">
        <p className="mb-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#E8A000]">
          Phase {phase}
        </p>
        <p
          className={`text-[12px] font-semibold leading-tight ${
            active ? "text-[#0a0a0a]" : "text-[#525252]"
          }`}
        >
          {shortTitle}
        </p>
      </div>
    </div>
  );
}

function DetailPanel({ detail, icon }: { detail: PhaseDetail; icon: (typeof DELIVERY.phases)[number]["icon"] }) {
  return (
    <div className="kw-panel mt-12 grid overflow-hidden rounded-2xl border border-[#0a0a0a]/8 bg-white shadow-[0_8px_48px_rgba(0,0,0,0.06)] lg:grid-cols-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[400px]">
        <img
          src={detail.image}
          alt={detail.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/98" />
        {/* Phase badge on image */}
        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl border border-white/20 bg-white/12 px-4 py-2.5 backdrop-blur-sm lg:hidden">
          <SapIcon name={icon} className="h-4 w-4 text-[#E8A000]" />
          <span className="font-mono text-[11px] font-bold text-white">{detail.title.split(":")[0]}</span>
        </div>
      </div>

      {/* Copy */}
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <div className="mb-4 hidden items-center gap-3 lg:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8A000]/25 bg-[#E8A000]/8 text-[#E8A000]">
            <SapIcon name={icon} className="h-5 w-5" />
          </span>
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] lg:text-3xl">
          {detail.title.includes(":") ? (
            <>
              {detail.title.split(":")[0]}:{" "}
              <span className="text-[#E8A000]">
                {detail.title.split(":").slice(1).join(":").trim()}
              </span>
            </>
          ) : (
            detail.title
          )}
        </h3>
        <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#3d3d3d]">
          {detail.description}
        </p>

        <p className="mb-4 mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8A000]">
          Key Deliverables
        </p>
        <ul className="m-0 list-none space-y-3 p-0">
          {detail.deliverables.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#E8A000]/20 bg-[#E8A000]/8 text-[#E8A000]">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span className="text-[15px] font-semibold text-[#141414]">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-3 text-[14px] font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
        >
          Start This Phase
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

export default function ActivationPath() {
  const [active, setActive] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Fill line width: 0 → 100% across the 3 gaps (4 nodes = 3 segments)
  const fillPct = drawn ? (active / (DELIVERY.phases.length - 1)) * 100 : 0;

  return (
    <div>
      {/* ── Pathway ─────────────────────────────────── */}
      <div ref={pathRef} className="relative mx-auto max-w-2xl px-4">
        {/* Background track */}
        <div className="kw-path-line-bg" />
        {/* Animated fill */}
        <div
          className="kw-path-line-fill"
          style={{ width: drawn ? `calc(${fillPct}% * 0.75)` : "0%" }}
        />

        {/* Nodes row */}
        <div className="relative z-10 flex justify-between">
          {DELIVERY.phases.map((phase, i) => (
            <PhaseNode
              key={phase.phase}
              phase={phase.phase}
              title={phase.title}
              active={i === active}
              done={i < active}
              index={i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      {/* Small phase descriptions below the path on desktop */}
      <div className="mt-6 hidden grid-cols-4 gap-3 px-2 md:grid">
        {DELIVERY.phases.map((phase, i) => (
          <button
            key={phase.phase}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
              i === active
                ? "border-[#E8A000]/35 bg-[#E8A000]/[0.05]"
                : "border-transparent hover:border-[#0a0a0a]/8"
            }`}
          >
            <p
              className={`text-[12px] font-semibold leading-snug ${
                i === active ? "text-[#0a0a0a]" : "text-[#525252]"
              }`}
            >
              {phase.title}
            </p>
            <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#525252] line-clamp-2">
              {phase.description}
            </p>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <DetailPanel
        detail={DELIVERY.phaseDetails[active]}
        icon={DELIVERY.phases[active].icon}
      />
    </div>
  );
}
