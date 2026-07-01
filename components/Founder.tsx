"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function Founder() {
  return (
    <section
      id="founder"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=800&q=80"
                  alt="Wrightfully Fit founder leading a training session"
                  width={600}
                  height={750}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 rounded-[24px] bg-emerald p-6 text-white shadow-xl sm:-right-8"
              >
                <p className="font-display text-3xl font-medium">10+</p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
              Meet the Founder
            </p>
            <h2
              id="founder-heading"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
            >
              Passion for Wellness,
              <br />
              Rooted in Paradise
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Wrightfully Fit was born from a simple belief: that extraordinary
                fitness experiences shouldn&apos;t be confined to ordinary gyms.
                Nestled in the heart of Grace Bay, our founder envisioned a space
                where world-class training meets the natural beauty of Turks
                &amp; Caicos.
              </p>
              <p>
                From personalized coaching sessions to immersive wellness retreats,
                every program reflects a commitment to helping clients retreat,
                relax, and achieve real results — in an environment that inspires
                transformation from the inside out.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Work With Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
