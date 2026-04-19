"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journal" ref={ref} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-number">05</span>
              <span className="w-8 h-px bg-neutral-300" />
              <span className="section-label">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Thinking out loud.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-neutral-500 hover:text-black transition-colors flex items-center gap-2 shrink-0"
          >
            All posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white p-7 flex flex-col gap-4 group cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs border border-neutral-200 rounded-full px-3 py-1 text-neutral-500 font-medium">
                  {post.tag}
                </span>
                <span className="text-xs text-neutral-400">{post.readTime}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold text-black leading-snug mb-2 group-hover:text-neutral-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                <span className="text-xs text-neutral-400">{post.date}</span>
                <span className="text-xs font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
