"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import OrderFlowIllustration from "@/components/illustrations/OrderFlowIllustration";
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
        description="Watch a single order flow through sales, warehouse, production, and finance — every handoff visible in SAP, every step automated."
        visual={<OrderFlowIllustration activeStep={activeStep} />}
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
