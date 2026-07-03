"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FullVisualSection from "@/components/ui/FullVisualSection";
import GrowthIllustration from "@/components/illustrations/GrowthIllustration";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { KPI_METRICS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneGrowth() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = ScrollTrigger.create({
      trigger: el, start: "top 65%", end: "bottom 25%", scrub: 0.5,
      onUpdate: (s) => setProgress(s.progress),
    });
    return () => t.kill();
  }, []);

  return (
    <div ref={ref}>
      <FullVisualSection
        id="growth"
        badge="07 — Business Growth"
        title={<>Watch Your Operations <span className="gradient-text">Get Smarter</span></>}
        description="As Kannanware takes hold, your infrastructure evolves — buildings connect to SAP IoT, drones inspect warehouses, and data flows in real time."
        visual={<GrowthIllustration progress={progress} />}
        bgClass="bg-[#FFFDF9]"
        footer={
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {KPI_METRICS.slice(0, 5).map((m) => (
              <div key={m.id} className="white-card p-3 text-center">
                <p className="font-display text-xl font-bold">
                  <AnimatedCounter value={m.value} suffix="%" direction={m.direction} duration={1.5} />
                </p>
                <p className="text-muted mt-0.5 text-[10px]">{m.label}</p>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}
