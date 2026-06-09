import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/components/ui/Icons";
import type { FooterContent } from "@/lib/types";

// ── Social icons ────────────────────────────────────────────────────────────

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm7.885 5.697c1.517 1.859 2.427 4.224 2.452 6.795-.358-.073-3.95-.807-7.561-.35-.08-.196-.16-.392-.243-.588-.74-1.735-1.615-3.303-2.554-4.737 3.7-1.517 5.438-3.648 5.906-4.12zm-7.885-3.56c3.01 0 5.75 1.142 7.82 3.002-.422.422-2.018 2.4-5.56 3.77-1.734-3.183-3.653-5.803-3.96-6.227A9.96 9.96 0 0112 2.137zm-2.633.394c.295.398 2.178 3.014 3.935 6.147-4.962 1.317-9.344 1.294-9.781 1.285.637-3.313 2.893-6.054 5.846-7.432zM2.064 12.04v-.302c.426.01 5.556.083 10.845-1.506.302.594.588 1.194.85 1.8-.135.04-.27.08-.403.124-5.428 1.754-8.324 6.54-8.553 6.94A9.949 9.949 0 012.064 12.04zm9.936 9.907a9.955 9.955 0 01-6.14-2.107c.165-.312 2.04-3.945 6.9-5.647l.061-.02a43.9 43.9 0 012.21 7.783 9.931 9.931 0 01-3.03-.009zm4.602-1.515a38.057 38.057 0 00-2.07-7.194c2.875-.459 5.398.296 5.7.385a10.014 10.014 0 01-3.63 6.809z" />
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
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
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
