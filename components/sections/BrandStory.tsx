import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeadlineRenderer } from "@/components/ui/HeadlineRenderer";
import type { BrandStoryContent } from "@/lib/types";

interface BrandStoryProps {
  content: BrandStoryContent;
}

export function BrandStory({ content }: BrandStoryProps) {
  const { headlineWords, body, body2, cta, productImage } = content;

  return (
    <section className="bg-white pt-20  md:pt-28">
      <Container>

        {/* Full-width staggered heading — line 0 indented, lines 1+ flush left */}
        <div className="w-fit mx-auto max-w-full">
          <HeadlineRenderer
            words={headlineWords}
            className="text-left text-[2.6rem] sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#603809" }}
            stagger={{ on: "first", indent: "3em" }}
          />
        </div>

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
