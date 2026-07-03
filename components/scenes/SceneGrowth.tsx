"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import GrowthIllustration from "@/components/illustrations/GrowthIllustration";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { KPI_METRICS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneGrowth() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 65%",
      end: "bottom 25%",
      scrub: 0.5,
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => trigger.kill();
  }, []);

  return (
    <div ref={sectionRef}>
      <SectionLayout
        id="growth"
        badge="07 — Business Growth"
        title={
          <>
            Watch Your Operations{" "}
            <span className="gradient-text">Get Smarter</span>
          </>
        }
        description="As Kannanware takes hold, your infrastructure evolves — buildings connect, routes optimize, and SAP data flows in real time."
        reverse
        visual={<GrowthIllustration progress={progress} />}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {KPI_METRICS.slice(0, 5).map((metric) => (
            <div key={metric.id} className="white-card p-3 text-center">
              <p className="font-display text-lg font-bold">
                <AnimatedCounter
                  value={metric.value}
                  suffix="%"
                  direction={metric.direction}
                  duration={1.5}
                />
              </p>
              <p className="text-muted mt-0.5 text-[10px]">{metric.label}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
