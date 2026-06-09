"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductCarouselContent, ShopProduct } from "@/lib/types";

// ── Chevron button ─────────────────────────────────────────────────────────────

function ArrowBtn({
  dir,
  onClick,
  disabled,
  amber = false,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  amber?: boolean;
}) {
  const isLeft = dir === "left";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous products" : "Next products"}
      className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
        disabled
          ? "opacity-25 cursor-default"
          : "cursor-pointer hover:scale-105 active:scale-95"
      } ${amber
          ? "bg-[#C5823E] text-white"
          : "border border-[#603809]/50 text-[#603809] hover:bg-[#603809]/8"
      }`}
    >
      {isLeft ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

// ── Product card ──────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: ShopProduct }) {
  const price = product.priceFrom.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
  });

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="snap-start shrink-0 w-[82vw] sm:w-72 rounded-3xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* ── Top: white section ── */}
      <div className="relative bg-white flex items-center justify-center min-h-56 sm:min-h-80 px-5 pt-12 pb-4 sm:pt-16 sm:pb-6">
        {/* Badge */}
        <div
          className="absolute top-5 left-0 px-4 py-1.5"
          style={{ background: "#1A0A00" }}
        >
          <p className="text-[0.6rem] font-semibold leading-tight text-white/90">
            Varietal: {product.varietal}
          </p>
          <p className="text-[0.6rem] font-semibold leading-tight text-white/90">
            SCA Score: {product.scaScore}
          </p>
        </div>

        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width ?? 340}
          height={product.image.height ?? 400}
          className="object-contain w-full max-h-40 sm:max-h-64 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* ── Bottom: product info ── */}
      <div
        className="flex flex-col px-5 pt-4 pb-5 gap-1 flex-1"
        style={{ background: "#2C1800" }}
      >
        <h3
          className="text-base font-bold text-white leading-snug mb-0.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {product.name}
        </h3>
        <p className="text-xs text-white/60 leading-snug">Process: {product.process}</p>
        <p className="text-xs text-white/60 leading-snug">{product.flavorNotes}</p>
        <p className="text-xs text-white/60 leading-snug">{product.weight}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span
            className="text-xs font-bold px-3 py-1 rounded-sm"
            style={{ background: "#C5823E", color: "#fff" }}
          >
            From
          </span>
          <span className="text-sm font-bold text-white">
            {product.currency} {price}
          </span>
        </div>

        {/* View Product */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 text-sm text-white/50 group-hover:text-white transition-colors duration-200">
          <span>View Product</span>
          <span className="text-base leading-none group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </Link>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function ProductCarousel({ content }: { content: ProductCarouselContent }) {
  const { heading, products } = content;
  const mobileRef  = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [timerKey, setTimerKey] = useState(0);

  // Return whichever track is currently visible in the DOM
  const activeTrack = useCallback((): HTMLDivElement | null => {
    const m = mobileRef.current;
    if (m && m.offsetParent !== null) return m;
    return desktopRef.current;
  }, []);

  const updateButtons = useCallback(() => {
    const el = activeTrack();
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, [activeTrack]);

  useEffect(() => {
    const id = requestAnimationFrame(updateButtons);
    window.addEventListener("resize", updateButtons);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  // Auto-advance every 4 s; loops back to start when at end
  useEffect(() => {
    const timer = setInterval(() => {
      const el = activeTrack();
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const firstCard = el.firstElementChild as HTMLElement | null;
        const step = (firstCard?.offsetWidth ?? 288) + 24;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [timerKey, activeTrack]);

  const scroll = (dir: 1 | -1) => {
    const el = activeTrack();
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = (firstCard?.offsetWidth ?? 288) + 24;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    setTimerKey(k => k + 1);
  };

  return (
    <section className="bg-white py-16 md:py-28">
      {/* Heading */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16 mb-10 md:mb-14">
        <h2
          className="text-center text-5xl md:text-6xl lg:text-[4.5rem] leading-none tracking-tight"
          style={{ fontFamily: "var(--font-logo)", color: "#603809" }}
        >
          {heading}
        </h2>
      </div>

      {/* ── Mobile: full-bleed snap track + arrows row below ── */}
      <div className="md:hidden">
        <div
          ref={mobileRef}
          onScroll={updateButtons}
          className="flex gap-4 overflow-x-scroll snap-x snap-mandatory px-6 [&::-webkit-scrollbar]:hidden pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Trailing spacer so last card doesn't hug the edge */}
          <div className="shrink-0 w-4" aria-hidden />
        </div>

        {/* Arrow row — centered below track */}
        <div className="flex items-center justify-center gap-4 mt-6 px-6">
          <ArrowBtn dir="left"  onClick={() => scroll(-1)} disabled={!canPrev} amber />
          <ArrowBtn dir="right" onClick={() => scroll(1)}  disabled={!canNext} amber />
        </div>
      </div>

      {/* ── Desktop: inline arrow layout ── */}
      <div className="hidden md:block mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center gap-4">
          <ArrowBtn dir="left"  onClick={() => scroll(-1)} disabled={!canPrev} />

          <div
            ref={desktopRef}
            onScroll={updateButtons}
            className="flex gap-6 overflow-x-scroll flex-1 min-w-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <ArrowBtn dir="right" onClick={() => scroll(1)}  disabled={!canNext} />
        </div>
      </div>
    </section>
  );
}
