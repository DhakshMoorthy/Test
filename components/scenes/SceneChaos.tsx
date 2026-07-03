"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { CHAOS_WARNINGS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const ChaosWorld = dynamic(
  () => import("@/components/three/ChaosWorld"),
  { ssr: false }
);

export default function SceneChaos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    });

    tl.to(".chaos-title", { opacity: 1, y: 0, duration: 0.3 }, 0);
    tl.to(".chaos-warning", { opacity: 1, stagger: 0.1, duration: 0.2 }, 0.2);
    tl.to(".chaos-subtitle", { opacity: 0.5, duration: 0.3 }, 0.8);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="chaos"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <FloatingParticles count={40} />
      <SceneCanvas camera={{ position: [6, 6, 6], fov: 40 }}>
        <ChaosWorld progress={progress} />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col items-center justify-center px-6">
        <motion.p
          className="chaos-subtitle text-muted mb-4 text-sm tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Scene 01
        </motion.p>
        <h2
          className="chaos-title font-display max-w-3xl text-center text-4xl font-bold opacity-0 md:text-6xl"
          style={{ transform: "translateY(40px)" }}
        >
          Before ERP:{" "}
          <span className="text-red-400">Controlled Chaos</span>
        </h2>
        <p className="text-muted mt-6 max-w-xl text-center text-lg">
          Disconnected systems. Delayed orders. Frustrated teams. Sound familiar?
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CHAOS_WARNINGS.map((warning, i) => (
            <motion.div
              key={warning}
              className="chaos-warning glass rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-300 opacity-0"
              animate={{
                y: [0, -5, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              ⚠ {warning}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
