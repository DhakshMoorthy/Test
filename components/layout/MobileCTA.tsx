"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-grey-200 bg-white/95 p-4 backdrop-blur-xl lg:hidden">
      <Link
        href="#contact"
        className="flex w-full items-center justify-center rounded-full bg-gold py-4 text-sm font-bold uppercase tracking-[0.15em] text-black"
      >
        Book Consultation
      </Link>
    </div>
  );
}
