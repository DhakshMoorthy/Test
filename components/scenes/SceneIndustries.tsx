"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { INDUSTRIES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const IndustryWorlds = dynamic(
  () => import("@/components/three/IndustryWorlds"),
  { ssr: false }
);

export default function SceneIndustries() {
  const sectionRef = useRef<HTMLElement>(null);
  const [industryIndex, setIndustryIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${INDUSTRIES.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const idx = Math.floor(self.progress * INDUSTRIES.length);
          setIndustryIndex(Math.min(idx, INDUSTRIES.length - 1));
        },
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const current = INDUSTRIES[industryIndex];

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <SceneCanvas camera={{ position: [0, 3, 4], fov: 50 }}>
        <IndustryWorlds industryIndex={industryIndex} />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col justify-between px-6 py-24">
        <div>
          <p className="text-muted mb-4 text-sm tracking-[0.3em] uppercase">
            Scene 06
          </p>
          <h2 className="font-display max-w-2xl text-4xl font-bold md:text-5xl">
            Built for{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass glow-accent ml-auto max-w-md rounded-2xl p-6"
        >
          <div
            className="mb-2 h-1 w-12 rounded-full"
            style={{ background: current.color }}
          />
          <h3 className="font-display text-2xl font-bold">{current.label}</h3>
          <p className="text-muted mt-2">{current.description}</p>
        </motion.div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.id}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                i === industryIndex
                  ? "bg-accent text-white glow-accent"
                  : "glass text-muted"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
