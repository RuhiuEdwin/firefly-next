"use client";

import { Container } from "@/components/ui/Container";
import type { ContactContent, FormField } from "@/lib/types";

function Field({ field }: { field: FormField }) {
  const cls =
    "w-full  bg-transparent border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white/80 placeholder:text-white/40 focus:outline-none focus:border-amber-400/50 transition-colors duration-200";

  if (field.type === "textarea") {
    return (
      <textarea
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        rows={4}
        className={cls}
      />
    );
  }
  return (
    <input
      type={field.type}
      name={field.name}
      placeholder={field.placeholder}
      required={field.required}
      className={cls}
    />
  );
}

export function Contact({ content }: { content: ContactContent }) {
  const { sectionLabel, headline, body, formFields, submitLabel, learnMoreLabel } = content;

  // Pair adjacent `half` fields into grid rows
  const rows: FormField[][] = [];
  let i = 0;
  while (i < formFields.length) {
    if (formFields[i].half && formFields[i + 1]?.half) {
      rows.push([formFields[i], formFields[i + 1]]);
      i += 2;
    } else {
      rows.push([formFields[i]]);
      i++;
    }
  }

  // Split headline at \n; words "Connect" and "Coffee" rendered bold italic
  const lines = headline.split("\n");

  return (
    <section id="contact" className="py-20 mt-40 md:py-28" style={{ background: "#0D0803" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: form card ── */}
          <div className="rounded-2xl p-8 md:p-10" style={{ background: "#1E1008" }}>
            <form className="flex flex-col gap-4">
              {rows.map((row, idx) =>
                row.length === 2 ? (
                  <div key={idx} className="grid grid-cols-2 gap-4">
                    <Field field={row[0]} />
                    <Field field={row[1]} />
                  </div>
                ) : (
                  <Field key={row[0].name} field={row[0]} />
                )
              )}
              <button
                type="submit"
                className="mt-2 w-full py-3.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
                style={{ background: "#C5823E" }}
              >
                {submitLabel}
              </button>
            </form>
          </div>

          {/* ── Right: copy ── */}
          <div className="lg:pt-4">
            <span
              className="block mb-6 text-[0.65rem] font-semibold tracking-[0.22em] uppercase"
              style={{ color: "#C5823E" }}
            >
              {sectionLabel}
            </span>

            <h2
              className="text-4xl md:text-5xl lg:text-[3.25rem] leading-tight text-white mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              {lines.map((line, li) => {
                // Bold-italic the key brand words in each line
                const words = line.split(/(\bConnect\b|\bCoffee\b)/g);
                return (
                  <span key={li}>
                    {li > 0 && <br />}
                    {words.map((w, wi) =>
                      w === "Connect" || w === "Coffee" ? (
                        <em key={wi}>
                          <strong>{w}</strong>
                        </em>
                      ) : (
                        <span key={wi}>{w}</span>
                      )
                    )}
                  </span>
                );
              })}
            </h2>

            <div className="h-px w-24 mb-6" style={{ background: "rgba(197,130,62,0.6)" }} />

            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              {body}
            </p>

            {learnMoreLabel && (
              <button
                className="px-8 py-3.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
                style={{ background: "#C5823E" }}
              >
                {learnMoreLabel}
              </button>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
