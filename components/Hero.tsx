"use client";

import dynamic from "next/dynamic";
import HeroSkeleton from "@/components/ui/HeroSkeleton";

const HeroSlider = dynamic(() => import("@/components/HeroSlider"), {
  ssr: false,
  loading: () => <HeroSkeleton />,
});

export default function Hero() {
  return <HeroSlider />;
}
