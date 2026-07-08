"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PILLARS } from "@/lib/constants";
import { HiArrowRight } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

export default function PillarsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const panels = gsap.utils.toArray<HTMLElement>(".pillar-panel");
    const totalScroll = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(panels, {
      x: () => -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${totalScroll}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="pillars" ref={containerRef} className="relative bg-black">
      <div className="absolute left-6 top-8 z-20 hidden lg:block">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Scroll to explore
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex h-screen w-max"
        aria-label="Brand pillars"
      >
        {PILLARS.map((pillar, i) => (
          <article
            key={pillar.id}
            className="pillar-panel relative flex h-screen w-screen shrink-0 items-end overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                quality={95}
                className="object-cover ken-burns"
                sizes="100vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>

            <div className="relative z-10 w-full p-8 pb-20 sm:p-12 lg:p-16 lg:pb-24">
              <div className="container-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                  {pillar.label}
                </p>
                <h2 className="text-display text-section whitespace-pre-line uppercase text-white">
                  {pillar.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg text-white/70">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-gold transition-colors hover:text-white"
                >
                  {pillar.cta}
                  <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 text-right lg:block">
              <span className="text-display text-8xl text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
