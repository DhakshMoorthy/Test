"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import SectionLayout from "@/components/ui/SectionLayout";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { KPI_METRICS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});
const SmartCity = dynamic(() => import("@/components/three/SmartCity"), {
  ssr: false,
});

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
            Watch Your City{" "}
            <span className="gradient-text">Get Smarter</span>
          </>
        }
        description="As Kannanware takes hold, your operations evolve — buildings connect, routes optimize, and data flows in real time."
        reverse
        visual={
          <SceneCanvas camera={{ position: [3.5, 4, 3.5], fov: 42 }}>
            <SmartCity progress={progress} />
          </SceneCanvas>
        }
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
