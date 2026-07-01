"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MERCH_PRODUCTS, SITE_CONFIG } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function ShopMerch() {
  return (
    <section
      id="shop"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="shop-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Shop"
            title="Wrightfully Fit Merch"
            description="Whether you're looking for temporary gym passes, branded athletic apparel, or products for your furry friends — we've got just what you need."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {MERCH_PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-[24px] bg-soft-grey transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean/5">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={i === 0 ? "shop-heading" : undefined}
                    className="font-medium text-foreground"
                  >
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{product.price}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={SITE_CONFIG.shopUrl} size="lg">
              Visit the Shop
            </Button>
            <Link
              href={SITE_CONFIG.shopUrl}
              className="inline-flex items-center gap-1 text-sm font-semibold text-ocean transition-colors hover:text-ocean-light"
            >
              Shop all merch
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
