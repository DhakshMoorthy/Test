"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO_SLIDES, HERO_STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

function SlideContent({
  slide,
  isActive,
}: {
  slide: (typeof HERO_SLIDES)[number];
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 max-w-lg"
      aria-hidden={!isActive}
    >
      <Image
        src="/assets/logo.png"
        alt="Wrightfully Fit"
        width={88}
        height={88}
        className="mb-8 h-16 w-16 object-contain sm:h-20 sm:w-20"
      />

      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold sm:text-sm">
        {slide.eyebrow}
      </p>

      <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {slide.title}
      </h2>

      <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
        {slide.description}
      </p>

      <Link
        href={slide.href}
        tabIndex={isActive ? 0 : -1}
        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25"
      >
        {slide.cta}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero"
      aria-roledescription="carousel"
    >
      <div
        ref={paginationRef}
        className="hero-pagination absolute bottom-28 right-6 z-20 flex gap-2 sm:bottom-32 sm:right-10 lg:bottom-36"
        role="tablist"
        aria-label="Hero slides"
      />

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: paginationRef.current }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.pagination &&
            typeof swiper.params.pagination !== "boolean"
          ) {
            swiper.params.pagination.el = paginationRef.current;
          }
        }}
        loop
        onSlideChange={(swiper: SwiperType) =>
          setActiveIndex(swiper.realIndex)
        }
        className="hero-swiper h-screen w-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />

              <div className="hero-panel absolute inset-y-0 left-0 z-10 flex w-full flex-col justify-center px-6 pt-28 pb-44 sm:w-[58%] sm:px-10 sm:pb-36 lg:w-[52%] lg:px-16 lg:pb-32">
                <div className="hero-topo absolute inset-0" aria-hidden="true" />
                <SlideContent
                  slide={slide}
                  isActive={activeIndex === index}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto w-full max-w-7xl px-6 pb-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-4 rounded-[24px] bg-white/10 p-5 backdrop-blur-xl sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/20 lg:p-7"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex flex-col items-center px-3 text-center sm:px-4"
            >
              <p className="font-display text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                {stat.value.match(/^\d+$/) ? (
                  <AnimatedCounter
                    value={parseInt(stat.value)}
                    suffix={stat.suffix}
                  />
                ) : (
                  <>
                    {stat.value}
                    <span className="text-base lg:text-lg">{stat.suffix}</span>
                  </>
                )}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/65 sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a
        href="#why"
        className="absolute bottom-[9.5rem] left-1/2 z-20 -translate-x-1/2 text-white/50 transition-colors hover:text-white sm:bottom-40"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}
