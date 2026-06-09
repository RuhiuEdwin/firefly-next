import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/components/ui/Icons";
import type { FooterContent } from "@/lib/types";

// ── Social icons ────────────────────────────────────────────────────────────

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.048 6.39C7.08 22.278 9.46 23.5 12.11 23.5c.79 0 1.56-.1 2.29-.28zM3.78 19.01C4.062 18.56 6.636 14.26 12.01 12.5c.17-.056.33-.1.498-.147-1.19-2.666-2.51-4.89-2.72-5.22-3.065 1.448-5.15 4.414-5.98 7.878h-.03zm8.01-13.95c.206.336 1.55 2.56 2.71 5.2 2.63-1.02 3.85-2.7 4.016-2.934C17.005 5.548 14.66 4.5 12 4.5c-.07 0-.143 0-.21.002zm7.447 3.12c-.197.266-1.56 2.042-4.32 3.182.18.37.353.745.51 1.12.056.14.112.28.163.417 3.38-.425 6.72.256 7.05.325-.022-1.954-.664-3.765-1.77-5.24z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.14 1.39-.42 1.93-.28.55-.67 1-1.16 1.35-.49.36-1.06.62-1.7.78-.64.17-1.3.25-1.98.25H0V4.503h6.938zm-.34 4.81c.584 0 1.056-.14 1.415-.42.36-.28.54-.72.54-1.32 0-.34-.06-.62-.18-.84-.12-.22-.29-.4-.5-.53-.21-.13-.45-.22-.73-.27-.28-.05-.57-.08-.87-.08H3.64v3.46h2.96zm.16 5.09c.32 0 .63-.03.92-.1.29-.07.54-.18.76-.33.22-.15.4-.35.53-.61.13-.25.19-.57.19-.95 0-.76-.22-1.3-.66-1.61-.44-.32-1.02-.48-1.72-.48H3.64v4.08h3.12zm8.422-1.96c.29.28.7.42 1.25.42.39 0 .73-.1 1.01-.3.28-.2.46-.42.53-.65h2.54c-.4 1.24-1.02 2.13-1.85 2.66-.83.53-1.84.79-3.01.79-.82 0-1.56-.13-2.22-.4-.66-.27-1.22-.65-1.68-1.15-.46-.5-.82-1.1-1.07-1.79-.25-.69-.37-1.45-.37-2.28 0-.8.13-1.55.38-2.23.25-.68.61-1.27 1.08-1.76.47-.49 1.03-.88 1.69-1.16.66-.28 1.39-.42 2.2-.42.9 0 1.69.17 2.36.52.67.35 1.22.82 1.64 1.42.42.6.73 1.28.92 2.05.19.77.26 1.57.21 2.4H14.7c0 .56.2 1.1.48 1.39zm2.21-3.76c-.23-.25-.6-.38-1.1-.38-.32 0-.59.06-.8.17-.21.11-.38.25-.51.42-.13.17-.22.34-.27.52-.05.18-.08.35-.09.5h3.25c-.06-.56-.25-.98-.48-1.23zm-2.62-8.8h4.88v1.3h-4.88z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.213 5.567L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  dribbble:  <DribbbleIcon />,
  behance:   <BehanceIcon />,
  instagram: <InstagramIcon />,
  twitter:   <TwitterIcon />,
};

// ── Footer ──────────────────────────────────────────────────────────────────

export function Footer({ content }: { content: FooterContent }) {
  const { logo, tagline, cta, linkGroups, socials, contactInfo, copyright } = content;

  return (
    <footer style={{ background: "#0A0400" }} className="text-white/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-20">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">

            {/* Logo */}
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={100}
              className="w-auto"
              style={{ maxHeight: 110 }}
            />

            <div className="flex flex-col gap-5">

            {/* Tagline */}
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              {tagline}
            </p>

            {/* CTA */}
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-sm font-semibold text-coffee-btn-text hover:opacity-90 transition-opacity duration-200 self-start"
                style={{ background: "#C5823E" }}
              >
                {cta.label}
                <span className="w-5 h-5 flex items-center justify-center">
                  <CartIcon />
                </span>
              </Link>
            )}
            </div>
            </div>

            {/* Social icons */}
            <div className="mt-2">
              <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                Follow Us On :
              </p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <Link
                    key={s.platform}
                    href={s.href}
                    aria-label={s.platform}
                    className="w-11 h-11 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                    style={{ background: "#C5823E" }}
                  >
                    <span className="text-white">
                      {SOCIAL_ICON_MAP[s.icon] ?? s.platform.charAt(0)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Link groups ── */}
          {linkGroups.map(group => (
            <div key={group.heading}>
              <h4
                className="mb-5 text-base italic text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {group.heading}
              </h4>
              <ul className="space-y-3.5">
                {group.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact info ── */}
          {contactInfo && (
            <div className="flex flex-col gap-6">
              <div>
                <h4
                  className="mb-2 text-base italic text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  Reach Out to Us
                </h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm hover:text-white transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <h4
                  className="mb-2 text-base italic text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  Phone Number
                </h4>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {contactInfo.phone}
                </p>
              </div>
              <div>
                <h4
                  className="mb-2 text-base italic text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  Location
                </h4>
                <p className="text-sm whitespace-pre-line" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {contactInfo.location}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div
          className="mt-12 border-t pt-6 text-xs text-center"
          style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}
        >
          {copyright}
        </div>
      </div>
    </footer>
  );
}
