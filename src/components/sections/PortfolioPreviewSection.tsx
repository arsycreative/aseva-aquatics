"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Maximize2, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { CATEGORY_LABELS } from "@/lib/utils";

export default function PortfolioPreviewSection() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial" | "arwana">("all");

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  }).slice(0, 3);

  const heroProject = filteredProjects[0] || PORTFOLIO_PROJECTS[0];
  const sideProjects = filteredProjects.slice(1);

  return (
    <section
      className="py-28 md:py-36 bg-[#09090C] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Portofolio pilihan ASEVA"
    >
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-10 w-[35rem] h-[35rem] bg-champagne/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Editorial Header & Filter Tabs with Scroll Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <Compass size={12} className="text-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                STUDI KASUS TERLAKSANA
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
              Instalasi Pilihan di Hunian &amp; Komersial
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-400 mt-2 font-light leading-relaxed max-w-xl">
              Setiap karya adalah perpaduan antara kalkulasi tonase sipil, transparansi kaca Diamant, dan keharmonisan interior.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Semua Kategori" },
              { id: "residential", label: "Hunian & Villa" },
              { id: "arwana", label: "Spesifik Arwana" },
              { id: "commercial", label: "Komersial" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-white text-black font-medium shadow-md shadow-white/20"
                    : "bg-white/[0.03] text-neutral-400 border border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Asymmetrical Editorial Grid with Scroll Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
          >
            {/* Main Hero Project (7 cols) */}
            <div className="lg:col-span-7">
              <ProjectCard project={heroProject} large />
            </div>

            {/* Secondary Stack (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {sideProjects.length > 0 ? (
                sideProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="h-full flex items-center justify-center p-8 bg-[#0A0A0A]/50 rounded-3xl border border-white/[0.06] text-neutral-500 font-sans text-xs">
                  Kategori ini sedang dalam pembaruan dokumentasi foto.
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Explorer Action with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-between pt-6 border-t border-white/[0.08]"
        >
          <span className="font-mono text-xs text-neutral-400 tracking-wider">
            ARSIP DOKUMENTASI PROYEK JAWA BARAT &amp; JABODETABEK
          </span>
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-2 transition-all duration-300 font-medium"
          >
            <span>Seluruh Studi Kasus ({PORTFOLIO_PROJECTS.length})</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[0];
  large?: boolean;
}) {
  return (
    <Link
      href={`/portofolio/${project.slug}`}
      className={`relative group overflow-hidden bg-[#0A0A0A] rounded-3xl border border-white/[0.08] hover:border-white/25 transition-all duration-700 flex flex-col justify-end p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${
        large ? "min-h-[480px] lg:min-h-[600px]" : "min-h-[280px]"
      }`}
    >
      {/* Background with Cinema Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/25 group-hover:via-black/65 transition-all duration-500" />
      </div>

      {/* Top Floating Badge */}
      <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-neutral-300 border border-white/10">
          {CATEGORY_LABELS[project.category]} · {project.city}
        </span>
        <div className="w-8 h-8 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
          <Maximize2 size={13} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16">
        <div className="text-[11px] font-mono text-champagne tracking-wider mb-2">
          {project.year} · {project.volume} · {project.dimensions}
        </div>
        <h3
          className={`font-serif text-white leading-tight font-light group-hover:text-champagne transition-colors duration-300 ${
            large ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        {large && (
          <p className="font-sans text-xs md:text-sm text-neutral-300 mt-3 max-w-lg leading-relaxed font-light line-clamp-2">
            {project.description}
          </p>
        )}

        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-white text-xs font-sans tracking-[0.18em] uppercase group-hover:translate-x-2 transition-transform duration-300 font-medium">
          <span className="text-[11px] font-mono text-neutral-400 lowercase">{project.glass}</span>
          <div className="flex items-center gap-2 text-champagne">
            <span className="text-white">Dossier</span>
            <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}
