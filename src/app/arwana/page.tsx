import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FISH_COLLECTION } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";
import FishFilterClient from "@/components/FishFilterClient";

export const metadata: Metadata = {
  title: "Koleksi Arwana Super Red Bersertifikat Kapuas Hulu — Bandung & Jabodetabek",
  description:
    "Katalog kurasi Arwana Super Red bersertifikat captive-bred dengan nomor microchip RFID resmi. Kualitas kontes dan kolektor di Bandung, Jakarta, dan Jawa Barat.",
  keywords: [
    "jual arwana super red bandung",
    "arwana super red bersertifikat",
    "harga arwana super red kualitas kontes",
    "kolektor arwana indonesia",
    "microchip arwana kapuas hulu",
  ],
  alternates: {
    canonical: "https://asevaaquatics.com/arwana",
  },
  openGraph: {
    title: "Koleksi Arwana Super Red Bersertifikat — ASEVA AQUATICS",
    description: "Kurasi eksklusif Arwana Super Red berlisensi CITES & BKSDA untuk kolektor serius.",
    url: "https://asevaaquatics.com/arwana",
    images: [{ url: "/images/hero-arwana.jpg", width: 1200, height: 630, alt: "Arwana Super Red ASEVA" }],
  },
};

export default function ArwanaPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">Koleksi Eksklusif</span>
              <span className="text-white/20">|</span>
              <Link href="/panduan-arwana-super-red" className="text-xs text-neutral-400 hover:text-white font-sans transition-colors">
                Panduan Anatomi & Kriteria Kontes →
              </Link>
            </div>
            <h1 className="font-serif text-white font-light mb-6">
              Arwana Super Red
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Bersertifikat & Terkurasi
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl font-light">
              Setiap arwana dalam koleksi kami berasal dari penangkar berizin, dilengkapi sertifikat 
              captive-bred, nomor microchip unik, dan dokumentasi riwayat perawatan. Tidak ada kompromi 
              dalam standar keaslian kami.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <FishFilterClient fish={FISH_COLLECTION} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#080808] border-t border-white/[0.08]">
        <div className="section-container text-center max-w-2xl mx-auto">
          <p className="font-sans text-sm text-neutral-400 mb-8 font-light">
            Tidak menemukan yang Anda cari? Hubungi kami — koleksi terbaru spesimen khusus belum tentu selalu terpajang di etalase web publik.
          </p>
          <a
            href={getWhatsAppUrl("arwana")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Tanyakan Stok Terkini via Concierge</span>
          </a>
        </div>
      </section>
    </div>
  );
}
