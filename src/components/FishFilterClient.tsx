"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, ShieldCheck } from "lucide-react";
import { FISH_COLLECTION } from "@/lib/data";
import { STATUS_CLASSES, STATUS_LABELS, getWhatsAppUrl } from "@/lib/utils";

type Fish = (typeof FISH_COLLECTION)[0];

const SIZE_FILTERS = [
  { label: "Semua Ukuran", value: "all" },
  { label: "< 45 cm", value: "small" },
  { label: "45–55 cm", value: "medium" },
  { label: "> 55 cm", value: "large" },
];

const STATUS_FILTERS = [
  { label: "Semua Status", value: "all" },
  { label: "Tersedia", value: "available" },
  { label: "Dipesan", value: "reserved" },
  { label: "Arsip Terjual", value: "sold" },
];

export default function FishFilterClient({ fish }: { fish: Fish[] }) {
  const [sizeFilter, setSizeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("available");

  const filtered = useMemo(() => {
    return fish.filter((f) => {
      const sizeOk =
        sizeFilter === "all" ||
        (sizeFilter === "small" && f.size < 45) ||
        (sizeFilter === "medium" && f.size >= 45 && f.size <= 55) ||
        (sizeFilter === "large" && f.size > 55);
      const statusOk = statusFilter === "all" || f.status === statusFilter;
      return sizeOk && statusOk;
    });
  }, [fish, sizeFilter, statusFilter]);

  return (
    <div>
      {/* Editorial Filter Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08] mb-12">
        {/* Size filter pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase text-ivory-dim mr-2">
            UKURAN:
          </span>
          {SIZE_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setSizeFilter(f.value)}
              className={`font-sans text-[11px] px-3.5 py-1.5 rounded-full border tracking-wider transition-all duration-300 ${
                sizeFilter === f.value
                  ? "border-gold text-gold bg-gold/10"
                  : "border-white/10 text-ivory-muted hover:border-gold/40 hover:text-ivory"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Status filter pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase text-ivory-dim mr-2">
            STATUS:
          </span>
          {STATUS_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatusFilter(f.value)}
              className={`font-sans text-[11px] px-3.5 py-1.5 rounded-full border tracking-wider transition-all duration-300 ${
                statusFilter === f.value
                  ? "border-gold text-gold bg-gold/10"
                  : "border-white/10 text-ivory-muted hover:border-gold/40 hover:text-ivory"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Count & Status Ticker */}
      <div className="flex items-center justify-between text-[11px] font-mono text-ivory-dim mb-8">
        <span>ARSIP AKTIF: {filtered.length} DARI {fish.length} SPESIMEN</span>
        <span className="hidden sm:inline text-gold/70">DILENGKAPI SERTIFIKAT BKSDA & CITES</span>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-28 border border-white/[0.06] bg-navy-secondary/40 p-8">
          <p className="font-serif text-2xl text-ivory mb-3">Tidak ada koleksi pada filter ini</p>
          <p className="font-sans text-xs text-ivory-muted mb-6">Silakan atur ulang kriteria filter ukuran atau status.</p>
          <button
            onClick={() => {
              setSizeFilter("all");
              setStatusFilter("all");
            }}
            className="btn-outline text-xs"
          >
            Tampilkan Semua Koleksi
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="card-fish flex flex-col justify-between group hover:border-gold/50 transition-all duration-700 bg-navy-secondary/90 p-5 border border-white/[0.08]"
            >
              <div>
                {/* Top Card Metadata */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="text-gold tracking-widest">{item.id}</span>
                  <span className={STATUS_CLASSES[item.status]}>
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>

                {/* Image Container with Vignette */}
                <Link href={`/arwana/${item.slug}`} className="block relative aspect-[4/3] overflow-hidden mb-5 bg-[#06090D] border border-white/[0.04]">
                  <Image
                    src={item.coverImage}
                    alt={`${item.name} — Arwana Super Red ${item.grade} dari ASEVA AQUATICS`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Microchip Badge */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono text-ivory/70 bg-[#0A0F14]/80 backdrop-blur-sm px-2 py-1 border border-white/[0.06]">
                    <span className="flex items-center gap-1">
                      <Cpu size={10} className="text-gold" /> RFID
                    </span>
                    <span className="tracking-widest truncate">{item.microchip.slice(-8)}</span>
                  </div>

                  {/* Status overlay if sold */}
                  {item.status === "sold" && (
                    <div className="absolute inset-0 bg-[#0A0F14]/75 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="font-serif text-sm tracking-[0.2em] text-ivory/80 uppercase border border-white/20 px-4 py-1.5">
                        Koleksi Terjual
                      </span>
                    </div>
                  )}
                </Link>

                {/* Details */}
                <Link href={`/arwana/${item.slug}`} className="block group-hover:text-gold transition-colors">
                  <h3 className="font-serif text-xl text-ivory mb-2 font-normal leading-snug">
                    {item.name}
                  </h3>
                </Link>

                <div className="space-y-1.5 text-xs font-sans text-ivory-muted font-light mb-6">
                  <div className="flex items-center justify-between text-[11px] border-b border-white/[0.04] pb-1.5">
                    <span className="text-ivory-dim">Panjang:</span>
                    <span className="font-mono text-ivory">{item.size} cm</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] border-b border-white/[0.04] pb-1.5">
                    <span className="text-ivory-dim">Grade:</span>
                    <span className="text-gold font-medium">{item.grade.split(" — ")[0]}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-0.5">
                    <span className="text-ivory-dim">Warna:</span>
                    <span className="text-ivory">{item.color}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/[0.06]">
                {item.status !== "sold" ? (
                  <a
                    href={getWhatsAppUrl("arwana", item.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 border border-gold/40 text-gold text-[11px] font-sans tracking-[0.18em] uppercase hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    <span>Private Inquiry</span>
                    <ArrowRight size={12} />
                  </a>
                ) : (
                  <Link
                    href={`/arwana/${item.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 border border-white/10 text-ivory-dim text-[11px] font-sans tracking-[0.18em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <span>Buka Arsip Ikan</span>
                    <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
