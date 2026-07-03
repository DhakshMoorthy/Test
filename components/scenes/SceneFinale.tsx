"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import RippleButton from "@/components/ui/RippleButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FullVisualSection from "@/components/ui/FullVisualSection";
import FinaleIllustration from "@/components/illustrations/FinaleIllustration";
import { COMPANY_STATS } from "@/lib/constants";

export default function SceneFinale() {
  return (
    <>
      <FullVisualSection
        id="finale"
        badge="The Kannanware Ecosystem"
        title={<>Transforming Businesses with <span className="gradient-text">Intelligent ERP & AI</span></>}
        description="Trusted by enterprises across the Americas to modernise SAP. Join thousands of businesses connected in one digital ecosystem."
        visual={<FinaleIllustration />}
      />

      <section className="scene-section bg-surface">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Image
            src="/assets/kannanware/kw-logo.png"
            alt="Kannanware"
            width={220} height={44}
            className="mx-auto h-11 w-auto"
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COMPANY_STATS.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="white-card p-5"
              >
                <p className="font-display text-3xl font-bold text-accent-dark">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-muted mt-1 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <RippleButton>
              <MagneticButton size="lg" className="group">
                Book a Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
            </RippleButton>
            <MagneticButton variant="secondary" size="lg">Watch Kannanware in 2 mins</MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
