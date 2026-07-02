import { CFO as CFO_DATA } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";

export default function CFO() {
  return (
    <section id="cfo" className="border-t border-black/[0.06] bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={CFO_DATA.eyebrow}
          title={CFO_DATA.title}
          description={CFO_DATA.description}
          align="center"
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {CFO_DATA.services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-black/[0.06] bg-white p-6 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
            >
              <div
                className={`absolute bottom-3 left-0 top-3 w-[3px] rounded-full ${
                  i % 2 === 0 ? "bg-[#E8A000]" : "bg-[#E8A000]/50"
                }`}
              />
              <h3 className="mb-2 text-[16px] font-bold tracking-tight text-[#0a0a0a]">
                {service.title}
              </h3>
              <p className="mb-4 text-[14px] leading-relaxed text-[#0a0a0a]/55">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/[0.06] bg-[#fafafa] px-2.5 py-1 text-[12px] font-medium text-[#0a0a0a]/50"
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
