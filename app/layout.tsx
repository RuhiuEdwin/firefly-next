import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Used for the brand logo text
const dancingScript = Dancing_Script({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "FireFly Coffee — Kenya's Finest In Every Bean",
  description:
    "Single-origin Kenyan coffee grown on one hillside for nearly a century. Traceable, exceptional, and delivered to your door.",
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
    apple: "/assets/logo.svg",
  },
  openGraph: {
    title: "FireFly Coffee — Kenya's Finest In Every Bean",
    description:
      "Single-origin Kenyan coffee grown on one hillside for nearly a century. Traceable, exceptional, and delivered to your door.",
    images: [{ url: "/assets/logo.svg", width: 189, height: 108, alt: "FireFly Coffee" }],
  },
  twitter: {
    card: "summary",
    images: ["/assets/logo.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dancingScript.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
