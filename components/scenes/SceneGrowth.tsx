"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import VisualPanel from "@/components/ui/VisualPanel";
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
      <SectionLayout
        id="growth"
        badge="07 — Impact That Matters"
        title={<>Delivering Measurable<br /><span className="gradient-text">Business Impact.</span></>}
        description="Kannanware is your partner in digital transformation. Together, we build smarter, stronger, future-ready businesses."
        visual={
          <VisualPanel>
            <GrowthIllustration progress={progress} />
          </VisualPanel>
        }
      >
        <div className="grid grid-cols-3 gap-3">
          {KPI_METRICS.slice(0, 6).map((m) => (
            <div key={m.id} className="white-card p-3 text-center">
              <p className="font-display text-xl font-bold">
                <AnimatedCounter value={m.value} suffix="%" direction={m.direction} duration={1.5} />
              </p>
              <p className="text-muted mt-0.5 text-[9px] leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
