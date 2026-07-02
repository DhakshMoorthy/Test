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

        <div className="grid overflow-hidden rounded-2xl border border-[#0a0a0a]/8 bg-white shadow-[0_8px_48px_rgba(0,0,0,0.06)] lg:grid-cols-[260px_1fr]">
          {/* Tab rail */}
          <div className="flex flex-row overflow-x-auto bg-[#fafafa] lg:flex-col lg:overflow-x-visible">
            {INDUSTRIES.items.map((industry, i) => (
              <button
                key={industry.name}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 border-b border-[#0a0a0a]/6 px-5 py-4 text-left transition-all duration-200 lg:border-b lg:border-l-0 ${
                  i === active
                    ? "border-b-2 border-b-[#E8A000] bg-white font-bold text-[#0a0a0a] lg:border-b lg:border-l-[3px] lg:border-l-[#E8A000] lg:border-b-[#0a0a0a]/6"
                    : "text-[#525252] hover:bg-white hover:text-[#0a0a0a]"
                }`}
              >
                <span className="whitespace-nowrap text-[13px] font-semibold lg:whitespace-normal">
                  {industry.name}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="flex min-h-[480px] flex-col">
            {/* Hero image — full bleed, tall */}
            <div className="relative h-60 overflow-hidden md:h-72 lg:h-80">
              <img
                key={item.image}
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/75 via-[#0a0a0a]/20 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#E8A000] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0a0a0a]">
                  {item.badge}
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  {item.name}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col justify-between p-7 md:p-9">
              <p className="mb-7 text-[15px] font-medium leading-relaxed text-[#3d3d3d]">
                {item.description}
              </p>

              <div>
                <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8A000]">
                  Challenges we solve
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {item.challenges.map((challenge) => (
                    <div key={challenge} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#E8A000]/10 text-[#E8A000]">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="text-[14px] font-semibold text-[#141414]">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-[#0a0a0a]/6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-3 text-[14px] font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                >
                  Explore {item.name} Solutions
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
