"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ShopProduct } from "@/lib/types";

const FILTERS = [
  "ALL",
  "WHOLE BEAN",
  "GROUND",
  "LIGHT ROAST",
  "MEDIUM",
  "DARK",
  "ESPRESSO",
  "GREEN/UNROASTED",
];

const BADGE_COLORS: Record<string, string> = {
  "WHOLE BEAN":      "#2C1800",
  "GROUND":          "#2C1800",
  "LIGHT ROAST":     "#C5823E",
  "MEDIUM":          "#7A4520",
  "DARK":            "#1A0A00",
  "ESPRESSO":        "#0A0400",
  "GREEN/UNROASTED": "#1F5C1F",
  "SIGNATURE DARK":  "#1A0A00",
};

function saveToCart(product: ShopProduct) {
  try {
    const stored = localStorage.getItem("firefly-cart");
    const cart: { id: string; name: string; price: number; currency: string; qty: number }[] =
      stored ? JSON.parse(stored) : [];
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.priceFrom, currency: product.currency, qty: 1 });
    }
    localStorage.setItem("firefly-cart", JSON.stringify(cart));
  } catch {
    // localStorage unavailable
  }
}

function ProductCard({ product }: { product: ShopProduct }) {
  const [added, setAdded] = useState(false);
  const price = product.priceFrom.toLocaleString("en-KE", { minimumFractionDigits: 2 });
  const badge = product.badgeLabel ?? product.category ?? "";
  const badgeBg = BADGE_COLORS[badge] ?? "#2C1800";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    saveToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Top: white section with badge + image */}
      <Link href={`/shop/${product.slug}`} className="relative bg-white flex items-center justify-center min-h-60 px-6 pt-10 pb-4">
        {badge && (
          <div
            className="absolute top-5 left-0 px-3 py-1.5"
            style={{ background: badgeBg }}
          >
            <p className="text-[0.6rem] font-semibold tracking-wider uppercase text-white leading-tight">
              {badge}
            </p>
          </div>
        )}
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width ?? 340}
          height={product.image.height ?? 400}
          className="object-contain w-full max-h-52 group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Bottom: dark info section */}
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

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 text-xs text-white/60">
          <Link
            href={`/shop/${product.slug}`}
            className="hover:text-white transition-colors duration-200"
          >
            View Product
          </Link>
          <span className="text-white/20">|</span>
          <button
            onClick={handleAddToCart}
            className="hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            {added ? "Added ✓" : "Add to Cart"} →
          </button>
        </div>
      </div>
    </div>
  );
}

export function ShopGrid({ products }: { products: ShopProduct[] }) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL"
      ? products
      : products.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 justify-center py-10 px-6 max-w-5xl mx-auto">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
              activeFilter === f
                ? "bg-[#1A0A00] text-white"
                : "border border-[#1A0A00]/30 text-[#1A0A00] bg-transparent hover:border-[#1A0A00]/60"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-4 text-center py-20 text-[#1A0A00]/40 text-sm">
            No products in this category yet.
          </p>
        )}
      </div>
    </>
  );
}
