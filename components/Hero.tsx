"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo, stats, techTicker } from "@/lib/data";

function TechTicker() {
  const items = [...techTicker, ...techTicker];

  return (
    <div className="relative overflow-hidden bg-white py-7 border-y border-neutral-200">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {items.map((tech, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-2xl font-semibold text-neutral-500 tracking-tight px-10">
              {tech}
            </span>
            <span className="text-neutral-300 text-2xl font-light select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 border border-neutral-200 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs text-neutral-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-8 text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.1] tracking-tight text-black"
        >
          {personalInfo.role}
        </motion.h1>

        {/* Bottom row: tagline + CTA */}
        <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-neutral-500 text-base leading-relaxed max-w-sm"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-3 shrink-0"
          >
            <a href="#work" className="btn-primary">
              View Projects
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
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-6 py-5 flex flex-col gap-1"
            >
              <span className="text-2xl font-bold text-black tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech ticker */}
      <TechTicker />
    </section>
  );
}
