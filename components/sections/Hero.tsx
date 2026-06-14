import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { StatCarousel } from "@/components/ui/StatCarousel";
import { HeadlineRenderer } from "@/components/ui/HeadlineRenderer";
import type { HeroContent } from "@/lib/types";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const { headlineWords, ctas, backgroundImage, featuredStats } = content;

  return (
    <section className="relative min-h-svh flex flex-col bg-coffee-dark">

      {/* ── 1. Background photo ──────────────────────────────────────────── */}
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="object-cover opacity-55"
          priority
        />
      )}

      {/* ── 2. Vignette gradients ────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-linear-to-b from-coffee-dark/40 via-transparent to-coffee-dark/85 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-coffee-dark/50 via-transparent to-transparent pointer-events-none" />

      {/* ── 3a. Radial glow — top-right ──────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 101.62% 148.37% at 148.37% 7.55%, rgba(197,130,63,0.39) 0%, rgba(197,130,63,0) 100%)",
        }}
      />

      {/* ── 3b. Radial glow — bottom-left ────────────────────────────────
           center kept inside the section to avoid visual bleed        */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 620px 620px at -80px 110%, rgba(197,130,63,0.39) 0%, rgba(197,130,63,0) 100%)",
        }}
      />

      {/* ── 4. Bokeh particles ───────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-[18%] left-[12%]  w-40 h-40 rounded-full bg-coffee-amber/15 blur-3xl animate-bokeh-1" />
        <div className="absolute top-[50%] right-[18%] w-64 h-64 rounded-full bg-coffee-amber/10 blur-3xl animate-bokeh-2" />
        <div className="absolute top-[32%] right-[8%]  w-32 h-32 rounded-full bg-coffee-gold/12  blur-2xl animate-bokeh-3" />
        <div className="absolute top-[68%] left-[32%]  w-48 h-48 rounded-full bg-coffee-amber/8  blur-3xl animate-bokeh-4" />
        <div className="absolute top-[8%]  right-[32%] w-24 h-24 rounded-full bg-coffee-gold/10  blur-2xl animate-bokeh-5" />
      </div>

      {/* ── 5. Main content ──────────────────────────────────────────────── */}
      <Container className="relative z-10 flex flex-col items-center justify-center flex-1 pt-24 pb-44 md:pb-52 gap-8">
        {/* Headline — left-aligned with stagger on lines 2+ */}
        <div className="w-fit mx-auto max-w-full">
          <HeadlineRenderer
            words={headlineWords}
            as="h1"
            className="text-left text-[2.6rem] sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
            stagger={{ on: "rest", indent: "2.8em" }}
          />
        </div>

        {/* CTAs — centred below headline */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto self-center">
          {ctas.map((cta) => (
            <Button
              key={cta.href}
              {...cta}
              className="w-full sm:w-auto px-8 py-3 text-[0.9375rem]"
            />
          ))}
        </div>
      </Container>

      {/* ── 6. Bottom bar — carousel LEFT · scroll CENTRE ────────────────── */}
      <div className="absolute bottom-8 left-0 right-0 z-10 pointer-events-none">
        <Container className="flex items-end justify-between pointer-events-none">

          {/* Stat carousel — bottom-left */}
          <div className="pointer-events-auto">
            {featuredStats && featuredStats.length > 0 && (
              <div className="hidden sm:block">
                <StatCarousel stats={featuredStats} />
              </div>
            )}
          </div>

          {/* Scroll indicator — bottom-centre */}
          <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-0">
            <ScrollButton targetId="story" />
          </div>

          {/* Right spacer to keep scroll truly centred */}
          <div className="hidden sm:block opacity-0 pointer-events-none">
            {/* mirrors the carousel width */}
            <div className="w-60" />
          </div>

        </Container>
      </div>

    </section>
  );
}
