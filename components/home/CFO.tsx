import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { CFO as CFO_DATA } from "../../lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";
import { SapIcon } from "../ui/SapIcon";

/* Extra per-service metrics shown in the detail card */
const SERVICE_METRICS: Record<string, { value: number; suffix: string; label: string }[]> = {
  "SAP FI/CO": [
    { value: 99, suffix: "%", label: "GST Accuracy" },
    { value: 80, suffix: "%", label: "Certified Team" },
    { value: 3, suffix: "x", label: "Close Speed" },
  ],
  "SAP Analytics Cloud (SAC)": [
    { value: 95, suffix: "%", label: "Forecast Accuracy" },
    { value: 60, suffix: "%", label: "Less Manual Work" },
    { value: 10, suffix: "x", label: "Faster Reports" },
  ],
  "Group Reporting": [
    { value: 100, suffix: "%", label: "Ind AS Ready" },
    { value: 70, suffix: "%", label: "Faster Closes" },
    { value: 35, suffix: "K", label: "Hours Delivered" },
  ],
  "Intercompany Reconciliation": [
    { value: 90, suffix: "%", label: "Auto-Reconciled" },
    { value: 60, suffix: "%", label: "Error Reduction" },
    { value: 15, suffix: "+", label: "Entities Served" },
  ],
  "Fiori for Finance": [
    { value: 85, suffix: "%", label: "Faster Adoption" },
    { value: 40, suffix: "%", label: "UX Efficiency" },
    { value: 10, suffix: "+", label: "Role Dashboards" },
  ],
};

export default function CFO() {
  const [active, setActive] = useState(0);
  const service = CFO_DATA.services[active];
  const metrics = SERVICE_METRICS[service.title] ?? [];

  return (
    <section id="cfo" className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
      {/* background grid */}
      <div className="kw-grid-bg pointer-events-none absolute inset-0 opacity-[0.055]" />
      <div className="kw-scan-line pointer-events-none absolute inset-0 opacity-[0.04]" />
      {/* yellow radial glow top-right */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,160,0,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8A000]">
            {CFO_DATA.eyebrow}
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.03em] text-white">
            {CFO_DATA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-relaxed text-white/55">
            {CFO_DATA.description}
          </p>
        </div>

        {/* Main layout */}
        <div className="grid gap-5 lg:grid-cols-[300px_1fr]">

          {/* Left — service terminal menu */}
          <div className="space-y-1.5 rounded-2xl border border-white/8 bg-white/[0.025] p-3">
            <p className="mb-3 px-3 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              SAP Finance Modules
            </p>
            {CFO_DATA.services.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                  i === active
                    ? "bg-[#E8A000]/10 text-white"
                    : "text-white/45 hover:bg-white/[0.04] hover:text-white/75"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    i === active
                      ? "border-[#E8A000]/35 bg-[#E8A000]/12 text-[#E8A000]"
                      : "border-white/10 bg-white/[0.04] text-white/35"
                  }`}
                >
                  <SapIcon name={s.icon} className="h-3.5 w-3.5" />
                </span>
                <span className="flex-1 text-[14px] font-semibold leading-tight">{s.title}</span>
                {i === active && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#E8A000]" strokeWidth={2.5} />
                )}
              </button>
            ))}
          </div>

          {/* Right — featured service card */}
          <div
            key={active}
            className="flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-8 lg:p-10"
            style={{ animation: "kw-fade-up 0.35s ease both" }}
          >
            {/* Card header */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#E8A000]/25 bg-[#E8A000]/8 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8A000]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8A000]" />
                  Active Module
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-lg text-[15px] font-medium leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
              <span className="hidden shrink-0 items-center justify-center rounded-2xl border border-[#E8A000]/20 bg-[#E8A000]/8 p-4 lg:flex">
                <SapIcon name={service.icon} className="h-8 w-8 text-[#E8A000]" />
              </span>
            </div>

            {/* Metrics strip */}
            {metrics.length > 0 && (
              <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl border border-white/8 bg-white/[0.025] p-5">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-[1.75rem] font-extrabold leading-none tracking-tight text-[#E8A000]">
                      <AnimatedCounter value={m.value} suffix={m.suffix} duration={1400} />
                    </p>
                    <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E8A000]/20 bg-[#E8A000]/[0.06] px-3 py-1.5 font-mono text-[11px] font-semibold text-[#E8A000]"
                >
                  <TrendingUp className="h-3 w-3" strokeWidth={2} />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-7 py-3 text-[14px] font-bold text-[#0a0a0a] no-underline shadow-[0_4px_20px_rgba(232,160,0,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,160,0,0.45)]"
              >
                Explore {service.title}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
