import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Newsletter } from "@/components/sections/Newsletter";
import {
  getNavContent,
  getContactContent,
  getNewsletterContent,
  getFooterContent,
} from "@/lib/content";

export const metadata = {
  title: "Contacts — Firefly Coffee",
  icons: { icon: "/assets/logo.svg", shortcut: "/assets/logo.svg", apple: "/assets/logo.svg" },
};

const TICKER_ITEMS = [
  "Hand Picked",
  "Sun Dried",
  "Kilimohai Organic",
  "Rainforest Certified",
  "Single Origin",
  "Shade Grown",
  "Hand Picked",
  "Sun Dried",
  "Kilimohai Organic",
  "Rainforest Certified",
  "Single Origin",
  "Shade Grown",
];

export default async function ContactsPage() {
  const [nav, contact, newsletter, footer] = await Promise.all([
    getNavContent(),
    getContactContent(),
    getNewsletterContent(),
    getFooterContent(),
  ]);

  return (
    <>
      <Navbar content={nav} />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/contact-bg.jpg"
            alt="Coffee cherries on the branch at Firefly Estate"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(10,4,0,0.52)" }} />

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <h1
              className="text-5xl md:text-7xl leading-tight text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              Reach{" "}
              <em><strong>Out!</strong></em>
              <br />
              <em style={{ color: "#F9C06A" }}><strong>We&apos;d love</strong></em>
              {" "}to Host You!
            </h1>
          </div>
        </section>

        {/* ── Ticker ───────────────────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden flex items-center py-5"
          style={{ background: "#1A0A00" }}
        >
          <span
            className="shrink-0 pl-6 pr-4 text-sm"
            style={{ color: "#C5823E" }}
            aria-hidden
          >
            ▶
          </span>
          <div className="overflow-hidden flex-1">
            <div className="flex animate-ticker whitespace-nowrap">
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className="inline-flex items-center shrink-0 px-6">
                  <span className="mr-6 text-sm" style={{ color: "#C5823E" }} aria-hidden>
                    ◆
                  </span>
                  <span
                    className="text-xl italic"
                    style={{ fontFamily: "var(--font-display)", color: "#C5823E" }}
                  >
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Contact form (reused, strip the top margin it uses on home) ── */}
        <div style={{ marginTop: "-10rem" }}>
          <Contact content={contact} />
        </div>

        {/* ── Map + floating cup ───────────────────────────────────────────── */}
        <section className="relative bg-white pt-20 pb-40 overflow-visible">
          {/* Map */}
          <div className="max-w-5xl mx-auto px-6">
            <iframe
              title="Firefly Coffee Estate location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.60%2C-1.40%2C37.55%2C-0.70&layer=mapnik&marker=-1.0488%2C37.0137"
              width="100%"
              height="480"
              className="rounded-2xl border-0 shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Floating coffee cup — overlaps map bottom-left into newsletter */}
          <div
            className="absolute bottom-0 left-6 md:left-16 translate-y-1/2 pointer-events-none select-none"
            style={{ zIndex: 10 }}
          >
            <Image
              src="/assets/cup.png"
              alt="Firefly Coffee cup"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </section>

        {/* ── Newsletter (extra top padding to clear the floating cup) ─────── */}
        <div className="pt-40">
          <Newsletter content={newsletter} />
        </div>

      </main>

      <Footer content={footer} />
    </>
  );
}
