"use client";

import { useState } from "react";
import TextReveal from "@/components/ui/TextReveal";
import { FAQ as FAQ_DATA } from "@/lib/constants";
import { HiPlus, HiMinus } from "react-icons/hi";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-light py-28 lg:py-40">
      <div className="container-xl max-w-4xl">
        <TextReveal as="p" className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gold-dark">
          FAQ
        </TextReveal>
        <TextReveal as="h2" className="text-display text-section text-center uppercase">
          Questions Answered
        </TextReveal>

        <div className="mt-16 space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div
              key={item.q}
              className="glass-light overflow-hidden rounded-[20px]"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="text-lg font-semibold">{item.q}</span>
                {open === i ? (
                  <HiMinus className="shrink-0 text-gold-dark" size={20} />
                ) : (
                  <HiPlus className="shrink-0 text-grey-400" size={20} />
                )}
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-base text-grey-600">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
