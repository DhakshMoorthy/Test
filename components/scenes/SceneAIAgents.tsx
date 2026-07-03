"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import GlassCard from "@/components/ui/GlassCard";
import { AI_AGENTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const AIAgents3D = dynamic(() => import("@/components/three/AIAgents3D"), {
  ssr: false,
});

export default function SceneAIAgents() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
          const idx = Math.floor(self.progress * AI_AGENTS.length);
          setActiveIndex(Math.min(idx, AI_AGENTS.length - 1));
        },
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <SceneCanvas camera={{ position: [0, 3, 5], fov: 50 }}>
        <AIAgents3D activeIndex={activeIndex} />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col items-center justify-center px-6">
        <p className="text-muted mb-4 text-sm tracking-[0.3em] uppercase">
          Scene 04
        </p>
        <h2 className="font-display max-w-3xl text-center text-4xl font-bold md:text-5xl">
          AI Agents That{" "}
          <span className="gradient-text">Work While You Sleep</span>
        </h2>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AI_AGENTS.map((agent, i) => (
            <motion.div
              key={agent.id}
              animate={{
                scale: i === activeIndex ? 1.05 : 1,
                opacity: i === activeIndex ? 1 : 0.6,
              }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard
                className={`transition-all duration-500 ${
                  i === activeIndex
                    ? "border-accent/40 glow-accent"
                    : ""
                }`}
                hover={false}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-2 w-2 rounded-full ${
                      i === activeIndex
                        ? "bg-accent animate-pulse"
                        : "bg-white/20"
                    }`}
                  />
                  <div>
                    <p className="font-medium">{agent.label}</p>
                    <p className="text-muted mt-1 text-sm">
                      {agent.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
