import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
            {personalInfo.initials}
          </div>
          <span className="text-sm text-neutral-500">{personalInfo.name}</span>
        </div>

        <p className="text-xs text-neutral-400">
          © {year} · Designed & built with care
        </p>

        <div className="flex items-center gap-4">
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "Twitter", href: personalInfo.twitter },
            { label: "LinkedIn", href: personalInfo.linkedin },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
