"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/MagneticButton";
import RippleButton from "@/components/ui/RippleButton";
import FloatingParticles from "@/components/ui/FloatingParticles";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const ParticleLogo = dynamic(
  () => import("@/components/three/ParticleLogo"),
  { ssr: false }
);

export default function SceneFinale() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    tl.fromTo(
      ".finale-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4 },
      0.3
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="finale"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <FloatingParticles count={80} />
      <SceneCanvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ParticleLogo progress={Math.max(progress, 0.3)} />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="finale-text opacity-0"
          initial={{ opacity: 0 }}
        >
          <p className="font-display mb-2 text-sm tracking-[0.4em] text-accent uppercase">
            Kannanware
          </p>
          <h2 className="font-display max-w-4xl text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
            Transforming Businesses with{" "}
            <span className="gradient-text glow-text">
              Intelligent ERP & AI
            </span>
          </h2>
          <p className="text-muted mx-auto mt-6 max-w-2xl text-lg">
            Join thousands of businesses connected in one digital ecosystem.
            Experience the future of enterprise management.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <RippleButton>
              <MagneticButton size="lg" className="group">
                Book a Demo
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MagneticButton>
            </RippleButton>
            <MagneticButton variant="secondary" size="lg">
              Explore Solutions
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
