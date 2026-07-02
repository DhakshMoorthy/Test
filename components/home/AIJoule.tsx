import { AI_SECTION } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";

export default function AIJoule() {
  return (
    <section id="ai" className="relative overflow-hidden border-t border-black/[0.06] bg-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,160,0,0.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow={AI_SECTION.eyebrow}
              title={AI_SECTION.title}
            />
            <p className="-mt-6 mb-4 text-[17px] leading-relaxed text-[#0a0a0a]/75">
              {AI_SECTION.lead}
            </p>
            <p className="text-[16px] leading-relaxed text-[#0a0a0a]/55">
              {AI_SECTION.description}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8A000]/15 bg-[#faf8f2] p-6">
            <div className="mb-4 flex items-center gap-2 border-b border-[#E8A000]/10 pb-3">
              <span className="font-mono text-[13px] text-[#E8A000]/60">
                SAP Joule AI Copilot
              </span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8A000]" />
                <span className="font-mono text-[11px] text-[#E8A000]/50">
                  LIVE
                </span>
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[#E8A000]/50">
                  Query
                </p>
                <div className="rounded-lg border border-[#E8A000]/10 bg-[#E8A000]/5 p-4">
                  <p className="font-mono text-[14px] text-[#0a0a0a]/80">
                    <span className="text-[#E8A000]">›</span> Show GST
                    mismatches across all entities for Q3
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[#E8A000]/50">
                  Response
                </p>
                <div className="rounded-lg border border-black/[0.06] bg-white p-4">
                  <p className="text-[14px] leading-relaxed text-[#0a0a0a]/70">
                    Found 3 GST mismatches totalling ₹2.4L across Chennai and
                    Mumbai entities. ITC variance detected in vendor invoices
                    from Oct 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AI_SECTION.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-[#E8A000]/10 bg-[#E8A000]/[0.03] p-6 transition-colors hover:border-[#E8A000]/25"
            >
              <h3 className="mb-2 text-[16px] font-semibold text-[#0a0a0a]">
                {cap.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#0a0a0a]/55">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
