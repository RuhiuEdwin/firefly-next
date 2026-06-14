import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Newsletter } from "@/components/sections/Newsletter";
import { ShopGrid } from "./ShopGrid";
import { TickerStrip } from "@/components/sections/TickerStrip";
import {
  getNavContent,
  getProductCarouselContent,
  getContactContent,
  getNewsletterContent,
  getFooterContent,
} from "@/lib/content";

export const metadata = {
  title: "Shop — Firefly Coffee",
  icons: { icon: "/assets/logo.svg", shortcut: "/assets/logo.svg", apple: "/assets/logo.svg" },
};

const TICKER_ITEMS = [
  "Sun Dried",
  "Kilimohai Organic",
  "Rainforest Certified",
  "Single Origin",
  "Shade Grown",
  "Sun Dried",
  "Kilimohai Organic",
  "Rainforest Certified",
  "Single Origin",
  "Shade Grown",
];

export default async function ShopPage() {
  const [nav, { products }, contact, newsletter, footer] = await Promise.all([
    getNavContent(),
    getProductCarouselContent(),
    getContactContent(),
    getNewsletterContent(),
    getFooterContent(),
  ]);

  return (
    <>
      <Navbar content={nav} />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/shop-bg.jpg"
            alt="Aerial view of Firefly Coffee plantation"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(10,4,0,0.55)" }} />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-7xl leading-tight text-white mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              Estate{" "}
              <em><strong>Roasted</strong></em>
              <br />
              <em style={{ color: "#F9C06A" }}><strong>Shipped</strong></em>
              {" "}Fresh!
            </h1>
            <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              Every order roasts the day before it ships. Choose whole bean, ground, or green for your own
              roaster — all single-origin, all from our hillside.
            </p>
          </div>
        </section>

        {/* ── Filter bar + Product grid ─────────────────────────────────── */}
        <section className="bg-white">
          <ShopGrid products={products} />
        </section>

        {/* ── Ticker ───────────────────────────────────────────────────────── */}
        <TickerStrip items={TICKER_ITEMS} />

        {/* ── Shipping ─────────────────────────────────────────────────────── */}
        <section className="py-24 text-center px-6 -mb-40" style={{ background: "#0D0803" }}>
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-8"
            style={{ color: "#C5823E" }}
          >
            SHIPPING
          </p>

          <h2
            className="text-4xl md:text-6xl leading-tight text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Roasted before{" "}
            <em style={{ color: "#F9C06A" }}>
              <strong>The Day it Ships!</strong>
            </em>
          </h2>

          <p
            className="max-w-lg mx-auto mb-10 leading-relaxed text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Orders in Nairobi arrive next-day. Countrywide within 3 working days. International by special
            arrangement — email{" "}
            <a
              href="mailto:hello@firefly.coffee"
              className="transition-colors duration-200 hover:underline"
              style={{ color: "#C5823E" }}
            >
              hello@firefly.coffee
            </a>
          </p>

          <Link
            href="#contact"
            className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{ border: "1px solid #C5823E", color: "#C5823E" }}
          >
            Talk to Us!
          </Link>
        </section>

        <Contact content={contact} />
        <Newsletter content={newsletter} />
      </main>

      <Footer content={footer} />
    </>
  );
}
