"use client";

import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 lg:py-48">
      <div className="absolute inset-0">
        <Image
          src="/assets/gallery/gym-2.jpg"
          alt=""
          fill
          className="object-cover ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="container-xl relative z-10 text-center">
        <TextReveal as="h2" className="text-display text-hero mx-auto max-w-4xl uppercase text-white">
          Your Wrightfully Best Starts Now.
        </TextReveal>
        <TextReveal as="p" className="text-sub mx-auto mt-6 max-w-2xl text-white/70" delay={0.1}>
          Book a consultation, reserve your retreat, or visit us at Saltmills Plaza
          in Grace Bay. The island is waiting.
        </TextReveal>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton href="mailto:info@wrightfullyfit.com" variant="primary">
            Book Consultation
          </MagneticButton>
          <MagneticButton href="#retreats" variant="outline">
            Explore Retreats
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
