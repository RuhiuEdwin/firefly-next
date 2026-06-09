import Link from "next/link";

export const metadata = {
  title: "Shop — Firefly Coffee",
  icons: { icon: "/assets/logo.svg", shortcut: "/assets/logo.svg", apple: "/assets/logo.svg" },
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0a0400] flex flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#C5823F]">
        Firefly Coffee Shop
      </p>
      <h1
        className="text-5xl md:text-7xl leading-tight text-white font-extralight"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Great coffee,{" "}
        <span className="font-bold italic text-[#F9C06A]">coming soon</span>
      </h1>
      <p className="text-white/50 max-w-md leading-relaxed">
        Our online shop is being prepared. Check back soon for Firefly Coffee bags, subscriptions, and accessories.
      </p>
      <Link
        href="/"
        className="text-[#F9C06A] hover:text-[#B37944] transition-colors text-sm tracking-wide"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
