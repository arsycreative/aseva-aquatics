"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, ShieldCheck, Sparkles, CheckCircle2, Info } from "lucide-react";
import { FISH_COLLECTION } from "@/lib/data";
import { STATUS_CLASSES, STATUS_LABELS, getWhatsAppUrl } from "@/lib/utils";

export default function FeaturedFishSection() {
  const featuredFish = FISH_COLLECTION.filter((f) => f.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const activeFish = featuredFish[activeIndex] || featuredFish[0];

  const hotspots = [
    {
      id: 1,
      title: "Kepala Sendok (Spoonhead)",
      desc: "Moncong melengkung ke atas khas galur murni Kapuas Hulu, tanda anatomi kontes unggul.",
      top: "38%",
      left: "22%",
    },
    {
      id: 2,
      title: "Level 6 Crossing Ring",
      desc: "Kilau sisik mencapai punggung atas dengan rim emas dan inti merah darah solid.",
      top: "32%",
      left: "52%",
    },
    {
      id: 3,
      title: "Sirip Dayung Melebar",
      desc: "Bukaan sirip anal dan ekor berbentuk kipas sempurna tanpa sobek atau bengkok.",
      top: "48%",
      left: "82%",
    },
    {
      id: 4,
      title: "Microchip CITES",
      desc: `Transponder 15-digit (${activeFish.microchip}) tertanam di bawah sisik dengan sertifikat resmi.`,
      top: "62%",
      left: "40%",
    },
  ];

  return (
    <section
      className="py-28 md:py-36 bg-black relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Koleksi arwana unggulan"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-red-950/[0.12] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="section-container relative z-10">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                CURATOR&apos;S STAGE · KURASI INDIVIDUAL
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
              Koleksi Terpilih Arwana Super Red
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-400 mt-2 font-light leading-relaxed max-w-xl">
              Setiap ekor adalah karya seni biologis yang unik. Klik pin interaktif pada tubuh ikan untuk menginspeksi standar anatomi kontes.
            </p>
          </div>

          <Link
            href="/arwana"
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-2 transition-all duration-300 flex-shrink-0 font-medium"
          >
            <span>Buka Seluruh Arsip Koleksi</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </div>

        {/* Interactive Curator's Showcase — Asymmetric 7 / 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Specimen Stage (7 cols) */}
          <div className="lg:col-span-7 bg-[#0A0A0A] rounded-3xl border border-white/[0.1] p-6 md:p-8 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
            {/* Top Stage Metadata */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-champagne font-medium tracking-wider">
                  {activeFish.id}
                </span>
                <span className="text-neutral-600">/</span>
                <span className="font-serif text-lg text-white font-light">
                  {activeFish.name}
                </span>
              </div>
              <span className={STATUS_CLASSES[activeFish.status]}>
                {STATUS_LABELS[activeFish.status]}
              </span>
            </div>

            {/* Specimen High-Resolution Image Canvas with Interactive Hotspots */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/[0.06] mb-6 group">
              <Image
                src={activeFish.coverImage}
                alt={`${activeFish.name} — Arwana Super Red ASEVA`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Interactive Hotspot Pins */}
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                    className="relative flex items-center justify-center w-7 h-7 rounded-full bg-black/80 border border-champagne text-champagne shadow-lg hover:scale-125 transition-transform"
                    aria-label={spot.title}
                  >
                    <span className="absolute inset-0 rounded-full bg-champagne/20 animate-ping" />
                    <span className="text-[10px] font-mono font-bold">✦</span>
                  </button>

                  {/* Hotspot Floating Tooltip */}
                  {activeHotspot === spot.id && (
                    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-56 p-3 rounded-xl bg-black/95 border border-champagne/40 backdrop-blur-xl shadow-2xl z-30 text-left">
                      <span className="font-serif text-xs text-champagne block font-medium mb-1">
                        {spot.title}
                      </span>
                      <p className="font-sans text-[11px] text-neutral-300 leading-tight font-light">
                        {spot.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Bottom Chip Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-neutral-300 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/[0.08]">
                <span className="flex items-center gap-1.5 text-champagne">
                  <Cpu size={12} />
                  <span>RFID: {activeFish.microchip}</span>
                </span>
                <span className="text-neutral-400">CITES: {activeFish.certificate}</span>
              </div>
            </div>

            {/* Specimen Dossier & Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block mb-1">Ukuran</span>
                <span className="font-mono text-sm text-white">{activeFish.size} cm</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block mb-1">Usia</span>
                <span className="font-mono text-sm text-white">{activeFish.age}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block mb-1">Warna</span>
                <span className="font-sans text-xs text-white truncate block">{activeFish.color}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block mb-1">Penangkar</span>
                <span className="font-sans text-xs text-white truncate block">Kapuas Hulu</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-sans font-light leading-relaxed mb-6 italic border-l-2 border-champagne/40 pl-3">
              &ldquo;{activeFish.notes}&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/[0.08]">
              <a
                href={getWhatsAppUrl(`Halo ASEVA AQUATICS, saya tertarik dengan spesimen ${activeFish.name} (${activeFish.id}). Boleh tahu detail ketersediaan & video terbarunya?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs flex-1 justify-center py-3"
              >
                <span>Inquiry Spesimen {activeFish.id}</span>
                <ArrowRight size={13} />
              </a>
              <Link
                href={`/arwana/${activeFish.slug}`}
                className="btn-outline text-xs justify-center py-3 sm:px-6"
              >
                <span>Lihat Sertifikat Lengkap</span>
              </Link>
            </div>
          </div>

          {/* Right Specimen Selector Queue (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                DAFTAR SPESIMEN SIAP ADOPSI
              </span>
              <span className="text-xs text-champagne font-mono font-medium">
                {featuredFish.length} SPESIMEN AKTIF
              </span>
            </div>

            {featuredFish.map((fish, index) => {
              const isSelected = index === activeIndex;
              return (
                <div
                  key={fish.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setActiveHotspot(null);
                  }}
                  className={`p-4 md:p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                    isSelected
                      ? "bg-[#141414] border-champagne/60 shadow-lg shadow-black/80"
                      : "bg-[#0A0A0A]/80 border-white/[0.06] hover:bg-[#101010] hover:border-white/20"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-black border border-white/[0.08]">
                    <Image
                      src={fish.coverImage}
                      alt={fish.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[11px] text-champagne font-medium">
                        {fish.id}
                      </span>
                      <span className={STATUS_CLASSES[fish.status]}>
                        {STATUS_LABELS[fish.status]}
                      </span>
                    </div>
                    <h3 className="font-serif text-base text-white truncate font-normal">
                      {fish.name}
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-sans mt-1">
                      <span>{fish.size} cm</span>
                      <span>·</span>
                      <span className="truncate">{fish.grade.split("—")[0]}</span>
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? "text-champagne bg-champagne/10" : "text-neutral-600"
                    }`}
                  >
                    <ArrowRight size={12} />
                  </div>
                </div>
              );
            })}

            {/* Curatorial Guarantee Box */}
            <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/[0.06] mt-6">
              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-champagne flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm text-white font-medium mb-1">
                    Jaminan Legalitas & Kesehatan 100%
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-sans leading-relaxed font-light">
                    Semua arwana ditranspor menggunakan tabung oksigen bertekanan medis dengan garansi selamat (DOA) sampai ke alamat Anda di seluruh Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
