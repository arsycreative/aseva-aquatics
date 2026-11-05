"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Layers, Wrench, CheckCircle, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const stepDetails = [
    {
      phase: "FASE 01",
      name: "Visi & Analisis Spasial",
      deliverable: "Survei Beban Struktur & Skematik Awal",
      duration: "3–5 Hari",
      tolerance: "Toleransi Beban Lantai 1.5–3.5 Ton",
      highlight:
        "Analisis mendalam mengenai arah cahaya alami, akses listrik & air, kapasitas beban pelat lantai, serta orientasi pandang terbaik dari ruang duduk utama hunian Anda.",
      badge: "STUDI KELAYAKAN SIPIL",
    },
    {
      phase: "FASE 02",
      name: "Perancangan 3D & Hidrolika",
      deliverable: "Gambar Kerja CAD & Rancang Jalur Pipa",
      duration: "7–10 Hari",
      tolerance: "Simulasi Arus Hidrodinamika 0 Turbulensi",
      highlight:
        "Pemodelan 3D fotorealistis terintegrasi kabinet. Menghitung diameter pipa beveled 45°, debit pompa sine-wave, dan ruang filtrasi sump agar 100% senyap tanpa getaran.",
      badge: "BLUEPRINT ARSITEKTUR",
    },
    {
      phase: "FASE 03",
      name: "Fabrikasi & Uji Kedap 72 Jam",
      deliverable: "Konstruksi Kaca Diamant & Sambungan Nat",
      duration: "14–21 Hari",
      tolerance: "Deviasi Sambungan Silikon < 0.5 mm",
      highlight:
        "Pemotongan kaca optik kristal low-iron dengan mesin CNC presisi. Perekatan silikon struktural Jerman dalam suhu terkontrol dan uji tekanan air statis selama 72 jam non-stop.",
      badge: "STANDAR MUTU ATELIER",
    },
    {
      phase: "FASE 04",
      name: "Instalasi & Aklimatisasi",
      deliverable: "Stabilisasi Parameter Air & Serah Terima",
      duration: "3–5 Hari",
      tolerance: "Suhu 27.5°C · pH 6.8–7.0 Stabil",
      highlight:
        "Pemasangan di lokasi tanpa kebisingan debu. Pengkondisian siklus biologi bakteri nitrifikasi dan serah terima kartu sertifikat garansi kebocoran resmi ASEVA.",
      badge: "SERAH TERIMA RESMI",
    },
  ];

  const current = stepDetails[activeStep];

  return (
    <section
      className="py-28 md:py-36 bg-[#060608] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Proses kerja ASEVA"
    >
      {/* Precision Drafting Dot Matrix Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

      {/* Ambient Center Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-champagne/[0.025] rounded-full blur-[170px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
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
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-2 transition-all duration-300 flex-shrink-0 font-medium"
          >
            <span>Panduan Metodologi Penuh</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </div>

        {/* Phase Navigation Progression Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {stepDetails.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.phase}
                onClick={() => setActiveStep(index)}
                className={`p-4 md:p-5 rounded-2xl text-left border transition-all duration-500 relative overflow-hidden ${
                  isActive
                    ? "bg-[#111115] border-champagne/60 shadow-xl shadow-black/60"
                    : "bg-[#09090C]/80 border-white/[0.06] hover:bg-[#0D0D10] hover:border-white/20"
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-champagne via-white to-champagne" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-champagne uppercase font-medium">
                    {step.phase}
                  </span>
                  <span className="font-serif text-lg text-neutral-600 font-light">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-base sm:text-lg text-white font-light">
                  {step.name.split("&")[0]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="bg-[#0C0C10] rounded-3xl border border-white/[0.08] p-8 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Phase Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
                <Sparkles size={11} className="text-champagne" />
                <span className="font-mono text-[10px] tracking-widest text-champagne uppercase">
                  {current.badge}
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-4">
                {current.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-8">
                {current.highlight}
              </p>

              {/* Step Key Deliverable */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <CheckCircle size={16} className="text-champagne flex-shrink-0" />
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase font-sans block">Hasil Kerja Tahap Ini</span>
                  <span className="text-xs sm:text-sm text-white font-sans font-medium">{current.deliverable}</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Telemetry Box */}
            <div className="lg:col-span-5 bg-black/60 rounded-2xl border border-white/[0.06] p-6 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.06]">
                <span className="text-neutral-500 font-sans">Durasi Pengerjaan:</span>
                <span className="font-mono text-champagne font-medium">{current.duration}</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.06]">
                <span className="text-neutral-500 font-sans">Presisi Toleransi:</span>
                <span className="font-sans text-neutral-200 text-right">{current.tolerance}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-neutral-500 font-sans">Keterlibatan Klien:</span>
                <span className="font-sans text-white">Review & Persetujuan</span>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <Link
                  href="/konsultasi"
                  className="w-full btn-outline text-xs justify-center py-2.5 flex items-center gap-2"
                >
                  <span>Mulai Konsultasi Fase 01</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
