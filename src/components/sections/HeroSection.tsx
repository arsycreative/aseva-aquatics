"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const handleScrollDown = () => {
    const section = document.getElementById("two-doors");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-label="Hero utama ASEVA AQUATICS"
    >
      {/* Background Image with Cinematic Obsidian Lighting */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 h-[120%] -top-[10%] pointer-events-none">
        <Image
          src="/images/hero-arwana.jpg"
          alt="Arwana Super Red ASEVA AQUATICS"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
          quality={95}
        />
        {/* Layered dark cinema overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-[36rem] h-[36rem] bg-champagne/[0.03] rounded-full blur-[170px] pointer-events-none" />
      </motion.div>

      {/* Main Focused Editorial Canvas */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 section-container w-full py-24 md:py-32 flex flex-col justify-center items-start text-left"
      >
        <div className="max-w-3xl">
          {/* Subtle Monogram Micro-Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-champagne/60" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-champagne font-medium">
              ASEVA AQUATICS · BANDUNG &amp; JABODETABEK
            </span>
          </motion.div>

          {/* Core Focused Headline — Clear & Prestigious */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white font-light leading-[1.06] tracking-tight mb-6"
          >
            Arwana Super Red
            <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim font-light">
              &amp; Akuarium Custom.
            </span>
          </motion.h1>

          {/* Crisp, Focused 1-Sentence Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm md:text-base text-neutral-300 max-w-xl leading-relaxed mb-10 font-light"
          >
            Kurasi satwa berlisensi resmi CITES dan rancang bangun akuarium mewah terintegrasi arsitektur interior hunian Anda.
          </motion.p>

          {/* Primary Focused CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="/konsultasi"
              id="hero-cta-primary"
              className="btn-primary"
            >
              <span>Jadwalkan Konsultasi</span>
              <ArrowRight size={14} />
            </Link>
            <button
              onClick={handleScrollDown}
              className="btn-outline"
            >
              <span>Eksplorasi Layanan</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Understated Scroll Down Cue */}
      <button
        onClick={handleScrollDown}
        className="hidden md:flex absolute bottom-8 right-12 items-center gap-2.5 text-neutral-500 hover:text-white transition-colors duration-300 text-[10px] font-mono tracking-[0.25em] uppercase"
        aria-label="Scroll ke eksplorasi"
      >
        <span>GULIR KE BAWAH</span>
        <ChevronDown size={14} className="animate-bounce text-neutral-400" />
      </button>
    </section>
  );
}
