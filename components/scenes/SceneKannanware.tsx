"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import SectionLayout from "@/components/ui/SectionLayout";
import { DEPARTMENTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});
const ERPCore = dynamic(() => import("@/components/three/ERPCore"), {
  ssr: false,
});

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
        description="Kannanware ERP connects every department through a single intelligent core — replacing fragmentation with clarity."
        reverse
        visual={
          <SceneCanvas camera={{ position: [4, 3.5, 4], fov: 42 }}>
            <ERPCore progress={progress} rotationProgress={progress} />
          </SceneCanvas>
        }
      >
        <div className="flex flex-wrap gap-2">
          {DEPARTMENTS.map((dept, i) => (
            <span
              key={dept.id}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-500 ${
                i < connectedCount
                  ? "bg-accent-pale text-accent ring-1 ring-accent/20"
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
