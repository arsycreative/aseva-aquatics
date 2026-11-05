"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Layers, Sparkles, Compass } from "lucide-react";

export default function TwoDoorsSection() {
  return (
    <section
      id="two-doors"
      className="bg-black border-t border-white/[0.08] py-28 md:py-36 relative overflow-hidden"
      aria-label="Dua pilar utama ASEVA AQUATICS"
    >
      {/* Background ambient architectural lines */}
      <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="section-container relative z-10">
        {/* Asymmetric Monumental Header — Breaking the cookie-cutter formula */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <Compass size={12} className="text-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                PORTAL EKSPEDISI ESTETIKA
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light leading-[1.08]">
              Dua Manifestasi Mahakarya.
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim font-light">
                Satu Standar Presisi Tanpa Kompromi.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
              Pilihlah eksplorasi satwa legenda berlisensi CITES atau realisasi akuarium arsitektural berskala galeri untuk interior hunian Anda.
            </p>
          </div>
        </div>

        {/* Dual Canvas Grid — Rich Contrast & Distinct Identities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Door 1 — Arwana Super Red */}
          <Link
            href="/arwana"
            id="two-doors-arwana"
            className="group relative overflow-hidden bg-[#0A0A0A] rounded-3xl border border-white/[0.08] hover:border-red-500/40 transition-all duration-700 flex flex-col justify-between min-h-[540px] md:min-h-[600px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Background Image with Cinema Grading */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/hero-arwana.jpg"
                alt="Koleksi Arwana Super Red ASEVA AQUATICS"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/35 group-hover:via-black/75 transition-all duration-700" />
              {/* Subtle Red Ambient Glow for Arwana */}
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-950/20 rounded-full blur-[100px] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity" />
            </div>

            {/* Top Bar on Card */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={14} className="text-red-400" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300">
                  PILAR I · SATWA BERLISENSI CITES
                </span>
              </div>
              <span className="font-serif text-2xl text-neutral-500 group-hover:text-champagne transition-colors font-light">
                01
              </span>
            </div>

            {/* Bottom Content & Meta */}
            <div className="relative z-10 pt-24">
              <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-neutral-400 block mb-3 font-medium">
                SCLEROPAGES FORMOSUS · GALUR KAPUAS HULU
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-light leading-tight mb-4 group-hover:text-champagne transition-colors duration-500">
                Koleksi Arwana Super Red
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mb-8 font-light">
                Kurasi individual per ekor kualitas kontes. Dilengkapi microchip 15-digit resmi terverifikasi, sertifikat penangkaran captive-bred BKSDA/CITES, dan garansi selamat (DOA) 100%.
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-2 mb-8 border-t border-white/[0.06] pt-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Anatomi Spoon Head
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Level 6 Crossing
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Bebas Cacat Fisik
                </span>
              </div>

              {/* CTA Link */}
              <div className="inline-flex items-center gap-3 text-white font-sans text-xs tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform duration-300 font-medium">
                <span>Eksplorasi Kurasi Arwana</span>
                <ArrowRight size={14} className="text-champagne" />
              </div>
            </div>
          </Link>

          {/* Door 2 — Aquarium Custom */}
          <Link
            href="/aquarium-custom"
            id="two-doors-aquarium"
            className="group relative overflow-hidden bg-[#0A0A0A] rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-700 flex flex-col justify-between min-h-[540px] md:min-h-[600px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Background Image with Cinema Grading */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/aquarium-interior.jpg"
                alt="Aquarium custom premium ASEVA AQUATICS"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/35 group-hover:via-black/75 transition-all duration-700" />
              {/* Subtle Cyan/Titanium Ambient Glow for Engineering */}
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-950/20 rounded-full blur-[100px] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity" />
            </div>

            {/* Top Bar on Card */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-2.5">
                <Layers size={14} className="text-champagne" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300">
                  PILAR II · REKAYASA ARSITEKTURAL
                </span>
              </div>
              <span className="font-serif text-2xl text-neutral-500 group-hover:text-champagne transition-colors font-light">
                02
              </span>
            </div>

            {/* Bottom Content & Meta */}
            <div className="relative z-10 pt-24">
              <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-neutral-400 block mb-3 font-medium">
                LOW-IRON CRYSTAL · HIDROLIKA HENING &lt; 28 dB
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-light leading-tight mb-4 group-hover:text-champagne transition-colors duration-500">
                Aquarium Custom & Galeri
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mb-8 font-light">
                Perancangan akuarium mewah berintegrasi interior arsitektur. Kaca ultra-clear kristal optik 99.2%, sistem pipa filtrasi dry-wet senyap total tanpa getaran, dan kabinet bernilai seni rupa.
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-2 mb-8 border-t border-white/[0.06] pt-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Kaca Diamant 15–25mm
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Akustik Senyap &lt; 28 dB
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Garansi Bebas Bocor
                </span>
              </div>

              {/* CTA Link */}
              <div className="inline-flex items-center gap-3 text-white font-sans text-xs tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform duration-300 font-medium">
                <span>Pelajari Rekayasa Custom</span>
                <ArrowRight size={14} className="text-champagne" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
