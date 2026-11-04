import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu } from "lucide-react";
import { FISH_COLLECTION } from "@/lib/data";
import { STATUS_CLASSES, STATUS_LABELS, getWhatsAppUrl } from "@/lib/utils";

export default function FeaturedFishSection() {
  const featuredFish = FISH_COLLECTION.filter((f) => f.featured).slice(0, 4);

  return (
    <section
      className="section-padding bg-black border-t border-white/[0.08]"
      aria-label="Koleksi arwana unggulan"
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">KURASI INDIVIDUAL · EDISI 2026</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight">
              Arwana Super Red
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Koleksi Terpilih
              </span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-400 mt-3 font-light leading-relaxed">
              Tiap ekor memiliki identitas unik, nomor microchip 15-digit tak terpalsukan, dan sertifikat penangkaran resmi BKSDA/CITES.
            </p>
          </div>
          <Link
            href="/arwana"
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-2 transition-all duration-300 flex-shrink-0 font-medium"
          >
            <span>Seluruh Arsip Koleksi</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </div>

        {/* Fish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredFish.map((fish) => (
            <article
              key={fish.id}
              className="card-fish flex flex-col justify-between group hover:border-white/25 transition-all duration-700 bg-[#0A0A0A] p-5 border border-white/[0.08] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Top Card Metadata */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="text-neutral-400 tracking-widest">{fish.id}</span>
                  <span className={STATUS_CLASSES[fish.status]}>
                    {STATUS_LABELS[fish.status]}
                  </span>
                </div>

                {/* Image Container */}
                <Link href={`/arwana/${fish.slug}`} className="block relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#050505] border border-white/[0.04]">
                  <Image
                    src={fish.coverImage}
                    alt={`${fish.name} — Arwana Super Red ${fish.grade} dari ASEVA AQUATICS`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Microchip Badge */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono text-neutral-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/[0.08]">
                    <span className="flex items-center gap-1">
                      <Cpu size={10} className="text-champagne" /> RFID
                    </span>
                    <span className="tracking-widest truncate">{fish.microchip.slice(-8)}</span>
                  </div>

                  {/* Status overlay if sold */}
                  {fish.status === "sold" && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="font-serif text-sm tracking-[0.2em] text-neutral-300 uppercase border border-white/20 px-4 py-1.5 rounded-full">
                        Koleksi Terjual
                      </span>
                    </div>
                  )}
                </Link>

                {/* Details */}
                <Link href={`/arwana/${fish.slug}`} className="block group-hover:text-champagne transition-colors">
                  <h3 className="font-serif text-xl text-white mb-2 font-normal leading-snug">
                    {fish.name}
                  </h3>
                </Link>

                <div className="space-y-1.5 text-xs font-sans text-neutral-400 font-light mb-6">
                  <div className="flex items-center justify-between text-[11px] border-b border-white/[0.04] pb-1.5">
                    <span className="text-neutral-500">Panjang:</span>
                    <span className="font-mono text-white">{fish.size} cm</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] border-b border-white/[0.04] pb-1.5">
                    <span className="text-neutral-500">Grade:</span>
                    <span className="text-champagne font-medium">{fish.grade.split(" — ")[0]}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-0.5">
                    <span className="text-neutral-500">Warna:</span>
                    <span className="text-neutral-300">{fish.color}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/[0.06]">
                {fish.status !== "sold" ? (
                  <a
                    href={getWhatsAppUrl("arwana", fish.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-white text-[11px] font-sans tracking-[0.18em] uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium"
                  >
                    <span>Private Inquiry</span>
                    <ArrowRight size={12} />
                  </a>
                ) : (
                  <Link
                    href={`/arwana/${fish.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/10 text-neutral-500 text-[11px] font-sans tracking-[0.18em] uppercase hover:border-white/30 hover:text-white transition-all duration-300"
                  >
                    <span>Buka Arsip Ikan</span>
                    <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
