"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SITE } from "@/lib/constants";

export default function InstagramTab() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.a
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ x: open ? 0 : "calc(100% - 48px)" }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
        onClick={() => setOpen((v) => !v)}
        className="instagram-gradient flex items-center gap-3 rounded-l-2xl py-4 pl-4 pr-5 text-white shadow-xl"
        aria-label="Follow on Instagram"
      >
        <FaInstagram size={22} />
        <span className="whitespace-nowrap text-sm font-semibold">
          @wrightfullyfit
        </span>
      </motion.a>
    </div>
  );
}
