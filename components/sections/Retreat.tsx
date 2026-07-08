"use client";

import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { RETREAT } from "@/lib/constants";

export default function Retreat() {
  return (
    <section id="retreats" className="section-dark py-28 lg:py-40">
      <div className="container-xl">
        <div className="relative mb-16 aspect-[21/9] overflow-hidden rounded-[20px]">
          <Image
            src={RETREAT.image}
            alt="Wellness retreat"
            fill
            className="object-cover ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            <TextReveal as="h2" className="text-display text-section uppercase text-white">
              {RETREAT.title}
            </TextReveal>
          </div>
        </div>

        <TextReveal as="p" className="max-w-3xl text-lg text-white/60">
          {RETREAT.description}
        </TextReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RETREAT.experiences.map((exp) => (
            <div
              key={exp.title}
              className="glass hover-lift rounded-[20px] p-8"
            >
              <h3 className="text-display text-2xl uppercase text-white">
                {exp.title}
              </h3>
              <p className="mt-2 text-base text-white/60">{exp.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <MagneticButton href="#contact" variant="primary">
            Book Retreat
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
