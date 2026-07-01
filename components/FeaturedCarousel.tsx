"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FEATURED_SLIDES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export default function FeaturedCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      id="featured"
      className="relative bg-white py-16 lg:py-24"
      aria-label="Featured offerings"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Discover
          </p>
          <h2 className="mb-12 text-center font-display text-3xl font-medium tracking-tight sm:text-4xl lg:mb-16 lg:text-5xl">
            Your Wellness Journey Starts Here
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={800}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".featured-pagination" }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              loop
              className="featured-swiper overflow-hidden rounded-[24px]"
            >
              {FEATURED_SLIDES.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-end p-8 sm:items-center sm:p-12 lg:p-16">
                      <div className="max-w-xl">
                        <span
                          className={cn(
                            "mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
                            slide.accent === "emerald"
                              ? "bg-emerald/20 text-emerald-light"
                              : "bg-ocean/20 text-ocean-light"
                          )}
                        >
                          {slide.id === "gym"
                            ? "Grace Bay Gym"
                            : slide.id === "retreats"
                              ? "Island Retreats"
                              : "Premium Shop"}
                        </span>
                        <h3 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                          {slide.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                          {slide.description}
                        </p>
                        <Link
                          href={slide.href}
                          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                        >
                          {slide.cta}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="featured-pagination mt-6 flex justify-center gap-2" />

            <button
              ref={prevRef}
              type="button"
              className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-white sm:flex lg:left-6"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-white sm:flex lg:right-6"
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
