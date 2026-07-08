"use client";

import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import { NUTRITION } from "@/lib/constants";
import { HiCheck } from "react-icons/hi";

export default function Nutrition() {
  return (
    <section className="section-grey py-28 lg:py-40">
      <div className="container-xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
              <Image
                src={NUTRITION.image}
                alt="Nutrition coaching"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Nutrition
            </TextReveal>
            <TextReveal as="h2" className="text-display text-section uppercase">
              {NUTRITION.title}
            </TextReveal>
            <TextReveal as="p" className="mt-6 text-lg text-grey-600" delay={0.1}>
              {NUTRITION.description}
            </TextReveal>
            <ul className="mt-10 space-y-4">
              {NUTRITION.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-lg">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                    <HiCheck size={16} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
