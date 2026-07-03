"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import SectionLayout from "@/components/ui/SectionLayout";
import { INDUSTRIES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});
const IndustryWorlds = dynamic(
  () => import("@/components/three/IndustryWorlds"),
  { ssr: false }
);

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
            Built for{" "}
            <span className="gradient-text">Your Industry</span>
          </>
        }
        description="Purpose-built modules for manufacturing, retail, healthcare, and more — each tailored to your sector's unique workflows."
        visual={
          <SceneCanvas camera={{ position: [0, 2, 5], fov: 42 }}>
            <IndustryWorlds industryIndex={industryIndex} />
          </SceneCanvas>
        }
      >
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="white-card p-5"
        >
          <div
            className="mb-2 h-1 w-10 rounded-full"
            style={{ background: current.color }}
          />
          <h3 className="font-display text-lg font-bold">{current.label}</h3>
          <p className="text-muted mt-1 text-sm">{current.description}</p>
        </motion.div>

        <div className="mt-4 flex flex-wrap gap-2">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setIndustryIndex(i)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                i === industryIndex
                  ? "bg-accent text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)]"
                  : "bg-surface text-muted ring-1 ring-border hover:text-accent"
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
