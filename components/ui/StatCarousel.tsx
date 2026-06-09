"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { HeroStat } from "@/lib/types";

interface StatCarouselProps {
  stats: HeroStat[];
}

export function StatCarousel({ stats }: StatCarouselProps) {
  const [active, setActive]   = useState(0);
  const [fading, setFading]   = useState(false);

  // Auto-advance every 4 s
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % stats.length);
        setFading(false);
      }, 350);
    }, 4000);
    return () => clearInterval(timer);
  }, [stats.length]);

  // Manual dot click: fade content, then swap
  const goTo = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 350);
  };

  const current = stats[active];

  // Shared class for elements that ease in/out — dots are NOT in this list
  const contentTransition = `transition-opacity duration-300 ease-in-out ${fading ? "opacity-0" : "opacity-100"}`;

  return (
    <div className="flex items-stretch gap-10">

      {/* ── Image — eases in/out ──────────────────────────────────────────── */}
      <div className={`relative aspect-square w-34 md:w-40 shrink-0 ${contentTransition}`}>
        <Image
          key={active}
          src={current.image.src}
          alt={current.image.alt}
          fill
          sizes="(max-width: 768px) 160px, 208px"
          className="rounded-[20px] object-cover shadow-[0px_0px_32px_16px_rgba(221,168,100,0.12)]"
        />
      </div>

      {/* ── Right column ──────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-5">

        {/* Details — eases in/out with the image */}
        <div
          className={`flex-1 w-28 md:w-34 h-20 md:h-28 rounded-[20px] bg-orange-400/10 flex flex-col justify-center px-5 py-4 ${contentTransition}`}
        >
          <p className="text-xs text-white tracking-wide mb-1">{current.label}</p>
          <p
            className="text-[1.875rem] md:text-[2rem] font-bold text-white leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {current.value}
          </p>
        </div>

        {/* ── Indicators — NO transition, just change active state instantly ── */}
        <div className="flex items-center gap-4">
          {stats.map((_, i) =>
            i === active ? (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="relative w-6 h-6 flex items-center justify-center shrink-0"
              >
                <span className="absolute inset-0 rounded-full border border-coffee-gold/50" />
                <span className="w-3 h-3 rounded-full bg-coffee-gold" />
              </button>
            ) : (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 shrink-0"
              />
            )
          )}
        </div>

      </div>
    </div>
  );
}
