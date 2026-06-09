import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import type { HeritageContent, HeritageCard, HeadlineWord } from "@/lib/types";

// ── Headline — mixed bold/italic, no stagger, left-aligned ──────────────────

function HeritageHeadline({ words }: { words: HeadlineWord[] }) {
  const lines = words.reduce<HeadlineWord[][]>(
    (acc, word) => {
      if (word.lineBreakBefore && acc[acc.length - 1].length > 0) {
        acc.push([word]);
      } else {
        acc[acc.length - 1].push(word);
      }
      return acc;
    },
    [[]]
  );

  return (
    <h2
      className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-white"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map((word, wi) => (
            <span
              key={wi}
              className={[
                word.bold   ? "font-bold"      : "font-extralight",
                word.italic ? "italic"         : "",
              ].filter(Boolean).join(" ")}
            >
              {word.text}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}

// ── Body text with gold-highlighted accent words ─────────────────────────────

function HighlightBody({ text, accents }: { text: string; accents?: string[] }) {
  if (!accents?.length) return <>{text}</>;

  const escaped = accents.map((a) => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));

  return (
    <>
      {parts.map((part, i) =>
        accents.includes(part)
          ? <span key={i} className="text-[#C5823E] font-medium">{part}</span>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────

function Card({ card }: { card: HeritageCard }) {
  return (
    <div className="rounded-[33px] overflow-hidden flex flex-col" style={{ background: "#C5823F1F" }}>
      {/* Image — top portion, fills card width */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6 gap-2">
        {/* Title */}
        <h3
          className="text-xl text-white italic"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {card.number}.&nbsp; {card.title}
        </h3>

        {/* Subtitle tag */}
        <p className="text-[0.6875rem] font-semibold tracking-widest uppercase text-[#C5823E]">
          {card.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-white/75 leading-relaxed flex-1 mt-1">
          {card.description}
        </p>

        {/* Arrow CTA */}
        <div className="flex justify-end mt-3">
          <Link
            href={card.href}
            aria-label={`Learn more about ${card.title}`}
            className="w-10 h-10 rounded-full bg-[#C5823E] flex items-center justify-center hover:bg-[#a86830] transition-colors duration-200"
          >
            <ArrowUpRightIcon className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

interface HeritageProps {
  content: HeritageContent;
}

export function Heritage({ content }: HeritageProps) {
  const { sectionLabel, headlineWords, body, bodyAccentWords, cards } = content;

  return (
    <section id="story" className="relative py-24 overflow-hidden" style={{ background: "#1B1511" }}>
      {/* Ambient glow — continues the hero's bottom-left radial into this section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 620px 500px at -80px -10%, rgba(197,130,63,0.32) 0%, rgba(197,130,63,0) 100%)",
        }}
      />
      {/* Ambient glow — continues the hero's top-right radial into this section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 120% -40%, rgba(197,130,63,0.22) 0%, rgba(197,130,63,0) 100%)",
        }}
      />
      <Container>

        {/* Section label — sits above the two-column header */}
        <p className="text-[0.6875rem] font-semibold tracking-widest uppercase text-[#C5823E] mb-5">
          {sectionLabel}
        </p>

        {/* Header row: headline left, body copy right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14">
          <HeritageHeadline words={headlineWords} />

          {/* Right — body with accent words */}
          {body && (
            <p className="md:max-w-70 text-sm text-white/60 leading-relaxed md:text-right">
              <HighlightBody text={body} accents={bodyAccentWords} />
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.number} card={card} />
          ))}
        </div>

      </Container>
    </section>
  );
}
