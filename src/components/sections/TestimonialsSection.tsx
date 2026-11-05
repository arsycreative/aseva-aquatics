"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      className="py-28 md:py-36 bg-[#060608] border-t border-white/[0.08] relative overflow-hidden"
      aria-label="Testimoni klien dan rekanan arsitek"
    >
      {/* Subtle Dot Pattern & Ambient Spotlight */}
      <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-champagne/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Editorial Top Headline with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-champagne block mb-3 font-medium">
            REPUTASI &amp; SUARA KOLEKTOR
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
            Kepercayaan Kolektor &amp; Rekanan Arsitek
          </h2>
          <p className="font-sans text-xs md:text-sm text-neutral-400 mt-2 font-light">
            Pengalaman nyata pemilik hunian mewah, villa, dan praktisi arsitektur di Bandung &amp; Jakarta.
          </p>
        </motion.div>

        {/* Testimonial Showcase Box with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="relative bg-[#0A0A0E]/90 rounded-3xl border border-white/[0.08] p-8 md:p-16 lg:p-20 text-center shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
            {/* Subtle quotation emblem */}
            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-8 text-champagne">
              <Quote size={20} />
            </div>

            {/* Quote Body with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white/95 font-light leading-relaxed italic mb-10 max-w-3xl mx-auto">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Client Signature Profile */}
                <div className="pt-8 border-t border-white/[0.08] flex flex-col items-center">
                  <span className="font-serif text-lg text-white font-normal tracking-wide">
                    {testimonial.name}
                  </span>
                  <span className="font-sans text-xs text-neutral-400 tracking-widest uppercase mt-1">
                    {testimonial.role} · {testimonial.city}
                  </span>
                  <span className="font-mono text-[11px] text-champagne/80 mt-1">
                    Proyek: {testimonial.project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/10 bg-black/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 shadow-xl"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/10 bg-black/80 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 shadow-xl"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Direct Interactive Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-1.5 bg-champagne" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Lihat testimoni ke-${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
