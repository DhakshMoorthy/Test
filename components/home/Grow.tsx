import { ArrowRight } from "lucide-react";
import { GROW } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { CheckIcon } from "../ui/SapIcon";

export default function Grow() {
  return (
    <section id="grow" className="border-t border-[#0a0a0a]/6 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeader eyebrow={GROW.eyebrow} title={GROW.title} />
          <p className="text-[16px] font-medium leading-relaxed text-[#3d3d3d] lg:pb-2">
            {GROW.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROW.items.map((item, i) => (
            <div
              key={item.num}
              className="kw-card-3d group relative overflow-hidden rounded-2xl border border-[#0a0a0a]/8 bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E8A000]/25 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Large visible watermark number */}
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-3 select-none font-mono text-[7rem] font-extrabold leading-none text-[#E8A000]/[0.12] transition-all duration-300 group-hover:text-[#E8A000]/[0.22]"
              >
                {item.num}
              </span>

              {/* Step badge */}
              <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#E8A000]/25 bg-[#E8A000]/[0.07] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8A000]">
                Step {item.num}
              </span>

              <h3 className="relative mb-3 text-[17px] font-bold leading-snug tracking-tight text-[#0a0a0a]">
                {item.title}
              </h3>
              <ul className="relative m-0 list-none space-y-2.5 border-t border-[#0a0a0a]/6 p-0 pt-4">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-[14px] font-medium text-[#141414]"
                  >
                    <span className="shrink-0 text-[#E8A000]">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Bottom glow bar */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-gradient-to-r from-[#E8A000] to-[#f5c842] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}

          {/* CTA card */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#E8A000]/20 bg-gradient-to-br from-[#E8A000]/[0.06] via-white to-[#E8A000]/[0.04] p-7 text-center shadow-[0_2px_16px_rgba(232,160,0,0.06)]">
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 select-none font-mono text-[8rem] font-extrabold leading-none text-[#E8A000]/[0.07]"
            >
              →
            </span>
            <h3 className="relative mb-3 text-xl font-extrabold text-[#0a0a0a]">
              Ready to Grow?
            </h3>
            <p className="relative mb-7 max-w-[240px] text-[14px] font-medium text-[#3d3d3d]">
              Let&apos;s build your SAP S/4HANA Cloud roadmap together.
            </p>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-7 py-3.5 text-[14px] font-bold text-[#0a0a0a] no-underline shadow-[0_4px_16px_rgba(232,160,0,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,160,0,0.4)]"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
