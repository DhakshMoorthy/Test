import { useState } from "react";
import { CFO as CFO_DATA } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { SapIcon } from "../ui/SapIcon";
import Card3D from "../ui/Card3D";

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

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CFO_DATA.services.map((service, i) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] transition-all ${
                i === active
                  ? "border-[#E8A000] bg-[#E8A000] text-[#0a0a0a] shadow-[0_4px_16px_rgba(232,160,0,0.3)]"
                  : "border-[#0a0a0a]/10 bg-white text-[#525252] hover:border-[#E8A000]/40 hover:text-[#0a0a0a]"
              }`}
            >
              {service.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {CFO_DATA.services.map((service, i) => (
            <Card3D
              key={service.title}
              className={`group relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                i === active
                  ? "border-[#E8A000]/30 bg-white shadow-[0_12px_48px_rgba(232,160,0,0.1),0_4px_16px_rgba(0,0,0,0.04)]"
                  : "border-[#0a0a0a]/6 bg-[#fafafa] hover:border-[#0a0a0a]/10 hover:bg-white"
              }`}
              onClick={() => setActive(i)}
            >
              {/* Accent left bar */}
              <div
                className={`absolute bottom-3 left-0 top-3 w-[3px] rounded-full transition-all ${
                  i === active ? "bg-gradient-to-b from-[#E8A000] to-[#f5c842]" : "bg-[#0a0a0a]/8"
                }`}
              />
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                    i === active
                      ? "border-[#E8A000]/30 bg-[#E8A000]/10 text-[#E8A000]"
                      : "border-[#0a0a0a]/8 bg-white text-[#525252]"
                  }`}
                >
                  <SapIcon name={service.icon} className="h-4.5 w-4.5" />
                </span>
                <h3 className="text-[16px] font-extrabold tracking-tight text-[#0a0a0a]">
                  {service.title}
                </h3>
              </div>
              <p className="mb-4 text-[14px] font-medium leading-relaxed text-[#3d3d3d]">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold ${
                      i === active
                        ? "border-[#E8A000]/25 bg-[#E8A000]/[0.06] text-[#E8A000]"
                        : "border-[#0a0a0a]/6 bg-white text-[#525252]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
