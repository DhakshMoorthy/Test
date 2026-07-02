import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { DELIVERY } from "../../lib/constants";
import { CheckIcon, SapIcon } from "./SapIcon";

/* ── constants ───────────────────────────────────── */
const NODE_SIZE = 56;   // px — circle diameter
const N = DELIVERY.phases.length; // 4

export default function ActivationPath() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* trigger on scroll-into-view */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /*
   * Line math — all in JS so positioning is always exact.
   * Each node sits in a flex-1 cell, so node centres are at:
   *   left_edge = (i + 0.5) / N  as a fraction of container width
   * Track: first-centre → last-centre   = (0.5/N) → (1 - 0.5/N)
   * Fill width per step = 1/N of the total span (= (N-1)/N of container)
   */
  const lineTop = NODE_SIZE / 2;           // px — vertical centre of circles
  const leftPct = (0.5 / N) * 100;        // 12.5%
  const spanPct = ((N - 1) / N) * 100;    // 75%
  const fillPct = visible ? (active / (N - 1)) * spanPct : 0;

  const detail = DELIVERY.phaseDetails[active];
  const phase  = DELIVERY.phases[active];

  return (
    <div>
      {/* ── Pathway track ──────────────────────────── */}
      <div ref={trackRef} className="relative pb-6">

        {/* background track */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-[#0a0a0a]/8"
          style={{
            top: lineTop - 1,
            left:  `${leftPct}%`,
            right: `${leftPct}%`,
            height: 2,
          }}
        />

        {/* animated fill */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{
            top: lineTop - 1,
            left: `${leftPct}%`,
            height: 2,
            width: `${fillPct}%`,
            background: "linear-gradient(90deg, #E8A000 0%, #f5c842 100%)",
            transition: "width 0.9s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        />

        {/* nodes */}
        <div className="relative z-10 flex">
          {DELIVERY.phases.map((p, i) => {
            const isActive = i === active;
            const isDone   = i < active;
            return (
              <button
                key={p.phase}
                type="button"
                onClick={() => setActive(i)}
                style={{ flex: 1 }}
                className="group flex flex-col items-center gap-0 focus:outline-none"
              >
                {/* circle node */}
                <div
                  className={`
                    relative flex items-center justify-center rounded-full
                    font-mono text-[15px] font-extrabold transition-all duration-350
                    ${isActive
                      ? "bg-[#E8A000] text-[#0a0a0a] shadow-[0_0_0_6px_rgba(232,160,0,0.15),0_0_24px_rgba(232,160,0,0.35)]"
                      : isDone
                        ? "border-2 border-[#E8A000] bg-[#E8A000]/10 text-[#E8A000]"
                        : "border-2 border-[#0a0a0a]/15 bg-white text-[#525252] group-hover:border-[#E8A000]/50 group-hover:text-[#E8A000]"
                    }
                  `}
                  style={{ width: NODE_SIZE, height: NODE_SIZE }}
                >
                  {isDone ? <Check size={20} strokeWidth={2.5} /> : p.phase}
                  {/* ping on active */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#E8A000]/20"
                    />
                  )}
                </div>

                {/* label */}
                <div className="mt-4 w-full px-2 text-center">
                  <p className="mb-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#E8A000]">
                    Phase {p.phase}
                  </p>
                  <p className={`text-[13px] font-bold leading-snug ${isActive ? "text-[#0a0a0a]" : "text-[#525252]"}`}>
                    {p.title.split(":")[0]}
                  </p>
                  <p className="mt-0.5 line-clamp-2 hidden text-[11px] font-medium leading-snug text-[#525252] sm:block">
                    {p.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Detail card ────────────────────────────── */}
      <div
        key={active}
        className="mt-8 grid overflow-hidden rounded-2xl border border-[#0a0a0a]/8 bg-white shadow-[0_8px_48px_rgba(0,0,0,0.07)] lg:grid-cols-2"
        style={{ animation: "kw-fade-up 0.4s ease both" }}
      >
        {/* image */}
        <div className="relative h-56 overflow-hidden md:h-72 lg:h-auto lg:min-h-[420px]">
          <img
            src={detail.image}
            alt={detail.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-[#0a0a0a]/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/98" />
          {/* phase icon overlay */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl border border-white/20 bg-[#0a0a0a]/40 px-4 py-2.5 backdrop-blur-md">
            <SapIcon name={phase.icon} className="h-4 w-4 text-[#E8A000]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
              {detail.title.split(":")[0]}
            </span>
          </div>
        </div>

        {/* copy */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8A000]/25 bg-[#E8A000]/8 text-[#E8A000]">
              <SapIcon name={phase.icon} className="h-5 w-5" />
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#E8A000]">
              Phase {phase.phase}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight text-[#0a0a0a] lg:text-[1.75rem]">
            {detail.title.includes(":") ? (
              <>
                {detail.title.split(":")[0]}
                {": "}
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-7 py-3 text-[14px] font-bold text-[#0a0a0a] no-underline shadow-[0_4px_16px_rgba(232,160,0,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,160,0,0.4)]"
            >
              Start This Phase
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            {active < N - 1 && (
              <button
                type="button"
                onClick={() => setActive(active + 1)}
                className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a]/12 px-7 py-3 text-[14px] font-semibold text-[#0a0a0a] transition-all hover:border-[#E8A000]/40 hover:text-[#E8A000]"
              >
                Next Phase →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
