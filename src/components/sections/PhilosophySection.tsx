"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CURATION_CHAPTERS = [
  {
    id: "prestige",
    number: "01",
    tag: "PRESTISE & ENERGI RUANG",
    title: "Simbol Kewibawaan & Ketenangan",
    subtitle: "Titik Fokus Utama di Kediaman & Ruang Eksekutif",
    description:
      "Hadirnya pendaran merah menyala sang Naga Air di balik kaca kristal tanpa tepi menciptakan atmosfer yang tak tergantikan. Sebuah pernyataan cita rasa tinggi yang menyambut setiap tamu kehormatan sekaligus menghadirkan relaksasi mendalam bagi pemiliknya.",
    image: "/images/projects/prj-002.jpg",
    highlights: [
      "Meningkatkan karisma ruang utama, villa, & ruang direksi",
      "Aliran air hening & spektrum cahaya pereda kejenuhan",
      "Dirancang eksklusif satu-satunya sesuai karakter pemilik",
    ],
    metricValue: "1-of-1",
    metricLabel: "Karya Bespoke Eksklusif per Klien",
    ctaLabel: "Jadwalkan Konsultasi Privat",
    ctaHref: "/konsultasi",
  },
  {
    id: "sanctuary",
    number: "02",
    tag: "HARMONI INTERIOR",
    title: "Kanvas Hidup di Ruang Privat",
    subtitle: "Menyatu dengan Arsitektur Hunian Mewah",
    description:
      "Sebuah akuarium kelas atas dirancang untuk memperkaya energi ruang tamu, ruang kerja eksekutif, maupun villa Anda. Seluruh instrumen teknis tersembunyi rapi di balik kabinet custom berdesain arsitektural.",
    image: "/images/projects/prj-001-b.jpg",
    highlights: [
      "Kolaborasi langsung dengan arsitek & desainer interior",
      "Kaca kristal Low-Iron 99.2% tanpa rona hijau",
      "Operasional senyap < 28 dB setara keheningan malam",
    ],
    metricValue: "3 Tahun",
    metricLabel: "Garansi Resmi Struktur & Kebocoran",
    ctaLabel: "Lihat Galeri Portofolio",
    ctaHref: "/portofolio",
  },
  {
    id: "concierge",
    number: "03",
    tag: "LAYANAN WHITE-GLOVE",
    title: "Pendampingan Tanpa Kompromi",
    subtitle: "Dari Pengiriman Beroksigen Medis hingga Rawat Rutin",
    description:
      "Kepemilikan mahakarya akuatik harus memberikan ketenangan pikiran. Tim spesialis kami menangani pengiriman satwa dengan garansi hidup 100% (DOA) serta layanan perawatan berkala terjadwal di hunian Anda.",
    image: "/images/journal/kaca-aquarium.jpg",
    highlights: [
      "Garansi Hidup Selamat (DOA) 100% hingga akuarium Anda",
      "Kunjungan maintenance parameter air & kaca terjadwal",
      "Akses konsultasi darurat prioritas bagi kolektor ASEVA",
    ],
    metricValue: "Zona 1 & 2",
    metricLabel: "Layanan Prioritas Bandung & Jabodetabek",
    ctaLabel: "Pelajari Layanan Perawatan",
    ctaHref: "/perawatan-aquarium",
  },
];

export default function PhilosophySection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = CURATION_CHAPTERS[activeIdx];

  return (
    <section
      className="relative min-h-[760px] py-28 md:py-36 flex items-center overflow-hidden border-t border-white/[0.08] bg-black"
      aria-label="Standar Eksklusivitas ASEVA AQUATICS"
    >
      {/* Full-Bleed Dynamic Background Image with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered Cinema Overlays for Readability & Super Red Mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-champagne/[0.08] rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="section-container relative z-10 w-full">
        {/* Top Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-champagne/30 mb-5">
            <Sparkles size={12} className="text-champagne-light" />
            <span className="font-mono text-[10px] tracking-[0.28em] text-champagne-light uppercase font-medium">
              THE ASEVA PRIVILÈGE · STANDAR KOLEKTOR
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light leading-[1.08]">
            Lebih dari Sekadar Akuarium.
            <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
              Sebuah Warisan Hidup.
            </span>
          </h2>
        </motion.div>

        {/* Interactive Cinema Stage: Left Selector Rail + Right Glassmorphic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: 3 Interactive Chapter Selectors (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {CURATION_CHAPTERS.map((chap, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={chap.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-6 sm:p-7 rounded-2xl backdrop-blur-xl transition-all duration-500 border relative overflow-hidden group ${
                    isActive
                      ? "bg-black/80 border-champagne shadow-[0_15px_45px_rgba(217,35,56,0.22)]"
                      : "bg-black/45 border-white/10 hover:bg-black/65 hover:border-white/25"
                  }`}
                >
                  {/* Active Left Accent Bar */}
                  {isActive && (
                    <motion.span
                      layoutId="active-chapter-bar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-champagne-light via-champagne to-champagne-dim"
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[10px] tracking-[0.24em] uppercase ${
                        isActive ? "text-champagne-light font-medium" : "text-neutral-400"
                      }`}
                    >
                      {chap.number} · {chap.tag}
                    </span>
                    <span
                      className={`font-mono text-xs transition-transform duration-300 ${
                        isActive
                          ? "text-champagne-light translate-x-0"
                          : "text-neutral-500 -translate-x-1 group-hover:translate-x-0 group-hover:text-white"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl font-light transition-colors ${
                      isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
                    }`}
                  >
                    {chap.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1 font-light">
                    {chap.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Glassmorphic Detail Stage (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-3xl bg-black/75 backdrop-blur-2xl border border-white/15 p-8 sm:p-10 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.9)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      {activeIdx === 0 && <ShieldCheck size={16} className="text-champagne-light" />}
                      {activeIdx === 1 && <Compass size={16} className="text-champagne-light" />}
                      {activeIdx === 2 && <Sparkles size={16} className="text-champagne-light" />}
                      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-champagne-light">
                        PILAR {current.number} · {current.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-light" />
                      <span className="font-mono text-[10px] text-white uppercase tracking-wider">
                        {current.metricValue} — {current.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl text-white font-light mb-4 leading-tight">
                    {current.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-neutral-200 leading-relaxed font-light mb-8">
                    {current.description}
                  </p>

                  {/* 3 Highlights */}
                  <div className="space-y-3 mb-8">
                    {current.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                      >
                        <CheckCircle2 size={15} className="text-champagne-light flex-shrink-0" />
                        <span className="font-sans text-xs sm:text-sm text-white/90 font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={current.ctaHref}
                    className="inline-flex items-center gap-3 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne-light transition-colors font-medium group"
                  >
                    <span>{current.ctaLabel}</span>
                    <ArrowRight
                      size={14}
                      className="text-champagne-light transition-transform group-hover:translate-x-1.5"
                    />
                  </Link>

                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    ASEVA AQUATICS · BANDUNG
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
