import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { CheckIcon } from "../ui/SapIcon";

export default function Industries() {
  const [active, setActive] = useState(0);
  const item = INDUSTRIES.items[active];

  return (
    <section id="industries" className="border-t border-[#0a0a0a]/6 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={INDUSTRIES.eyebrow}
          title={INDUSTRIES.title}
          description={INDUSTRIES.description}
        />

        <div className="grid overflow-hidden rounded-xl border border-[#0a0a0a]/8 bg-white lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col bg-[#fafafa]">
            {INDUSTRIES.items.map((industry, i) => (
              <button
                key={industry.name}
                type="button"
                onClick={() => setActive(i)}
                className={`border-b border-[#0a0a0a]/6 px-5 py-4 text-left transition-all ${
                  i === active
                    ? "border-l-2 border-l-[#C49200] bg-white text-[#0a0a0a]"
                    : "border-l-2 border-l-transparent text-[#0a0a0a]/55 hover:bg-white/80 hover:text-[#0a0a0a]"
                }`}
              >
                <span className="text-[15px] font-medium">{industry.name}</span>
              </button>
            ))}
          </div>

          <div className="kw-panel flex min-h-[400px] flex-col">
            <div className="relative h-48 overflow-hidden md:h-56">
              <img
                key={item.image + active}
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white" />
              <span className="absolute right-4 top-4 rounded-full border border-[#0a0a0a]/10 bg-white/90 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0a0a0a]/70">
                {item.badge}
              </span>
            </div>
            <div className="relative z-10 flex-1 p-8">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#0a0a0a] md:text-3xl">
                {item.name}
              </h3>
              <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-[#0a0a0a]/65">
                {item.description}
              </p>
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/40">
                Challenges we solve
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {item.challenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-[#C49200]">
                      <CheckIcon />
                    </span>
                    <span className="text-[15px] text-[#0a0a0a]/85">{challenge}</span>
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
