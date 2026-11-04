import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Shield, Cpu, ArrowLeft } from "lucide-react";
import { FISH_COLLECTION, SITE_CONFIG } from "@/lib/data";
import { STATUS_CLASSES, STATUS_LABELS, getWhatsAppUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FISH_COLLECTION.map((fish) => ({ slug: fish.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fish = FISH_COLLECTION.find((f) => f.slug === slug);
  if (!fish) return {};
  return {
    title: `${fish.name} (${fish.id}) — Arwana Super Red ${fish.grade}`,
    description: `${fish.name} — Arwana Super Red ${fish.size}cm, ${fish.color}. ${fish.grade}. Sertifikat: ${fish.certificate}. Microchip: ${fish.microchip}. ASEVA AQUATICS.`,
    openGraph: {
      images: [{ url: fish.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default async function FishDetailPage({ params }: Props) {
  const { slug } = await params;
  const fish = FISH_COLLECTION.find((f) => f.slug === slug);
  if (!fish) notFound();

  const related = FISH_COLLECTION.filter(
    (f) => f.slug !== slug && f.status !== "sold"
  ).slice(0, 3);

  return (
    <>
      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${fish.name} — Arwana Super Red`,
            description: fish.notes,
            sku: fish.id,
            identifier: fish.microchip,
            brand: { "@type": "Brand", name: "ASEVA AQUATICS" },
            offers: {
              "@type": "Offer",
              availability:
                fish.status === "available"
                  ? "https://schema.org/InStock"
                  : "https://schema.org/SoldOut",
              priceCurrency: "IDR",
              seller: { "@type": "Organization", name: "ASEVA AQUATICS" },
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="pt-28 pb-0 bg-navy border-b border-white/5">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 font-sans text-xs text-ivory-dim">
            <Link href="/" className="hover:text-gold transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/arwana" className="hover:text-gold transition-colors">Arwana</Link>
            <span>/</span>
            <span className="text-ivory">{fish.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <article className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left — Images */}
            <div>
              <div className="relative aspect-fish overflow-hidden border border-white/5">
                <Image
                  src={fish.coverImage}
                  alt={`${fish.name} — Arwana Super Red ${fish.id} dari ASEVA AQUATICS`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
                {fish.status === "sold" && (
                  <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
                    <span className="badge-sold text-base px-6 py-3">Terjual · Arsip Koleksi</span>
                  </div>
                )}
              </div>

              {/* Certification badge */}
              <div className="mt-4 flex items-center gap-3 p-4 border border-gold/20 bg-gold/5">
                <Shield size={16} className="text-gold flex-shrink-0" />
                <p className="font-sans text-xs text-ivory-muted">
                  <span className="text-gold font-medium">Terverifikasi & Bersertifikat.</span>{" "}
                  Setiap ikan dilengkapi dokumen legal lengkap dari BKSDA.
                </p>
              </div>
            </div>

            {/* Right — Details */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs text-gold tracking-widest">{fish.id}</span>
                  <span className={STATUS_CLASSES[fish.status]}>{STATUS_LABELS[fish.status]}</span>
                </div>
                <h1 className="font-serif text-ivory mb-3 leading-tight">{fish.name}</h1>
                <p className="font-sans text-sm text-ivory-muted italic">{fish.species}</p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-px bg-white/5 mb-8">
                {[
                  { label: "Ukuran", value: `${fish.size} cm` },
                  { label: "Usia", value: fish.age },
                  { label: "Grade", value: fish.grade.split(" — ")[0] },
                  { label: "Kualitas", value: fish.grade.split(" — ")[1] },
                  { label: "Warna", value: fish.color },
                  { label: "Bentuk Sirip", value: fish.finShape },
                  { label: "Bentuk Kepala", value: fish.headShape },
                  { label: "Penangkar", value: fish.breeder },
                ].map((spec) => (
                  <div key={spec.label} className="bg-navy-secondary p-4">
                    <p className="font-sans text-xs text-ivory-dim tracking-widest uppercase mb-1">
                      {spec.label}
                    </p>
                    <p className="font-sans text-sm text-ivory font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Microchip & Certificate */}
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3 p-4 bg-navy-secondary border border-white/5">
                  <Cpu size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs text-ivory-dim tracking-widest uppercase mb-1">
                      Nomor Microchip
                    </p>
                    <p className="font-mono text-sm text-ivory">{fish.microchip}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-navy-secondary border border-white/5">
                  <Shield size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs text-ivory-dim tracking-widest uppercase mb-1">
                      Nomor Sertifikat
                    </p>
                    <p className="font-mono text-sm text-ivory">{fish.certificate}</p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mb-8 p-5 border border-white/5 bg-navy-secondary">
                <p className="font-sans text-xs text-ivory-dim tracking-widest uppercase mb-3">
                  Catatan Kurator
                </p>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">{fish.notes}</p>
              </div>

              {/* Price & CTA */}
              <div className="mb-6">
                <p className="font-sans text-xs text-ivory-dim mb-1 tracking-widest uppercase">
                  Investasi
                </p>
                <p className="font-serif text-2xl text-gold mb-6">{fish.priceNote}</p>

                {fish.status !== "sold" ? (
                  <div className="flex flex-col gap-3">
                    <a
                      href={getWhatsAppUrl("arwana", fish.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="fish-detail-whatsapp-btn"
                      className="btn-whatsapp justify-center"
                    >
                      <MessageCircle size={16} />
                      Tanya via WhatsApp — {fish.id}
                    </a>
                    <Link href="/konsultasi" className="btn-outline justify-center text-xs">
                      Jadwalkan Konsultasi Tatap Muka
                    </Link>
                  </div>
                ) : (
                  <div>
                    <p className="font-sans text-sm text-ivory-muted mb-4">
                      Ikan ini sudah terjual. Lihat koleksi yang masih tersedia:
                    </p>
                    <Link href="/arwana" className="btn-outline text-xs">
                      ← Kembali ke Koleksi
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Fish */}
          {related.length > 0 && fish.status === "sold" && (
            <div className="mt-20 pt-16 border-t border-white/5">
              <h2 className="font-serif text-2xl text-ivory mb-10">
                Koleksi yang Masih <em className="text-gold">Tersedia</em>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/arwana/${r.slug}`}
                    className="card-fish bg-navy group p-0"
                  >
                    <div className="relative aspect-fish overflow-hidden">
                      <Image
                        src={r.coverImage}
                        alt={r.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-sans text-xs text-gold mb-1">{r.id}</p>
                      <h3 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                        {r.name}
                      </h3>
                      <p className="font-sans text-xs text-ivory-muted mt-1">
                        {r.size} cm · {r.color}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

