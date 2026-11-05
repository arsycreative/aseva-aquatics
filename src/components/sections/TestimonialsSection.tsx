"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIAL_ITEMS = [
  {
    id: "T001",
    name: "R.H.",
    city: "Dago, Bandung",
    role: "Pemilik Villa",
    quote: "Aquarium dinding ini bukan sekadar dekorasi air—ini mahakarya yang hidup. Detail teknis dan ketenangannya melampaui ekspektasi kami sekeluarga.",
    project: "Aquarium Dinding Dago",
    image: "/images/projects/prj-001.jpg",
    link: "/portofolio/aquarium-dinding-dago",
    category: "Aquarium Custom Hunian",
  },
  {
    id: "T002",
    name: "A.P.",
    city: "Menteng, Jakarta Pusat",
    role: "Kolektor Arwana",
    quote: "Lebih dari 10 tahun mengoleksi arwana, ASEVA adalah pertama kalinya saya merasa benar-benar tenang karena transparansi microchip dan legalitas CITES-nya.",
    project: "Koleksi Arwana Emperor Crimson",
    image: "/images/fish/asv-0051.jpg",
    link: "/arwana/asv-0051-emperor-crimson",
    category: "Super Red Grade A",
  },
  {
    id: "T003",
    name: "B.S.",
    city: "Braga, Bandung",
    role: "Managing Partner",
    quote: "Partisi kaca dua muka ini jadi impresi pertama yang memukau setiap klien baru. Suara filtrasi 100% senyap, sangat ideal untuk ruang meeting.",
    project: "Aquarium Partisi Kantor Braga",
    image: "/images/projects/prj-002.jpg",
    link: "/portofolio/aquarium-partisi-kantor-braga",
    category: "Partisi Komersial",
  },
  {
    id: "T004",
    name: "C.W.",
    city: "Kota Baru Parahyangan",
    role: "Arsitek & Pemilik Villa",
    quote: "Sebagai arsitek dengan standar ketat, saya kagum bagaimana tim ASEVA berkolaborasi: perhitungan beban sipil dan garis kaca presisi tanpa cela.",
    project: "Aquarium Arwana Villa KBP",
    image: "/images/projects/prj-003.jpg",
    link: "/portofolio/aquarium-arwana-villa-kbp",
    category: "Aquarium Custom Villa",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIAL_ITEMS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIAL_ITEMS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIAL_ITEMS[current];

  return (
    <section
      className="py-24 md:py-32 bg-[#060608] border-t border-white/[0.08] relative overflow-hidden"
      aria-label="Testimoni klien dan rekanan arsitek"
    >
      {/* Subtle Dot Pattern & Ambient Spotlight */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-champagne/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Editorial Top Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <ShieldCheck size={12} className="text-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                REPUTASI &amp; BUKTI INSTALASI
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
              Kepercayaan Kolektor &amp;
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Praktisi Arsitektur
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-mono text-xs text-neutral-500 px-1">
              0{current + 1} / 0{TESTIMONIAL_ITEMS.length}
            </span>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Visual Testimonial Split Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0A0A0E] rounded-3xl border border-white/[0.08] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Real Photographic Proof */}
              <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] bg-black overflow-hidden group">
                <Image
                  src={t.image}
                  alt={t.project}
                  fill
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/70 hidden lg:block" />

                {/* Top Badge on Photo */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-champagne border border-white/10 tracking-widest uppercase">
                    PROYEK TERLAKSANA
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-neutral-300 border border-white/10">
                    {t.category}
                  </span>
                </div>

                {/* Bottom Project Tag on Photo */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-mono uppercase block">Lokasi &amp; Instalasi</span>
                    <span className="text-xs sm:text-sm font-serif text-white">{t.project}</span>
                  </div>
                  <Link
                    href={t.link}
                    className="p-2 rounded-xl bg-white/[0.05] hover:bg-champagne/20 text-champagne transition-colors"
                    aria-label={`Lihat detail proyek ${t.project}`}
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Punchy Editorial Quote */}
              <div className="lg:col-span-6 p-8 sm:p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-champagne mb-6">
                    <Quote size={18} />
                  </div>

                  <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light leading-relaxed italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Signature & Meta */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="font-serif text-lg text-white font-normal tracking-wide block">
                      {t.name}
                    </span>
                    <span className="font-sans text-xs text-neutral-400 tracking-wider uppercase">
                      {t.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-sans">
                    <MapPin size={13} className="text-champagne" />
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Quick Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIAL_ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-8 h-1.5 bg-champagne" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Testimoni ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}