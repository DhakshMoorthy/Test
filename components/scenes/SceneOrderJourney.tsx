"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import { ORDER_STEPS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneOrderJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 60%",
      end: "bottom 30%",
      scrub: 0.5,
      onUpdate: (self) => {
        const step = Math.floor(self.progress * ORDER_STEPS.length);
        setActiveStep(Math.min(step, ORDER_STEPS.length - 1));
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={sectionRef}>
      <SectionLayout
        id="journey"
        badge="03 — Process Flow"
        title={
          <>
            From Order to Cash,{" "}
            <span className="gradient-text">Seamlessly</span>
          </>
        }
        description="Watch a single order flow through your entire business — every handoff visible, every step automated."
        visual={
          <div className="flex h-full items-center justify-center p-6">
            <div className="grid w-full max-w-sm grid-cols-3 gap-3">
              {ORDER_STEPS.map((step, i) => (
                <motion.div
                  key={step.id}
                  animate={{
                    scale: i === activeStep ? 1.05 : 1,
                    opacity: i <= activeStep ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col items-center rounded-xl p-3 text-center transition-colors duration-300 ${
                    i === activeStep
                      ? "bg-accent-pale ring-2 ring-accent/30"
                      : i < activeStep
                        ? "bg-white ring-1 ring-border"
                        : "bg-surface ring-1 ring-border"
                  }`}
                >
                  <span className="text-xl">{step.icon}</span>
                  <span className="mt-1.5 text-[10px] leading-tight font-medium">
                    {step.label}
                  </span>
                  {i < activeStep && (
                    <span className="mt-1 text-[9px] text-green-500">✓</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        }
      >
        <div className="white-card inline-flex items-center gap-3 px-5 py-3">
          <span className="text-2xl">{ORDER_STEPS[activeStep].icon}</span>
          <div>
            <p className="text-muted text-xs uppercase tracking-wider">Current step</p>
            <p className="font-medium">{ORDER_STEPS[activeStep].label}</p>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
