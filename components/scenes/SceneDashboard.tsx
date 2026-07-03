"use client";

import SectionLayout from "@/components/ui/SectionLayout";
import VisualPanel from "@/components/ui/VisualPanel";
import DashboardMockup from "@/components/illustrations/DashboardMockup";
import MagneticButton from "@/components/ui/MagneticButton";

export default function SceneDashboard() {
  return (
    <SectionLayout
      id="dashboard"
      badge="05 — Real-Time Insights"
      title={<>All Your Business Insights.<br /><span className="gradient-text">In Real Time.</span></>}
      description="Make confident decisions with real-time data, dashboards, and actionable insights — all powered by SAP Analytics Cloud."
      visual={
        <VisualPanel>
          <DashboardMockup />
        </VisualPanel>
      }
    >
      <MagneticButton variant="secondary" size="md">
        View Live Dashboard →
      </MagneticButton>
    </SectionLayout>
  );
}
