"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  featured: boolean;
}

const CATEGORY_LABELS: Record<string, string> = {
  arwana: "Arwana Super Red",
  aquarium: "Aquarium Custom",
};

const FILTER_TABS = [
  { id: "all", label: "Semua Wawasan" },
  { id: "arwana", label: "Arwana Super Red" },
  { id: "aquarium", label: "Aquarium Custom" },
];

export default function JournalFilterClient({
  articles,
}: {
  articles: JournalArticle[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filtered.filter((a) => a.featured);
  const others =
    featured.length > 0 ? filtered.filter((a) => !a.featured) : filtered;

  return (
    <div>
      {/* Interactive Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-2.5">
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count =
              tab.id === "all"
                ? articles.length
                : articles.filter((a) => a.category === tab.id).length;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-champagne text-white font-medium shadow-[0_0_25px_rgba(217,35,56,0.4)] border border-champagne-light/40"
                    : "bg-[#0A0A0E] text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-black/30 text-white"
                      : "bg-white/[0.05] text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <span className="font-mono text-[11px] text-neutral-400 tracking-widest uppercase">
          Menampilkan {filtered.length} Artikel Kurasi
        </span>
      </div>

      {/* Featured Articles Grid */}
      {featured.length > 0 && (
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-champagne" />
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
              Artikel <em className="italic text-champagne">Pilihan Utama</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/jurnal/${article.slug}`}
                className="bg-[#0A0A0E] rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.65)] group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-black border-b border-white/[0.06]">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-black/30" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-champagne-light border border-champagne/30">
                        {CATEGORY_LABELS[article.category] || article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 md:p-10 pb-6">
                    <div className="flex items-center gap-3 mb-4 font-mono text-xs text-neutral-400">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span className="text-neutral-600">·</span>
                      <span>{article.readTime} baca</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight group-hover:text-champagne-light transition-colors duration-300 font-light">
                      {article.title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-400 leading-relaxed line-clamp-3 font-light">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-8 md:px-10 pb-8 pt-4">
                  <div className="flex items-center justify-between text-white font-sans text-xs tracking-widest uppercase font-medium pt-5 border-t border-white/[0.06]">
                    <span>Baca Artikel Lengkap</span>
                    <ArrowRight
                      size={14}
                      className="text-champagne-light transition-transform group-hover:translate-x-1.5"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Other Articles List */}
      {others.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
              {featured.length > 0 ? (
                <>
                  Artikel <em className="italic text-champagne">Terkait Lainnya</em>
                </>
              ) : (
                <>
                  Daftar <em className="italic text-champagne">Artikel</em>
                </>
              )}
            </h2>
          </div>

          <div className="space-y-5">
            {others.map((article) => (
              <Link
                key={article.slug}
                href={`/jurnal/${article.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 bg-[#0A0A0E] rounded-2xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-300 group shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 flex-1">
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-44 h-36 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-black border border-white/10">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                      sizes="180px"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-light">
                        {CATEGORY_LABELS[article.category] || article.category}
                      </span>
                      <span className="text-neutral-600 font-mono text-xs">·</span>
                      <span className="font-mono text-xs text-neutral-400">
                        {formatDate(article.publishedAt)}
                      </span>
                      <span className="text-neutral-600 font-mono text-xs">·</span>
                      <span className="font-mono text-xs text-neutral-400">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-2 leading-tight group-hover:text-champagne-light transition-colors font-light">
                      {article.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 line-clamp-2 font-light">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-2 text-white font-sans text-xs tracking-widest uppercase font-medium pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                  <span>Baca</span>
                  <ArrowRight
                    size={13}
                    className="text-champagne-light transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

