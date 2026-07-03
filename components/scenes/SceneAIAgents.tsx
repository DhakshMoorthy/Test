"use client";

import { motion } from "framer-motion";
import FullVisualSection from "@/components/ui/FullVisualSection";
import AIIllustration from "@/components/illustrations/AIIllustration";
import { AI_AGENTS } from "@/lib/constants";

export default function SceneAIAgents() {
  return (
    <FullVisualSection
      id="ai"
      badge="04 — AI Integration"
      title={<>SAP Joule AI <span className="gradient-text">Alongside Your Team</span></>}
      description="Intelligent agents monitor, predict, and act across your SAP landscape — freeing your people for the work that actually matters."
      visual={<AIIllustration />}
      bgClass="bg-[#FFFCF5]"
      footer={
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {AI_AGENTS.map((a, i) => (
            <motion.div key={a.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="white-card p-4"
            >
              <p className="text-sm font-semibold">{a.label}</p>
              <p className="text-muted mt-1 text-xs">{a.description}</p>
            </motion.div>
          ))}
        </div>
      }
    />
  );
}
