"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { HERO_SLIDES, SITE } from "@/lib/constants";
import { HiArrowRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

export default function SplitHero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modules, setModules] = useState<{
    Autoplay: typeof import("swiper/modules").Autoplay;
    EffectFade: typeof import("swiper/modules").EffectFade;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    import("swiper/modules").then((mod) => {
      setModules({
        Autoplay: mod.Autoplay,
        EffectFade: mod.EffectFade,
      });
    });
  }, []);

  const slide = HERO_SLIDES[activeIndex];

  if (!mounted || !modules) {
    return (
      <section
        id="home"
        className="relative flex h-screen min-h-[640px] items-center justify-center bg-black"
        aria-label="Loading hero"
      >
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </section>
    );
  }

  const { Autoplay, EffectFade } = modules;

  return (
    <section id="home" className="relative h-screen min-h-[640px] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
        aria-label="Wrightfully Fit hero"
      >
        {HERO_SLIDES.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-y-0 right-0 w-full lg:w-[62%]"
                style={{
                  clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={i === 0}
                  quality={90}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 62vw"
                />
                <div className="absolute inset-0 bg-black/20 lg:bg-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent lg:from-black/45 lg:via-transparent" />
              </div>

              <div
                className="pointer-events-none absolute z-20 hidden h-[130%] w-[3px] bg-gold shadow-[0_0_20px_rgba(245,197,24,0.6)] lg:block"
                style={{
                  left: "38%",
                  top: "-15%",
                  transform: "rotate(7deg)",
                  transformOrigin: "top center",
                }}
                aria-hidden
              />

              <div className="hero-topo relative z-10 flex h-full w-full flex-col lg:w-[48%]">
                <div className="absolute inset-0 bg-black/90 lg:bg-black/95" />

                <Link
                  href="#home"
                  className="relative z-10 px-6 pt-24 sm:px-10 sm:pt-28 lg:px-14 lg:pt-10"
                >
                  <Image
                    src={SITE.logo}
                    alt={SITE.name}
                    width={120}
                    height={48}
                    className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
                    priority
                  />
                </Link>

                <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-28 sm:px-10 lg:px-14 lg:pb-16">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm">
                        {slide.label}
                      </p>
                      <h1 className="text-display mt-4 max-w-lg text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
                        {slide.title}
                      </h1>
                      <div className="mt-5 h-px w-16 bg-gold" />
                      <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                        {slide.description}
                      </p>
                      <Link
                        href={slide.href}
                        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-black transition-all hover:bg-white hover:shadow-[0_8px_32px_rgba(245,197,24,0.35)]"
                      >
                        {slide.cta}
                        <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-2.5 sm:bottom-10 sm:right-12">
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to slide ${i + 1}: ${item.label}`}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-gold"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => swiperRef.current?.slideToLoop(i)}
          />
        ))}
      </div>
    </section>
  );
}
