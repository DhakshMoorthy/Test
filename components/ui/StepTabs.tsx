import { useState } from "react";

type Step = {
  id: string;
  label: string;
  title: string;
  description: string;
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
              className={`relative rounded-xl border p-5 text-left transition-all ${
                selected
                  ? "border-[#E8A000]/40 bg-[#E8A000]/[0.06]"
                  : "border-black/[0.06] bg-[#fafafa] hover:border-black/[0.12]"
              }`}
            >
              {selected && (
                <div className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-[#E8A000]" />
              )}
              <p
                className={`mb-2 text-[11px] font-bold uppercase tracking-[0.2em] ${
                  selected ? "text-[#E8A000]" : "text-[#0a0a0a]/40"
                }`}
              >
                {labelPrefix} {step.label}
              </p>
              <h3
                className={`text-[15px] font-semibold leading-snug ${
                  selected ? "text-[#0a0a0a]" : "text-[#0a0a0a]/50"
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

      <div className="grid overflow-hidden rounded-2xl border border-black/[0.06] lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto lg:min-h-[420px]">
          <img
            src={detail.image}
            alt={detail.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/90" />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <h3 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] lg:text-3xl">
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
          <p className="mt-4 text-[15px] leading-relaxed text-[#0a0a0a]/55">
            {detail.description}
          </p>
          <p className="mb-4 mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8A000]">
            Key Deliverables
          </p>
          <ul className="space-y-3 list-none p-0 m-0">
            {detail.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#E8A000]/20 bg-[#E8A000]/10 text-[#E8A000]">
                  →
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
