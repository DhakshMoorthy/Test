import { DELIVERY } from "../../lib/constants";
import SectionHeader from "../ui/SectionHeader";
import ActivationPath from "../ui/ActivationPath";

export default function Delivery() {
  return (
    <section id="approach" className="relative overflow-hidden border-t border-[#0a0a0a]/6 bg-[#fafafa]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 100%, rgba(232,160,0,0.05) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow={DELIVERY.eyebrow}
          title={DELIVERY.title}
          description={DELIVERY.description}
          align="center"
        />
        <ActivationPath />
      </div>
    </section>
  );
}
