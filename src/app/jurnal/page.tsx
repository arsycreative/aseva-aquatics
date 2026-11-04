import type { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Jurnal Edukasi — Arwana Super Red & Aquarium Custom",
  description:
    "Artikel edukasi mendalam tentang arwana super red, aquarium custom, material, dan perawatan. Panduan dari para ahli ASEVA AQUATICS untuk kolektor dan calon pemilik aquarium.",
};

const CATEGORY_LABELS = {
  arwana: "Arwana Super Red",
  aquarium: "Aquarium Custom",
};

export default function JurnalPage() {
  const featured = JOURNAL_ARTICLES.filter((a) => a.featured);
  const others = JOURNAL_ARTICLES.filter((a) => !a.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy border-b border-white/5">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Pusat Edukasi</span>
            <h1 className="font-serif text-ivory mb-6">
              Jurnal
              <br />
              <em className="text-gold">ASEVA AQUATICS</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed">
              Panduan mendalam dari para ahli. Dari anatomi arwana super red hingga spesifikasi teknis 
              aquarium besar — semua yang perlu Anda ketahui sebelum membuat keputusan.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <h2 className="font-serif text-2xl text-ivory mb-10">
            Artikel <em className="text-gold">Utama</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mb-16">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/jurnal/${article.slug}`}
                className="bg-navy-secondary p-8 md:p-10 group hover:bg-navy-light transition-colors duration-300 block"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="section-label">
                    {CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS]}
                  </span>
                  <span className="font-sans text-xs text-ivory-dim">·</span>
                  <span className="font-sans text-xs text-ivory-dim">{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl text-ivory mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-gold font-sans text-xs tracking-widest uppercase">
                  <span>Baca Artikel</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Other Articles */}
          <h2 className="font-serif text-2xl text-ivory mb-8">
            Artikel <em className="text-gold">Lainnya</em>
          </h2>
          <div className="space-y-0">
            {others.map((article, index) => (
              <Link
                key={article.slug}
                href={`/jurnal/${article.slug}`}
                className={`flex flex-col md:flex-row md:items-start gap-6 p-8 bg-navy-secondary group hover:bg-navy-light transition-colors border-b border-white/5 last:border-b-0`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="section-label">
                      {CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS]}
                    </span>
                    <span className="font-sans text-xs text-ivory-dim">·</span>
                    <span className="font-sans text-xs text-ivory-dim">{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-ivory mb-3 leading-tight group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-ivory-muted line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2 text-gold font-sans text-xs tracking-widest uppercase">
                  <span>Baca</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

