import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getProductCarouselContent,
  getNavContent,
  getFooterContent,
} from "@/lib/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductActions } from "./ProductActions";
import { AccordionSection } from "./AccordionSection";
import { RelatedProductCard } from "./RelatedProductCard";
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

  const [product, { products: allProducts }, nav, footer] = await Promise.all([
    getProductBySlug(slug),
    getProductCarouselContent(),
    getNavContent(),
    getFooterContent(),
  ]);

  if (!product) notFound();

  const price = product.priceFrom.toLocaleString("en-KE", { minimumFractionDigits: 2 });
  const related = allProducts.filter(p => p.slug !== slug).slice(0, 6);

  const specs = [
    { label: "Profile",       value: product.profile      || product.flavorNotes },
    { label: "Varietal",      value: product.varietal },
    { label: "Process",       value: product.process },
    { label: "Alt.",          value: product.altitude      || "—" },
    { label: "Roast Profile", value: product.roastProfile  || "—" },
    { label: "SCA Score",     value: String(product.scaScore) },
    { label: "Farm",          value: product.farm          || "—" },
  ];

  return (
    <>
      <Navbar content={nav} />

      <main className="bg-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-16 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left — two-bag product showcase */}
            <div className="relative flex items-end justify-center gap-4 md:gap-6 py-4">
              {/* Front bag */}
              <div
                className="flex-1 max-w-60 md:max-w-70"
                style={{ transform: "rotate(-4deg)" }}
              >
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width ?? 340}
                  height={product.image.height ?? 400}
                  className="object-contain w-full drop-shadow-xl"
                  priority
                />
              </div>

              {/* Back bag — same image, angled to suggest the reverse */}
              <div
                className="flex-none w-[42%] max-w-47.5 md:max-w-55 opacity-85"
                style={{ transform: "rotate(6deg) translateY(6px)" }}
              >
                <Image
                  src={product.backImage?.src ?? product.image.src}
                  alt={product.backImage?.alt ?? `${product.image.alt} back`}
                  width={product.image.width ?? 340}
                  height={product.image.height ?? 400}
                  className="object-contain w-full drop-shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Right — product details */}
            <div className="flex flex-col gap-5" style={{ fontFamily: "var(--font-sans)" }}>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight text-[#1A0A00]">
                {product.name}
              </h1>

              {/* Divider */}
              <hr className="border-[#1A0A00]/10" />

              {/* Price row */}
              <div className="flex items-center gap-1">
                <span className="text-black
text-2xl
font-normal
font-['DM_Sans']
uppercase">
                  Regular Price
                </span>
                <span className="text-black
text-2xl
font-normal
font-['DM_Sans']
uppercase">
                  {product.currency} {price}
                </span>
              </div>

              {/* Specs table */}
              <div className="space-y-3">
                {specs.map(({ label, value }) => (
                  <div key={label} className="flex gap-1 text-sm">
                    <span className="text-black
text-lg
font-normal
font-['DM_Sans']">{label}:</span>
                    <span className="text-black
text-lg
font-light
font-['DM_Sans']">{value}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <hr className="border-[#1A0A00]/10" />

              {/* Qty + cart (client component) */}
              <ProductActions product={product} />

            </div>
          </div>
        </section>

        {/* ── Dark separator band ───────────────────────────────────────── */}
        <div className="w-full" style={{ background: "#2C1800", height: "100px" }} />

        {/* ── Accordion section ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-4 md:py-6">
          <AccordionSection description={product.description} />
        </section>

        {/* ── You Might Also Like ───────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

              {/* Left — label + subtitle */}
              <div className="md:w-56 shrink-0">
                <h2
                  className="text-3xl md:text-4xl leading-tight font-bold uppercase text-[#1A0A00]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  YOU MIGHT ALSO LIKE
                </h2>
                <p className="mt-3 text-sm text-[#1A0A00]/50 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                  Here are some other roasts we think you may like.
                </p>
              </div>

              {/* Right — product grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map(p => (
                  <RelatedProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer content={footer} />
    </>
  );
}
