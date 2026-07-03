"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { DEPARTMENTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const ERPCore = dynamic(() => import("@/components/three/ERPCore"), {
  ssr: false,
});

export default function SceneKannanware() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState(0);

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
        onUpdate: (self) => {
          setProgress(self.progress);
          setRotation(self.progress);
        },
      },
    });

    tl.fromTo(
      ".erp-title",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.3 },
      0
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const connectedCount = Math.floor(progress * DEPARTMENTS.length);

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <FloatingParticles count={30} />
      <SceneCanvas camera={{ position: [5, 4, 5], fov: 45 }}>
        <ERPCore progress={progress} rotationProgress={rotation} />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col items-center justify-end px-6 pb-20">
        <p className="text-muted mb-4 text-sm tracking-[0.3em] uppercase">
          Scene 02
        </p>
        <h2 className="erp-title font-display max-w-3xl text-center text-4xl font-bold md:text-6xl">
          <span className="gradient-text glow-text">Kannanware</span>{" "}
          Unifies Everything
        </h2>
        <p className="text-muted mt-4 max-w-xl text-center text-lg">
          One intelligent core connecting every department. Chaos fades. Work
          flows.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {DEPARTMENTS.map((dept, i) => (
            <span
              key={dept.id}
              className={`rounded-full px-3 py-1 text-xs transition-all duration-500 ${
                i < connectedCount
                  ? "bg-accent/20 text-accent-light border border-accent/40 glow-accent"
                  : "glass text-muted"
              }`}
            >
              {dept.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
