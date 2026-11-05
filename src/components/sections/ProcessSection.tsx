"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, CheckCircle2, Clock, Ruler, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEP_DETAILS = [
  {
    phase: "FASE 01",
    num: "01",
    name: "Survei Spasial & Beban Sipil",
    summary: "Analisis arah cahaya alami hunian, akses kelistrikan, dan daya dukung tonase pelat lantai beton.",
    deliverable: "Skematik Struktur & Rekomendasi Titik Beban",
    duration: "3–5 Hari",
    tolerance: "Kapasitas Beban 1.5–3.5 Ton",
    image: "/images/aquarium-interior.jpg",
    imageCaption: "Analisis integrasi arsitektur interior ruang tamu",
    badge: "STUDI KELAYAKAN SIPIL",
  },
  {
    phase: "FASE 02",
    num: "02",
    name: "Rancang 3D CAD & Hidrolika",
    summary: "Pemodelan 3D terintegrasi kabinet, jalur pipa beveled 45°, debit pompa sine-wave, dan ruang sump senyap.",
    deliverable: "Blueprint CAD 3D & Spesifikasi Jalur Pipa",
    duration: "7–10 Hari",
    tolerance: "Arus Laminar 0 Turbulensi",
    image: "/images/journal/kaca-aquarium.jpg",
    imageCaption: "Perancangan presisi sambungan sudut kaca kristal",
    badge: "BLUEPRINT ARSITEKTUR",
  },
  {
    phase: "FASE 03",
    num: "03",
    name: "Fabrikasi & Uji Tekanan 72 Jam",
    summary: "Pemotongan kaca optik kristal low-iron CNC, perekatan silikon Jerman, dan tes kedap statis 72 jam non-stop.",
    deliverable: "Konstruksi Kaca Diamant & Sambungan Nat Presisi",
    duration: "14–21 Hari",
    tolerance: "Deviasi Nat < 0.5 mm",
    image: "/images/projects/prj-002.jpg",
    imageCaption: "Konstruksi partisi akuarium dua muka terpasang kokoh",
    badge: "STANDAR MUTU ATELIER",
  },
  {
    phase: "FASE 04",
    num: "04",
    name: "Instalasi & Serah Terima",
    summary: "Pemasangan bersih di lokasi, stabilisasi siklus biologi nitrifikasi, dan sertifikat garansi kebocoran resmi ASEVA.",
    deliverable: "Sertifikat Garansi Struktur & Panduan Parameter",
    duration: "3–5 Hari",
    tolerance: "Suhu 27.5°C · pH 6.8–7.0",
    image: "/images/projects/prj-001.jpg",
    imageCaption: "Akuarium dinding terpasang sempurna pada interior villa",
    badge: "SERAH TERIMA RESMI",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEP_DETAILS[activeStep];

  return (
    <section
      className="py-24 md:py-32 bg-[#060608] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Proses kerja ASEVA"
    >
      {/* Precision Drafting Dot Matrix Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-champagne/[0.025] rounded-full blur-[170px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
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
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-1 transition-all duration-300 flex-shrink-0 font-medium"
          >
            <span>Panduan Metodologi Penuh</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </motion.div>

        {/* Phase Selectors Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
        >
          {STEP_DETAILS.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.phase}
                onClick={() => setActiveStep(index)}
                className={`p-4 md:p-5 rounded-2xl text-left border transition-all duration-500 relative overflow-hidden ${
                  isActive
                    ? "bg-[#121216] border-champagne/60 shadow-xl shadow-black/80"
                    : "bg-[#09090C]/80 border-white/[0.06] hover:bg-[#0E0E12] hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-step-indicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-champagne via-white to-champagne"
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-[10px] tracking-widest uppercase font-medium ${isActive ? "text-champagne" : "text-neutral-500"}`}>
                    {step.phase}
                  </span>
                  <span className="font-serif text-base text-neutral-600 font-light">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif text-sm sm:text-base text-white font-light truncate">
                  {step.name.split("&")[0]}
                </h3>
              </button>
            );
          })}
        </motion.div>

        {/* Visual Photographic Stage Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0A0A0E] rounded-3xl border border-white/[0.08] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Big Photographic Stage */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] bg-black overflow-hidden group">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/70 hidden lg:block" />

                {/* Top Overlay Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono">
                  <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-champagne border border-white/10 tracking-widest uppercase font-medium">
                    {current.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-neutral-300 border border-white/10">
                    STEP {current.num} / 04
                  </span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                  <span className="text-[11px] font-sans text-neutral-300 font-light block">
                    {current.imageCaption}
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial Precision & Specs */}
              <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-champagne text-[10px] font-mono tracking-wider mb-3">
                    <Sparkles size={10} />
                    <span>TAHAPAN PROSES {current.num}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-3">
                    {current.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {current.summary}
                  </p>

                  {/* Visual Spec Cards */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs text-neutral-400 font-sans">
                        <Clock size={14} className="text-champagne flex-shrink-0" />
                        <span>Estimasi Durasi</span>
                      </div>
                      <span className="font-mono text-xs text-white font-medium">{current.duration}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs text-neutral-400 font-sans">
                        <Ruler size={14} className="text-champagne flex-shrink-0" />
                        <span>Presisi &amp; Standar</span>
                      </div>
                      <span className="font-sans text-xs text-neutral-200 text-right">{current.tolerance}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-champagne/[0.03] border border-champagne/20 flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-champagne flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-champagne uppercase font-mono block">Hasil Kerja Fase</span>
                        <span className="text-xs text-white font-sans font-medium">{current.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href="/konsultasi"
                    className="w-full btn-outline text-xs justify-center py-2.5 flex items-center gap-2"
                  >
                    <span>Mulai Diskusi {current.phase}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}