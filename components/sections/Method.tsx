"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import { METHOD_STEPS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Method() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const steps = gsap.utils.toArray<HTMLElement>(".method-step");
    steps.forEach((step) => {
      gsap.fromTo(
        step,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section id="method" ref={sectionRef} className="section-dark py-28 lg:py-40">
      <div className="container-xl">
        <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          The Wrightfully Method
        </TextReveal>
        <TextReveal as="h2" className="text-display text-section max-w-3xl uppercase text-white">
          Five Pillars. One System.
        </TextReveal>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 lg:left-8 lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {METHOD_STEPS.map((step) => (
              <div
                key={step.step}
                className="method-step relative grid gap-6 lg:grid-cols-12 lg:gap-12 lg:pl-20"
              >
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full bg-gold lg:block" />
                <div className="lg:col-span-3">
                  <span className="text-display text-6xl text-white/15 lg:text-7xl">
                    {step.step}
                  </span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-display text-4xl uppercase text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
