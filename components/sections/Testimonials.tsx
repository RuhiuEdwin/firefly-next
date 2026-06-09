"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { TestimonialsContent, HeadlineWord } from "@/lib/types";

// ── Mixed-weight heading ───────────────────────────────────────────────────
const DEFAULT_WORDS: HeadlineWord[] = [
  { text: "They " },
  { text: "tasted", italic: true },
  { text: " Our" },
  { text: "Passion", bold: true, italic: true, lineBreakBefore: true },
];

function Headline({ words }: { words: HeadlineWord[] }) {
  return (
    <h2
      className="text-[2.625rem] md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-white"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {words.map((w, i) => (
        <span key={i}>
          {w.lineBreakBefore && <br />}
          <span
            className={[
              w.bold   ? "font-bold"  : "font-light",
              w.italic ? "italic"     : "",
            ].filter(Boolean).join(" ")}
          >
            {w.text}
          </span>
        </span>
      ))}
    </h2>
  );
}

// ── Arrow — absolutely positioned, half-in half-out of card edge ──────────
function Arrow({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  const isLeft = dir === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
      className="absolute top-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 active:scale-95 transition-opacity duration-200"
      style={{
        [isLeft ? "left" : "right"]: 0,
        // translateY(-50%) centres vertically; translateX(±50%) places it half-in, half-out
        transform: `translateY(-50%) ${isLeft ? "translateX(-50%)" : "translateX(50%)"}`,
        background: "linear-gradient(140deg, #C5823F 0%, #9A5E22 100%)",
      }}
    >
      {isLeft ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M11 4L6 9L11 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M7 4L12 9L7 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

// ── Section ────────────────────────────────────────────────────────────────
export function Testimonials({ content }: { content: TestimonialsContent }) {
  const [active,   setActive]   = useState(0);
  const [fading,   setFading]   = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const { sectionLabel, headlineWords, items, beansImage, backgroundImage } = content;
  const words   = headlineWords ?? DEFAULT_WORDS;
  const current = items[active];

  // Fade out → swap → fade in
  const navigate = useCallback((dir: 1 | -1) => {
    setFading(true);
    setTimerKey(k => k + 1);
    setTimeout(() => {
      setActive(i => (i + dir + items.length) % items.length);
      setFading(false);
    }, 300);
  }, [items.length]);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimerKey(k => k + 1);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  }, []);

  // Auto-advance every 5 s; resets when user navigates
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive(i => (i + 1) % items.length);
        setFading(false);
      }, 300);
    }, 5000);
    return () => clearInterval(id);
  }, [timerKey, items.length]);

  const fadeCls = `transition-opacity duration-300 ease-in-out ${fading ? "opacity-0" : "opacity-100"}`;

  return (
    // No background colour — image is the only bg. No overflow-hidden so beans + arrows can bleed.
    <section className="relative py-20 md:py-28 -mt-10 -mb-10">
      {/* Background image — full opacity, no overlay */}
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt ?? ""}
          fill
          sizes="100vw"
          className="object-fit"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Beans sack — top-right, z:30 so it appears above the card (z:10) */}
      {beansImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 w-72 md:w-[28%] lg:w-[30%]"
          style={{ transform: "translateY(-40%)", zIndex: 30 }}
        >
          <Image
            src={beansImage.src}
            alt=""
            width={beansImage.width ?? 620}
            height={beansImage.height ?? 520}
            className="w-full object-contain"
          />
        </div>
      )}

      {/* Content — sits above bg (z:20); heading above card (z:2 > z:1 within this context) */}
      <div className="relative z-20 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-8">

          {/* ── Left: label + heading (z:2, above the card at z:1) ── */}
          <div className="lg:w-[32%] shrink-0 lg:pt-2" style={{ position: "relative", zIndex: 2 }}>
            <span className="block mb-5 text-[0.65rem] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "#C5823E" }}>
              {sectionLabel}
            </span>
            <Headline words={words} />
          </div>

          {/* ── Right: card (4/5 width) with arrows half-in, half-out ── */}
          <div className="flex-1 relative" style={{ zIndex: 1 }}>
            <Arrow dir="left" onClick={() => navigate(-1)} />

            <div
              className="rounded-2xl px-8 py-10 lg:px-14 lg:py-14 flex flex-col items-center gap-6"
              style={{ background: "rgba(38, 21, 7, 0.90)" }}
            >
              {/* Fading content wrapper */}
              <div className={`flex flex-col items-center gap-6 w-full ${fadeCls}`}>
                {/* Author */}
                <p
                  className="text-xl italic leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "#C5823E" }}
                >
                  {current.author}
                </p>

                {/* Quote */}
                <blockquote className="text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {current.quote}
                </blockquote>

                {/* Date */}
                {current.date && (
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {current.date}
                  </p>
                )}
              </div>

              {/* Dots — outside fade wrapper so they always stay visible */}
              <div className="flex gap-2.5">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="w-3.5 h-3.5 rounded-full transition-all duration-200"
                    style={{
                      background: i === active ? "#C5823F" : "transparent",
                      border: `1.5px solid ${i === active ? "#C5823F" : "#5a4030"}`,
                    }}
                  />
                ))}
              </div>
            </div>

            <Arrow dir="right" onClick={() => navigate(1)} />
          </div>

        </div>
      </div>
    </section>
  );
}
