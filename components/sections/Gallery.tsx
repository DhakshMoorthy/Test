"use client";

import { useState } from "react";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import { GALLERY } from "@/lib/constants";
import { HiX } from "react-icons/hi";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="section-light py-28 lg:py-40">
      <div className="container-xl mb-16">
        <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Performance Gallery
        </TextReveal>
        <TextReveal as="h2" className="text-display text-section uppercase">
          Train. Transform. Inspire.
        </TextReveal>
      </div>

      <div className="container-xl columns-1 gap-4 sm:columns-2 lg:columns-3">
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightbox(img.src)}
            className="group mb-4 block w-full overflow-hidden rounded-[20px] break-inside-avoid"
            style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
          >
            <div className="relative h-full w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <HiX size={32} />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={lightbox}
              alt="Gallery"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
