"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/ui/SectionLayout";
import ChaosIllustration from "@/components/illustrations/ChaosIllustration";
import { CHAOS_WARNINGS } from "@/lib/constants";

export default function SceneChaos() {
  return (
    <SectionLayout
      id="chaos"
      badge="01 — The Challenge"
      title={
        <>
          Disconnected Systems Create{" "}
          <span className="text-red-500">Chaos</span>
        </>
      }
      description="Manual processes, siloed SAP modules, and delayed decisions slow your entire operation. Every team works harder — but nothing moves faster."
      visual={<ChaosIllustration />}
    >
      <div className="flex flex-wrap gap-2">
        {CHAOS_WARNINGS.map((warning, i) => (
          <motion.span
            key={warning.text}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
              warning.type === "danger"
                ? "bg-red-50 text-red-600 ring-1 ring-red-100"
                : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {warning.text}
          </motion.span>
        ))}
      </div>
    </SectionLayout>
  );
}
