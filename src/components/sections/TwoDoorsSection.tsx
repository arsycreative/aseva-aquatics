"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Layers } from "lucide-react";

export default function TwoDoorsSection() {
  return (
    <section
      id="two-doors"
      className="bg-black border-t border-white/[0.08] py-28 md:py-36"
      aria-label="Dua pilar utama ASEVA AQUATICS"
    >
      <div className="section-container">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-champagne-dim" />
            <span className="section-label">DUA PILAR KEMAHAKARYAAN</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight">
            Pilih Eksplorasi
            <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
              Visi Ruang Anda
            </span>
          </h2>
        </div>

        {/* Dual Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Door 1 — Arwana Super Red */}
          <Link
            href="/arwana"
            id="two-doors-arwana"
            className="group relative overflow-hidden bg-[#0A0A0A] rounded-3xl border border-white/[0.08] hover:border-white/25 transition-all duration-700 flex flex-col justify-between min-h-[520px] md:min-h-[580px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-all duration-700" />
            </div>

            {/* Top Bar on Card */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={14} className="text-champagne" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300">
                  PILLAR 01 · SATWA BERLISENSI
                </span>
              </div>
              <span className="font-serif text-xl text-neutral-500 group-hover:text-white transition-colors font-light">
                N° I
              </span>
            </div>

            {/* Bottom Content & Meta */}
            <div className="relative z-10 pt-24">
              <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-neutral-400 block mb-3 font-medium">
                SCLEROPAGES FORMOSUS · KAPUAS HULU
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-light leading-tight mb-4 group-hover:text-champagne transition-colors duration-500">
                Koleksi Arwana Super Red
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mb-8 font-light">
                Kurasi individual per ekor kualitas kontes. Dilengkapi microchip 15-digit resmi, sertifikat captive-bred BKSDA/CITES, dan garansi hidup selamat (DOA) 100%.
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
                <span>Eksplorasi Koleksi Arwana</span>
                <ArrowRight size={14} className="text-champagne" />
              </div>
            </div>
          </Link>

          {/* Door 2 — Aquarium Custom */}
          <Link
            href="/aquarium-custom"
            id="two-doors-aquarium"
            className="group relative overflow-hidden bg-[#0A0A0A] rounded-3xl border border-white/[0.08] hover:border-white/25 transition-all duration-700 flex flex-col justify-between min-h-[520px] md:min-h-[580px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-all duration-700" />
            </div>

            {/* Top Bar on Card */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-2.5">
                <Layers size={14} className="text-champagne" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-300">
                  PILLAR 02 · REKAYASA RUANG
                </span>
              </div>
              <span className="font-serif text-xl text-neutral-500 group-hover:text-white transition-colors font-light">
                N° II
              </span>
            </div>

            {/* Bottom Content & Meta */}
            <div className="relative z-10 pt-24">
              <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-neutral-400 block mb-3 font-medium">
                BESPOKE LIVING ECOSYSTEM · INTERIOR
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-light leading-tight mb-4 group-hover:text-champagne transition-colors duration-500">
                Desain Aquarium Custom
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mb-8 font-light">
                Perancangan holistik bersama arsitek Anda. Kaca ultra-clear kristal berkejernihan tinggi, sistem filtrasi sump tanpa kabel kasat mata, dan garansi struktur 3 tahun.
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-2 mb-8 border-t border-white/[0.06] pt-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Kaca Low-Iron Kristal
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Filtrasi Kedap Suara
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-sans tracking-wider text-neutral-300 uppercase">
                  Garansi Kebocoran 3 Thn
                </span>
              </div>

              {/* CTA Link */}
              <div className="inline-flex items-center gap-3 text-white font-sans text-xs tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform duration-300 font-medium">
                <span>Eksplorasi Jasa Custom</span>
                <ArrowRight size={14} className="text-champagne" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
