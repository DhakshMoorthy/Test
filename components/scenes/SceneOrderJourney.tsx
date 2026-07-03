"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import VisualPanel from "@/components/ui/VisualPanel";
import ProcessFlowIllustration from "@/components/illustrations/ProcessFlowIllustration";
import { ORDER_STEPS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneOrderJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = ScrollTrigger.create({
      trigger: el, start: "top 60%", end: "bottom 30%", scrub: 0.5,
      onUpdate: (s) => setActiveStep(Math.min(Math.floor(s.progress * ORDER_STEPS.length), ORDER_STEPS.length - 1)),
    });
    return () => t.kill();
  }, []);

  return (
    <div ref={ref}>
      <SectionLayout
        id="journey"
        badge="03 — One Connected Flow"
        title={<>From Order to Cash,<br /><span className="gradient-text">Automatically.</span></>}
        description="Every step flows seamlessly across your organisation — confirmed in SAP, fulfilled instantly, paid on time."
        visual={
          <VisualPanel>
            <ProcessFlowIllustration activeStep={activeStep} />
          </VisualPanel>
        }
      >
        <AnimatePresence mode="wait">
          <motion.div key={activeStep}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            className="white-card flex items-center gap-3 px-5 py-3 max-w-xs"
          >
            <span className="text-2xl">{ORDER_STEPS[activeStep].icon}</span>
            <div>
              <p className="text-muted text-[10px] uppercase tracking-wider">Active Step</p>
              <p className="font-semibold text-sm">{ORDER_STEPS[activeStep].label}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex gap-1.5 max-w-xs">
          {ORDER_STEPS.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= activeStep ? "bg-accent" : "bg-border"}`} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
