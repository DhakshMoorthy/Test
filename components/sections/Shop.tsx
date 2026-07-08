"use client";

import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { PRODUCTS, SITE } from "@/lib/constants";

export default function Shop() {
  return (
    <section id="shop" className="section-light py-28 lg:py-40">
      <div className="container-xl">
        <TextReveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Shop
        </TextReveal>
        <TextReveal as="h2" className="text-display text-section uppercase">
          Premium Merch &amp; Essentials
        </TextReveal>
        <TextReveal as="p" className="mt-6 max-w-2xl text-lg text-grey-600" delay={0.1}>
          Branded athletic apparel, accessories, gym passes, and wellness products —
          whether you&apos;re local or visiting the island.
        </TextReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href={SITE.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover-lift overflow-hidden rounded-[20px] bg-grey-50"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-grey-600">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <MagneticButton href={SITE.shopUrl} variant="ghost">
            Visit Shop
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
