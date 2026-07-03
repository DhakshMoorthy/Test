"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import IndustryIllustration from "@/components/illustrations/IndustryIllustration";
import { INDUSTRIES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneIndustries() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [industryIndex, setIndustryIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 60%",
      end: "bottom 20%",
      scrub: 0.5,
      onUpdate: (self) => {
        const idx = Math.floor(self.progress * INDUSTRIES.length);
        setIndustryIndex(Math.min(idx, INDUSTRIES.length - 1));
      },
    });
    return () => trigger.kill();
  }, []);

  const current = INDUSTRIES[industryIndex];

  return (
    <div ref={sectionRef}>
      <SectionLayout
        id="industries"
        badge="06 — Industry Modules"
        title={
          <>
            Deep Experience{" "}
            <span className="gradient-text">Across Every Sector</span>
          </>
        }
        description="Purpose-built SAP modules for manufacturing, retail, healthcare, energy, and more — each tailored to your industry's unique workflows."
        visual={<IndustryIllustration index={industryIndex} />}
      >
        <div
          className="white-card p-5"
          style={{ borderColor: `${current.color}33` }}
        >
          <div className="mb-2 h-1 w-10 rounded-full" style={{ background: current.color }} />
          <h3 className="font-display text-lg font-bold">{current.label}</h3>
          <p className="text-muted mt-1 text-sm">{current.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setIndustryIndex(i)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                i === industryIndex
                  ? "bg-accent text-[#090909] shadow-[0_4px_16px_rgba(250,171,24,0.35)]"
                  : "bg-surface text-muted ring-1 ring-border hover:text-accent-dark"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
