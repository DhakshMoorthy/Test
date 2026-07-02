import { useState } from "react";
import { CheckIcon, SapIcon, type IconName } from "./SapIcon";

type Step = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon?: IconName;
};

type Detail = {
  title: string;
  description: string;
  deliverables: readonly string[];
  image: string;
};

type Props = {
  steps: readonly Step[];
  details: readonly Detail[];
  labelPrefix?: string;
};

export default function StepTabs({
  steps,
  details,
  labelPrefix = "Step",
}: Props) {
  const [active, setActive] = useState(0);
  const detail = details[active] ?? details[0];

  return (
    <>
      <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((step, i) => {
          const selected = i === active;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActive(i)}
              className={`kw-card kw-tab-btn relative rounded-xl border p-5 text-left transition-all duration-300 ${
                selected
                  ? "border-[#0a0a0a]/12 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                  : "border-[#0a0a0a]/6 bg-[#fafafa] hover:border-[#0a0a0a]/10 hover:bg-white"
              }`}
            >
              {selected && (
                <div className="absolute inset-x-4 top-0 h-[2px] rounded-full bg-[#C49200]" />
              )}
              <div className="mb-3 flex items-center gap-3">
                {step.icon && (
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                      selected
                        ? "border-[#C49200]/25 bg-[#C49200]/8 text-[#C49200]"
                        : "border-[#0a0a0a]/8 bg-white text-[#0a0a0a]/40"
                    }`}
                  >
                    <SapIcon name={step.icon} className="h-4 w-4" />
                  </span>
                )}
                <p
                  className={`font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${
                    selected ? "text-[#C49200]" : "text-[#0a0a0a]/35"
                  }`}
                >
                  {labelPrefix} {step.label}
                </p>
              </div>
              <h3
                className={`text-[15px] font-semibold leading-snug transition-colors ${
                  selected ? "text-[#0a0a0a]" : "text-[#0a0a0a]/45"
                }`}
              >
                {step.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[#0a0a0a]/50">
                {step.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="kw-panel grid overflow-hidden rounded-2xl border border-[#0a0a0a]/8 bg-white lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto lg:min-h-[420px]">
          <img
            src={detail.image}
            alt={detail.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/95" />
          <div className="kw-scan-line pointer-events-none absolute inset-0 opacity-30" />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <h3 className="text-2xl font-bold tracking-tight text-[#0a0a0a] lg:text-3xl">
            {detail.title.includes(":") ? (
              <>
                {detail.title.split(":")[0]}:{" "}
                <span className="text-[#0a0a0a]/75">
                  {detail.title.split(":").slice(1).join(":").trim()}
                </span>
              </>
            ) : (
              detail.title
            )}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-[#0a0a0a]/65">
            {detail.description}
          </p>
          <p className="mb-4 mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/40">
            Key Deliverables
          </p>
          <ul className="m-0 list-none space-y-3 p-0">
            {detail.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#0a0a0a]/10 bg-[#fafafa] text-[#C49200]">
                  <CheckIcon />
                </span>
                <span className="text-[15px] text-[#0a0a0a]/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
