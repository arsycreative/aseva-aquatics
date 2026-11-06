"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      className="py-24 md:py-32 bg-[#08080B] border-t border-white/[0.08] relative overflow-hidden"
      aria-label="Testimoni klien dan rekanan arsitek"
    >
      {/* Subtle Dot Pattern & Ambient Spotlight */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-champagne/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Editorial Top Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3">
            <Sparkles size={11} className="text-champagne" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300">
              REPUTASI KOLEKTOR &amp; ARSITEK
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight">
            Kepercayaan Kolektor &amp;
            <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
              Rekanan Arsitektur
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Showcase Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="relative bg-[#0E0E14] rounded-3xl border border-white/[0.08] p-8 sm:p-12 md:p-16 text-center shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
            {/* Watermark Quote Glyph in background */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18rem] md:text-[22rem] leading-none text-champagne/[0.025] select-none pointer-events-none italic">
              &ldquo;
            </span>

            {/* Emblem */}
            <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-6 text-champagne relative z-10">
              <Quote size={16} />
            </div>

            {/* Quote Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light leading-relaxed italic mb-8 max-w-2xl mx-auto">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Client Signature Profile */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col items-center">
                  <span className="font-serif text-base sm:text-lg text-white font-normal tracking-wide">
                    {testimonial.name}
                  </span>
                  <span className="font-sans text-xs text-neutral-400 tracking-wider uppercase mt-0.5">
                    {testimonial.role} · {testimonial.city}
                  </span>
                  <span className="font-mono text-[10px] text-champagne/80 mt-1 uppercase tracking-wider">
                    Proyek: {testimonial.project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:-left-5 w-10 h-10 rounded-full border border-white/10 bg-black/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all shadow-xl z-20"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:-right-5 w-10 h-10 rounded-full border border-white/10 bg-black/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all shadow-xl z-20"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-7 h-1 bg-champagne" : "w-1.5 h-1 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimoni ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}