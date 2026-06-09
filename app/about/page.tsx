import Link from "next/link";

export const metadata = {
  title: "About Us — Firefly Coffee",
  icons: { icon: "/assets/logo.svg", shortcut: "/assets/logo.svg", apple: "/assets/logo.svg" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0400] flex flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="text-xs font-semibold tracking-widest uppercase text-coffee-amber">
        Est. 1926 · Kiambu, Kenya
      </p>
      <h1
        className="text-5xl md:text-7xl leading-tight text-white font-extralight"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Our{" "}
        <span className="font-bold italic text-[#F9C06A]">Story</span>
      </h1>
      <p className="text-white/50 max-w-md leading-relaxed">
        Nearly a century on one Kenyan hillside. The full story of Firefly Coffee is coming soon.
      </p>
      <Link
        href="/"
        className="text-coffee-gold hover:text-coffee-gold-dark transition-colors text-sm tracking-wide"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
