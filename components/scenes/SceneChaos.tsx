"use client";

import SectionLayout from "@/components/ui/SectionLayout";
import VisualPanel from "@/components/ui/VisualPanel";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import { CHAOS_WARNINGS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function SceneChaos() {
  return (
    <SectionLayout
      id="chaos"
      badge="01 — The Challenge"
      title={<>Every Process, Working <span className="text-red-500">In Silos</span></>}
      description="When systems don't talk, businesses lose time, money, and momentum. Manual work, data gaps, and approval bottlenecks pile up silently."
      visual={
        <VisualPanel>
          <HeroIllustration />
        </VisualPanel>
      }
    >
      <div className="flex flex-wrap gap-2">
        {CHAOS_WARNINGS.map((w, i) => (
          <motion.span key={w.text}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
              w.type === "danger"
                ? "bg-red-50 text-red-600 ring-1 ring-red-200"
                : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />{w.text}
          </motion.span>
        ))}
      </div>
    </SectionLayout>
  );
}
