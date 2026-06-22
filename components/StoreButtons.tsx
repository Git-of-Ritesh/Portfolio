type StoreButtonsProps = {
  appStoreLink: string;
  playStoreLink: string;
  variant?: "dark" | "light";
};

function AppleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 12.5c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.5-.4 6.3 1.1 8.4.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 2-1 2.7-2.1c.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.6-1-2.6-3.4ZM14.5 6.4c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.7-1 1.6-.9 2.6 1 0 1.9-.5 2.5-1.2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.2 3.5c-.4.2-.7.7-.7 1.4v14.2c0 .7.3 1.2.7 1.4l8-8.5-8-8.5Z" fill="currentColor" opacity="0.9" />
      <path d="m14 11.2 2.6-2.8-9.4-5c-.5-.3-1-.3-1.4-.1l8.2 7.9Z" fill="currentColor" opacity="0.65" />
      <path d="m14 12.8-8.2 7.9c.4.2.9.2 1.4-.1l9.4-5-2.6-2.8Z" fill="currentColor" opacity="0.75" />
      <path d="m19.1 10.1-2.5-1.4-2.8 3.3 2.8 3.3 2.5-1.4c1.2-.7 1.2-3.1 0-3.8Z" fill="currentColor" />
    </svg>
  );
}

export default function StoreButtons({ appStoreLink, playStoreLink, variant = "dark" }: StoreButtonsProps) {
  const isLight = variant === "light";
  const buttonClass = isLight
    ? "border-white/18 bg-white/10 text-white hover:bg-white/16"
    : "border-neutral-200 bg-white text-black hover:bg-neutral-50";
  const getExternalLinkProps = (href: string) =>
    href.startsWith("http")
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={appStoreLink}
        {...getExternalLinkProps(appStoreLink)}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${buttonClass}`}
      >
        <AppleIcon />
        App Store
      </a>
      <a
        href={playStoreLink}
        {...getExternalLinkProps(playStoreLink)}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${buttonClass}`}
      >
        <PlayIcon />
        Google Play
      </a>
    </div>
  );
}
