"use client";

import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";
import { BLOG_POSTS } from "@/lib/constants";
import { HiArrowRight } from "react-icons/hi";

export default function Blog() {
  return (
    <section id="blog" className="section-light py-28 lg:py-40">
      <div className="container-xl">
        <TextReveal
          as="p"
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark"
        >
          Insights &amp; Wellness
        </TextReveal>
        <TextReveal as="h2" className="text-display text-section max-w-3xl uppercase">
          From the Wrightfully Blog
        </TextReveal>
        <TextReveal as="p" className="mt-6 max-w-2xl text-lg text-grey-600" delay={0.1}>
          Training tips, retreat highlights, and island wellness wisdom from our
          coaches in Grace Bay.
        </TextReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group hover-lift flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <time className="text-xs font-semibold uppercase tracking-[0.2em] text-grey-400">
                  {post.date}
                </time>
                <h3 className="text-display mt-3 text-2xl uppercase leading-tight text-black">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-grey-600">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-gold-dark"
                >
                  Read More
                  <HiArrowRight className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
