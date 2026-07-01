"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-ocean to-ocean-light px-8 py-16 text-center sm:px-16 lg:py-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2
                id="newsletter-heading"
                className="font-display text-3xl font-medium text-white sm:text-4xl"
              >
                Stay in the Loop
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                Get exclusive retreat announcements, training tips, and special
                offers delivered to your inbox.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex items-center justify-center gap-2 text-white"
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">
                    Thank you for subscribing!
                  </span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border-0 bg-white/15 px-6 py-4 text-white placeholder:text-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 sm:rounded-r-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ocean transition-all hover:bg-white/90 sm:rounded-l-none"
                  >
                    Subscribe
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
