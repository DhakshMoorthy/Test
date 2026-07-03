"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FullVisualSection from "@/components/ui/FullVisualSection";
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

  const current = INDUSTRIES[index];

  return (
    <div ref={ref}>
      <FullVisualSection
        id="industries"
        badge="06 — Industry Modules"
        title={<>Deep Experience <span className="gradient-text">Across Every Sector</span></>}
        description="Purpose-built SAP modules for manufacturing, retail, healthcare, energy, logistics, and financial services."
        visual={<IndustryIllustration index={index} />}
        bgClass="bg-surface"
        actions={
          <motion.div key={current.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            className="white-card p-4 shrink-0 w-64"
          >
            <div className="mb-1.5 h-1 w-10 rounded-full" style={{ background: current.color }} />
            <p className="font-display font-bold">{current.label}</p>
            <p className="text-muted mt-1 text-xs">{current.description}</p>
          </motion.div>
        }
        footer={
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind, i) => (
              <button key={ind.id} type="button" onClick={() => setIndex(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  i === index
                    ? "bg-accent text-[#090909] shadow-[0_4px_16px_rgba(250,171,24,0.35)]"
                    : "bg-surface-light text-muted ring-1 ring-border hover:text-accent-dark"
                }`}>{ind.label}</button>
            ))}
          </div>
        }
      />
    </div>
  );
}
