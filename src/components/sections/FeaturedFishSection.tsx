"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, ShieldCheck, HeartPulse, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FISH_COLLECTION } from "@/lib/data";
import { STATUS_CLASSES, STATUS_LABELS, getWhatsAppUrl } from "@/lib/utils";

export default function FeaturedFishSection() {
  const featuredFish = FISH_COLLECTION.filter((f) => f.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const activeFish = featuredFish[activeIndex] || featuredFish[0];
  const photos = activeFish.images && activeFish.images.length > 0 ? activeFish.images : [activeFish.coverImage];
  const currentPhoto = photos[activePhotoIdx] || activeFish.coverImage;

  const hotspots = [
    {
      id: 1,
      title: "Kepala Sendok (Spoonhead)",
      desc: "Moncong melengkung ke atas khas galur murni Kapuas Hulu.",
      top: "38%",
      left: "22%",
    },
    {
      id: 2,
      title: "Level 6 Crossing Ring",
      desc: "Kilau rim emas dengan inti merah darah solid hingga sisik punggung.",
      top: "32%",
      left: "52%",
    },
    {
      id: 3,
      title: "Sirip Dayung Lebar",
      desc: "Bukaan sirip anal dan ekor berbentuk kipas simetris sempurna.",
      top: "48%",
      left: "82%",
    },
    {
      id: 4,
      title: "Microchip CITES",
      desc: `Transponder 15-digit (${activeFish.microchip}) tertanam di bawah sisik.`,
      top: "62%",
      left: "40%",
    },
  ];

  return (
    <section
      className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Koleksi arwana unggulan"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-red-950/[0.12] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="section-container relative z-10">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                KURASI INDIVIDUAL · SUPER RED
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
              Koleksi Terpilih Arwana Super Red
            </h2>
          </div>

          <Link
            href="/arwana"
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-1 transition-all duration-300 flex-shrink-0 font-medium"
          >
            <span>Buka Seluruh Arsip Koleksi</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </motion.div>

        {/* Curators Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Specimen Stage (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#0A0A0E] rounded-3xl border border-white/[0.08] p-6 md:p-8 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
          >
            {/* Top Stage Metadata */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
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

            {/* Specimen High-Resolution Image Canvas */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/[0.06] mb-5 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeFish.id}-${activePhotoIdx}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentPhoto}
                    alt={`${activeFish.name} — Arwana Super Red ASEVA`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Photo View Selector (if specimen has multiple angles) */}
              {photos.length > 1 && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1 rounded-full border border-white/10">
                  {photos.map((_, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => setActivePhotoIdx(pIdx)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-sans transition-all ${
                        activePhotoIdx === pIdx
                          ? "bg-champagne text-black font-medium"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {pIdx === 0 ? "Tampak Samping" : "Detail Sisik"}
                    </button>
                  ))}
                </div>
              )}

              {/* Interactive Hotspot Pins (active on primary angle) */}
              {activePhotoIdx === 0 &&
                hotspots.map((spot) => (
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

                    {/* Floating Tooltip */}
                    {activeHotspot === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute bottom-9 left-1/2 -translate-x-1/2 w-52 p-2.5 rounded-xl bg-black/95 border border-champagne/40 backdrop-blur-xl shadow-2xl z-30 text-left"
                      >
                        <span className="font-serif text-xs text-champagne block font-medium mb-0.5">
                          {spot.title}
                        </span>
                        <p className="font-sans text-[11px] text-neutral-300 leading-tight font-light">
                          {spot.desc}
                        </p>
                      </motion.div>
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

            {/* Specimen Dossier Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block">Ukuran</span>
                <span className="font-mono text-xs sm:text-sm text-white">{activeFish.size} cm</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block">Usia</span>
                <span className="font-mono text-xs sm:text-sm text-white">{activeFish.age}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block">Warna</span>
                <span className="font-sans text-xs text-white truncate block">{activeFish.color}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[10px] text-neutral-500 uppercase font-sans block">Penangkar</span>
                <span className="font-sans text-xs text-white truncate block">Kapuas Hulu</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/[0.08]">
              <a
                href={getWhatsAppUrl(`Halo ASEVA AQUATICS, saya tertarik dengan spesimen ${activeFish.name} (${activeFish.id}). Boleh tahu detail ketersediaan & video terbarunya?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs flex-1 justify-center py-2.5"
              >
                <span>Inquiry Spesimen {activeFish.id}</span>
                <ArrowRight size={13} />
              </a>
              <Link
                href={`/arwana/${activeFish.slug}`}
                className="btn-outline text-xs justify-center py-2.5 sm:px-6"
              >
                <span>Sertifikat Lengkap</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Specimen Queue & Visual Trust Strip (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] mb-1">
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                PILIH SPESIMEN UNGGULAN
              </span>
              <span className="text-xs text-champagne font-mono font-medium">
                {featuredFish.length} SPESIMEN
              </span>
            </div>

            {featuredFish.map((fish, index) => {
              const isSelected = index === activeIndex;
              return (
                <div
                  key={fish.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setActivePhotoIdx(0);
                    setActiveHotspot(null);
                  }}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center gap-3.5 ${
                    isSelected
                      ? "bg-[#141418] border-champagne/60 shadow-lg shadow-black/80"
                      : "bg-[#09090C]/80 border-white/[0.06] hover:bg-[#0E0E12] hover:border-white/20"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-black border border-white/[0.08]">
                    <Image
                      src={fish.coverImage}
                      alt={fish.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-mono text-[11px] text-champagne font-medium">
                        {fish.id}
                      </span>
                      <span className={STATUS_CLASSES[fish.status]}>
                        {STATUS_LABELS[fish.status]}
                      </span>
                    </div>
                    <h3 className="font-serif text-sm sm:text-base text-white truncate font-light">
                      {fish.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-neutral-400 font-sans mt-0.5">
                      <span>{fish.size} cm</span>
                      <span>·</span>
                      <span className="truncate">{fish.color}</span>
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

            {/* Visual Trust Chips (replaces dense text box) */}
            <div className="pt-3 space-y-2">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-champagne/[0.08] text-champagne flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={15} />
                </div>
                <div>
                  <span className="text-xs text-white font-serif block">Legalitas CITES &amp; Microchip 15-Digit</span>
                  <span className="text-[10px] text-neutral-400 font-sans">Sertifikasi captive-bred resmi BKSDA</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/[0.08] text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <HeartPulse size={15} />
                </div>
                <div>
                  <span className="text-xs text-white font-serif block">Garansi Selamat 100% (DOA)</span>
                  <span className="text-[10px] text-neutral-400 font-sans">Pengiriman medis tabung oksigen se-Indonesia</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-500/[0.08] text-sky-400 flex items-center justify-center flex-shrink-0">
                  <Eye size={15} />
                </div>
                <div>
                  <span className="text-xs text-white font-serif block">Kunjungan Kurasi Privat Bandung</span>
                  <span className="text-[10px] text-neutral-400 font-sans">Inspeksi langsung spesimen dengan janji temu</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}