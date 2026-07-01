"use client";

import Image from "next/image";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { INSTAGRAM_POSTS, SITE_CONFIG } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InstagramFeed() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Follow Along"
            title="Life at Wrightfully Fit"
            description="Daily inspiration from our gym, retreats, and island adventures. Join our community on Instagram."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {INSTAGRAM_POSTS.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.05}>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-[24px]"
                aria-label={post.alt}
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ocean/0 transition-all duration-300 group-hover:bg-ocean/40">
                  <InstagramIcon
                    className="scale-0 text-white transition-transform duration-300 group-hover:scale-100"
                    size={32}
                  />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-heading"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-ocean-light"
            >
              <InstagramIcon size={18} />
              @wrightfullyfit
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
