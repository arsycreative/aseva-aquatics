"use client";

import { Activity, Eye, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section
      className="py-28 md:py-36 bg-[#090807] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Filosofi ASEVA"
    >
      {/* Architectural Grid Pattern with radial mask fade */}
      <div className="absolute inset-0 pattern-grid opacity-35 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Warm Smoked Bronze Spotlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/[0.035] rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Background Watermark Numeral */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-serif text-[24vw] leading-none whitespace-nowrap text-white font-light">
        A S E V A
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Manifest Frame with Scroll Motion (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative p-8 md:p-12 bg-[#0E0D0B]/95 rounded-3xl border border-white/[0.09] backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
              {/* Header inside manifesto */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-champagne font-medium">
                  MANIFIESTO ATELIER · NO. 01
                </span>
                <span className="text-neutral-500 font-mono text-[10px]">EST. BANDUNG</span>
              </div>

              <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed font-light italic mb-8">
                &ldquo;Bukan sekadar dekorasi air — ini adalah perpaduan presisi antara biologi satwa purba, fisika gravitasi, dan keindahan seni rupa.&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="font-serif text-base text-white block font-light">ASEVA AQUATICS</span>
                  <span className="font-sans text-[10px] text-neutral-400 tracking-widest uppercase">
                    Prinsip Rekayasa Hidrologi Ruang
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-champagne/30 bg-champagne/[0.06] flex items-center justify-center">
                  <span className="text-[10px] text-champagne font-serif">✦</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Narrative & 3 Tactile Telemetry Milestones with Scroll Motion (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-champagne-dim block mb-3 font-medium">
              FILOSOFI ATELIER &amp; REKAYASA RUANG
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light leading-[1.1] mb-6">
              Ekosistem Hidup sebagai
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Pusat Ketenangan &amp; Keindahan Ruang.
              </span>
            </h2>

            <div className="space-y-4 text-neutral-400 font-sans text-xs md:text-sm leading-relaxed font-light mb-10">
              <p>
                ASEVA AQUATICS hadir dari penolakan terhadap konsep akuarium komersial biasa yang berantakan kabel, bising oleh getaran pompa, dan sekadar kaca rakitan. Kami memandang akuarium mewah sebagai <strong className="text-white font-normal">instalasi arsitektural permanen</strong> yang menuntut perhitungan beban tonase sipil, peredaman hidrolika, dan kejernihan optik kristal.
              </p>
              <p>
                Setiap karya di Bandung, Jakarta, dan Jawa Barat dirancang selaras dengan masterplan arsitek dan desainer interior Anda. Seluruh teknologi penopang kehidupan (<em>life-support system</em>) tersembunyi sempurna di balik dinding dan panel artistik.
              </p>
            </div>

            {/* 3 Tactile Telemetry Gauge Cards with Staggered Scroll Motion */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/[0.08] pt-6">
              {/* Gauge 1: Acoustics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-champagne font-medium">Sine-Wave</span>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-1.5 bg-champagne rounded-full animate-pulse" />
                    <span className="w-0.5 h-3 bg-champagne rounded-full" />
                    <span className="w-0.5 h-2 bg-champagne rounded-full" />
                  </div>
                </div>
                <span className="font-serif text-base text-white block mb-0.5 font-light">
                  Hidrolika Senyap
                </span>
                <p className="text-[11px] text-neutral-400 font-sans font-light">
                  Pompa getaran teredam tanpa dengung motor
                </p>
              </motion.div>

              {/* Gauge 2: Optic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-champagne font-medium">99.2% Optik</span>
                  <Eye size={12} className="text-champagne" />
                </div>
                <span className="font-serif text-base text-white block mb-0.5 font-light">
                  Low-Iron Crystal
                </span>
                <p className="text-[11px] text-neutral-400 font-sans font-light">
                  Kaca bebas rona kehijauan, warna air 100% murni
                </p>
              </motion.div>

              {/* Gauge 3: Zero Piping */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-champagne font-medium">0 Pipa Terlihat</span>
                  <Sparkles size={12} className="text-champagne" />
                </div>
                <span className="font-serif text-base text-white block mb-0.5 font-light">
                  Sistem Dry-Wet
                </span>
                <p className="text-[11px] text-neutral-400 font-sans font-light">
                  Semua jalur sirkulasi terselubung di dalam kabinet
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
