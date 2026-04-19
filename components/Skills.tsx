"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-number">02</span>
              <span className="w-8 h-px bg-neutral-300" />
              <span className="section-label">Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Tools I reach for daily.
            </h2>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-xs md:text-right">
            A focused toolkit, sharpened over years of shipping.
            <br />
            No buzzword soup.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-black">
                  {cat.category}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {cat.id}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-neutral-600 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-black group cursor-default"
                  >
                    <span className="w-5 h-px bg-neutral-300 shrink-0 transition-all duration-300 group-hover:w-8 group-hover:bg-black" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
