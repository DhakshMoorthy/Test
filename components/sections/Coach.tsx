"use client";

import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { COACH } from "@/lib/constants";

export default function Coach() {
  return (
    <section id="founder" className="section-light py-28 lg:py-40">
      <div className="container-xl">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
              <Image
                src={COACH.image}
                alt="Meet the coach at Wrightfully Fit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="text-display mt-6 text-5xl text-gold/30">
              Wrightfully Fit
            </p>
          </div>

          <div className="lg:col-span-7">
            <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Meet The Coach
            </TextReveal>
            <TextReveal as="h2" className="text-display text-section uppercase">
              {COACH.title}
            </TextReveal>

            {COACH.bio.map((para, i) => (
              <TextReveal
                key={i}
                as="p"
                className="mt-6 text-lg text-grey-600"
                delay={0.1 * (i + 1)}
              >
                {para}
              </TextReveal>
            ))}

            <blockquote className="mt-8 border-l-4 border-gold pl-6 text-sub italic text-black">
              &ldquo;{COACH.philosophy}&rdquo;
            </blockquote>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {COACH.timeline.map((item) => (
                <div key={item.year} className="border-t border-grey-200 pt-4">
                  <p className="text-display text-2xl text-gold-dark">{item.year}</p>
                  <p className="mt-1 text-base text-grey-600">{item.event}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <MagneticButton href="#contact" variant="ghost">
                Work With Us
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
