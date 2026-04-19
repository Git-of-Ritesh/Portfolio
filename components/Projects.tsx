"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

function IPhoneMockup({ 
  imageUrl, 
  content 
}: { 
  imageUrl?: string | null; 
  content: { headline: string; subline: string } 
}) {
  return (
    <div className="iphone-mockup mx-auto">
      {!imageUrl && <div className="iphone-notch" />}
      <div className={`iphone-screen bg-white ${imageUrl ? "p-[1px]" : ""}`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="App Screenshot" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col justify-between p-6 pt-16 h-full">
            {/* App header */}
            <div>
              <div className="w-12 h-12 bg-black rounded-2xl mb-5" />
              <h3 className="text-xl font-bold text-black leading-tight mb-1">
                {content.headline}
              </h3>
              <p className="text-xs text-neutral-400">{content.subline}</p>
            </div>

            {/* Fake cards */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-neutral-50 rounded-xl p-3 border border-neutral-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-200" />
                    <div className="space-y-1">
                      <div className="w-20 h-2 bg-neutral-200 rounded" />
                      <div className="w-14 h-1.5 bg-neutral-100 rounded" />
                    </div>
                  </div>
                  <span className="text-xs text-black font-medium border border-black rounded-full px-2 py-0.5">
                    Open
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="flex justify-around pt-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full ${
                    i === 0 ? "bg-black" : "bg-neutral-200"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const project = projects[active];

  return (
    <section id="work" ref={ref} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-number">03</span>
              <span className="w-8 h-px bg-neutral-300" />
              <span className="section-label">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Apps shipped.
              <br />
              <span className="text-neutral-400">Not just designed.</span>
            </h2>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-xs md:text-right">
            A small selection of recent projects. Each was built end-to-end — from first sketch to App Store release.
          </p>
        </div>

        {/* Project tabs */}
        <div className="flex gap-2 mb-16 flex-wrap">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                active === i
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-black"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Project display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              <IPhoneMockup 
                imageUrl={project.imageUrl} 
                content={project.mockupContent} 
              />
            </motion.div>

            {/* Project info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-neutral-400">
                  /{project.id}
                </span>
                <span className="w-12 h-px bg-neutral-200" />
                <span className="text-xs text-neutral-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-5xl font-bold text-black">{project.title}</h3>

              <p className="text-neutral-500 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-neutral-200 rounded-full px-3 py-1 text-neutral-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-2">
                <a
                  href={project.appStoreLink}
                  className="flex items-center gap-1.5 text-sm font-medium text-black hover:text-neutral-600 transition-colors"
                >
                  App Store
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a
                  href={project.caseStudyLink}
                  className="flex items-center gap-1.5 text-sm font-medium text-black hover:text-neutral-600 transition-colors"
                >
                  Case study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project nav dots */}
        <div className="flex justify-center gap-2.5 mt-16">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-200 rounded-full ${
                active === i
                  ? "w-6 h-2 bg-black"
                  : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
