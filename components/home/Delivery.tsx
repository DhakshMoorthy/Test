import { DELIVERY } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import StepTabs from "../ui/StepTabs";

export default function Delivery() {
  const steps = DELIVERY.phases.map((p) => ({
    id: p.phase,
    label: p.phase,
    title: p.title,
    description: p.description,
    icon: p.icon,
  }));

  return (
    <section id="approach" className="border-t border-[#0a0a0a]/6 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={DELIVERY.eyebrow}
          title={DELIVERY.title}
          description={DELIVERY.description}
          align="center"
        />
        <StepTabs steps={steps} details={DELIVERY.phaseDetails} labelPrefix="Phase" />
      </div>
    </section>
  );
}
