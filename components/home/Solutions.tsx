import { SOLUTIONS } from "../../lib/constants";

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-[13px] font-medium uppercase tracking-wider text-[#0a0a0a]/45">
        What we do
      </p>
      <h2 className="mt-3 max-w-lg text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
        End-to-end SAP delivery.
      </h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-3">
        {SOLUTIONS.map((item) => (
          <div key={item.title} className="bg-white p-8 sm:p-10">
            <h3 className="text-[17px] font-semibold text-[#0a0a0a]">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#0a0a0a]/55">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
