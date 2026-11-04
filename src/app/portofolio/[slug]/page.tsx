import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { CATEGORY_LABELS, getWhatsAppUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} (${project.city}) — Studi Kasus Portofolio ASEVA`,
    description: `${project.description.slice(0, 160)}`,
    alternates: {
      canonical: `https://asevaaquatics.com/portofolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — ASEVA AQUATICS`,
      description: project.description.slice(0, 160),
      url: `https://asevaaquatics.com/portofolio/${project.slug}`,
      images: [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: `https://asevaaquatics.com${project.coverImage}`,
    creator: {
      "@type": "HomeAndConstructionBusiness",
      name: "ASEVA AQUATICS",
    },
    contentLocation: {
      "@type": "Place",
      name: project.city,
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
        </div>
        <div className="relative z-10 section-container pb-16 pt-36 w-full">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/portofolio" className="hover:text-white transition-colors">Portofolio</Link>
            <span>/</span>
            <span className="text-white truncate">{project.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-neutral-300 border border-white/10">
              {CATEGORY_LABELS[project.category]}
            </span>
            <span className="font-sans text-xs text-neutral-400">· {project.city} · {project.year}</span>
          </div>
          <h1 className="font-serif text-white max-w-3xl leading-tight font-light text-3xl sm:text-5xl lg:text-6xl">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8">
              <p className="font-sans text-base md:text-lg text-neutral-300 leading-relaxed mb-12 font-light">
                {project.description}
              </p>

              <div className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl text-white mb-5 font-light">
                  Tantangan & <em className="italic text-champagne">Solusi Teknis</em>
                </h2>
                <div className="p-8 rounded-3xl border border-white/[0.08] bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((img, i) => (
                  <div key={i} className="relative aspect-fish rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050505]">
                    <Image
                      src={img}
                      alt={`${project.title} — Foto ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar — Specs (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-white/[0.08] overflow-hidden bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="p-5 border-b border-white/[0.08] bg-[#111111]">
                  <span className="font-mono text-[10px] text-champagne tracking-widest uppercase font-medium">
                    PARAMETER REKAYASA PROYEK
                  </span>
                </div>
                <div className="divide-y divide-white/[0.06]">
                  {[
                    { label: "Kategori", value: CATEGORY_LABELS[project.category] },
                    { label: "Lokasi", value: project.city },
                    { label: "Tahun Pengerjaan", value: String(project.year) },
                    { label: "Tipe Konstruksi", value: project.type },
                    { label: "Dimensi Tangki", value: project.dimensions },
                    { label: "Volume Hidrolika", value: project.volume },
                    { label: "Spesifikasi Kaca", value: project.glass },
                    { label: "Sistem Filtrasi", value: project.filtration },
                    { label: "Pencahayaan", value: project.lighting },
                  ].map((spec) => (
                    <div key={spec.label} className="p-4 px-6">
                      <p className="font-sans text-[10px] text-neutral-500 tracking-widest uppercase mb-1">
                        {spec.label}
                      </p>
                      <p className="font-sans text-sm text-white font-light">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Link href="/konsultasi" className="btn-primary w-full justify-center">
                  Konsultasi Proyek Serupa
                </Link>
                <a
                  href={getWhatsAppUrl("portfolio")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center text-xs"
                >
                  <MessageCircle size={14} />
                  Diskusi Langsung via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Back */}
      <div className="py-12 bg-black border-t border-white/[0.08]">
        <div className="section-container">
          <Link href="/portofolio" className="btn-ghost">
            ← Kembali ke Semua Studi Kasus
          </Link>
        </div>
      </div>
    </div>
  );
}
