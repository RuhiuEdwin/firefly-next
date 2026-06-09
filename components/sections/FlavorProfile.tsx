"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import type { FlavorProfileContent, FlavorNote, FlavorProfileStat, HeadlineWord } from "@/lib/types";

// ── Centered heading with mixed bold/italic spans ─────────────────────────────

function FlavorHeadline({ words }: { words: HeadlineWord[] }) {
  return (
    <h2
      className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-white"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className={[
            word.bold   ? "font-bold"  : "font-extralight",
            word.italic ? "italic"     : "",
          ].filter(Boolean).join(" ")}
        >
          {word.text}
        </span>
      ))}
    </h2>
  );
}

// ── Flavor bar — stacked: label above, bar below ──────────────────────────────

function FlavorBar({ note }: { note: FlavorNote }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[0.625rem] font-semibold tracking-[0.15em] text-white uppercase">
        {note.label}
      </span>
      <div className="h-0.75 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-coffee-gold rounded-full transition-all duration-700"
          style={{ width: `${note.percentage}%` }}
        />
      </div>
    </div>
  );
}

// ── Floating stat — all centered ──────────────────────────────────────────────

function FloatingStat({ stat }: { stat: FlavorProfileStat }) {
  const posClass: Record<FlavorProfileStat["position"], string> = {
    "top-right":    "absolute -top-2 -right-2 z-20",
    "mid-left":     "absolute left-0 top-1/3 -translate-y-1/2 z-20",
    "bottom-right": "absolute -bottom-0 right-4 z-20",
  };

  const inner = (
    <>
      <p className="text-xs text-white/55 text-center mb-1">{stat.label}</p>
      <p
        className="text-3xl font-bold text-white leading-none text-center"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {stat.value}
      </p>
    </>
  );

  if (stat.card) {
    return (
      <div className={`${posClass[stat.position]} bg-[#1a1008]/80 backdrop-blur-md rounded-2xl px-5 py-4 min-w-32.5`}>
        {inner}
      </div>
    );
  }

  return (
    <div className={posClass[stat.position]}>
      {inner}
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────

interface FlavorProfileProps {
  content: FlavorProfileContent;
}

export function FlavorProfile({ content }: FlavorProfileProps) {
  const { sectionLabel, headlineWords, products, ctas } = content;
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading]       = useState(false);
  const [timerKey, setTimerKey]   = useState(0);

  const navigate = useCallback((dir: 1 | -1) => {
    setFading(true);
    setTimerKey((k) => k + 1);
    setTimeout(() => {
      setActiveIdx((prev) => (prev + dir + products.length) % products.length);
      setFading(false);
    }, 250);
  }, [products.length]);

  // Auto-advance every 5s; resets when user manually navigates
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % products.length);
        setFading(false);
      }, 250);
    }, 5000);
    return () => clearInterval(timer);
  }, [timerKey, products.length]);

  const product = products[activeIdx];
  const contentCls = `transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`;

  return (
    <section id="flavor" className="bg-coffee-dark py-24">
      <Container>

        {/* Section label */}
        <p className="text-center text-[0.6875rem] font-semibold tracking-widest uppercase text-coffee-amber mb-4">
          {sectionLabel}
        </p>

        {/* Heading */}
        <FlavorHeadline words={headlineWords} />

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mt-16">

          {/* ── Left: product info + bars ── */}
          <div className={contentCls}>
            <p
              className="text-3xl font-bold text-coffee-amber mb-2 leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.number}
            </p>
            <p
              className="text-3xl md:text-4xl italic text-white leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.name}
            </p>
            <p className="text-base text-white leading-relaxed mb-3 max-w-md">
              {product.description}
            </p>
            <div className="h-px bg-coffee-amber/50 my-8 w-full" />
            <div className="space-y-7">
              {product.notes.map((note) => (
                <FlavorBar key={note.label} note={note} />
              ))}
            </div>
          </div>

          {/* ── Right: arrows + image with blob & stats + CTAs ── */}
          <div className="flex flex-col gap-6">

            {/* Arrows — above image, right-aligned */}
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => navigate(-1)}
                aria-label="Previous product"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-coffee-gold hover:text-coffee-gold transition-colors duration-200"
              >
                <ArrowLeftIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate(1)}
                aria-label="Next product"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-coffee-gold hover:text-coffee-gold transition-colors duration-200"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Image area — relative container for blob + stats */}
            <div className={`relative min-h-90 md:min-h-105 ${contentCls}`}>

              {/* Radial amber blob behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full bg-coffee-amber/25 blur-3xl" />
              </div>

              {/* Floating stats */}
              {product.stats.map((stat) => (
                <FloatingStat key={stat.label} stat={stat} />
              ))}

              {/* Image — smaller, centered in the right area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width ?? 560}
                  height={product.image.height ?? 560}
                  className="object-contain"
                  style={{ maxHeight: "340px", width: "auto" }}
                />
              </div>

            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-4 justify-end">
              {ctas.map((cta) => (
                <Button key={cta.label} {...cta} />
              ))}
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
