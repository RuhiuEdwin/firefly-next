import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaBannerContent } from "@/lib/types";

interface CtaBannerProps {
  content: CtaBannerContent;
}

export function CtaBanner({ content }: CtaBannerProps) {
  const { headline, body, cta, backgroundImage, beansImage, cupImage } =
    content;

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="relative overflow-hidden min-h-75 md:min-h-85 flex items-center">

          {/* z-0 — bg: full-bleed coffee bean texture */}
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ zIndex: 0 }}
          />

          {/* z-1 — overlay: full coverage, warm brown */}
          <div
            className="absolute inset-0"
            style={{ zIndex: 1, background: "#603809CC" }}
          />
          <div className="relative z-2 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
            {/* z-2 — content: left 2/3 */}
            <div
              className="relative w-full md:w-2/3 px-8 md:px-12 py-10"
              style={{ zIndex: 2 }}
            >
              <h2
                className="text-white leading-tight font-medium text-3xl sm:text-4xl md:text-[2.75rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {headline}
              </h2>

              <p className="w-full md:w-2/3 mt-4 mb-8 text-white leading-relaxed text-sm font-normal">
                {body}
              </p>

              <Button
                {...cta}
                rounded="rounded-[10px]"
                className="text-sm font-bold px-6 py-3"
              />
            </div>
            <div className="relative w-full md:w-1/3 min-h-75 md:min-h-85">
              {/* z-2 — beans: fill the column height on the right */}
              <div
                className="absolute inset-y-0 right-0 w-full"
                style={{ zIndex: 10 }}
              >
                <Image
                  src={beansImage.src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="33vw"
                  className="object-cover opacity-70"
                />
              </div>

              {/* z-3 — cup: bottom-anchored, centred in column */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 md:w-44 lg:w-52 pointer-events-none"
                style={{ zIndex: 11 }}
              >
                <Image
                  src={cupImage.src}
                  alt={cupImage.alt}
                  width={cupImage.width ?? 320}
                  height={cupImage.height ?? 420}
                  className="object-contain w-full max-h-65"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
