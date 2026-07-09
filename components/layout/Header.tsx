"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { SITE, NAV } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 py-4 shadow-sm backdrop-blur-xl"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-xl flex items-center justify-between">
          <Link
            href="#home"
            className={cn(
              "relative z-10 shrink-0 transition-opacity duration-300",
              scrolled ? "opacity-100" : "pointer-events-none opacity-0 lg:opacity-0"
            )}
          >
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={140}
              height={56}
              className="h-10 w-auto object-contain sm:h-12"
              priority
            />
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-10 lg:flex",
              !scrolled && "ml-auto"
            )}
            aria-label="Main"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline text-sm font-medium uppercase tracking-[0.12em] transition-colors",
                  scrolled
                    ? "text-black/70 hover:text-black"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              href="#contact"
              variant={scrolled ? "ghost" : "outline"}
              className={scrolled ? "!border-black" : ""}
            >
              Book Consultation
            </MagneticButton>
          </div>

          <button
            type="button"
            className={cn(
              "rounded-full p-2 lg:hidden",
              scrolled ? "text-black" : "text-white"
            )}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black lg:hidden">
          <nav className="flex flex-col items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-display text-4xl uppercase tracking-wide text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
