"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullWidthBannerSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll animation hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transformations on scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.06, 1.02]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.4, 1, 1, 0.5]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[72vh] sm:h-[82vh] md:h-[90vh] min-h-[560px] overflow-hidden flex items-center justify-center border-y border-white/[0.08]"
      aria-label="Mahakarya Skala Arsitektural"
    >
      {/* Background Image Layer with Parallax & Scale */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 w-full h-[125%] -top-[12.5%] z-0 pointer-events-none"
      >
        <Image
          src="/images/aquarium-interior.jpg"
          alt="Aquarium Arsitektural Skala Besar ASEVA AQUATICS"
          fill
          priority
          className="object-cover object-center brightness-[0.78] contrast-[1.08]"
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* Cinematic Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/45 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 z-[1] pattern-grid opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

      {/* Ambient Central Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-champagne/[0.04] rounded-full blur-[170px] pointer-events-none z-[2]" />

      {/* Top Floating Badge Bar */}
      <div className="absolute top-8 left-6 right-6 z-10 flex items-center justify-between text-[10px] font-mono tracking-[0.28em] text-neutral-400 uppercase pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          <span className="text-white/80">KARYA ARSITEKTURAL BERSKALA GALERI</span>
        </div>
        <span className="hidden sm:inline-block text-neutral-500">
          BANDUNG · JABODETABEK · JAWA BARAT
        </span>
      </div>

      {/* Centerpiece Content with Scroll Motion */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-6"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md mb-8 shadow-xl">
          <Sparkles size={12} className="text-champagne" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-champagne font-medium">
            ATELIER INSTALLATION · PRIVATE ESTATE
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.08] mb-6 tracking-tight">
          Ketika Air &amp; Gravitasi Menjadi
          <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim font-light">
            Pusat Keheningan Hunian Anda.
          </span>
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Bukan sekadar akuarium pajangan, melainkan ekosistem kristal berskala tonase yang menyatu abadi dalam struktur arsitektur hunian pribadi Anda.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/portofolio"
            className="btn-primary text-xs shadow-2xl shadow-black/80 w-full sm:w-auto"
          >
            <span>Eksplorasi Seluruh Studi Kasus</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/aquarium-custom"
            className="btn-outline text-xs bg-black/60 backdrop-blur-md w-full sm:w-auto"
          >
            <span>Spesifikasi Rekayasa Kaca Diamant</span>
          </Link>
        </div>
      </motion.div>

      {/* Bottom Corner Architectural Specs */}
      <div className="absolute bottom-6 left-6 right-6 z-10 hidden md:flex items-center justify-between text-[11px] font-mono text-neutral-400 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.06]">
          <Layers size={12} className="text-champagne" />
          <span>KAPASITAS 5.400 LITER · KACA LOW-IRON 22MM</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.06]">
          <MapPin size={12} className="text-champagne" />
          <span>PROYEK VILLA PRIVAT · KOTA BARU PARAHYANGAN</span>
        </div>
      </div>
    </section>
  );
}
