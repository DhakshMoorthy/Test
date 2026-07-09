"use client";

import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const features = [
  {
    title: "Prime Grace Bay Location",
    text: "Saltmills Plaza — central to villas, resorts, and the best of Providenciales.",
  },
  {
    title: "World-Class Coaching",
    text: "Certified trainers and nutrition counsellors committed to your results.",
  },
  {
    title: "Holistic Wellness",
    text: "Training, recovery, retreats, and lifestyle — addressed as one system.",
  },
  {
    title: "Island Paradise",
    text: "Train surrounded by turquoise waters. Wellness has never felt this inspiring.",
  },
];

export default function WhyWrightfully() {
  return (
    <section id="why" className="section-light py-28 lg:py-40">
      <div className="container-xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Why Wrightfully Fit
            </TextReveal>
            <TextReveal as="h2" className="text-display text-section uppercase">
              Dedicated To Your Health &amp; Wellness
            </TextReveal>
            <TextReveal as="p" className="mt-6 text-lg text-grey-600" delay={0.1}>
              Whether you&apos;re training at our Grace Bay gym or immersing yourself
              in a fitness-focused retreat, we&apos;re committed to helping you be your
              Wrightfully best.
            </TextReveal>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold pl-4">
                  <p className="text-display text-4xl text-black lg:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-grey-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
            <Image
              src="/assets/gallery/gym-1.jpg"
              alt="Training at Wrightfully Fit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="hover-lift rounded-[20px] border border-grey-200 bg-white p-8"
            >
              <div className="mb-5 h-1 w-8 rounded-full bg-gold" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-base text-grey-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
