"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Ruler, Clock, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROCESS_STEPS = [
  {
    phase: "FASE 01",
    num: "01",
    name: "Survei & Analisis Sipil",
    tagline: "Studi Beban Pelat Lantai & Cahaya Ruang",
    description: "Analisis arah cahaya alami hunian, akses utilitas air-listrik, dan kalkulasi daya dukung beban tonase pelat lantai beton.",
    duration: "3–5 Hari",
    tolerance: "Beban 1.5–3.5 Ton",
    deliverable: "Skematik Struktur & Titik Beban",
    code: "SURVEY-SIPIL",
  },
  {
    phase: "FASE 02",
    num: "02",
    name: "CAD 3D & Hidrolika",
    tagline: "Rancang Pipa Beveled & Sump Senyap",
    description: "Pemodelan 3D fotorealistis terintegrasi kabinet. Simulasi aliran pompa sine-wave dan jalur pipa 45° agar senyap tanpa turbulensi.",
    duration: "7–10 Hari",
    tolerance: "0 Turbulensi / <28dB",
    deliverable: "Blueprint CAD 3D & Jalur Pipa",
    code: "CAD-HIDROLIKA",
  },
  {
    phase: "FASE 03",
    num: "03",
    name: "Fabrikasi & Uji 72 Jam",
    tagline: "Kaca Kristal Diamant & Nat Presisi",
    description: "Pemotongan CNC kaca optik low-iron, perekatan silikon struktural Jerman, dan uji tekanan air statis 72 jam non-stop.",
    duration: "14–21 Hari",
    tolerance: "Deviasi Nat < 0.5 mm",
    deliverable: "Konstruksi Kaca & Uji Kebocoran",
    code: "FABRIKASI-CNC",
  },
  {
    phase: "FASE 04",
    num: "04",
    name: "Instalasi & Serah Terima",
    tagline: "Siklus Biologi & Garansi Resmi",
    description: "Pemasangan bersih di lokasi, stabilisasi parameter air, aklimatisasi bakteri nitrifikasi, dan serah terima sertifikat garansi resmi ASEVA.",
    duration: "3–5 Hari",
    tolerance: "Suhu 27.5°C · pH 6.8–7.0",
    deliverable: "Sertifikat Garansi Resmi",
    code: "COMMISSIONING",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <section
      className="py-24 md:py-32 bg-[#090B10] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Proses kerja arsitektural ASEVA"
    >
      {/* Precision Drafting Dot Matrix Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

      {/* Cool Slate Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-slate-800/[0.12] rounded-full blur-[170px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <Compass size={12} className="text-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                METODOLOGI ARSITEKTURAL
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
              Empat Tahap Realisasi
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Mahakarya Akuarium Presisi
              </span>
            </h2>
          </div>

          <Link
            href="/aquarium-custom/proses"
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne transition-colors font-medium flex-shrink-0"
          >
            <span>Panduan Metodologi Penuh</span>
            <ArrowRight size={13} className="text-champagne" />
          </Link>
        </motion.div>

        {/* 4-Step Interactive Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.phase}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? "bg-[#11141C] border-champagne/60 shadow-xl shadow-black/70"
                    : "bg-[#0C0E14]/80 border-white/[0.06] hover:bg-[#10121A] hover:border-white/15"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="process-active-indicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-champagne via-white to-champagne"
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[10px] tracking-widest uppercase font-medium ${isActive ? "text-champagne" : "text-neutral-500"}`}>
                    {step.phase}
                  </span>
                  <span className="font-serif text-lg text-neutral-600 font-light">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg text-white font-light mb-1.5">
                  {step.name}
                </h3>

                <p className="font-sans text-xs text-neutral-400 font-light leading-snug mb-4 line-clamp-2">
                  {step.tagline}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] font-mono">
                  <span className="text-neutral-500">{step.duration}</span>
                  <span className={`${isActive ? "text-champagne" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                    Inspect →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Architecture Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0D1017] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Summary & Specs (7 cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-champagne text-[10px] font-mono tracking-wider mb-4">
                  <Layers size={11} />
                  <span>DOKUMEN SPESIFIKASI: {current.code}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-3">
                  {current.phase} · {current.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 max-w-xl">
                  {current.description}
                </p>

                <div className="p-3.5 rounded-xl bg-champagne/[0.03] border border-champagne/20 flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-champagne flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-champagne uppercase font-mono block">Hasil Kerja Tahap Ini</span>
                    <span className="text-xs sm:text-sm text-white font-sans font-medium">{current.deliverable}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Precision Technical Telemetry (5 cols) */}
              <div className="lg:col-span-5 bg-black/60 rounded-2xl border border-white/[0.06] p-5 sm:p-6 space-y-3.5">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-neutral-400 font-sans">
                    <Clock size={13} className="text-champagne" />
                    <span>Durasi Kerja</span>
                  </div>
                  <span className="font-mono text-champagne font-medium">{current.duration}</span>
                </div>

                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-neutral-400 font-sans">
                    <Ruler size={13} className="text-champagne" />
                    <span>Toleransi &amp; Standar</span>
                  </div>
                  <span className="font-sans text-neutral-200 text-right">{current.tolerance}</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-0.5">
                  <span className="text-neutral-400 font-sans">Keterlibatan Klien:</span>
                  <span className="font-sans text-white">Review &amp; Persetujuan</span>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <Link
                    href="/konsultasi"
                    className="w-full btn-outline text-xs justify-center py-2.5 flex items-center gap-2 font-medium"
                  >
                    <span>Mulai Diskusi {current.phase}</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}