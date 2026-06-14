"use client";

import { useState } from "react";
import type { ShopProduct } from "@/lib/types";

interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  qty: number;
}

function saveToCart(product: ShopProduct, qty: number) {
  try {
    const stored = localStorage.getItem("firefly-cart");
    const cart: CartItem[] = stored ? JSON.parse(stored) : [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.priceFrom, currency: product.currency, qty });
    }
    localStorage.setItem("firefly-cart", JSON.stringify(cart));
  } catch {
    // localStorage unavailable — silently skip
  }
}

export function ProductActions({ product }: { product: ShopProduct }) {
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleAddToCart = () => {
    saveToCart(product, qty);
    showToast(`${qty} × ${product.name} added to cart`);
  };

  const handleBuyNow = () => {
    saveToCart(product, qty);
    showToast("Checkout coming soon!");
  };

  return (
    <div className="flex flex-col gap-5" style={{ fontFamily: "var(--font-sans)" }}>

      {/* QTY row */}
      <div className="flex items-center gap-6">
        <span className="text-black
text-base
font-light
font-['DM_Sans']">
          QTY : 
        </span>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"

          >
            −
          </button>
          <span className="justify-start text-black text-base font-light font-['DM_Sans']">
            {qty}
          </span>
          <button
            onClick={() => setQty(q => q + 1)}
            aria-label="Increase quantity"
            className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"

          >
            +
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <p className="text-xs text-[#C5823E] font-medium">
          ✓ {toast}
        </p>
      )}

      {/* Add to Cart — full-width outlined */}
      <button
        onClick={handleAddToCart}
        className="w-full md:w-48 py-4 border border-[#1A0A00] bg-white text-[#1A0A00] text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A0A00] hover:text-white transition-colors duration-200"
      >
        Add to Cart
      </button>

      {/* Buy Now — full-width filled */}
      <button
        onClick={handleBuyNow}
        className="w-full md:w-48 py-4 bg-[#1A0A00] text-white text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#2C1800] transition-colors duration-200"
      >
        Buy it Now!
      </button>

    </div>
  );
}
