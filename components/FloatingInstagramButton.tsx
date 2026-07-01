"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingInstagramButton() {
  return (
    <motion.a
      href={SITE_CONFIG.instagram}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ocean to-emerald text-white shadow-lg shadow-ocean/30 transition-shadow hover:shadow-xl hover:shadow-ocean/40"
      aria-label="Follow Wrightfully Fit on Instagram"
    >
      <InstagramIcon size={24} />
    </motion.a>
  );
}
