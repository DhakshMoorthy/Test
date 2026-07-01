"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section
      className="bg-soft-grey py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Hear from those who have experienced the Wrightfully Fit difference — in the gym, on retreat, and beyond."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.15}>
              <article className="group relative flex h-full flex-col rounded-[24px] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean/5 lg:p-10">
                <Quote
                  className="mb-6 text-ocean/20 transition-colors group-hover:text-ocean/40"
                  size={40}
                  strokeWidth={1}
                />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-emerald text-emerald"
                    />
                  ))}
                </div>
                <blockquote
                  id={i === 0 ? "testimonials-heading" : undefined}
                  className="flex-1 text-base leading-relaxed text-foreground/80"
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 border-t border-soft-grey-dark pt-6">
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
