"use client";

import SectionLayout from "@/components/ui/SectionLayout";
import VisualPanel from "@/components/ui/VisualPanel";
import AIIllustration from "@/components/illustrations/AIIllustration";
import MagneticButton from "@/components/ui/MagneticButton";

export default function SceneAIAgents() {
  return (
    <SectionLayout
      id="ai"
      badge="04 — AI-Powered Automation"
      title={<>AI That Works<br /><span className="gradient-text">For You.</span></>}
      description="Intelligent automation that predicts, recommends, and acts — so your team can focus on growth."
      reverse
      visual={
        <VisualPanel>
          <AIIllustration />
        </VisualPanel>
      }
    >
      <MagneticButton variant="secondary" size="md">
        Explore AI Capabilities →
      </MagneticButton>
    </SectionLayout>
  );
}
