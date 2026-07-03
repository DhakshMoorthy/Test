"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import FullVisualSection from "@/components/ui/FullVisualSection";
import OrderFlowIllustration from "@/components/illustrations/OrderFlowIllustration";
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
      onUpdate: (s) => {
        const step = Math.floor(s.progress * ORDER_STEPS.length);
        setActiveStep(Math.min(step, ORDER_STEPS.length - 1));
      },
    });
    return () => t.kill();
  }, []);

  return (
    <div ref={ref}>
      <FullVisualSection
        id="journey"
        badge="03 — Process Flow"
        title={<>From Order to Cash, <span className="gradient-text">Seamlessly</span></>}
        description="A single order flows through every SAP module automatically — no spreadsheets, no emails, no manual handoffs."
        visual={<OrderFlowIllustration activeStep={activeStep} />}
        actions={
          <AnimatePresence mode="wait">
            <motion.div key={activeStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="white-card flex items-center gap-3 px-5 py-3 shrink-0"
            >
              <span className="text-2xl">{ORDER_STEPS[activeStep].icon}</span>
              <div>
                <p className="text-muted text-xs uppercase tracking-wider">Active</p>
                <p className="font-semibold text-sm">{ORDER_STEPS[activeStep].label}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        }
        footer={
          <div className="flex gap-2">
            {ORDER_STEPS.map((s, i) => (
              <div key={s.id} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= activeStep ? "bg-accent" : "bg-border"}`} />
            ))}
          </div>
        }
      />
    </div>
  );
}
