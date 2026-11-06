"use client";

import { Eye, Droplets, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PhilosophySection() {
  return (
    <section
      className="py-24 md:py-32 bg-[#0A0A0E] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Filosofi ASEVA"
    >
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Warm Smoked Bronze Spotlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-champagne/[0.03] rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Background Watermark Numeral */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] font-serif text-[22vw] leading-none whitespace-nowrap text-white font-light">
        ASEVA
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Architectural Blueprint Graphic Specification (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative p-7 sm:p-9 bg-[#0E0E14] rounded-3xl border border-white/[0.09] shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
              {/* Drafting Header Stamp */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-champagne font-medium">
                  SKEMATIK TEKNIS · ATELIER
                </span>
                <span className="text-neutral-500 font-mono text-[10px]">TOLERANSI &lt; 0.5MM</span>
              </div>

              {/* Architectural Drafting Cross-Section Graphic (SVG) */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.06] mb-6 relative">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-3">
                  <span>POTONGAN SAMBUNGAN NAT</span>
                  <span className="text-champagne">SAFETY FACTOR 3.8×</span>
                </div>

                {/* SVG Blueprint Cross-Section Diagram */}
                <svg viewBox="0 0 280 110" className="w-full h-auto text-neutral-600" fill="none">
                  {/* Grid lines */}
                  <line x1="10" y1="20" x2="270" y2="20" stroke="currentColor" strokeDasharray="2 3" opacity="0.3" />
                  <line x1="10" y1="55" x2="270" y2="55" stroke="currentColor" strokeDasharray="2 3" opacity="0.3" />
                  <line x1="10" y1="90" x2="270" y2="90" stroke="currentColor" strokeDasharray="2 3" opacity="0.3" />
                  
                  {/* Glass Pane 1 (Horizontal bottom) */}
                  <rect x="20" y="70" width="240" height="24" rx="2" fill="#181822" stroke="#4A4A58" strokeWidth="1" />
                  {/* Glass Pane 2 (Vertical side wall) */}
                  <rect x="35" y="15" width="24" height="65" rx="2" fill="#1F202E" stroke="#D92338" strokeWidth="1.2" />

                  {/* German Structural Silicone Joint */}
                  <rect x="35" y="70" width="24" height="10" fill="#D92338" fillOpacity="0.8" />
                  
                  {/* Annotations */}
                  <path d="M 65 30 L 110 30" stroke="#D92338" strokeWidth="0.8" strokeDasharray="1 2" />
                  <circle cx="65" cy="30" r="2" fill="#D92338" />
                  <text x="116" y="33" fill="#D4D4D8" fontSize="8" fontFamily="monospace">Low-Iron Crystal (19mm)</text>

                  <path d="M 65 75 L 140 75" stroke="#D92338" strokeWidth="0.8" strokeDasharray="1 2" />
                  <circle cx="65" cy="75" r="2" fill="#D92338" />
                  <text x="146" y="78" fill="#D92338" fontSize="8" fontFamily="monospace">Silikon Nat Jerman &lt;0.5mm</text>
                </svg>
              </div>

              {/* Atelier Core Creed */}
              <blockquote className="font-serif text-lg sm:text-xl text-white font-light italic leading-snug mb-5">
                &ldquo;Bukan sekadar wadah air — melainkan instalasi arsitektur permanen bergaransi seumur hidup.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                  Diverifikasi Insinyur Sipil
                </span>
                <span className="font-mono text-[10px] text-champagne">
                  ISO / DIN 32622
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Telemetry Chips (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                FILOSOFI REKAYASA ATELIER
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-[1.12] mb-5">
              Ekosistem Hidup sebagai
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Pusat Ketenangan Ruang Anda.
              </span>
            </h2>

            {/* Cut text from 2 essay paragraphs down to 1 crisp, scannable statement */}
            <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-8 max-w-xl">
              Kami menolak konsep akuarium bising dengan kabel berantakan. Setiap instalasi ASEVA dihitung selaras beban tonase struktur hunian, dengan sistem sirkulasi senyap yang terselubung rapi di balik dinding arsitektur.
            </p>

            {/* 3 Tactile Telemetry Gauge Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              {/* Chip 1 */}
              <div className="p-4 rounded-2xl bg-[#0D0D12] border border-white/[0.06] hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-champagne uppercase font-medium">Akustik</span>
                  <Droplets size={13} className="text-champagne" />
                </div>
                <span className="font-serif text-base text-white block mb-0.5 font-light">
                  &lt; 28 dB Senyap
                </span>
                <p className="text-[11px] text-neutral-400 font-sans font-light">
                  Pompa sine-wave bebas dengung
                </p>
              </div>

              {/* Chip 2 */}
              <div className="p-4 rounded-2xl bg-[#0D0D12] border border-white/[0.06] hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-champagne uppercase font-medium">Optik</span>
                  <Eye size={13} className="text-champagne" />
                </div>
                <span className="font-serif text-base text-white block mb-0.5 font-light">
                  99.2% Kaca Kristal
                </span>
                <p className="text-[11px] text-neutral-400 font-sans font-light">
                  Low-iron tanpa bias kehijauan
                </p>
              </div>

              {/* Chip 3 */}
              <div className="p-4 rounded-2xl bg-[#0D0D12] border border-white/[0.06] hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-champagne uppercase font-medium">Sipil</span>
                  <Shield size={13} className="text-champagne" />
                </div>
                <span className="font-serif text-base text-white block mb-0.5 font-light">
                  0 Pipa Terekspos
                </span>
                <p className="text-[11px] text-neutral-400 font-sans font-light">
                  Filtrasi tertutup kabinet arsitektural
                </p>
              </div>
            </div>

            <Link
              href="/aquarium-custom/material-teknologi"
              className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne transition-colors font-medium"
            >
              <span>Pelajari Standar Material &amp; Kaca</span>
              <ArrowRight size={13} className="text-champagne" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}