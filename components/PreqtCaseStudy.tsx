"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import StoreButtons from "@/components/StoreButtons";

const project = projects[1];

const buildHighlights = [
  {
    label: "Role",
    value: "Contributor at Webninjaz across Flutter app screens and web admin implementation",
  },
  {
    label: "Product",
    value: "Private equity and pre-IPO platform for deal access, diligence, and investor visibility",
  },
  {
    label: "Frontend",
    value: "Built responsive, data-driven interfaces for investor, promoter, and internal admin workflows",
  },
  {
    label: "Quality",
    value: "Focused on clean UI states, reusable components, API wiring, and maintainable feature delivery",
  },
];

const implementationDetails = [
  {
    title: "Flutter App Contribution",
    body: "Contributed to mobile app features that present deal information, investor-facing data, and account workflows in a clean structure. The focus was keeping financial information readable and predictable on smaller screens.",
  },
  {
    title: "Web Admin Workflows",
    body: "Worked on admin-facing web surfaces used to manage platform data and operational workflows. This included structured forms, tabular information, validations, and screens that support internal review and updates.",
  },
  {
    title: "API Integration",
    body: "Connected UI states to backend responses for loading, success, empty, and error cases. The goal was to make financial and deal data feel stable, even when workflows involved multiple steps.",
  },
  {
    title: "Component Discipline",
    body: "Kept implementation modular with reusable UI pieces for cards, lists, filters, status indicators, and form controls so the app and admin could evolve without repeated one-off screens.",
  },
];

const storeScreenshots = [
  {
    src: "/assets/preqt-store/01.webp",
    alt: "PrEqt Play Store screenshot showing onboarding and pre-IPO investing positioning",
  },
  {
    src: "/assets/preqt-store/02.webp",
    alt: "PrEqt Play Store screenshot showing curated opportunities and deal discovery",
  },
  {
    src: "/assets/preqt-store/03.webp",
    alt: "PrEqt Play Store screenshot showing investor and deal information screens",
  },
  {
    src: "/assets/preqt-store/04.webp",
    alt: "PrEqt Play Store screenshot showing portfolio and opportunity details",
  },
  {
    src: "/assets/preqt-store/05.webp",
    alt: "PrEqt Play Store screenshot showing app workflow and finance information",
  },
  {
    src: "/assets/preqt-store/06.webp",
    alt: "PrEqt Play Store screenshot showing PrEqt mobile app interface",
  },
];

const systemFlow = [
  "Login",
  "Fetch profile",
  "Load deals",
  "Review metrics",
  "Manage records",
  "Update status",
  "Sync UI state",
];

export default function PreqtCaseStudy() {
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

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
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
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] md:text-7xl lg:text-8xl">
              PrEqt.
              <br />
              <span className="text-neutral-400">Developer contribution.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
              A developer-focused case study on my contribution to PrEqt while working at Webninjaz: supporting the Flutter application and web admin surfaces for a private equity and pre-IPO investment platform.
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
            style={{ y: imageY, scale: imageScale }}
            className="relative mt-14 aspect-[4/3] overflow-hidden rounded-lg bg-black shadow-[0_34px_90px_rgba(0,0,0,0.16)] sm:aspect-[16/9] md:mt-18"
          >
            <Image
              src={project.imageUrl}
              alt="PrEqt app and platform mockup"
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
            ["Company", "Contributed during my time at Webninjaz"],
            ["Scope", "Flutter app features, web admin UI, API-connected workflows"],
            ["Domain", "Private equity, pre-IPO deals, investor and promoter operations"],
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
              Built for
              <br />
              <span className="text-neutral-400">serious workflows.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500">
              PrEqt needed product surfaces that could handle investor visibility, deal discovery, due diligence, and internal operations without making dense financial workflows feel chaotic.
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

      <section className="relative bg-white pt-24 md:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-5 px-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">03</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">UI Showcase</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Scroll through
              <br />
              <span className="text-neutral-400">the app UI.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-500 md:text-right">
            Screenshots from the live Play Store listing, shown in their real mobile ratio inside a scroll-led rail.
          </p>
        </div>

        <div
          ref={galleryRef}
          className="relative mt-10 md:mt-12"
          style={{ height: `calc(100svh + ${galleryTravel}px)` }}
        >
        <div
          ref={galleryViewportRef}
          className="sticky top-0 flex h-[100svh] items-center overflow-hidden py-12 md:py-14"
        >
          <div className="w-full overflow-hidden">
            <motion.div
              ref={galleryTrackRef}
              style={{ x: galleryX }}
              className="flex w-max transform-gpu items-center gap-5 px-[max(24px,calc((100vw-72rem)/2+24px))] will-change-transform md:gap-7"
            >
              {storeScreenshots.map((screen, index) => (
                <motion.article
                  key={screen.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                  className="relative aspect-[363/786] h-[min(58vh,620px)] w-auto shrink-0 overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:h-[min(64vh,680px)]"
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, 46vw"
                    className="object-cover"
                  />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="section-number">04</span>
                <span className="h-px w-8 bg-neutral-300" />
                <span className="section-label">Implementation</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Engineering
                <br />
                <span className="text-neutral-400">contribution.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500 md:text-right">
              My contribution was not about owning the whole product alone. It was about shipping reliable pieces inside a real team codebase and keeping the implementation clean enough for handoff and iteration.
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
              <span className="section-number">05</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">System Flow</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              From data
              <br />
              <span className="text-neutral-400">to decisions.</span>
            </h2>
          </div>

          <div className="rounded-lg border border-neutral-200 p-5 md:p-6">
            <div className="flex flex-wrap gap-2">
              {systemFlow.map((step, index) => (
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
                  {index < systemFlow.length - 1 && <span className="hidden h-px w-5 bg-neutral-300 sm:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 pt-24 md:pb-16 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1fr] md:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">06</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">Result</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Complex domain,
              <br />
              <span className="text-neutral-400">clean execution.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-500">
            <p>
              The work strengthened my ability to build inside a finance-heavy product where every screen needs clear hierarchy, reliable state handling, and careful treatment of user trust.
            </p>
            <p>
              Across the Flutter app and web admin, my focus was to contribute maintainable implementation: readable components, consistent UI behavior, and practical handling of real backend data.
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
