"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HamburgerIcon, CloseIcon } from "@/components/ui/Icons";
import type { NavContent } from "@/lib/types";

interface NavbarProps {
  content: NavContent;
}

export function Navbar({ content }: NavbarProps) {
  const { logoText, links, cta } = content;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* ── Main bar ─────────────────────────────────────────────────────── */}
        <div
          className={`pointer-events-auto transition-all duration-500 ${
            scrolled
              ? "mx-4 md:mx-auto md:max-w-7xl mt-3 rounded-2xl bg-coffee-dark/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30"
              : ""
          }`}
        >
          <Container className={scrolled ? "px-5 lg:px-8" : ""}>
            <nav className={`flex items-center transition-all duration-500 ${scrolled ? "h-14" : "h-16 md:h-20"}`}>

              {/* Logo */}
              <Link href="/" className="shrink-0 leading-none select-none">
                {content.logo ? (
                  <Image
                    src={content.logo.src}
                    alt={content.logo.alt}
                    width={120}
                    height={69}
                    className="h-16 w-auto"
                    priority
                  />
                ) : (
                  <span
                    className="text-2xl md:text-3xl text-coffee-gold"
                    style={{ fontFamily: "var(--font-logo)" }}
                  >
                    {logoText}
                  </span>
                )}
              </Link>

              {/* Nav links — centered, desktop only */}
              <ul className="hidden md:flex items-center gap-10 mx-auto">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-normal text-white/85 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA + hamburger */}
              <div className="ml-auto md:ml-0 flex items-center gap-3">
                {/* mobile — icon only */}
                <Button
                  label={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  icon={cta.icon}
                  iconOnly
                  rounded="rounded-full"
                  className="inline-flex md:hidden"
                />
                {/* desktop — full text + icon */}
                <Button
                  label={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  icon={cta.icon}
                  className="hidden md:inline-flex"
                />
                <button
                  className="md:hidden flex items-center justify-center w-10 h-10 text-white pointer-events-auto"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  <HamburgerIcon />
                </button>
              </div>
            </nav>
          </Container>
        </div>
      </header>

      {/* ── Full-page mobile overlay ─────────────────────────────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 bg-coffee-dark flex flex-col md:hidden animate-menu-fade pointer-events-auto" style={{ zIndex: 200 }}>

          {/* Top bar — logo + close */}
          <div className="flex items-center justify-between px-6 h-16 shrink-0">
            <Link href="/" onClick={close} className="leading-none select-none">
              {content.logo ? (
                <Image
                  src={content.logo.src}
                  alt={content.logo.alt}
                  width={120}
                  height={69}
                  className="h-16 w-auto"
                />
              ) : (
                <span
                  className="text-2xl text-coffee-gold"
                  style={{ fontFamily: "var(--font-logo)" }}
                >
                  {logoText}
                </span>
              )}
            </Link>
            <button
              onClick={close}
              className="flex items-center justify-center w-10 h-10 text-white"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Centered nav links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-5xl font-extralight text-white/90 hover:text-coffee-gold transition-colors duration-200 animate-menu-item"
                style={{
                  fontFamily: "var(--font-display)",
                  animationDelay: `${i * 70}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="px-8 pb-12 flex justify-center animate-menu-item"
            style={{ animationDelay: `${links.length * 70}ms` }}
          >
            <Button
              label={cta.label}
              href={cta.href}
              variant={cta.variant}
              icon={cta.icon}
              className="w-full max-w-xs justify-center text-base"
              onClick={close}
            />
          </div>

        </div>
      )}
    </>
  );
}
