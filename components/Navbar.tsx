"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Apps", href: "/work" },
  { label: "Experience", href: "#experience" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();
  const isCaseStudy = pathname.startsWith("/case-study");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setScrolled(currentScrollY > 20);
      setHidden(scrollingDown && currentScrollY > 96 && !mobileOpen);
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {isCaseStudy ? (
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-neutral-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs font-bold tracking-wider">
              {personalInfo.initials}
            </div>
            <span className="text-sm font-semibold text-black">
              {personalInfo.name}
            </span>
          </Link>
        )}

        {/* Desktop nav */}
        {!isCaseStudy && (
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-black transition-colors duration-150 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contact"
            className="btn-primary text-sm px-5 py-2"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile burger */}
        {isCaseStudy ? (
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/#contact" className="btn-primary text-sm px-4 py-2">
              Let&apos;s talk
            </Link>
          </div>
        ) : (
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {!isCaseStudy && mobileOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-black transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary mt-5 w-full justify-center">
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}
