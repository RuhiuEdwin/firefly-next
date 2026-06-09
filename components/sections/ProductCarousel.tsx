"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductCarouselContent, ShopProduct } from "@/lib/types";

// ── Arrow button ──────────────────────────────────────────────────────────────

function ArrowBtn({
  dir,
  onClick,
  disabled,
  amber = false,
  className = "",
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  amber?: boolean;
  className?: string;
}) {
  const isLeft = dir === "left";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous products" : "Next products"}
      className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
        disabled ? "opacity-25 cursor-default" : "cursor-pointer hover:opacity-70 active:scale-95"
      } ${amber ? "bg-[#C5823E]" : ""} ${className}`}
    >
      <Image
        src="/assets/Arrow - Right.svg"
        alt=""
        width={30}
        height={20}
        className={isLeft ? "" : "rotate-180"}
      />
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
      className="snap-start shrink-0 w-[80vw] sm:w-72 rounded-3xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* ── Top: white section ── */}
      <div className="relative bg-white flex items-center justify-center min-h-56 sm:min-h-80 px-5 pt-12 pb-4 sm:pt-16 sm:pb-6">
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [timerKey, setTimerKey] = useState(0);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(updateButtons);
    window.addEventListener("resize", updateButtons);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  // Auto-advance every 4 s; resets on manual navigation
  useEffect(() => {
    const timer = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const firstCard = el.firstElementChild as HTMLElement | null;
        el.scrollBy({ left: (firstCard?.offsetWidth ?? 288) + 24, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [timerKey]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((firstCard?.offsetWidth ?? 288) + 24), behavior: "smooth" });
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

      {/* Track + desktop side arrows */}
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center gap-3">

          {/* Desktop left arrow — hidden on mobile */}
          <ArrowBtn dir="left" onClick={() => scroll(-1)} disabled={!canPrev} className="hidden md:flex" />

          {/* Single scroll track used by BOTH mobile and desktop arrows */}
          <div
            ref={trackRef}
            onScroll={updateButtons}
            className="flex gap-4 md:gap-6 overflow-x-scroll flex-1 min-w-0 snap-x snap-mandatory md:snap-none [&::-webkit-scrollbar]:hidden pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Trailing spacer on mobile so last card isn't flush with edge */}
            <div className="shrink-0 w-4 md:hidden" aria-hidden />
          </div>

          {/* Desktop right arrow — hidden on mobile */}
          <ArrowBtn dir="right" onClick={() => scroll(1)} disabled={!canNext} className="hidden md:flex" />
        </div>
      </div>

      {/* Mobile amber arrows — below the track, hidden on desktop */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-6 px-6">
        <ArrowBtn dir="left"  onClick={() => scroll(-1)} disabled={!canPrev} amber />
        <ArrowBtn dir="right" onClick={() => scroll(1)}  disabled={!canNext} amber />
      </div>
    </section>
  );
}
