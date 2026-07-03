"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SectionLayout from "@/components/ui/SectionLayout";
import { AI_AGENTS } from "@/lib/constants";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
});
const AIAgents3D = dynamic(() => import("@/components/three/AIAgents3D"), {
  ssr: false,
});

export default function SceneAIAgents() {
  return (
    <SectionLayout
      id="ai"
      badge="04 — AI Integration"
      title={
        <>
          AI That Works{" "}
          <span className="gradient-text">Alongside Your Team</span>
        </>
      }
      description="Intelligent agents monitor, predict, and act — so your people focus on strategy while AI handles the routine."
      reverse
      visual={
        <SceneCanvas camera={{ position: [0, 1.2, 3.5], fov: 42 }}>
          <AIAgents3D />
        </SceneCanvas>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {AI_AGENTS.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="white-card p-4"
          >
            <p className="text-sm font-semibold">{agent.label}</p>
            <p className="text-muted mt-1 text-xs">{agent.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
