"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import StoreButtons from "@/components/StoreButtons";

const project = projects[0];

const storyCards = [
  {
    src: "/assets/mockups/160_1x_shots_so.png",
    alt: "Malahat ambassador dashboard overview",
  },
  {
    src: "/assets/mockups/300_1x_shots_so.png",
    alt: "Malahat referral link and code share screen",
  },
  {
    src: "/assets/mockups/562_1x_shots_so.png",
    alt: "Malahat ambassador referral list and status",
  },
  {
    src: "/assets/mockups/610_1x_shots_so.png",
    alt: "Malahat earnings, rewards, and cash out page",
  },
  {
    src: "/assets/mockups/868_1x_shots_so.png",
    alt: "Malahat ambassador profile and settings",
  },
  {
    src: "/assets/mockups/971_1x_shots_so.png",
    alt: "Malahat membership tier and benefits sheet",
  },
];

const buildHighlights = [
  {
    label: "Frontend",
    value: "Flutter app with reusable dashboard, chart, list, and profile modules",
  },
  {
    label: "State",
    value: "Feature-scoped state for referrals, commissions, tiers, and user profile",
  },
  {
    label: "Backend",
    value: "Firebase-backed auth, user records, referral events, and payout status",
  },
  {
    label: "Quality",
    value: "Responsive layouts, empty states, loading states, and release-ready motion polish",
  },
];

const implementationDetails = [
  {
    title: "Data Modeling",
    body: "Structured ambassador profiles, referral codes, ticket counts, commission states, and tier thresholds so the UI could render directly from predictable domain objects.",
  },
  {
    title: "State & Screens",
    body: "Split the app into focused feature surfaces: Home, Referrals, Earnings, Profile, and Tier Benefits. Each screen owns its loading, error, empty, and success states.",
  },
  {
    title: "Referral Flow",
    body: "Built the share flow around a stable referral code, copy action, WhatsApp handoff, and generic native share fallback so ambassadors can send links quickly.",
  },
  {
    title: "Performance",
    body: "Kept heavy dashboard sections lightweight with composed widgets, stable sizing, and restrained animations to avoid jank on mid-range Android devices.",
  },
];

const engineeringFlow = [
  "Authenticate ambassador",
  "Fetch profile + tier",
  "Resolve referral code",
  "Aggregate tickets",
  "Calculate commissions",
  "Render dashboard",
  "Track payout status",
];

function PhoneMockup({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 380px, 72vw"
        className="object-contain"
      />
    </div>
  );
}

export default function MalahatCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryViewportRef = useRef<HTMLDivElement>(null);
  const galleryTrackRef = useRef<HTMLDivElement>(null);
  const [galleryTravel, setGalleryTravel] = useState(0);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-80px" });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const updateTravel = () => {
      const viewport = galleryViewportRef.current;
      const track = galleryTrackRef.current;

      if (!viewport || !track) return;

      setGalleryTravel(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    updateTravel();

    const resizeObserver = new ResizeObserver(updateTravel);
    if (galleryViewportRef.current) resizeObserver.observe(galleryViewportRef.current);
    if (galleryTrackRef.current) resizeObserver.observe(galleryTrackRef.current);
    window.addEventListener("resize", updateTravel);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTravel);
    };
  }, []);

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const galleryX = useTransform(galleryProgress, [0, 1], [0, -galleryTravel]);

  return (
    <main className="bg-white text-black">
      <section ref={heroRef} className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">01</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">Case Study</span>
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.94] md:text-7xl lg:text-8xl">
              Elevate & Earn.
              <br />
              <span className="text-neutral-400">Built for ambassadors.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
              A clean mobile dashboard for referral sales, commissions, tier progress, and event discovery. The design keeps dense business data readable without losing a premium travel feel.
            </p>
            <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex w-full justify-end md:ml-auto md:w-auto">
                <StoreButtons
                  appStoreLink={project.appStoreLink}
                  playStoreLink={project.playStoreLink}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: phoneY, scale: phoneScale }}
            className="relative mt-14 aspect-[4/3] overflow-hidden rounded-lg bg-black shadow-[0_34px_90px_rgba(0,0,0,0.16)] sm:aspect-[16/9] md:mt-18"
          >
            <Image
              src={project.imageUrl}
              alt="Malahat app hero mockup"
              fill
              priority
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.18))]" />
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 md:grid-cols-3">
          {[
            ["Role", "Flutter developer, app architecture, Firebase integration"],
            ["Problem", "Make ambassador earnings, referrals, and tiers reliable at a glance"],
            ["Outcome", "A production-ready ambassador app with clean flows and maintainable modules"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              className="bg-white p-6 md:p-8"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">{label}</p>
              <p className="text-xl font-semibold leading-snug text-black">{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.78fr_1fr] md:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">02</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">Development</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Built like
              <br />
              <span className="text-neutral-400">a real product.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500">
              My work was not only visual polish. The core task was turning referral, ticket, tier, and commission logic into a dependable mobile experience.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
            {buildHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="bg-white p-6"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">{item.label}</p>
                <p className="text-base font-semibold leading-snug text-black">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={galleryRef}
        className="relative bg-white pt-24 md:pt-32"
        style={{ height: `calc(100svh + ${galleryTravel * 0.55}px)` }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-5 px-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Scroll through
            <br />
            <span className="text-neutral-400">the app UI.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-500 md:text-right">
            Six real app screens aligned in one clean horizontal rail.
          </p>
        </div>

        <div
          ref={galleryViewportRef}
          className="sticky top-16 mt-10 flex h-[calc(100svh-4rem)] items-center overflow-hidden py-12 md:mt-12 md:py-14"
        >
          <div className="w-full overflow-hidden">
            <motion.div
              ref={galleryTrackRef}
              style={{ x: galleryX }}
              className="flex w-max items-center gap-5 px-[max(24px,calc((100vw-72rem)/2+24px))] will-change-transform md:gap-7"
            >
            {storyCards.map((screen, index) => (
              <motion.article
                key={screen.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                className="relative flex h-[min(58vh,620px)] aspect-[9/16] w-auto shrink-0 items-center justify-center md:h-[min(64vh,680px)]"
              >
                <PhoneMockup
                  src={screen.src}
                  alt={screen.alt}
                  priority={index === 0}
                />
              </motion.article>
            ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="section-number">03</span>
                <span className="h-px w-8 bg-neutral-300" />
                <span className="section-label">Implementation</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Engineering
                <br />
                <span className="text-neutral-400">decisions.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500 md:text-right">
              The app needed to stay understandable for users and maintainable for future features like payouts, analytics, and event campaigns.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 md:grid-cols-2">
            {implementationDetails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="bg-white p-7 md:p-8"
              >
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1fr] md:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">04</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">System Flow</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              From data
              <br />
              <span className="text-neutral-400">to dashboard.</span>
            </h2>
          </div>

          <div className="rounded-lg border border-neutral-200 p-5 md:p-6">
            <div className="flex flex-wrap gap-2">
              {engineeringFlow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
                  className="flex items-center gap-2"
                >
                  <span className="rounded-full border border-neutral-200 px-3 py-2 text-xs font-semibold text-black">
                    {step}
                  </span>
                  {index < engineeringFlow.length - 1 && <span className="hidden h-px w-5 bg-neutral-300 sm:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1fr] md:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">05</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">Result</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Premium,
              <br />
              <span className="text-neutral-400">but practical.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-500">
            <p>
              The final UI keeps the business layer obvious: ambassadors can see what they sold, what they earned, what is pending, and what event is active without hunting through screens.
            </p>
            <p>
              The visual system stays close to the portfolio theme: strong black, soft neutral surfaces, measured type, and small moments of color only where the app needs feedback.
            </p>
            <Link href="/#work" className="inline-flex text-sm font-semibold text-black transition-colors hover:text-neutral-500">
              Back to selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
