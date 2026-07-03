"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { KPI_METRICS } from "@/lib/constants";

export default function SceneDashboard() {
  return (
    <section id="dashboard" className="scene-section bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="section-badge">05 — Real Results</span>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Measurable Impact,{" "}
            <span className="gradient-text">From Day One</span>
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-lg">
            Companies using Kannanware see dramatic improvements across every metric that matters.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {KPI_METRICS.map((metric, i) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="white-card flex items-center gap-5 p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-pale text-2xl">
                {metric.icon}
              </span>
              <div>
                <p className="font-display text-3xl font-bold">
                  <AnimatedCounter value={metric.value} suffix="%" direction={metric.direction} duration={1.8} />
                </p>
                <p className="text-muted mt-0.5 text-sm font-medium">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
