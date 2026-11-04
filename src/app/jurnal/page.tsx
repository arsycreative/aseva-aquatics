import type { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/lib/data";
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
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">WAWASAN & OTORITAS</span>
            <h1 className="font-serif text-white mb-6 font-light">
              Jurnal
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                ASEVA AQUATICS
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed font-light">
              Panduan mendalam dari kurator dan teknisi kami. Dari anatomi arwana super red Kapuas Hulu hingga kalkulasi beban struktural akuarium masif di hunian Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-10 font-light">
            Artikel <em className="italic text-champagne">Pilihan Utama</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/jurnal/${article.slug}`}
                className="bg-[#0A0A0A] p-8 md:p-12 rounded-3xl border border-white/[0.08] hover:border-white/25 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group block flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10">
                      {CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS]}
                    </span>
                    <span className="text-neutral-600 font-mono text-xs">·</span>
                    <span className="font-mono text-xs text-neutral-400">{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight group-hover:text-champagne transition-colors duration-300 font-light">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed mb-8 line-clamp-3 font-light">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white font-sans text-xs tracking-widest uppercase font-medium pt-4 border-t border-white/[0.06]">
                  <span>Baca Artikel Lengkap</span>
                  <ArrowRight size={14} className="text-champagne transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Other Articles */}
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
            Artikel <em className="italic text-champagne">Lainnya</em>
          </h2>
          <div className="space-y-4">
            {others.map((article) => (
              <Link
                key={article.slug}
                href={`/jurnal/${article.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-[#0A0A0A] rounded-2xl border border-white/[0.08] hover:border-white/25 transition-all duration-300 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                      {CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS]}
                    </span>
                    <span className="text-neutral-600 font-mono text-xs">·</span>
                    <span className="font-mono text-xs text-neutral-400">{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2 leading-tight group-hover:text-champagne transition-colors font-light">
                    {article.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 line-clamp-2 font-light">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2 text-white font-sans text-xs tracking-widest uppercase font-medium">
                  <span>Buka</span>
                  <ArrowRight size={13} className="text-champagne transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
