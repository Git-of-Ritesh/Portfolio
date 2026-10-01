"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projects as allProjects } from "@/lib/data";
import StoreButtons from "@/components/StoreButtons";
import LoadingImage from "@/components/LoadingImage";

type Project = (typeof allProjects)[number];

/* ─────────────────────────────────────────────
   Stacking Card

   Based on the Olivier Larose "cards parallax"
   pattern (awwwards-winning technique):

   1. The PARENT section tracks overall scroll
      progress and passes it to every card.
   2. Each card computes its own scale from that
      shared progress using a per-card `range`.
   3. Cards are sticky with incremental top
      offsets, so each new card slides over the
      previous one while the previous card scales
      down underneath.
   ───────────────────────────────────────────── */
function StackCard({
  project,
  index,
  total,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  targetScale: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Per-card scroll — used for the entrance image zoom
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Scale driven by the PARENT's scroll progress (shared across all cards)
  const scale = useTransform(progress, range, [1, targetScale]);
  // Image zoom on entrance
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <div ref={cardRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(4vh + ${index * 25}px)`,
        }}
        className="relative flex flex-col origin-top w-full max-w-6xl"
      >
        {/* ── Desktop card ── */}
        <div className="hidden md:block">
          <div
            className="relative overflow-hidden rounded-[20px] bg-neutral-950 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.18)]"
            style={{ height: "600px" }}
          >
            <div className="grid h-full grid-cols-[1.15fr_0.6fr]">
              {/* Left — mockup image (≈65%) */}
              <div className="relative overflow-hidden">
                {project.imageUrl && (
                  <motion.div style={{ scale: imageScale }} className="absolute inset-0 origin-center">
                    <LoadingImage
                      src={project.imageUrl}
                      alt={`${project.title} app mockup`}
                      fill
                      priority={index === 0}
                      sizes="65vw"
                      className="object-cover"
                    />
                  </motion.div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-950/90" />
              </div>

              {/* Right — project info (≈35%) */}
              <div className="relative z-10 flex flex-col justify-center px-10 py-10 lg:px-14">
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-mono text-xs text-white/50">
                    /{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-white/20" />
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold leading-tight text-white lg:text-3xl xl:text-[2.4rem]">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60 lg:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <StoreButtons
                    appStoreLink={project.appStoreLink}
                    playStoreLink={project.playStoreLink}
                    variant="light"
                  />
                  <Link
                    href={project.caseStudyLink}
                    scroll
                    className="inline-flex min-h-10 items-center text-sm font-semibold text-white transition-colors hover:text-white/70"
                  >
                    View case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ml-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile card (no sticky stacking — clean vertical list) ── */}
        <div className="md:hidden">
          <div className="overflow-hidden rounded-2xl bg-neutral-950 shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
              {project.imageUrl && (
                <motion.div style={{ scale: imageScale }} className="absolute inset-0 origin-center">
                  <LoadingImage
                    src={project.imageUrl}
                    alt={`${project.title} app mockup`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/40" />
            </div>
            <div className="px-5 pb-8 pt-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-white/50">
                  /{String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-white/20" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                  {project.category}
                </span>
              </div>
              <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col items-start gap-4">
                <StoreButtons
                  appStoreLink={project.appStoreLink}
                  playStoreLink={project.playStoreLink}
                  variant="light"
                />
                <Link
                  href={project.caseStudyLink}
                  scroll
                  className="inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-white/70"
                >
                  View case study
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Projects section ─── */
export default function Projects({
  limit,
  isFullPage = false,
}: {
  limit?: number;
  isFullPage?: boolean;
}) {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });
  const displayProjects = limit ? allProjects.slice(0, limit) : allProjects;

  // ── Parent container scroll — drives ALL card scale animations ──
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (!displayProjects.length) return null;

  return (
    <section
      id="work"
      className={`bg-white ${isFullPage ? "pt-36" : "py-28"}`}
    >
      {/* Section header */}
      <div ref={headerRef} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">03</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">
                {isFullPage ? "Case Study" : "Selected Work"}
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl">
              {isFullPage ? "Flutter work." : "Apps shipped."}
              <br />
              <span className="text-neutral-400">
                {isFullPage ? "Case study." : "Not just designed."}
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500 md:text-right">
              {isFullPage
                ? "Live mobile app work presented through focused case studies."
                : "A focused look at Flutter app projects that moved from implementation to public store listings."}
            </p>
            {!isFullPage && (
              <Link
                href="/work"
                className="group flex items-center gap-2 text-sm font-semibold text-black transition-all hover:gap-3"
              >
                View all work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      {/* Stacking cards container — this ref drives all card animations */}
      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        {displayProjects.map((project, index) => {
          const targetScale = 1 - (displayProjects.length - index) * 0.05;
          const range: [number, number] = [
            index * (1 / displayProjects.length),
            1,
          ];

          return (
            <StackCard
              key={project.id}
              project={project}
              index={index}
              total={displayProjects.length}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
