"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-2 sm:px-4"
      >
        <div className="glass-nav pointer-events-auto mt-3 flex h-16 w-[calc(100%-16px)] min-w-0 items-center gap-2 rounded-[24px] px-4 sm:mt-4 sm:h-20 sm:w-[calc(100%-32px)] sm:gap-4 sm:px-6 lg:mt-5 lg:max-w-[2000px] lg:gap-7 lg:rounded-[28px] lg:px-9">
          <a href="#" className="flex min-w-0 shrink items-center gap-2 no-underline sm:gap-3 lg:gap-4">
            <Image
              src="/assets/kannanware/kw-logo.png"
              alt="Kannanware"
              width={180}
              height={38}
              priority
              className="h-7 w-auto sm:h-8 lg:h-[38px]"
            />
            <div className="hidden h-[35px] min-w-0 items-center gap-2 rounded-full border border-[#695010] bg-[#111111] px-3 sm:inline-flex lg:px-4">
              <Image
                src="/assets/kannanware/stag-badge.png"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] shrink-0"
              />
              <span className="whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.04em] text-[#f0b21d]">
                AI FIRST
              </span>
              <span className="h-4 w-px shrink-0 bg-[#6c5821]" aria-hidden />
              <span className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[0.04em] text-white">
                SAP
              </span>
            </div>
          </a>

          <div className="hidden min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden lg:flex">
            <ul className="flex max-w-full list-none items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex h-[35px] shrink-0 items-center gap-1.5 rounded-full px-3 py-0 text-[16px] font-medium tracking-[-0.01em] text-white transition-all duration-200 hover:bg-white/[0.03] xl:px-4 xl:text-[18px]"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-[#E8A000]" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#finale"
            className="ml-auto hidden shrink-0 rounded-full bg-[#faab18] px-5 py-2.5 text-sm font-semibold text-[#090909] transition-all hover:bg-[#fbbf24] sm:inline-flex"
          >
            Book a Demo
          </a>

          <button
            type="button"
            className="ml-auto rounded-full p-2 text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
            className="glass-nav fixed top-24 left-4 right-4 z-50 rounded-2xl p-4 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-[16px] font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <ChevronDown className="h-4 w-4 text-[#E8A000]" />
              </a>
            ))}
            <a
              href="#finale"
              className="mt-3 block rounded-full bg-[#faab18] py-3 text-center text-sm font-semibold text-[#090909]"
              onClick={() => setMenuOpen(false)}
            >
              Book a Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
