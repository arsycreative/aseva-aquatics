"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      className="section-padding bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
      aria-label="Testimoni klien dan rekanan arsitek"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-champagne-dim" />
            <span className="section-label">BUKTI KREDIBILITAS</span>
            <span className="w-8 h-px bg-champagne-dim" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight">
            Kepercayaan Kolektor
            <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
              & Rekanan Arsitektur
            </span>
          </h2>
        </div>

        {/* Testimonial Showcase Box */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-[#0D0D0D] rounded-3xl border border-white/[0.08] p-10 md:p-16 lg:p-20 text-center shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Subtle quotation emblem */}
            <Quote size={32} className="text-white/20 mx-auto mb-8" />

            {/* Quote Body */}
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
              <span className="font-mono text-[11px] text-neutral-500 mt-1">
                Proyek: {testimonial.project}
              </span>
            </div>

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

          {/* Minimalist Index Indicator */}
          <div className="flex items-center justify-center gap-3 mt-8 font-mono text-xs text-neutral-500">
            <span>0{current + 1}</span>
            <span className="w-12 h-px bg-white/15" />
            <span>0{TESTIMONIALS.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
