"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_STATS } from "@/lib/constants";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});
const HeroEcosystem = dynamic(
  () => import("@/components/three/HeroEcosystem"),
  { ssr: false }
);

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
            className="text-accent mb-4 text-sm font-semibold tracking-wide"
          >
            SAP ERP · AI · Digital Transformation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Transform Your Business with{" "}
            <span className="gradient-text">Intelligent ERP</span>
          </motion.h1>

          <ScrollReveal delay={0.35}>
            <p className="text-muted mt-6 max-w-lg text-lg leading-relaxed">
              Kannanware unifies finance, operations, and AI into one seamless
              platform — so your teams move faster and decisions get smarter.
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
                document
                  .getElementById("finale")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Demo
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("chaos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See How It Works
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative">
          <div className="canvas-panel !h-[20rem] lg:!h-[26rem]">
            <SceneCanvas camera={{ position: [4.5, 3.5, 4.5], fov: 40 }}>
              <HeroEcosystem />
            </SceneCanvas>
          </div>

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
                  <span className="text-sm text-foreground">{stat.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold">{stat.value}</span>
                    <span className="ml-2 text-xs font-medium text-green-500">
                      {stat.trend}
                    </span>
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
