import { EXPERTISE } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf8f2] to-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={EXPERTISE.eyebrow}
          title={EXPERTISE.title}
          description={EXPERTISE.description}
          align="center"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {EXPERTISE.cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-xl border border-[#E8A000]/15 bg-[#E8A000]/[0.04] p-8 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            >
              <h3 className="mb-3 text-xl font-bold text-[#0a0a0a] transition-colors group-hover:text-[#E8A000]">
                {card.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#0a0a0a]/55">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#E8A000]">
              Why Kannanware
            </p>
            <ul className="space-y-4 list-none p-0 m-0">
              {EXPERTISE.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E8A000]/30 bg-[#E8A000]/15 text-[#E8A000]">
                    ✓
                  </span>
                  <span className="text-[16px] leading-relaxed text-[#0a0a0a]/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#E8A000]/20 bg-gradient-to-br from-[#E8A000]/[0.06] to-[#E8A000]/[0.02] p-8 md:p-10">
            <p className="mb-8 text-[17px] italic leading-relaxed text-[#0a0a0a]/90">
              &ldquo;{EXPERTISE.quote}&rdquo;
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-8 py-4 text-[15px] font-semibold text-[#0a0a0a] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,160,0,0.35)]"
            >
              Start Your SAP Journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
