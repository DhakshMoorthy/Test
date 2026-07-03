"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import ERPIllustration from "@/components/illustrations/ERPIllustration";
import { DEPARTMENTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneKannanware() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      end: "bottom 20%",
      scrub: 0.6,
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => trigger.kill();
  }, []);

  const connectedCount = Math.floor(progress * DEPARTMENTS.length);

  return (
    <div ref={sectionRef}>
      <SectionLayout
        id="solution"
        badge="02 — The Solution"
        title={
          <>
            One Platform.{" "}
            <span className="gradient-text">Total Unity.</span>
          </>
        }
        description="Kannanware connects every SAP module through a single intelligent core — replacing fragmentation with clarity across finance, supply chain, and operations."
        reverse
        visual={<ERPIllustration progress={progress} />}
      >
        <div className="flex flex-wrap gap-2">
          {DEPARTMENTS.map((dept, i) => (
            <span
              key={dept.id}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-500 ${
                i < connectedCount
                  ? "bg-accent-pale text-accent-dark ring-1 ring-accent/30"
                  : "bg-surface text-muted ring-1 ring-border"
              }`}
            >
              {dept.label}
            </span>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
