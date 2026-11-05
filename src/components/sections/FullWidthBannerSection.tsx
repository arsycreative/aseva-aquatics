"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullWidthBannerSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth parallax scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[62vh] sm:h-[72vh] md:h-[80vh] overflow-hidden border-y border-white/[0.08]"
      aria-label="Dokumentasi Visual Skala Arsitektural"
    >
      {/* Background Image Layer with Parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none"
      >
        <Image
          src="/images/projects/prj-003.jpg"
          alt="Aquarium Arwana Villa di Kota Baru Parahyangan — ASEVA AQUATICS"
          fill
          priority
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* Gentle Edge Fades (Center remains completely clear and unobstructed) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />

      {/* Minimal Corner Meta — Left Edge Only */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 z-10 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-1.5 p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-champagne font-medium">
              DOKUMENTASI ARSITEKTUR · PRJ-003
            </span>
          </div>
          <span className="font-serif text-lg sm:text-xl text-white font-light tracking-wide">
            Villa di Kota Baru Parahyangan
          </span>
          <span className="font-sans text-[11px] text-neutral-400 font-light">
            Kaca Low-Iron 22mm · 5.400 Liter · Bandung Barat
          </span>
        </motion.div>
      </div>

      {/* Subtle Right Edge Link */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/portofolio/aquarium-arwana-villa-kota-baru"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-sans tracking-widest uppercase hover:border-white/40 hover:bg-black/85 transition-all duration-300"
          >
            <span>Detail Proyek</span>
            <ArrowRight size={12} className="text-champagne" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
