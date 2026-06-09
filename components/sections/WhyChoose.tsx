import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { WhyChooseContent, FeatureItem, HeadlineWord } from "@/lib/types";

// ── Mixed-font heading: serif display + logo script + optional amber ──────────

function WhyHeadline({ words }: { words: HeadlineWord[] }) {
  const colorMap: Record<string, string> = {
    amber: "text-coffee-amber",
    gold:  "text-coffee-gold",
  };

  return (
    <h2
      className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight text-coffee-dark"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {words.map((word, i) => {
        if (word.logo) {
          return (
            <span
              key={i}
              className="text-coffee-amber"
              style={{ fontFamily: "var(--font-logo)", fontStyle: "normal", fontWeight: "normal" }}
            >
              {word.text}
            </span>
          );
        }
        return (
          <span
            key={i}
            className={[
              word.bold   ? "font-bold"   : "font-extralight",
              word.italic ? "italic"      : "",
              word.color  ? colorMap[word.color] : "",
            ].filter(Boolean).join(" ")}
          >
            {word.text}
          </span>
        );
      })}
    </h2>
  );
}

// ── Feature card — flex row: circle icon | flex-col title + description ───────

function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div className="flex items-start gap-4">
      {/* Circle icon image */}
      <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden ring-2 ring-coffee-amber/30">
        <Image
          src={item.iconImage.src}
          alt={item.iconImage.alt}
          width={item.iconImage.width ?? 80}
          height={item.iconImage.height ?? 80}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-1 pt-1">
        <h3
          className="text-base font-bold italic text-coffee-dark leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {item.title}
        </h3>
        <p className="text-sm text-coffee-dark/65 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function WhyChoose({ content }: { content: WhyChooseContent }) {
  const { sectionLabel, headlineWords, mascotImage, features } = content;

  return (
    <section className="bg-white pt-20 pb-48 md:pt-28 md:pb-64 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* ── Left: mascot image ── */}
          <div className="shrink-0 flex justify-center md:w-[38%]">
            <Image
              src={mascotImage.src}
              alt={mascotImage.alt}
              width={mascotImage.width ?? 480}
              height={mascotImage.height ?? 560}
              className="object-contain w-full max-w-sm md:max-w-none"
            />
          </div>

          {/* ── Right: label + heading + 2-col card grid ── */}
          <div className="flex flex-col gap-8 md:flex-1">

            {/* Section label */}
            <p className="text-[0.6875rem] font-semibold tracking-widest uppercase text-coffee-amber">
              {sectionLabel}
            </p>

            {/* Heading */}
            <WhyHeadline words={headlineWords} />

            {/* 2-column card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-2">
              {features.map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
