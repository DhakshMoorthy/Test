import { APPROACH } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import StepTabs from "../ui/StepTabs";

export default function Approach() {
  const steps = APPROACH.steps.map((s) => ({
    id: s.step,
    label: s.step,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }));

  return (
    <section id="solutions" className="border-t border-[#0a0a0a]/6 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={APPROACH.eyebrow}
          title={APPROACH.title}
          description={APPROACH.description}
          align="center"
        />
        <StepTabs steps={steps} details={APPROACH.stepDetails} labelPrefix="Step" />
      </div>
    </section>
  );
}
