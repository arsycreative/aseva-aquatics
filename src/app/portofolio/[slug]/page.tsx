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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        </div>
        <div className="relative z-10 section-container pb-16 pt-32">
          <nav className="flex items-center gap-2 font-sans text-xs text-ivory-dim mb-8">
            <Link href="/" className="hover:text-gold">Beranda</Link>
            <span>/</span>
            <Link href="/portofolio" className="hover:text-gold">Portofolio</Link>
            <span>/</span>
            <span className="text-ivory truncate">{project.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="section-label">{CATEGORY_LABELS[project.category]}</span>
            <span className="font-sans text-xs text-ivory-muted">· {project.city} · {project.year}</span>
          </div>
          <h1 className="font-serif text-ivory max-w-2xl leading-tight">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="font-sans text-base text-ivory-muted leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="mb-10">
                <h2 className="font-serif text-2xl text-ivory mb-5">
                  Tantangan <em className="text-gold">Teknis</em>
                </h2>
                <div className="p-6 border-l-2 border-gold bg-navy-secondary">
                  <p className="font-sans text-sm text-ivory-muted leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Gallery placeholder */}
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {project.images.map((img, i) => (
                  <div key={i} className="relative aspect-fish">
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

            {/* Sidebar — Specs */}
            <div className="space-y-0">
              <div className="border border-white/5 divide-y divide-white/5">
                {[
                  { label: "Kategori", value: CATEGORY_LABELS[project.category] },
                  { label: "Lokasi", value: project.city },
                  { label: "Tahun", value: String(project.year) },
                  { label: "Jenis", value: project.type },
                  { label: "Dimensi", value: project.dimensions },
                  { label: "Volume", value: project.volume },
                  { label: "Kaca", value: project.glass },
                  { label: "Filtrasi", value: project.filtration },
                  { label: "Pencahayaan", value: project.lighting },
                ].map((spec) => (
                  <div key={spec.label} className="p-5 bg-navy-secondary">
                    <p className="font-sans text-xs text-ivory-dim tracking-widest uppercase mb-1">
                      {spec.label}
                    </p>
                    <p className="font-sans text-sm text-ivory">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 space-y-3">
                <Link href="/konsultasi" className="btn-primary w-full justify-center">
                  Buat Proyek Serupa
                </Link>
                <a
                  href={getWhatsAppUrl("portfolio")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center text-xs"
                >
                  <MessageCircle size={14} />
                  Diskusi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Back */}
      <div className="py-10 bg-navy border-t border-white/5">
        <div className="section-container">
          <Link href="/portofolio" className="btn-ghost">
            ← Kembali ke Semua Proyek
          </Link>
        </div>
      </div>
    </>
  );
}
