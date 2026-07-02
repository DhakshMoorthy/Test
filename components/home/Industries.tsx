import { INDUSTRIES } from "../../lib/constants";

export default function Industries() {
  return (
    <section id="industries" className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="text-[13px] font-medium uppercase tracking-wider text-[#0a0a0a]/45">
          Industries
        </p>
        <h2 className="mt-3 max-w-lg text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
          Built for regulated, growing sectors.
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          {INDUSTRIES.map((name) => (
            <span
              key={name}
              className="rounded-full border border-black/[0.08] px-4 py-2 text-[14px] text-[#0a0a0a]/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
