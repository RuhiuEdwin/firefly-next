import type { ShopProduct } from "./types";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  qty: number;
}

export function saveToCart(product: ShopProduct, qty = 1): void {
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
    // localStorage unavailable
  }
}
