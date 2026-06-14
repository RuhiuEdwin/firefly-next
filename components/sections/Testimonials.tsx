"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { TestimonialsContent, HeadlineWord } from "@/lib/types";

const GOLD = "#C9943A";

const DEFAULT_WORDS: HeadlineWord[] = [
  { text: "They " },
  { text: "tasted", italic: true },
  { text: " Our" },
  { text: "Passion", bold: true, italic: true, lineBreakBefore: true },
];

const COLOR_MAP: Record<string, string> = {
  amber: "#C5823E",
  gold: GOLD,
};

function Headline({ words }: { words: HeadlineWord[] }) {
  return (
    <h2
      className="text-[1.875rem] md:text-[2.125rem] lg:text-[2.375rem] leading-[1.1] tracking-tight text-white"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {words.map((w, i) => (
        <span key={i}>
          {w.lineBreakBefore && <br />}
          <span
            className={[
              w.bold ? "font-bold" : "font-light",
              w.italic ? "italic" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={w.color ? { color: COLOR_MAP[w.color] ?? w.color } : undefined}
          >
            {w.text}
          </span>
        </span>
      ))}
    </h2>
  );
}

function Arrow({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick: () => void;
}) {
  const isLeft = dir === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
      className="absolute top-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center
                 hover:opacity-80 active:scale-95 transition-all duration-200"
      style={{
        [isLeft ? "left" : "right"]: 0,
        transform: `translateY(-50%) ${isLeft ? "translateX(-50%)" : "translateX(50%)"}`,
        background: `linear-gradient(135deg, ${GOLD} 0%, #9A5E22 100%)`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
      }}
    >
      {isLeft ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M10 3L5 8L10 13"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M6 3L11 8L6 13"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export function Testimonials({ content }: { content: TestimonialsContent }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const { sectionLabel, headlineWords, items, beansImage, backgroundImage } = content;
  const words = headlineWords ?? DEFAULT_WORDS;
  const current = items[active];

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setFading(true);
      setTimerKey((k) => k + 1);
      setTimeout(() => {
        setActive((i) => (i + dir + items.length) % items.length);
        setFading(false);
      }, 280);
    },
    [items.length]
  );

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setFading(true);
      setTimerKey((k) => k + 1);
      setTimeout(() => {
        setActive(idx);
        setFading(false);
      }, 280);
    },
    [active]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((i) => (i + 1) % items.length);
        setFading(false);
      }, 280);
    }, 5000);
    return () => clearInterval(id);
  }, [timerKey, items.length]);

  return (
    <section
      className="relative"
    >
      {/* Background — topographic lines + wave cutouts at full fidelity */}
      {backgroundImage && (
        <div
          aria-hidden
          className="absolute inset-x-0 pointer-events-none"
          style={{ top: "-10%", bottom: "-42%", zIndex: 10 }}
        >
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt ?? ""}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      )}

      {/* Coffee beans — bleeds upward into the section above */}
      {beansImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 z-30"
          style={{
            transform: "translateY(-40%)",
            width: "clamp(260px, 32vw, 520px)",
          }}
        >
          <Image
            src={beansImage.src}
            alt=""
            width={beansImage.width ?? 720}
            height={beansImage.height ?? 620}
            className="w-full object-contain"
            priority
          />
        </div>
      )}

      {/* Content — constrained to 1200px, inside the wave-bordered dark region */}
      <div className="relative z-20 max-w-250 mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-6">
          {/* Right: card with arrows half-in, half-out on each edge */}
          <div className="flex-1  relative">
              {/* Left: label + heading */}
            <div className="md:absolute md:top-5 md:-left-40 lg:w-[38%] shrink-0 lg:pt-2">
              <p
                className="text-[0.625rem] font-semibold tracking-[0.22em] uppercase"
                style={{ color: GOLD }}
              >
                {sectionLabel}
              </p>
              <Headline words={words} />
            </div>
            <Arrow dir="left" onClick={() => navigate(-1)} />

            <div
              className="rounded-2xl px-12 py-5 lg:px-16 flex flex-col h-100 overflow-hidden"
              style={{
                background: "rgba(52, 30, 8, 0.52)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <div
                className={`flex-1 flex flex-col items-center justify-center gap-5 py-6 lg:py-6 transition-opacity duration-280 ease-in-out ${
                  fading ? "opacity-0" : "opacity-100"
                }`}
              >
                <p
                  className="text-center justify-start text-orange-400 text-3xl font-normal font-['DM_Serif_Text'] leading-8"
                >
                  {current.author}
                </p>

                <blockquote
                  className="w-4/5 text-center justify-start text-white/80 text-sm font-medium font-['DM_Sans'] leading-8"
                >
                  {current.quote}
                </blockquote>

                {current.date && (
                  <p
                    className=" text-right justify-start text-white/80 text-base font-medium font-['DM_Sans'] leading-8"
                  >
                    {current.date}
                  </p>
                )}
              </div>

              {/* Dots — outside fade so they stay visible during transitions */}
              <div className="flex justify-center gap-2.5 ">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="w-3 h-3 rounded-full transition-all duration-200"
                    style={{
                      background: i === active ? GOLD : "transparent",
                      border: `1.5px solid ${
                        i === active ? GOLD : "rgba(90, 64, 48, 0.7)"
                      }`,
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
