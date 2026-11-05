"use client";

import Image from "next/image";
import { Eye, Shield, Droplets, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PhilosophySection() {
  return (
    <section
      className="py-24 md:py-32 bg-[#08080A] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Filosofi dan Materialitas ASEVA"
    >
      {/* Background Architectural Mesh */}
      <div className="absolute inset-0 pattern-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Warm Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-champagne/[0.03] rounded-full blur-[170px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — High-Impact Photographic Visual Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group bg-black">
              <Image
                src="/images/journal/kaca-aquarium.jpg"
                alt="Presisi Kaca Kristal Low-Iron ASEVA AQUATICS"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-106"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Floating Architectural Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-champagne border border-white/10 tracking-widest uppercase">
                  PRESTIGE CRAFTSMANSHIP
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-neutral-400 border border-white/10">
                  DEV. &lt; 0.5MM
                </span>
              </div>

              {/* Bottom Visual Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-serif text-base text-white block font-light">
                    Kaca Diamant Ultra-Clear
                  </span>
                  <span className="text-[11px] font-sans text-neutral-400 font-light">
                    Bebas rona hijau · Warna arwana 100% natural
                  </span>
                </div>
                <span className="font-mono text-xs text-champagne font-medium">99.2% OPTIK</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Punchy Visual Narrative & Material Chips (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-5">
              <Sparkles size={11} className="text-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-champagne uppercase font-medium">
                FILOSOFI REKAYASA ATELIER
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight mb-5">
              Bukan Sekadar Kaca.
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim font-light">
                Instalasi Arsitektural Permanen.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-8 max-w-xl">
              Kami memadukan biologi satwa purba dengan fisika gravitasi dan kejernihan kristal tanpa batas pandang. Seluruh jalur hidrolika dan filtrasi tersembunyi total di balik dinding interior Anda.
            </p>

            {/* 3 Material Chips */}
            <div className="space-y-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-champagne">
                    <Eye size={16} />
                  </div>
                  <div>
                    <span className="font-serif text-sm text-white font-light block">Kaca Kristal Rendah Besi</span>
                    <span className="text-[11px] font-sans text-neutral-400">Ketebalan 15mm – 25mm impor Diamant</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-champagne">99.2% Optik</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-champagne">
                    <Droplets size={16} />
                  </div>
                  <div>
                    <span className="font-serif text-sm text-white font-light block">Sirkulasi Sump Tersembunyi</span>
                    <span className="text-[11px] font-sans text-neutral-400">Zero visible pipes · Aliran senyap mutlak</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-neutral-400">&lt; 28 dB</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-champagne">
                    <Shield size={16} />
                  </div>
                  <div>
                    <span className="font-serif text-sm text-white font-light block">Kalkulasi Beban Sipil</span>
                    <span className="text-[11px] font-sans text-neutral-400">Safety factor 3.8× anti kebocoran seumur hidup</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-emerald-400">Teruji Sipil</span>
              </div>
            </div>

            <Link
              href="/aquarium-custom/material-teknologi"
              className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne transition-colors font-medium"
            >
              <span>Pelajari Standar Material Kaca</span>
              <ArrowRight size={13} className="text-champagne" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
