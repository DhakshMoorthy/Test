"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import RippleButton from "@/components/ui/RippleButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionLayout from "@/components/ui/SectionLayout";
import VisualPanel from "@/components/ui/VisualPanel";
import FinaleIllustration from "@/components/illustrations/FinaleIllustration";
import { COMPANY_STATS } from "@/lib/constants";

export default function SceneFinale() {
  return (
    <>
      <SectionLayout
        id="finale"
        badge="08 — The Future is Connected"
        title={<>Transforming Businesses<br />with <span className="gradient-text">Intelligent ERP & AI</span></>}
        description="Kannanware is your partner in digital transformation. Together, we build smarter, stronger, future-ready businesses."
        reverse
        visual={
          <VisualPanel>
            <FinaleIllustration />
          </VisualPanel>
        }
      >
        <div className="flex flex-col gap-4">
          <RippleButton>
            <MagneticButton size="lg" className="group">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </MagneticButton>
          </RippleButton>
          <button className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent-dark transition-colors">
            ▶ Watch Video
          </button>
        </div>
      </SectionLayout>

      {/* Stats footer */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COMPANY_STATS.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="white-card p-5 text-center"
              >
                <p className="font-display text-3xl font-bold text-accent-dark">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-muted mt-1 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
