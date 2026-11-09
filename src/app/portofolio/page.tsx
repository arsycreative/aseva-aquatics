import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portofolio Aquarium Custom & Arwana — Galeri Proyek ASEVA AQUATICS",
  description:
    "Galeri proyek aquarium custom ASEVA: residensial, komersial, dan aquarium arwana. Studi kasus mendalam dengan dimensi, material, dan tantangan teknis tiap proyek.",
  alternates: {
    canonical: "https://asevaaquatics.com/portofolio",
  },
  openGraph: {
    title: "Portofolio Aquarium Custom & Arwana — ASEVA AQUATICS",
    description:
      "Dokumentasi proyek akuarium custom kelas atas di hunian villa, perkantoran, dan komersial di Bandung dan Jabodetabek.",
    url: "https://asevaaquatics.com/portofolio",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/projects/prj-001.jpg",
        width: 1200,
        height: 630,
        alt: "Portofolio Mahakarya ASEVA AQUATICS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Proyek ASEVA AQUATICS",
    description: "Studi kasus akuarium custom arsitektural di Bandung & Jabodetabek.",
    images: ["/images/projects/prj-001.jpg"],
  },
};

import PortfolioFilterClient from "@/components/PortfolioFilterClient";

export default function PortofolioPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-16 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">REKAM JEJAK ARSITEKTURAL</span>
            <h1 className="font-serif text-white mb-6 font-light">
              Portofolio Proyek
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                ASEVA AQUATICS
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed font-light">
              Setiap karya adalah respons estetika terhadap ruang, akustik, dan integritas biologis biota air. 
              Dokumentasi parameter teknis untuk pertimbangan Anda dan arsitek interior Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Interactive Filter & Grid */}
      <section className="py-16 md:py-24 bg-black">
        <div className="section-container">
          <PortfolioFilterClient projects={PORTFOLIO_PROJECTS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505] border-t border-white/[0.08] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
            Ingin Ruang Anda <em className="italic text-champagne">Menjadi Berikutnya?</em>
          </h2>
          <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 font-light">
            Hubungi kami dan jadwalkan dialog perancangan awal untuk hunian residensial atau ruang komersial Anda.
          </p>
          <Link href="/konsultasi" className="btn-primary">
            Mulai Konsultasi Proyek
          </Link>
        </div>
      </section>
    </div>
  );
}
