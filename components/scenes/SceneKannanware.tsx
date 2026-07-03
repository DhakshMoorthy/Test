"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FullVisualSection from "@/components/ui/FullVisualSection";
import ERPIllustration from "@/components/illustrations/ERPIllustration";
import { DEPARTMENTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneKannanware() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = ScrollTrigger.create({
      trigger: el, start: "top 70%", end: "bottom 20%", scrub: 0.6,
      onUpdate: (s) => setProgress(s.progress),
    });
    return () => t.kill();
  }, []);

  const connectedCount = Math.floor(progress * DEPARTMENTS.length);

  return (
    <div ref={ref}>
      <FullVisualSection
        id="solution"
        badge="02 — The Solution"
        title={<>One Platform. <span className="gradient-text">Total Unity.</span></>}
        description="Kannanware connects every SAP module through a single intelligent core — replacing fragmentation with clarity across finance, supply chain, and operations."
        visual={<ERPIllustration progress={progress} />}
        bgClass="bg-[#FFFDF9]"
        footer={
          <div className="flex flex-wrap gap-2">
            {DEPARTMENTS.map((dept, i) => (
              <span key={dept.id} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ${
                i < connectedCount
                  ? "bg-accent-pale text-accent-dark ring-1 ring-accent/30"
                  : "bg-surface-light text-muted ring-1 ring-border"
              }`}>{dept.label}</span>
            ))}
          </div>
        }
      />
    </div>
  );
}
