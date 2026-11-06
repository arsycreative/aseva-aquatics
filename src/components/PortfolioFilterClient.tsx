"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { CATEGORY_LABELS } from "@/lib/utils";

type Project = (typeof PORTFOLIO_PROJECTS)[0];

const FILTER_TABS = [
  { id: "all", label: "Semua Kategori" },
  { id: "residential", label: "Hunian & Villa" },
  { id: "arwana", label: "Spesifik Arwana" },
  { id: "commercial", label: "Komersial & Kantor" },
];

export default function PortfolioFilterClient({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider transition-all duration-300 ${
                activeFilter === tab.id
                  ? "bg-white text-black font-medium shadow-md shadow-white/20"
                  : "bg-white/[0.03] text-neutral-400 border border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-neutral-400">
          MENAMPILKAN <span className="text-champagne font-medium">{filteredProjects.length}</span> DARI {projects.length} PROYEK
        </div>
      </div>

      {/* Portfolio Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={`/portofolio/${project.slug}`}
                className="relative group overflow-hidden flex items-end p-8 md:p-12 min-h-[400px] md:min-h-[460px] rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-700 bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] block"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/25 group-hover:via-black/65 transition-all duration-500" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-neutral-300 border border-white/10">
                    {CATEGORY_LABELS[project.category]}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 bg-black/80 px-2.5 py-1 rounded-full border border-white/10">
                    {project.city} · {project.year}
                  </span>
                </div>

                {/* Content at Bottom */}
                <div className="relative z-10 w-full pt-20">
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-champagne block mb-2 font-medium">
                    {project.type}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-white group-hover:text-champagne transition-colors duration-300 font-light mb-4">
                    {project.title}
                  </h2>

                  {/* Spec Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] font-mono text-neutral-300 bg-white/[0.05] backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/[0.08]">
                      {project.dimensions}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300 bg-white/[0.05] backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/[0.08]">
                      Vol: {project.volume}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300 bg-white/[0.05] backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/[0.08]">
                      {project.glass.split(" ")[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform duration-300 font-medium">
                    <span>Lihat Studi Kasus</span>
                    <ArrowRight size={13} className="text-champagne" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
