import { useState } from "react";
import { CFO as CFO_DATA } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { SapIcon } from "../ui/SapIcon";

export default function CFO() {
  const [active, setActive] = useState(0);

  return (
    <section id="cfo" className="border-t border-[#0a0a0a]/6 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={CFO_DATA.eyebrow}
          title={CFO_DATA.title}
          description={CFO_DATA.description}
          align="center"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CFO_DATA.services.map((service, i) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-all ${
                i === active
                  ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                  : "border-[#0a0a0a]/10 bg-[#fafafa] text-[#0a0a0a]/50 hover:border-[#0a0a0a]/20"
              }`}
            >
              {service.title.split(" ")[0]}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {CFO_DATA.services.map((service, i) => (
            <div
              key={service.title}
              onClick={() => setActive(i)}
              className={`kw-card group relative cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                i === active
                  ? "border-[#0a0a0a]/12 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                  : "border-[#0a0a0a]/6 bg-[#fafafa] hover:border-[#0a0a0a]/10"
              }`}
            >
              <div
                className={`absolute bottom-3 left-0 top-3 w-[3px] rounded-full transition-colors ${
                  i === active ? "bg-[#C49200]" : "bg-[#0a0a0a]/10"
                }`}
              />
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                    i === active
                      ? "border-[#C49200]/25 bg-[#C49200]/8 text-[#C49200]"
                      : "border-[#0a0a0a]/8 bg-white text-[#0a0a0a]/40"
                  }`}
                >
                  <SapIcon name={service.icon} className="h-4 w-4" />
                </span>
                <h3 className="text-[16px] font-bold tracking-tight text-[#0a0a0a]">
                  {service.title}
                </h3>
              </div>
              <p className="mb-4 text-[14px] leading-relaxed text-[#0a0a0a]/65">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0a0a0a]/6 bg-white px-2.5 py-1 font-mono text-[11px] text-[#0a0a0a]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
