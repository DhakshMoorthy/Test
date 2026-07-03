"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VisualPanel from "@/components/ui/VisualPanel";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import { HERO_STATS } from "@/lib/constants";

export default function HeroIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <div className="animated-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:pt-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-accent-dark mb-4 text-sm font-semibold tracking-wide"
          >
            AI-First SAP Consulting · Implementation · Run
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            SAP Transformation with{" "}
            <span className="gradient-text">Embedded AI</span>
          </motion.h1>

          <ScrollReveal delay={0.35}>
            <p className="text-muted mt-6 max-w-lg text-lg leading-relaxed">
              AI-powered SAP solutions automating reconciliation, strengthening
              controls, and delivering governed insights your board can trust.
            </p>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton
              size="lg"
              onClick={() =>
                document.getElementById("finale")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore AI Solutions →
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById("chaos")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See AI in Action
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative">
          <VisualPanel className="!h-[20rem] lg:!h-[26rem]">
            <HeroIllustration />
          </VisualPanel>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="white-card absolute -bottom-4 -left-2 z-10 w-56 p-4 sm:-left-6 lg:w-64"
          >
            <p className="text-muted text-xs font-semibold tracking-wider uppercase">
              Live Business Impact
            </p>
            <div className="mt-3 space-y-3">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-sm">{stat.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold">{stat.value}</span>
                    <span className="ml-2 text-xs font-medium text-green-600">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
