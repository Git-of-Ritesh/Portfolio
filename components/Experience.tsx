"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-number">04</span>
            <span className="w-8 h-px bg-neutral-300" />
            <span className="section-label">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Where I&apos;ve shipped.
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative grid md:grid-cols-[200px_1fr] gap-8 py-10 border-t border-neutral-200 last:border-b group"
            >
              {/* Left: meta */}
              <div className="space-y-1">
                <p className="text-xs text-neutral-400 font-mono">{item.period}</p>
                <p className="text-xs font-medium text-black">{item.duration}</p>
                <p className="text-xs text-neutral-400">{item.location}</p>
              </div>

              {/* Right: content */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-black">{item.role}</h3>
                    <p className="text-neutral-500 text-sm">{item.company}</p>
                  </div>
                </div>
                <p className="max-w-3xl text-neutral-500 leading-relaxed text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-neutral-200 rounded-full px-3 py-1 text-neutral-500 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
