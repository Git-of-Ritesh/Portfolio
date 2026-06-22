"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";

function SendPlaneOverlay({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-white/90 backdrop-blur-sm"
          aria-hidden="true"
        >
          <div className="relative h-56 w-full max-w-xl overflow-hidden">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
              className="absolute left-[12%] top-1/2 h-px w-[72%] origin-left bg-black/18"
            />
            <motion.div
              initial={{ x: "-35vw", y: 64, rotate: -18, scale: 0.86 }}
              animate={{
                x: ["-35vw", "0vw", "36vw"],
                y: [64, -20, -86],
                rotate: [-18, 5, 18],
                scale: [0.86, 1, 0.92],
              }}
              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 -ml-9 -mt-9 flex h-18 w-18 items-center justify-center rounded-2xl bg-black text-white shadow-[0_28px_80px_rgba(0,0,0,0.24)]"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: [0, 1, 1, 0], y: [16, 0, 0, -10] }}
              transition={{ duration: 1.35, ease: "easeOut" }}
              className="absolute inset-x-0 bottom-6 text-center"
            >
              <p className="text-sm font-semibold text-black">Preparing your message</p>
              <p className="mt-1 text-xs text-neutral-500">Opening your email app...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSendAnimation, setShowSendAnimation] = useState(false);

  useEffect(() => {
    if (!showSendAnimation) return;

    const hideTimer = window.setTimeout(() => {
      setShowSendAnimation(false);
    }, 1500);

    return () => window.clearTimeout(hideTimer);
  }, [showSendAnimation]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Contact form is not configured.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    setShowSendAnimation(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Raj Pandey Portfolio",
          subject: `Portfolio project inquiry from ${name || "a visitor"}`,
          name,
          email,
          message,
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message could not be sent.");
      }

      form.reset();
      window.setTimeout(() => setStatus("sent"), 900);
    } catch (error) {
      window.setTimeout(() => {
        setStatus("error");
        setErrorMessage(error instanceof Error ? error.message : "Message could not be sent.");
      }, 900);
    }
  }

  return (
    <section id="contact" ref={ref} className="bg-white py-28 md:py-36">
      <SendPlaneOverlay show={showSendAnimation} />
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
                { label: "Email", value: personalInfo.emailLabel, href: `mailto:${personalInfo.email}` },
                { label: "GitHub", value: personalInfo.githubLabel, href: personalInfo.github },
                { label: "LinkedIn", value: personalInfo.linkedinLabel, href: personalInfo.linkedin },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                {status === "error" && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </p>
                )}
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center py-3 disabled:pointer-events-none disabled:opacity-60">
                  {status === "sending" ? "Sending..." : "Send message"}
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
