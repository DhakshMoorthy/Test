"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VisualPanel from "@/components/ui/VisualPanel";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import { HERO_STATS } from "@/lib/constants";

const LOGOS = ["Wipro", "Jindal", "Dalmia", "Ather", "TVS"];

export default function HeroIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-8">
      <div className="animated-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[46%_54%] lg:gap-8 lg:pt-10">
        {/* ── LEFT: copy ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-accent-dark mb-4 text-xs font-bold tracking-[0.16em] uppercase"
          >
            Intelligent ERP. Real Results.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl leading-[1.08] font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            One Platform.{" "}
            <span className="gradient-text block">Every Advantage.</span>
          </motion.h1>

          <ScrollReveal delay={0.35}>
            <p className="text-muted mt-5 max-w-md text-base leading-relaxed md:text-[17px]">
              Kannanware ERP connects people, processes, and data to help your business
              run smarter, faster, and future-ready.
            </p>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              size="lg"
              onClick={() => document.getElementById("finale")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Demo
            </MagneticButton>
            <MagneticButton variant="secondary" size="md"
              onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}
            >
              How It Works ▶
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-muted mt-8 text-xs font-medium"
          >
            Trusted by forward-thinking companies
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-3 flex flex-wrap items-center gap-5"
          >
            {LOGOS.map((logo) => (
              <span key={logo} className="text-muted text-sm font-semibold tracking-wide opacity-60">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: illustration ── */}
        <div className="relative">
          <VisualPanel className="!h-[22rem] md:!h-[28rem] lg:!h-[34rem]">
            <HeroIllustration />
          </VisualPanel>

          {/* Live Business Impact card */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="white-card absolute -bottom-3 -left-3 z-10 w-52 p-4 sm:-left-6 sm:w-60"
          >
            <p className="text-muted text-[10px] font-bold tracking-widest uppercase">
              Live Business Impact
            </p>
            <div className="mt-2.5 space-y-2.5">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-xs text-foreground">{stat.label}</span>
                  <div className="text-right leading-none">
                    <span className="text-xs font-bold">{stat.value}</span>
                    <span className="ml-1.5 text-[10px] font-semibold text-green-600">{stat.trend}</span>
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
