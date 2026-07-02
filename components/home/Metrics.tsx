import { METRICS } from "../../lib/constants";

export default function Metrics() {
  return (
    <section id="metrics" className="relative overflow-hidden border-y border-black/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-wrap items-stretch justify-between gap-8 md:flex-nowrap">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex min-w-[140px] flex-1 flex-col items-center text-center"
            >
              <p className="text-[2.5rem] font-bold leading-none tracking-tight text-white sm:text-[2.75rem]">
                {metric.value}
              </p>
              <p className="mt-2 text-[14px] leading-snug text-white/85">
                {metric.label}
              </p>
              <p className="mt-1 text-[12px] text-[#E8A000]/85">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
