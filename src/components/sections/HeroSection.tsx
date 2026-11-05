"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScrollDown = () => {
    const section = document.getElementById("two-doors");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-black"
      aria-label="Hero utama ASEVA AQUATICS"
    >
      {/* Background Image with Parallax & Dramatic Obsidian Lighting */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 h-[120%] -top-[10%] pointer-events-none">
        <Image
          src="/images/hero-arwana.jpg"
          alt="Arwana Super Red berenang di aquarium premium ASEVA AQUATICS"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
          quality={95}
        />
        {/* Layered cinematic dark obsidian overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        {/* Soft champagne & white ambient backlight glow */}
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />
      </motion.div>

      {/* Main Editorial Canvas */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 section-container w-full flex flex-col justify-between min-h-[82vh] pt-8"
      >
        {/* Top Atelier Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-neutral-300">
              ATELIER BANDUNG · BY PRIVATE APPOINTMENT
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[10px] font-sans tracking-[0.25em] text-neutral-500 uppercase">
            <span>ZONA 1: BANDUNG RAYA</span>
            <span className="text-white/20">/</span>
            <span>ZONA 2: JABODETABEK &amp; JAWA BARAT</span>
          </div>
        </motion.div>

        {/* Centerpiece Typographic Block */}
        <div className="max-w-3xl py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-8"
          >
            <Sparkles size={12} className="text-champagne" />
            <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-champagne font-medium">
              HAUTE AQUATICS &amp; LIVING BESPOKE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white font-light leading-[1.04] tracking-tight mb-8"
          >
            Karya Hidup
            <span className="block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
              dalam Presisi Seni Air.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed mb-10 font-light"
          >
            Kurasi Arwana Super Red berlisensi CITES resmi dan perancangan akuarium custom terintegrasi arsitektur interior. Keindahan presisi untuk hunian eksklusif di Bandung dan Jabodetabek.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="/konsultasi"
              id="hero-cta-primary"
              className="btn-primary"
            >
              <span>Jadwalkan Konsultasi Ruang</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              className="btn-outline"
            >
              <span>Inquiry via WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Architectural Bottom Ticker / Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-white/[0.08] pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div className="border-l border-white/15 pl-4">
            <span className="font-mono text-[10px] text-neutral-500 block mb-1">01 / FABRIKASI</span>
            <span className="font-serif text-sm md:text-base text-white block">Kaca Low-Iron Kristal</span>
            <span className="font-sans text-[11px] text-neutral-400">Kejernihan optik 99% tanpa distorsi</span>
          </div>
          <div className="border-l border-white/15 pl-4">
            <span className="font-mono text-[10px] text-neutral-500 block mb-1">02 / KURASI</span>
            <span className="font-serif text-sm md:text-base text-white block">Super Red Kapuas Hulu</span>
            <span className="font-sans text-[11px] text-neutral-400">Silsilah murni &amp; microchip RFID</span>
          </div>
          <div className="border-l border-white/15 pl-4">
            <span className="font-mono text-[10px] text-neutral-500 block mb-1">03 / HIDROLIKA</span>
            <span className="font-serif text-sm md:text-base text-white block">Life Support Kedap Suara</span>
            <span className="font-sans text-[11px] text-neutral-400">Filtrasi sump biologis tersembunyi</span>
          </div>
          <div className="border-l border-white/15 pl-4">
            <span className="font-mono text-[10px] text-neutral-500 block mb-1">04 / KOMITMEN</span>
            <span className="font-serif text-sm md:text-base text-white block">Garansi Struktur 3 Tahun</span>
            <span className="font-sans text-[11px] text-neutral-400">Protokol garansi hidup DOA 100%</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Down Trigger */}
      <button
        onClick={handleScrollDown}
        className="hidden md:flex absolute bottom-5 right-12 items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-300 text-[10px] font-sans tracking-[0.25em] uppercase"
        aria-label="Scroll ke bawah"
      >
        <span>GULIR KE BAWAH</span>
        <ChevronDown size={14} className="animate-bounce text-neutral-400" />
      </button>
    </section>
  );
}
