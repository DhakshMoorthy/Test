"use client";

import { MapPin, Users, Palmtree, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap = {
  MapPin,
  Users,
  Palmtree,
  Sparkles,
} as const;

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="bg-soft-grey py-20 lg:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Why Wrightfully Fit"
            title="Dedicated to Your Health and Wellness"
            description="Whether you're training at our conveniently located Saltmills Plaza gym in the heart of Grace Bay or immersing yourself in a fitness-focused retreat, we're committed to helping you be your Wrightfully best."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group glass-card h-full rounded-[24px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-pale text-ocean transition-colors duration-300 group-hover:bg-ocean group-hover:text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    id={i === 0 ? "why-heading" : undefined}
                    className="font-display text-xl font-medium text-foreground"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
