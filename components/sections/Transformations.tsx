"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import { TRANSFORMATIONS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Transformations() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

  const scrollWidth = track.scrollWidth - track.clientWidth;
    if (scrollWidth <= 0) return;

    gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: track,
        start: "top 80%",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: false,
      },
    });
  }, []);

  return (
    <section className="section-grey overflow-hidden py-28 lg:py-40">
      <div className="container-xl mb-16">
        <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Transformations
        </TextReveal>
        <TextReveal as="h2" className="text-display text-section uppercase">
          Real Results. Real People.
        </TextReveal>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 px-6 lg:gap-8 lg:px-[max(1.5rem,calc((100vw-1400px)/2+2.5rem))]"
      >
        {TRANSFORMATIONS.map((item) => (
          <article
            key={item.name}
            className="hover-lift w-[85vw] shrink-0 overflow-hidden rounded-[20px] bg-white sm:w-[420px]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
            <div className="p-8">
              <div className="mb-4 flex gap-4 text-xs uppercase tracking-wider">
                <span className="text-grey-400 line-through">{item.before}</span>
                <span className="text-gold-dark">→</span>
                <span className="font-semibold text-black">{item.after}</span>
              </div>
              <p className="text-sm font-semibold text-gold-dark">{item.result}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.name}</h3>
              <blockquote className="mt-4 text-base text-grey-600">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex aspect-video items-center justify-center rounded-[20px] bg-grey-100 text-sm text-grey-400">
                Video testimonial
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
