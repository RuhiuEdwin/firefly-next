"use client";

import Image from "next/image";
import type { NewsletterContent } from "@/lib/types";

export function Newsletter({ content }: { content: NewsletterContent }) {
  const { headline, body, formLabel, placeholder, submitLabel, backgroundImage } = content;

  // Split headline — first two words get bold italic treatment
  const headlineParts = headline.split(/^(Brewed News)(.*)/);

  return (
    <section className="relative overflow-hidden py-10 md:py-14" style={{ background: "#0D0803" }}>
      {/* Background image */}
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt ?? ""}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 1, zIndex: 0 }}
        />
      )}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(10,4,0,0.2)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {headlineParts.length > 1 ? (
            <>
              <em><strong>{headlineParts[1]}</strong></em>
              {headlineParts[2]}
            </>
          ) : (
            headline
          )}
        </h2>

        {/* Body */}
        <p className="text-sm leading-relaxed mb-8 whitespace-pre-line" style={{ color: "rgba(255,255,255,0.6)" }}>
          {body}
        </p>

        {/* Form label */}
        {formLabel && (
          <p
            className="text-base italic mb-5"
            style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)" }}
          >
            {formLabel}
          </p>
        )}

        {/* Email form */}
        <form className="flex gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder={placeholder}
            required
            className="flex-1 bg-transparent border border-white/20 rounded-lg px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-amber-400/50 transition-colors duration-200"
          />
          <button
            type="submit"
            className="shrink-0 px-7 py-3.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
            style={{ background: "#C5823E" }}
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
