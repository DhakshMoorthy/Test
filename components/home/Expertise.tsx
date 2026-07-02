import { ArrowRight } from "lucide-react";
import { EXPERTISE } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { CheckIcon, SapIcon } from "../ui/SapIcon";
import Card3D from "../ui/Card3D";

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-white">
      {/* Subtle radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,160,0,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={EXPERTISE.eyebrow}
          title={EXPERTISE.title}
          description={EXPERTISE.description}
          align="center"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {EXPERTISE.cards.map((card, i) => (
            <Card3D
              key={card.title}
              className="kw-card relative rounded-2xl border border-[#0a0a0a]/8 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Yellow top bar on first card */}
              {i === 0 && (
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#E8A000] to-[#f5c842]" />
              )}
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8A000]/20 bg-[#E8A000]/[0.07] text-[#E8A000]">
                <SapIcon name={card.icon} className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mb-3 text-[19px] font-extrabold text-[#0a0a0a]">
                {card.title}
              </h3>
              <p className="text-[15px] font-medium leading-relaxed text-[#3d3d3d]">
                {card.description}
              </p>
            </Card3D>
          ))}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8A000]">
              Why Kannanware
            </p>
            <ul className="m-0 list-none space-y-4 p-0">
              {EXPERTISE.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E8A000]/25 bg-[#E8A000]/[0.08] text-[#E8A000]">
                    <CheckIcon />
                  </span>
                  <span className="text-[16px] font-semibold leading-relaxed text-[#141414]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#0a0a0a]/8 bg-[#fafafa] p-8 md:p-10">
            {/* Decorative corner gradient */}
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(232,160,0,0.12) 0%, transparent 70%)" }}
            />
            <p className="relative mb-8 text-[18px] font-semibold italic leading-relaxed text-[#0a0a0a]">
              &ldquo;{EXPERTISE.quote}&rdquo;
            </p>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-8 py-4 text-[15px] font-bold text-[#0a0a0a] no-underline shadow-[0_4px_20px_rgba(232,160,0,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(232,160,0,0.38)]"
            >
              Start Your SAP Journey
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
