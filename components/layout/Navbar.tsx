"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`glass-nav pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 sm:gap-2 sm:px-3 ${
            scrolled ? "shadow-[0_12px_48px_rgba(15,23,42,0.12)]" : ""
          }`}
        >
          <a href="#" className="flex shrink-0 items-center px-2 sm:px-3">
            <Image
              src="/logo.svg"
              alt="Kannanware"
              width={130}
              height={30}
              priority
              className="h-7 w-auto"
            />
          </a>

          <div className="hidden items-center lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 hover:bg-accent-pale hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <MagneticButton
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() =>
              document
                .getElementById("finale")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Demo
          </MagneticButton>

          <button
            className="text-foreground rounded-full p-2 transition-colors hover:bg-surface lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 8h16M4 16h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-nav fixed top-20 left-4 right-4 z-50 rounded-2xl p-4 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent-pale hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <MagneticButton size="sm" className="mt-3 w-full">
              Book a Demo
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
