"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingInstagramButton() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <motion.a
        href={SITE_CONFIG.instagram}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ x: open ? 0 : "calc(100% - 44px)" }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="flex items-center gap-3 rounded-l-2xl bg-gradient-to-r from-ocean to-emerald py-3 pl-4 pr-5 text-white shadow-lg shadow-ocean/30"
        aria-label="Follow Wrightfully Fit on Instagram"
      >
        <InstagramIcon size={22} />
        <span className="whitespace-nowrap text-sm font-semibold tracking-wide">
          @wrightfullyfit
        </span>
      </motion.a>
    </motion.div>
  );
}
