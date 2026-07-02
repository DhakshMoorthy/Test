import { ArrowRight } from "lucide-react";
import { GROW } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { CheckIcon } from "../ui/SapIcon";

export default function Grow() {
  return (
    <section id="grow" className="border-t border-[#0a0a0a]/6 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeader eyebrow={GROW.eyebrow} title={GROW.title} />
          <p className="text-[16px] leading-relaxed text-[#3d3d3d] lg:pb-2">
            {GROW.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROW.items.map((item, i) => (
            <div
              key={item.num}
              className="kw-card group relative rounded-xl border border-[#0a0a0a]/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[2.5rem] font-bold leading-none text-[#0a0a0a]/[0.05]">
                  {item.num}
                </span>
              </div>
              <h3 className="mb-3 text-[17px] font-bold leading-snug tracking-tight text-[#0a0a0a]">
                {item.title}
              </h3>
              <ul className="m-0 list-none space-y-2 border-t border-[#0a0a0a]/6 p-0 pt-4">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-[14px] text-[#141414]"
                  >
                    <span className="shrink-0 text-[#E8A000]">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-x-6 bottom-0 h-[2px] rounded-full bg-[#E8A000] opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-xl border border-[#0a0a0a]/10 bg-white p-7 text-center">
            <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">Ready to Grow?</h3>
            <p className="mb-6 max-w-[240px] text-[14px] text-[#3d3d3d]">
              Let&apos;s build your roadmap to SAP S/4HANA Cloud together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-3 text-[14px] font-semibold text-white no-underline transition-all hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
