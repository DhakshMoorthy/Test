"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 shadow-sm shadow-black/5 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/40 to-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8 lg:py-5"
          aria-label="Main navigation"
        >
          <Link href="#home" className="relative flex shrink-0 items-center">
            <Image
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              width={140}
              height={56}
              className={cn(
                "h-9 w-auto object-contain transition-all duration-300 sm:h-11",
                !scrolled && "drop-shadow-lg"
              )}
              priority
            />
          </Link>

          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ocean after:transition-all hover:after:w-full",
                    scrolled
                      ? "text-foreground/75 hover:text-ocean"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href="#contact"
              size="sm"
              variant={scrolled ? "primary" : "outline"}
              className={scrolled ? "" : "border-white/50 text-white"}
            >
              Book Now
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "rounded-full p-2.5 transition-colors lg:hidden",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="flex h-full flex-col items-center justify-center gap-7 px-6"
              aria-label="Mobile navigation"
            >
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                width={100}
                height={40}
                className="mb-4 h-12 w-auto"
              />
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-2xl text-foreground transition-colors hover:text-ocean"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="#contact" onClick={() => setMobileOpen(false)}>
                Book Now
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
