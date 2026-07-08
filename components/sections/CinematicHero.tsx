"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import { HiArrowDown } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );

      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          scale: 1.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-screen min-h-[700px] items-end overflow-hidden bg-black"
    >
      <div ref={mediaRef} className="absolute inset-0 origin-center">
        <Image
          src="/assets/hero/trainer.jpg"
          alt="Intense training at Wrightfully Fit"
          fill
          priority
          quality={95}
          className="object-cover ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div
        ref={contentRef}
        className="container-xl relative z-10 pb-28 pt-32 lg:pb-36"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
          Turks &amp; Caicos
        </p>
        <h1 className="text-display text-hero max-w-5xl uppercase text-white">
          Fitness Beyond
          <br />
          The Gym.
        </h1>
        <p className="text-sub mt-6 max-w-2xl text-white/75">
          Personal training, luxury wellness retreats, and premium wellness
          products — engineered for those who refuse to settle.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href="#contact" variant="primary">
            Book Consultation
          </MagneticButton>
          <MagneticButton href="#pillars" variant="outline">
            Explore
          </MagneticButton>
        </div>
      </div>

      <a
        href="#pillars"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-gold"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <HiArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
