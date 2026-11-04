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
};

const FILTER_CATEGORIES = [
  { label: "Semua Proyek", value: "all" },
  { label: "Residensial", value: "residential" },
  { label: "Komersial", value: "commercial" },
  { label: "Aquarium Arwana", value: "arwana" },
];

export default function PortofolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy border-b border-white/5">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Karya Kami</span>
            <h1 className="font-serif text-ivory mb-6">
              Portofolio Proyek
              <br />
              <em className="text-gold">ASEVA AQUATICS</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed">
              Setiap proyek adalah cerita unik tentang ruang, klien, dan tantangan teknis. 
              Kami mendokumentasikan setiap detail agar Anda dapat membayangkan apa yang kami bisa wujudkan untuk Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <Link
                key={project.id}
                href={`/portofolio/${project.slug}`}
                className="relative group overflow-hidden flex items-end p-8 md:p-10 min-h-[350px] md:min-h-[420px]"
              >
                {/* Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-navy/20 group-hover:from-navy/90 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="section-label">
                      {CATEGORY_LABELS[project.category]}
                    </span>
                    <span className="text-ivory-dim text-xs">·</span>
                    <span className="font-sans text-xs text-ivory-muted">{project.city}, {project.year}</span>
                  </div>
                  <h2 className="font-serif text-2xl text-ivory mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="font-sans text-xs text-ivory-muted mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 max-w-sm leading-relaxed">
                    {project.dimensions} · {project.volume}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-sans text-xs tracking-widest uppercase">
                    <span>Lihat Studi Kasus</span>
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-secondary border-t border-white/5 text-center">
        <div className="section-container">
          <h2 className="font-serif text-ivory mb-4">
            Ingin Proyek Anda <em className="text-gold">Menjadi Berikutnya?</em>
          </h2>
          <p className="font-sans text-sm text-ivory-muted max-w-md mx-auto mb-10">
            Hubungi kami dan jadwalkan konsultasi visi pertama Anda. Gratis, tanpa kewajiban.
          </p>
          <Link href="/konsultasi" className="btn-primary">
            Mulai Proyek Anda
          </Link>
        </div>
      </section>
    </>
  );
}

