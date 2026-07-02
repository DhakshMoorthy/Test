import { ArrowRight } from "lucide-react";
import { EXPERTISE } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { CheckIcon, SapIcon } from "../ui/SapIcon";

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={EXPERTISE.eyebrow}
          title={EXPERTISE.title}
          description={EXPERTISE.description}
          align="center"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {EXPERTISE.cards.map((card, i) => (
            <div
              key={card.title}
              className="kw-card group relative rounded-xl border border-[#0a0a0a]/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0a0a0a]/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#0a0a0a]/8 bg-[#fafafa] text-[#0a0a0a]/70 transition-colors group-hover:border-[#C49200]/30 group-hover:text-[#C49200]">
                <SapIcon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mb-3 text-xl font-bold text-[#0a0a0a]">
                {card.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#0a0a0a]/65">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/40">
              Why Kannanware
            </p>
            <ul className="m-0 list-none space-y-4 p-0">
              {EXPERTISE.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#0a0a0a]/10 bg-[#fafafa] text-[#C49200]">
                    <CheckIcon />
                  </span>
                  <span className="text-[16px] leading-relaxed text-[#0a0a0a]/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#0a0a0a]/8 bg-[#fafafa] p-8 md:p-10">
            <p className="mb-8 text-[17px] italic leading-relaxed text-[#0a0a0a]/85">
              &ldquo;{EXPERTISE.quote}&rdquo;
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-8 py-4 text-[15px] font-semibold text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
            >
              Start Your SAP Journey
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
