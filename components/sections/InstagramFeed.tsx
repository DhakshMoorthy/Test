"use client";

import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";
import { INSTAGRAM, SITE } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function InstagramFeed() {
  return (
    <section className="section-grey py-28 lg:py-40">
      <div className="container-xl mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Social
          </TextReveal>
          <TextReveal as="h2" className="text-display text-section uppercase">
            @wrightfullyfit
          </TextReveal>
        </div>
        <Link
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider link-underline"
        >
          <FaInstagram size={18} />
          Follow on Instagram
        </Link>
      </div>

      <div className="container-xl columns-2 gap-4 md:columns-3">
        {INSTAGRAM.map((post, i) => (
          <Link
            key={post.src}
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mb-4 block overflow-hidden rounded-[20px] break-inside-avoid"
            style={{ aspectRatio: i % 2 === 0 ? "1" : "4/5" }}
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
              <FaInstagram className="scale-0 text-white transition-transform group-hover:scale-100" size={28} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
