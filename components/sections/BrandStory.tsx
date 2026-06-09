import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { BrandStoryContent, HeadlineWord } from "@/lib/types";

// ── Staggered display heading — line 0 indented right, line 1+ flush left ─────
// w-fit + mx-auto centers the staggered block as one unit

function BrandStoryHeadline({ words }: { words: HeadlineWord[] }) {
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
    <div className="w-fit mx-auto max-w-full">
      <h2
        className="text-left text-[2.6rem] sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "#603809" }}
      >
        {lines.map((line, li) => (
          <span
            key={li}
            className="block"
            style={li === 0 ? { paddingLeft: "3em" } : undefined}
          >
            {line.map((word, wi) => (
              <span
                key={wi}
                className={[
                  word.bold   ? "font-bold"  : "font-extralight",
                  word.italic ? "italic"     : "",
                ].filter(Boolean).join(" ")}
              >
                {word.text}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

interface BrandStoryProps {
  content: BrandStoryContent;
}

export function BrandStory({ content }: BrandStoryProps) {
  const { headlineWords, body, body2, cta, productImage } = content;

  return (
    <section className="bg-white pt-20  md:pt-28">
      <Container>

        {/* Full-width staggered heading */}
        <BrandStoryHeadline words={headlineWords} />

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-center">

          {/* Left — copy + CTA */}
          <div className="flex flex-col gap-4">
            <p
              className="leading-relaxed"
              style={{ color: "#100C0F", fontSize: "14px" }}
            >
              {body}
            </p>
            {body2 && (
              <p
                className="leading-relaxed"
                style={{ color: "#100C0F", fontSize: "14px" }}
              >
                {body2}
              </p>
            )}
            <div className="mt-5">
              <Button
                {...cta}
                rounded="rounded-3xl"
                className="text-xs font-bold px-6 py-2"
              />
            </div>
          </div>

          {/* Right — product image, fills column */}
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src={productImage.src}
              alt={productImage.alt}
              width={productImage.width ?? 600}
              height={productImage.height ?? 600}
              className="object-contain w-full"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
