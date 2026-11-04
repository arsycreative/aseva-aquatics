import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Maximize2 } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { CATEGORY_LABELS } from "@/lib/utils";

export default function PortfolioPreviewSection() {
  const featured = PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden border-t border-white/[0.08]" aria-label="Portofolio pilihan ASEVA">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-10 w-[35rem] h-[35rem] bg-champagne/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">STUDI KASUS ARSITEKTUR</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight">
              Instalasi Pilihan
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                di Hunian & Komersial
              </span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-400 mt-3 font-light leading-relaxed">
              Setiap karya adalah respons arsitektural terhadap orientasi ruang, estetika interior, dan integritas biologis ekosistem air.
            </p>
          </div>
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-2 transition-all duration-300 flex-shrink-0 font-medium"
          >
            <span>Seluruh Studi Kasus</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Hero Project (7 cols) */}
          <div className="lg:col-span-7">
            <ProjectCard project={featured[0]} large />
          </div>

          {/* Secondary Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {featured.slice(1).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
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
        large ? "min-h-[480px] lg:min-h-[580px]" : "min-h-[270px]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 group-hover:via-black/60 transition-all duration-500" />
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
        <div className="text-[11px] font-mono text-neutral-400 tracking-wider mb-2">
          {project.year} · DIMENSI: {project.dimensions}
        </div>
        <h3
          className={`font-serif text-white leading-tight font-light group-hover:text-champagne transition-colors duration-300 ${
            large ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        {large && (
          <p className="font-sans text-xs md:text-sm text-neutral-400 mt-3 max-w-lg leading-relaxed font-light line-clamp-2">
            {project.description}
          </p>
        )}

        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-white text-xs font-sans tracking-[0.18em] uppercase group-hover:translate-x-2 transition-transform duration-300 font-medium">
          <span>Studi Kasus Detail</span>
          <ArrowRight size={13} className="text-champagne" />
        </div>
      </div>
    </Link>
  );
}
