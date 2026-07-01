"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingInstagramButton() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.a
        href={SITE_CONFIG.instagram}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ x: open ? 0 : "calc(100% - 46px)" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onClick={() => setOpen((v) => !v)}
        className="instagram-tab flex items-center gap-3 rounded-l-2xl py-3.5 pl-4 pr-5 text-white shadow-xl shadow-purple-500/25"
        aria-label="Follow Wrightfully Fit on Instagram"
        aria-expanded={open}
      >
        <InstagramIcon size={22} />
        <span className="whitespace-nowrap text-sm font-semibold tracking-wide">
          @wrightfullyfit
        </span>
      </motion.a>
    </div>
  );
}
