"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { ORDER_STEPS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const OrderFlow = dynamic(() => import("@/components/three/OrderFlow"), {
  ssr: false,
});

export default function SceneOrderJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const step = Math.floor(self.progress * ORDER_STEPS.length);
          setActiveStep(Math.min(step, ORDER_STEPS.length - 1));
        },
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const currentStep = ORDER_STEPS[activeStep];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <SceneCanvas camera={{ position: [0, 5, 6], fov: 45 }}>
        <OrderFlow activeStep={activeStep} />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col items-center justify-start px-6 pt-24">
        <p className="text-muted mb-4 text-sm tracking-[0.3em] uppercase">
          Scene 03
        </p>
        <h2 className="font-display max-w-3xl text-center text-4xl font-bold md:text-5xl">
          One Order.{" "}
          <span className="gradient-text">Every Step Visible.</span>
        </h2>

        <div className="mt-12 w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass glow-accent rounded-2xl p-6 text-center"
            >
              <span className="text-3xl">{currentStep.icon}</span>
              <p className="mt-3 text-lg font-medium">{currentStep.label}</p>
              <div className="mt-4 flex justify-center gap-1">
                {ORDER_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                      i <= activeStep ? "bg-accent" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
