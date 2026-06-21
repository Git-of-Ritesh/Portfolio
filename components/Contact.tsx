"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" ref={ref} className="bg-white py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="section-number">06</span>
              <span className="w-8 h-px bg-neutral-300" />
              <span className="section-label">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              Got a project?
              <br />
              Let&apos;s build it.
            </h2>
            <p className="text-neutral-500 leading-relaxed text-sm mb-10">
              I take on a small number of select projects each quarter.
              If you have something interesting, I&apos;d love to hear about it.
            </p>

            {/* Links */}
            <div className="space-y-3">
              {[
                { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { label: "GitHub", value: "github.com/rajpandey", href: personalInfo.github },
                { label: "LinkedIn", value: "linkedin.com/in/rajpandey", href: personalInfo.linkedin },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-neutral-200 group"
                >
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">
                    {link.label}
                  </span>
                  <span className="text-sm text-black font-medium flex items-center gap-1.5 group-hover:text-neutral-600 transition-colors">
                    {link.value}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {status === "sent" ? (
              <div className="h-full flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Message sent!</h3>
                  <p className="text-neutral-500 text-sm">I&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 bg-white focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about the project..."
                    rows={5}
                    required
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 bg-white focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3">
                  Send message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
