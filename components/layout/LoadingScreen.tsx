"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto" }}
    >
      <Image
        src={SITE.logo}
        alt={SITE.name}
        width={80}
        height={80}
        className="h-16 w-auto animate-pulse"
      />
    </div>
  );
}
