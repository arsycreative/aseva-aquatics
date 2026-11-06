import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { CATEGORY_LABELS } from "@/lib/utils";

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

export default function PortofolioPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
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
              Kami mendokumentasikan setiap parameter teknis agar Anda dan arsitek Anda dapat membayangkan kemungkinan terbaik untuk ruang Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/portofolio/${project.slug}`}
                className="relative group overflow-hidden flex items-end p-8 md:p-12 min-h-[380px] md:min-h-[460px] rounded-3xl border border-white/[0.08] hover:border-white/25 transition-all duration-700 bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 group-hover:via-black/60 transition-all duration-500" />
                </div>

                {/* Floating pill badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-neutral-300 border border-white/10">
                    {CATEGORY_LABELS[project.category]} · {project.city}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 pt-16">
                  <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-neutral-400">
                    <span>{project.year}</span>
                    <span>·</span>
                    <span>DIMENSI: {project.dimensions}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-3 leading-tight font-light group-hover:text-champagne transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="font-sans text-xs text-neutral-400 mb-6 font-light max-w-md line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-widest uppercase font-medium">
                    <span>Studi Kasus Lengkap</span>
                    <ArrowRight size={14} className="text-champagne transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
