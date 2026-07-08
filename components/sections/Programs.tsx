"use client";

import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";
import { PROGRAMS } from "@/lib/constants";
import { HiArrowRight } from "react-icons/hi";

export default function Programs() {
  return (
    <section id="programs" className="section-dark py-28 lg:py-40">
      <div className="container-xl">
        <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Training Programs
        </TextReveal>
        <TextReveal as="h2" className="text-display text-section max-w-3xl uppercase text-white">
          What We Have To Offer
        </TextReveal>
        <TextReveal as="p" className="mt-6 max-w-2xl text-lg text-white/60" delay={0.1}>
          Progressive programs with world-class equipment, trainers, and nutrition
          counsellors to transform your body and health.
        </TextReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((program) => (
            <article
              key={program.title}
              className="group hover-lift relative overflow-hidden rounded-[20px] bg-grey-900"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {program.tag && (
                  <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                    {program.tag}
                  </span>
                )}
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-wider text-gold">
                  {program.subtitle}
                </p>
                <h3 className="text-display mt-2 text-3xl uppercase text-white">
                  {program.title}
                </h3>
                <p className="mt-3 text-base text-white/60">{program.description}</p>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-black"
                  aria-label={`Learn more about ${program.title}`}
                >
                  <HiArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
