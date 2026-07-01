"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
          alt="Luxury fitness lifestyle in Turks and Caicos"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-48 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-light">
            Turks &amp; Caicos
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Fitness Beyond
            <br />
            the Gym.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Personal training, luxury wellness retreats, and premium wellness
            products in Turks &amp; Caicos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" size="lg">
              Book a Session
            </Button>
            <Button href="#retreats" variant="outline" size="lg">
              Explore Retreats
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4 rounded-[24px] bg-white/10 p-6 backdrop-blur-xl sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/20 lg:p-8"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex flex-col items-center px-4 text-center"
            >
              <p className="font-display text-2xl font-medium text-white sm:text-3xl">
                {stat.value.match(/^\d+$/) ? (
                  <AnimatedCounter
                    value={parseInt(stat.value)}
                    suffix={stat.suffix}
                  />
                ) : (
                  <>
                    {stat.value}
                    <span className="text-lg">{stat.suffix}</span>
                  </>
                )}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#featured"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Scroll to featured section"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
