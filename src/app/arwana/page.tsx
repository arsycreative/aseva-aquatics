import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Filter } from "lucide-react";
import { FISH_COLLECTION } from "@/lib/data";
import { STATUS_CLASSES, STATUS_LABELS, getWhatsAppUrl } from "@/lib/utils";
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
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-navy border-b border-white/5">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-label">Koleksi Eksklusif</span>
              <span className="text-white/20">|</span>
              <Link href="/panduan-arwana-super-red" className="text-xs text-gold hover:underline font-sans">
                Baca Panduan Anatomi & Kriteria Kontes →
              </Link>
            </div>
            <h1 className="font-serif text-ivory mb-6">
              Arwana Super Red
              <br />
              <em className="text-gold">Bersertifikat & Terkurasi</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed max-w-xl">
              Setiap arwana dalam koleksi kami berasal dari penangkar berizin, dilengkapi sertifikat 
              captive-bred, nomor microchip unik, dan dokumentasi riwayat perawatan. Tidak ada kompromi 
              dalam standar keaslian kami.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <FishFilterClient fish={FISH_COLLECTION} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-secondary border-t border-white/5">
        <div className="section-container text-center">
          <p className="font-sans text-sm text-ivory-muted mb-6">
            Tidak menemukan yang Anda cari? Hubungi kami — koleksi terbaru belum tentu selalu ada di website.
          </p>
          <a
            href={getWhatsAppUrl("arwana")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle size={16} />
            Tanyakan Stok Terkini
          </a>
        </div>
      </section>
    </>
  );
}
