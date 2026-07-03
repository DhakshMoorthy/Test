"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas"),
  { ssr: false }
);
const DashboardGlobe = dynamic(
  () => import("@/components/three/DashboardGlobe"),
  { ssr: false }
);

const KPI_DATA = [
  { label: "Revenue", value: 4.2, suffix: "M", prefix: "$" },
  { label: "Orders Today", value: 1247, suffix: "" },
  { label: "Inventory Accuracy", value: 99, suffix: "%" },
  { label: "On-Time Delivery", value: 97, suffix: "%" },
];

const CHART_BARS = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

export default function SceneDashboard() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      },
    });

    tl.fromTo(
      ".dash-panel",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.3 },
      0
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="dashboard"
      ref={sectionRef}
      className="scene-pin relative min-h-screen overflow-hidden bg-background"
    >
      <SceneCanvas
        camera={{ position: [4, 2, 4], fov: 50 }}
        className="opacity-40"
      >
        <DashboardGlobe />
      </SceneCanvas>

      <div className="scene-content flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <p className="text-muted mb-4 text-sm tracking-[0.3em] uppercase">
          Scene 05
        </p>
        <h2 className="font-display mb-10 max-w-3xl text-center text-4xl font-bold md:text-5xl">
          Your Command{" "}
          <span className="gradient-text">Center</span>
        </h2>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-12">
          {/* KPI Cards */}
          {KPI_DATA.map((kpi, i) => (
            <GlassCard
              key={kpi.label}
              className={`dash-panel opacity-0 md:col-span-3 ${
                i === 0 ? "glow-accent" : ""
              }`}
            >
              <p className="text-muted text-xs uppercase tracking-wider">
                {kpi.label}
              </p>
              <p className="font-display mt-2 text-2xl font-bold">
                <AnimatedCounter
                  value={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  duration={1.5}
                />
              </p>
            </GlassCard>
          ))}

          {/* Live Chart */}
          <GlassCard className="dash-panel opacity-0 md:col-span-8">
            <p className="text-muted mb-4 text-xs uppercase tracking-wider">
              Revenue Trend
            </p>
            <div className="flex h-32 items-end gap-1.5">
              {CHART_BARS.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-light"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </GlassCard>

          {/* Alerts */}
          <GlassCard className="dash-panel opacity-0 md:col-span-4">
            <p className="text-muted mb-3 text-xs uppercase tracking-wider">
              Live Alerts
            </p>
            {[
              { text: "PO #4821 auto-approved", type: "success" },
              { text: "Demand spike detected", type: "warning" },
              { text: "SAP sync complete", type: "info" },
            ].map((alert) => (
              <div
                key={alert.text}
                className="mb-2 flex items-center gap-2 text-sm"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    alert.type === "success"
                      ? "bg-green-400"
                      : alert.type === "warning"
                        ? "bg-yellow-400"
                        : "bg-accent"
                  }`}
                />
                {alert.text}
              </div>
            ))}
          </GlassCard>

          {/* Heat Map */}
          <GlassCard className="dash-panel opacity-0 md:col-span-8">
            <p className="text-muted mb-3 text-xs uppercase tracking-wider">
              Inventory Heat Map
            </p>
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 32 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded"
                  style={{
                    background: `rgba(37, 99, 235, ${0.1 + Math.random() * 0.7})`,
                  }}
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
