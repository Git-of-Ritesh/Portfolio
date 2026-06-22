"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects as allProjects } from "@/lib/data";
import StoreButtons from "@/components/StoreButtons";

type Project = (typeof allProjects)[number];

function ProjectRevealCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.02, 0.32, 0.48],
    [
      "inset(0vh 13vw 48vh 13vw round 28px)",
      "inset(0vh 4vw 16vh 4vw round 18px)",
      "inset(0vh 0vw 0vh 0vw round 0px)",
    ],
  );
  const imageScale = useTransform(scrollYProgress, [0.02, 0.48, 1], [1.02, 1, 1.025]);
  const contentOpacity = useTransform(scrollYProgress, [0.22, 0.46, 0.86], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.22, 0.46], [24, 0]);
  const metaOpacity = useTransform(scrollYProgress, [0.02, 0.2], [1, 0]);

  return (
    <article ref={ref} className="relative h-[108svh] py-[2svh] md:h-[110vh] md:py-[2vh]">
      <div className="sticky top-0 flex h-[100svh] items-start justify-center overflow-hidden md:h-screen">
        <motion.div
          style={{ clipPath }}
          className="relative isolate h-screen w-screen overflow-hidden bg-black shadow-[0_40px_120px_rgba(0,0,0,0.22)] will-change-transform"
        >
          {project.imageUrl && (
            <motion.div style={{ scale: imageScale }} className="absolute inset-0">
              <Image
                src={project.imageUrl}
                alt={`${project.title} app mockup`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          )}

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.28)_42%,rgba(0,0,0,0.82))] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.74),rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.02))]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(0,0,0,0.62),transparent)]" />

          <motion.div
            style={{ opacity: metaOpacity }}
            className="absolute left-5 top-5 hidden items-center gap-3 rounded-full border border-white/18 bg-black/28 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur md:flex"
          >
            <span>/{project.id}</span>
            <span className="h-px w-8 bg-white/35" />
            <span>{project.title}</span>
          </motion.div>

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute inset-x-0 bottom-0 mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-8 text-white sm:px-6 md:bottom-12 md:grid md:grid-cols-[1fr_0.8fr] md:items-end md:gap-8 md:px-10 md:pb-0 lg:px-12"
          >
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono text-xs text-white/58">/{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-12 bg-white/24" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/64">
                  {project.category}
                </span>
              </div>
              <h3 className="max-w-3xl text-4xl font-bold leading-[0.95] text-white sm:text-5xl md:text-7xl lg:text-8xl">
                {project.title}
              </h3>
            </div>

            <div className="max-w-xl md:justify-self-end">
              <p className="text-sm leading-relaxed text-white/76 sm:text-base md:text-lg">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/16 bg-white/10 px-3 py-1 text-xs font-medium text-white/78 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-8 md:gap-5">
                <StoreButtons
                  appStoreLink={project.appStoreLink}
                  playStoreLink={project.playStoreLink}
                  variant="light"
                />
                <Link
                  href={project.caseStudyLink}
                  scroll
                  className="text-sm font-semibold text-white transition-colors hover:text-white/70"
                >
                  Case study
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}

export default function Projects({ limit, isFullPage = false }: { limit?: number; isFullPage?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const displayProjects = limit ? allProjects.slice(0, limit) : allProjects;

  if (!displayProjects.length) return null;

  return (
    <section id="work" ref={ref} className={`bg-white ${isFullPage ? "pt-36" : "py-28"}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col justify-between gap-8 md:mb-12 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-number">03</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span className="section-label">{isFullPage ? "Case Study" : "Selected Work"}</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl">
              {isFullPage ? "Flutter work." : "Apps shipped."}
              <br />
              <span className="text-neutral-400">{isFullPage ? "Case study." : "Not just designed."}</span>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      <div>
        {displayProjects.map((project, index) => (
          <div key={project.id} className={index > 0 ? "mt-6 md:mt-8" : ""}>
            <ProjectRevealCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
