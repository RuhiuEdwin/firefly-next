import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductCarouselContent } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { products } = await getProductCarouselContent();
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const icons = { icon: "/assets/logo.svg", shortcut: "/assets/logo.svg", apple: "/assets/logo.svg" };
  if (!product) return { icons };
  return {
    title: `${product.name} — Firefly Coffee`,
    icons,
    openGraph: {
      title: `${product.name} — Firefly Coffee`,
      images: [{ url: product.image.src, alt: product.image.alt }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const price = product.priceFrom.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
  });

  return (
    <main className="min-h-screen" style={{ background: "#100C09" }}>

      {/* Back nav */}
      <div className="pt-8 pb-0 px-6 md:px-12 max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5823E] hover:text-[#e8a05a] transition-colors duration-200"
        >
          <Image
            src="/assets/Arrow - Right.svg"
            alt=""
            width={20}
            height={14}
            className="rotate-180 opacity-80"
          />
          Back to Home
        </Link>
      </div>

      {/* Product layout */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left — image card */}
        <div
          className="rounded-[28px] overflow-hidden flex flex-col"
          style={{ background: "#F5EFE6" }}
        >
          {/* Badge */}
          <div className="m-4 self-start bg-white rounded-md px-3 py-2 shadow-sm">
            <p className="text-[0.65rem] font-semibold text-[#2C1800] leading-tight">
              Varietal: {product.varietal}
            </p>
            <p className="text-[0.65rem] font-semibold text-[#2C1800] leading-tight">
              SCA Score: {product.scaScore}
            </p>
          </div>

          {/* Product image */}
          <div className="flex items-center justify-center px-8 pb-10 flex-1">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              width={product.image.width ?? 340}
              height={product.image.height ?? 400}
              className="object-contain w-full max-h-105"
              priority
            />
          </div>
        </div>

        {/* Right — details */}
        <div className="flex flex-col gap-6 pt-2">
          {/* Label */}
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#C5823E]">
            Firefly Coffee · Single Origin
          </p>

          {/* Name */}
          <h1
            className="text-4xl md:text-5xl leading-tight text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {product.name}
          </h1>

          {/* Details list */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            {[
              { label: "Process",      value: product.process },
              { label: "Flavor Notes", value: product.flavorNotes },
              { label: "Weight",       value: product.weight },
              { label: "Varietal",     value: product.varietal },
              { label: "SCA Score",    value: String(product.scaScore) },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-6">
                <span className="w-28 shrink-0 text-xs font-semibold tracking-wider uppercase text-white/40">
                  {label}
                </span>
                <span className="text-sm text-white/85">{value}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 border-t border-white/10 pt-6">
            <span
              className="text-xs font-bold px-3 py-1 rounded-sm"
              style={{ background: "#C5823E", color: "#fff" }}
            >
              From
            </span>
            <span
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.currency} {price}
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[10px] text-sm font-semibold transition-colors duration-200"
              style={{ background: "#C5823E", color: "#fff" }}
            >
              Add to Cart
              <Image src="/assets/shopping-cart-add.svg" alt="" width={18} height={18} className="invert" />
            </button>
            <Link
              href="/shop"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[10px] text-sm font-semibold border border-white/20 text-white/80 hover:border-[#C5823E] hover:text-[#C5823E] transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>

          {/* Origin note */}
          <p className="text-xs text-white/35 leading-relaxed border-t border-white/10 pt-6">
            100% single-origin Kenyan coffee grown on one hillside near Mt. Kenya.
            Shade-grown, chemical-free, hand-picked at peak ripeness and wet-processed
            the same day at our on-site mill.
          </p>
        </div>

      </div>
    </main>
  );
}
