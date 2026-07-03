"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLayout from "@/components/ui/SectionLayout";
import VisualPanel from "@/components/ui/VisualPanel";
import IndustryIllustration from "@/components/illustrations/IndustryIllustration";
import { INDUSTRIES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SceneIndustries() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = ScrollTrigger.create({
      trigger: el, start: "top 60%", end: "bottom 20%", scrub: 0.5,
      onUpdate: (s) => setIndex(Math.min(Math.floor(s.progress * INDUSTRIES.length), INDUSTRIES.length - 1)),
    });
    return () => t.kill();
  }, []);

  return (
    <div ref={ref}>
      <SectionLayout
        id="industries"
        badge="06 — Built for Every Industry"
        title={<>Industry Solutions.<br /><span className="gradient-text">Designed to Scale.</span></>}
        description="We build smarter, stronger, future-ready businesses across every sector with purpose-built SAP modules."
        reverse
        visual={
          <VisualPanel>
            <IndustryIllustration index={index} />
          </VisualPanel>
        }
      >
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES.map((ind, i) => (
            <motion.button
              key={ind.id} type="button" onClick={() => setIndex(i)}
              whileHover={{ scale: 1.03 }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                i === index
                  ? "bg-accent text-[#090909] shadow-[0_4px_14px_rgba(250,171,24,0.4)]"
                  : "bg-surface-light text-muted ring-1 ring-border hover:text-accent-dark"
              }`}
            >
              {ind.label}
            </motion.button>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
