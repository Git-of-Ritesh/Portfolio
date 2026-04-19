"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: label + headline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="section-number">{about.sectionNumber}</span>
              <span className="w-8 h-px bg-neutral-300" />
              <span className="section-label">{about.sectionLabel}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
              {about.headline}
            </h2>
          </motion.div>

          {/* Right: paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="text-xl font-medium text-black leading-snug">
              {about.paragraphs[0]}
            </p>
            {about.paragraphs.slice(1).map((p, i) => (
              <p key={i} className="text-neutral-500 leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
