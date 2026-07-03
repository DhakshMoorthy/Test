"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import FloatingParticles from "@/components/ui/FloatingParticles";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroIntro() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <FloatingParticles count={60} />
      <div className="animated-gradient absolute inset-0" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted mb-6 text-sm tracking-[0.4em] uppercase"
        >
          SAP ERP · AI · Digital Transformation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-5xl text-5xl leading-[1.1] font-bold md:text-7xl lg:text-8xl"
        >
          Your Business,{" "}
          <span className="gradient-text glow-text">Reimagined</span>
        </motion.h1>

        <ScrollReveal delay={0.8}>
          <p className="text-muted mx-auto mt-8 max-w-2xl text-lg md:text-xl">
            Scroll to experience how Kannanware transforms chaos into clarity —
            one scene at a time.
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <MagneticButton
            size="lg"
            onClick={() =>
              document
                .getElementById("chaos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Begin the Story
          </MagneticButton>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted flex flex-col items-center gap-2 text-xs"
          >
            <span>Scroll to explore</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
