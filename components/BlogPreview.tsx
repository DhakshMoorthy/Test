"use client";

import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="bg-soft-grey py-20 lg:py-28"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Journal"
            title="Latest Blog Posts"
            description="Insights on fitness, wellness, nutrition, and island living from the Wrightfully Fit team."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean/5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ocean backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3
                    id={i === 0 ? "blog-heading" : undefined}
                    className="mt-3 font-display text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-ocean"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ocean">
                    Read More
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
