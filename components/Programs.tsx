"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-soft-grey-dark py-20 lg:py-28"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Programs"
            title="What We Have to Offer"
            description="Enjoy our progressive programs with world-class fitness equipment, trainers, and nutrition counsellors to help you transform your body and health."
          />
        </ScrollReveal>

        <div
          id="gym"
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {PROGRAMS.map((program, i) => (
            <ScrollReveal key={program.title} delay={i * 0.1}>
              <article className="group relative overflow-hidden rounded-[24px] bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {program.tag && (
                    <span
                      className={cn(
                        "absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
                        program.tag === "Signature"
                          ? "bg-emerald text-white"
                          : "bg-ocean text-white"
                      )}
                    >
                      {program.tag}
                    </span>
                  )}
                </div>
                <div className="p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        id={i === 0 ? "programs-heading" : undefined}
                        className="font-display text-xl font-medium text-foreground lg:text-2xl"
                      >
                        {program.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {program.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft-grey text-foreground transition-all duration-300 group-hover:bg-ocean group-hover:text-white"
                      aria-label={`Learn more about ${program.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div id="retreats" className="sr-only" aria-hidden="true" />
      </div>
    </section>
  );
}
