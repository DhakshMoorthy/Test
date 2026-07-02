import { GROW } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";

export default function Grow() {
  return (
    <section id="grow" className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeader eyebrow={GROW.eyebrow} title={GROW.title} />
          <p className="text-[16px] leading-relaxed text-[#0a0a0a]/55 lg:pb-2">
            {GROW.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROW.items.map((item) => (
            <div
              key={item.num}
              className="group relative rounded-xl border border-black/[0.06] bg-white p-7 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[2.5rem] font-bold leading-none text-[#0a0a0a]/[0.06]">
                  {item.num}
                </span>
              </div>
              <h3 className="mb-3 text-[17px] font-bold leading-snug tracking-tight text-[#0a0a0a]">
                {item.title}
              </h3>
              <ul className="space-y-2 border-t border-black/[0.06] pt-4 list-none p-0 m-0">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-[14px] text-[#0a0a0a]/75"
                  >
                    <span className="shrink-0 text-[#E8A000]">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-x-6 bottom-0 h-0.5 rounded-full bg-[#E8A000] opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-xl border border-[#E8A000]/20 bg-gradient-to-br from-[#E8A000]/[0.06] to-transparent p-7 text-center">
            <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">
              Ready to Grow?
            </h3>
            <p className="mb-6 max-w-[240px] text-[14px] text-[#0a0a0a]/55">
              Let&apos;s build your roadmap to SAP S/4HANA Cloud together.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#E8A000] px-7 py-3 text-[14px] font-semibold text-[#0a0a0a] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,160,0,0.35)]"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
