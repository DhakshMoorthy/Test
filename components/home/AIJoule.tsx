import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { AI_SECTION } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { SapIcon } from "../ui/SapIcon";

function Typewriter({
  text,
  active,
  delay = 0,
}: {
  text: string;
  active: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplay("");
      return;
    }
    setDisplay("");
    let i = 0;
    let timer: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) clearInterval(timer);
      }, 18);
    }, delay);
    return () => {
      clearTimeout(startTimer);
      clearInterval(timer);
    };
  }, [text, active, delay]);

  return (
    <>
      {display}
      <span className="kw-cursor">|</span>
    </>
  );
}

export default function AIJoule() {
  const [activeDemo, setActiveDemo] = useState(0);
  const demo = AI_SECTION.demos[activeDemo];

  return (
    <section id="ai" className="relative overflow-hidden border-t border-[#0a0a0a]/6 bg-white">
      <div className="kw-grid-bg pointer-events-none absolute inset-0 opacity-[0.025]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow={AI_SECTION.eyebrow} title={AI_SECTION.title} />
            <p className="-mt-6 mb-4 text-[17px] leading-relaxed text-[#0a0a0a]/80">
              {AI_SECTION.lead}
            </p>
            <p className="text-[16px] leading-relaxed text-[#0a0a0a]/65">
              {AI_SECTION.description}
            </p>
          </div>

          <div className="kw-terminal rounded-2xl border border-[#0a0a0a]/10 bg-[#fafafa] p-6">
            <div className="mb-4 flex items-center gap-2 border-b border-[#0a0a0a]/8 pb-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0a0a0a]/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0a0a0a]/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#C49200]/60" />
              </div>
              <span className="ml-2 font-mono text-[12px] text-[#0a0a0a]/50">
                SAP Joule AI Copilot
              </span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C49200]" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#0a0a0a]/40">
                  Live
                </span>
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#0a0a0a]/35">
                  Query
                </p>
                <div className="rounded-lg border border-[#0a0a0a]/8 bg-white p-4">
                  <p className="font-mono text-[13px] text-[#0a0a0a]/80">
                    <span className="text-[#C49200]">&gt;</span>{" "}
                    <Typewriter key={`q-${activeDemo}`} text={demo.query} active delay={0} />
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#0a0a0a]/35">
                  Response
                </p>
                <div className="rounded-lg border border-[#0a0a0a]/8 bg-white p-4">
                  <p className="text-[14px] leading-relaxed text-[#0a0a0a]/70">
                    <Typewriter key={`r-${activeDemo}`} text={demo.response} active delay={900} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AI_SECTION.demos.map((cap, i) => (
            <button
              key={cap.title}
              type="button"
              onClick={() => setActiveDemo(i)}
              className={`kw-card group rounded-xl border p-6 text-left transition-all duration-300 ${
                i === activeDemo
                  ? "border-[#0a0a0a]/12 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                  : "border-[#0a0a0a]/6 bg-[#fafafa] hover:border-[#0a0a0a]/10 hover:bg-white"
              }`}
            >
              <span
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                  i === activeDemo
                    ? "border-[#C49200]/25 bg-[#C49200]/8 text-[#C49200]"
                    : "border-[#0a0a0a]/8 bg-white text-[#0a0a0a]/45"
                }`}
              >
                <SapIcon name={cap.icon} className="h-5 w-5" />
              </span>
              <h3 className="mb-2 text-[16px] font-semibold text-[#0a0a0a]">
                {cap.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#0a0a0a]/40 transition-colors group-hover:text-[#C49200]">
                <Play className="h-3 w-3" strokeWidth={2} />
                Run Demo
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
