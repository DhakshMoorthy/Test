"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { GROWTH_METRICS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const SmartCity = dynamic(() => import("@/components/three/SmartCity"), {
  ssr: false,
});

export default function SceneGrowth() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="growth"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <SceneCanvas camera={{ position: [4, 5, 4], fov: 45 }}>
        <SmartCity progress={progress} />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col items-center justify-center px-6">
        <p className="text-muted mb-4 text-sm tracking-[0.3em] uppercase">
          Scene 07
        </p>
        <h2 className="font-display max-w-3xl text-center text-4xl font-bold md:text-5xl">
          Watch Your Business{" "}
          <span className="gradient-text">Transform</span>
        </h2>
        <p className="text-muted mt-4 max-w-xl text-center">
          Smarter buildings. Glowing routes. AI drones. Real-time collaboration.
        </p>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {GROWTH_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="glass rounded-xl p-4 text-center transition-all duration-500 hover:glow-accent"
            >
              <p className="font-display text-2xl font-bold">
                <AnimatedCounter
                  value={metric.value}
                  suffix="%"
                  direction={metric.direction}
                  duration={2}
                />
              </p>
              <p className="text-muted mt-1 text-xs">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
