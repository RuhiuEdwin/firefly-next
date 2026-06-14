"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ShopProduct } from "@/lib/types";

interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  qty: number;
}

function saveToCart(product: ShopProduct) {
  try {
    const stored = localStorage.getItem("firefly-cart");
    const cart: CartItem[] = stored ? JSON.parse(stored) : [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.priceFrom, currency: product.currency, qty: 1 });
    }
    localStorage.setItem("firefly-cart", JSON.stringify(cart));
  } catch {
    // localStorage unavailable — silently skip
  }
}

export function RelatedProductCard({ product }: { product: ShopProduct }) {
  const [added, setAdded] = useState(false);

  const price = product.priceFrom.toLocaleString("en-KE", { minimumFractionDigits: 2 });

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    saveToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 group">
      {/* White image area */}
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative bg-white flex items-center justify-center px-6 pt-10 pb-4 min-h-[200px]">
          {/* Varietal / SCA badge */}
          <div className="absolute top-4 left-0 px-3 py-1.5" style={{ background: "#1A0A00" }}>
            <p className="text-[0.55rem] font-semibold leading-tight text-white/90">
              Varietal: {product.varietal}
            </p>
            <p className="text-[0.55rem] font-semibold leading-tight text-white/90">
              SCA Score: {product.scaScore}
            </p>
          </div>
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width ?? 200}
            height={product.image.height ?? 260}
            className="object-contain w-full max-h-52 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Dark info panel */}
      <div className="flex flex-col px-4 pt-4 pb-4 gap-1 flex-1" style={{ background: "#2C1800" }}>
        <h3
          className="text-sm font-bold text-white leading-snug"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {product.name}
        </h3>
        <p className="text-[0.7rem] text-white/55 leading-snug">Process: {product.process}</p>
        <p className="text-[0.7rem] text-white/55 leading-snug">{product.flavorNotes}</p>
        <p className="text-[0.7rem] text-white/55 leading-snug">{product.weight}</p>

        {/* Price row */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className="text-[0.6rem] font-bold px-2 py-0.5 rounded-sm"
            style={{ background: "#C5823E", color: "#fff" }}
          >
            From
          </span>
          <span className="text-xs font-bold text-white">
            {product.currency} {price}
          </span>
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10 text-[0.7rem] text-white/55">
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
            {added ? "Added ✓" : <>Add to Cart <span className="text-white/30">→</span></>}
          </button>
        </div>
      </div>
    </div>
  );
}
