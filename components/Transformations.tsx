"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { TRANSFORMATIONS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Transformations() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="transformations-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Results"
            title="Client Transformations"
            description="Real stories from real people who chose to invest in their health at Wrightfully Fit."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-14"
            >
              {TRANSFORMATIONS.map((item, i) => (
                <SwiperSlide key={item.name}>
                  <article className="glass-card flex h-full flex-col overflow-hidden rounded-[24px]">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="text-sm font-semibold text-emerald">
                        {item.result}
                      </p>
                      <h3
                        id={i === 0 ? "transformations-heading" : undefined}
                        className="mt-1 font-display text-lg font-medium"
                      >
                        {item.name}
                      </h3>
                      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
