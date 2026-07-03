"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_STATS } from "@/lib/constants";

const LOGOS = ["Wipro", "Jindal", "Dalmia", "Ather", "TVS"];

export default function HeroIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-12">
      {/* warm gradient background */}
      <div className="animated-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[44%_56%] lg:gap-10 lg:pt-8">

        {/* ── LEFT: copy ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-accent-dark mb-4 text-xs font-bold tracking-[0.18em] uppercase"
          >
            Intelligent ERP. Real Results.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl leading-[1.08] font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            One Platform.{" "}
            <span className="gradient-text block">Every Advantage.</span>
          </motion.h1>

          <ScrollReveal delay={0.38}>
            <p className="text-muted mt-5 max-w-md text-base leading-relaxed md:text-[17px]">
              Kannanware ERP connects people, processes, and data to help your
              business run smarter, faster, and future-ready.
            </p>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              size="lg"
              onClick={() =>
                document.getElementById("finale")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Demo
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="md"
              onClick={() =>
                document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How It Works ▶
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.92 }}
            className="text-muted mt-8 text-xs font-medium"
          >
            Trusted by forward-thinking companies
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="mt-3 flex flex-wrap items-center gap-5"
          >
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-muted text-sm font-semibold tracking-wide opacity-50"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: VIDEO ── */}
        <div className="relative">
          {/* video frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full overflow-hidden rounded-[20px]"
            style={{
              aspectRatio: "1212 / 756",
              background: "#FFFDF8",
              border: "1px solid rgba(240,232,200,0.9)",
              boxShadow:
                "0 4px 6px rgba(15,23,42,0.04), 0 12px 40px rgba(250,171,24,0.1), 0 32px 80px rgba(15,23,42,0.06)",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
              style={{ display: "block" }}
            >
              <source src="/assets/hero.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Live Business Impact floating card */}
          <motion.div
            initial={{ opacity: 0, x: 18, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="white-card absolute -bottom-4 -left-3 z-10 w-52 p-4 sm:-left-5 sm:w-60"
            style={{
              boxShadow:
                "0 8px 32px rgba(15,23,42,0.1), 0 2px 8px rgba(15,23,42,0.06)",
            }}
          >
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-muted text-[10px] font-bold tracking-widest uppercase">
                Live Business Impact
              </p>
            </div>
            <div className="space-y-2.5">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-xs text-foreground">{stat.label}</span>
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="text-xs font-bold">{stat.value}</span>
                    <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[10px] font-semibold text-green-600">
                      {stat.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* subtle corner accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -right-3 -top-3 z-10 h-12 w-12 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(250,171,24,0.25) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
