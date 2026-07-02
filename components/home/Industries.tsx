import { useState } from "react";
import { INDUSTRIES } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";

export default function Industries() {
  const [active, setActive] = useState(0);
  const { featured } = INDUSTRIES;

  return (
    <section id="industries" className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={INDUSTRIES.eyebrow}
          title={INDUSTRIES.title}
          description={INDUSTRIES.description}
        />

        <div className="grid overflow-hidden rounded-xl border border-black/[0.06] lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col bg-[#fafafa]">
            {INDUSTRIES.list.map((name, i) => (
              <button
                key={name}
                type="button"
                onClick={() => setActive(i)}
                className={`border-b border-black/[0.06] px-5 py-4 text-left transition-all ${
                  i === active
                    ? "border-l-2 border-l-[#E8A000] bg-white text-[#E8A000]"
                    : "border-l-2 border-l-transparent text-[#0a0a0a]/55 hover:bg-white/80 hover:text-[#0a0a0a]"
                }`}
              >
                <span className="text-[15px] font-medium">{name}</span>
              </button>
            ))}
          </div>

          <div className="flex min-h-[400px] flex-col bg-[#fafafa]">
            <div className="relative h-48 overflow-hidden md:h-56">
              <img
                src={featured.image}
                alt={INDUSTRIES.list[active]}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa]/60 to-[#fafafa]" />
              <span className="absolute right-4 top-4 rounded-full bg-[#E8A000]/90 px-3 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#0a0a0a]">
                {featured.badge}
              </span>
            </div>
            <div className="relative z-10 flex-1 p-8">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#0a0a0a] md:text-3xl">
                {INDUSTRIES.list[active]}
              </h3>
              <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-[#0a0a0a]/55">
                {featured.description}
              </p>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8A000]">
                Challenges we solve
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {featured.challenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-[#E8A000]">→</span>
                    <span className="text-[15px] text-[#0a0a0a]/85">
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
