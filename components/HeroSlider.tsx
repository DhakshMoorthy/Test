"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectFade,
  Navigation,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES, HERO_STATS, SITE_CONFIG } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HeroSkeleton from "@/components/ui/HeroSkeleton";

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const slide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <HeroSkeleton />;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero"
      aria-roledescription="carousel"
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
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
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        onSlideChange={(swiper: SwiperType) =>
          setActiveIndex(swiper.realIndex)
        }
        className="hero-swiper h-screen w-full"
      >
        {HERO_SLIDES.map((s, index) => (
          <SwiperSlide key={s.id}>
            <div className="relative h-full w-full">
              <Image
                src={s.image}
                alt={s.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30 sm:bg-black/10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center px-6 pt-24 pb-48 sm:px-12 sm:pb-40 sm:pt-28 lg:px-20 lg:pb-36">
        <div className="hero-panel pointer-events-auto relative flex w-full max-w-2xl flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="hero-topo absolute inset-0" aria-hidden="true" />

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                width={96}
                height={96}
                className="mb-6 h-14 w-14 object-contain sm:mb-8 sm:h-[72px] sm:w-[72px]"
              />

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-gold sm:text-xs">
                {slide.eyebrow}
              </p>

              <h1 className="font-display text-[2rem] font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base">
                {slide.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                <Link
                  href={slide.ctaHref}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 sm:text-sm"
                >
                  {slide.cta}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                {slide.ctaSecondary && slide.ctaSecondaryHref && (
                  <Link
                    href={slide.ctaSecondaryHref}
                    className="inline-flex items-center rounded-full border-2 border-white/35 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/10 sm:text-sm"
                  >
                    {slide.ctaSecondary}
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute bottom-40 right-6 hidden text-right sm:block lg:right-12">
          <p className="font-display text-5xl font-light text-white/25">
            {String(activeIndex + 1).padStart(2, "0")}
          </p>
          <p className="text-xs uppercase tracking-widest text-white/35">
            / {String(HERO_SLIDES.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <button
        ref={prevRef}
        type="button"
        className="hero-nav-btn absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 sm:flex lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        ref={nextRef}
        type="button"
        className="hero-nav-btn absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 sm:flex lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto w-full max-w-7xl px-4 pb-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card grid grid-cols-2 gap-3 rounded-[24px] border-white/20 bg-white/10 p-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/15 sm:p-6"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-2 text-center sm:px-4"
            >
              <p className="font-display text-lg font-medium text-white sm:text-2xl">
                {/^\d+$/.test(stat.value) ? (
                  <AnimatedCounter
                    value={parseInt(stat.value)}
                    suffix={stat.suffix}
                  />
                ) : (
                  <>
                    {stat.value}
                    <span className="text-sm">{stat.suffix}</span>
                  </>
                )}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#why"
        className="absolute bottom-[10rem] left-1/2 z-20 -translate-x-1/2 text-white/40 hover:text-white sm:bottom-44"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
