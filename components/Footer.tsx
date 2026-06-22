import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Footer({ reveal = false }: { reveal?: boolean }) {
  const year = new Date().getFullYear();
  const footerClass = reveal
    ? "sticky bottom-0 z-0 min-h-[38svh] bg-black text-white"
    : "bg-black text-white";

  return (
    <footer className={`${footerClass} px-6 py-7 md:py-8`}>
      <div className="mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-between gap-8">
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-bold tracking-wider text-black">
              {personalInfo.initials}
            </div>
            <p className="max-w-md text-lg font-medium leading-relaxed text-white/56">
              Building clean Flutter apps with reliable APIs, Firebase workflows, and store-ready polish.
            </p>
          </div>

          <nav>
            <h2 className="mb-5 text-sm font-semibold text-white">Explore</h2>
            <div className="grid gap-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Skills", href: "/#skills" },
                { label: "Apps", href: "/work" },
                { label: "Experience", href: "/#experience" },
                { label: "Journal", href: "/#journal" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-sm font-semibold text-white/72 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav>
            <h2 className="mb-5 text-sm font-semibold text-white">Contact</h2>
            <div className="grid gap-3">
              {[
                { label: "Email", href: `mailto:${personalInfo.email}` },
                { label: "GitHub", href: personalInfo.github },
                { label: "LinkedIn", href: personalInfo.linkedin },
                { label: "X (Twitter)", href: personalInfo.twitter },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm font-semibold text-white/72 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/#contact" className="transition-colors hover:text-white/75">
              Start a project
            </Link>
            <a href="/resume.pdf" download className="transition-colors hover:text-white/75">
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
