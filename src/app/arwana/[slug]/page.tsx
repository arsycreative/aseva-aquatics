import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Shield, Cpu, ArrowLeft } from "lucide-react";
import { FISH_COLLECTION } from "@/lib/data";
import FishGalleryClient from "@/components/FishGalleryClient";
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

  const pageTitle = `${fish.name} (${fish.id}) — Arwana Super Red ${fish.grade}`;
  const pageDesc = `${fish.name} — Arwana Super Red ${fish.size}cm, ${fish.color}. ${fish.grade}. Sertifikat CITES: ${fish.certificate}. Microchip RFID: ${fish.microchip}. ASEVA AQUATICS.`;
  const pageUrl = `https://asevaaquatics.com/arwana/${fish.slug}`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${fish.name} (${fish.id}) — Arwana Super Red | ASEVA AQUATICS`,
      description: pageDesc,
      url: pageUrl,
      siteName: "ASEVA AQUATICS",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: fish.coverImage,
          width: 1200,
          height: 630,
          alt: `${fish.name} — Arwana Super Red ASEVA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${fish.name} (${fish.id}) — Arwana Super Red`,
      description: `Spesimen ${fish.size}cm · CITES: ${fish.certificate} · Microchip: ${fish.microchip}`,
      images: [fish.coverImage],
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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://asevaaquatics.com/arwana/${fish.slug}#product`,
        name: `${fish.name} — Arwana Super Red (${fish.id})`,
        description: `${fish.notes} Spesifikasi: Ukuran ${fish.size}cm, ${fish.color}, kepala ${fish.headShape}, sirip ${fish.finShape}. Sertifikat CITES: ${fish.certificate}, Microchip: ${fish.microchip}.`,
        sku: fish.id,
        identifier: fish.microchip,
        category: "Arwana Super Red (Scleropages formosus)",
        image: [`https://asevaaquatics.com${fish.coverImage}`],
        brand: {
          "@type": "Brand",
          name: "ASEVA AQUATICS",
        },
        offers: {
          "@type": "Offer",
          url: `https://asevaaquatics.com/arwana/${fish.slug}`,
          priceCurrency: "IDR",
          price: "0",
          priceValidUntil: "2027-12-31",
          itemCondition: "https://schema.org/NewCondition",
          availability:
            fish.status === "available"
              ? "https://schema.org/InStock"
              : "https://schema.org/SoldOut",
          seller: {
            "@type": "Organization",
            name: "ASEVA AQUATICS",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://asevaaquatics.com/arwana/${fish.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://asevaaquatics.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Koleksi Arwana",
            item: "https://asevaaquatics.com/arwana",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: fish.name,
            item: `https://asevaaquatics.com/arwana/${fish.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* JSON-LD Product & Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-0 bg-black border-b border-white/[0.08]">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/arwana" className="hover:text-white transition-colors">Arwana</Link>
            <span>/</span>
            <span className="text-white">{fish.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <article className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left — Interactive Gallery & Fullscreen Lightbox */}
            <div>
              <FishGalleryClient
                name={fish.name}
                id={fish.id}
                images={fish.images}
                coverImage={fish.coverImage}
                status={fish.status}
              />
            </div>

            {/* Right — Details */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-neutral-400 tracking-widest">{fish.id}</span>
                  <span className={STATUS_CLASSES[fish.status]}>{STATUS_LABELS[fish.status]}</span>
                </div>
                <h1 className="font-serif text-white font-light mb-3 leading-tight text-3xl sm:text-5xl">{fish.name}</h1>
                <p className="font-sans text-sm text-neutral-400 italic font-light">{fish.species}</p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.08] rounded-2xl overflow-hidden mb-8 border border-white/[0.08]">
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
                  <div key={spec.label} className="bg-[#0A0A0A] p-4">
                    <p className="font-sans text-[10px] text-neutral-500 tracking-widest uppercase mb-1">
                      {spec.label}
                    </p>
                    <p className="font-sans text-sm text-white font-light">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Microchip & Certificate */}
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08]">
                  <Cpu size={14} className="text-champagne mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-[10px] text-neutral-500 tracking-widest uppercase mb-1">
                      Nomor Microchip RFID
                    </p>
                    <p className="font-mono text-sm text-white">{fish.microchip}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08]">
                  <Shield size={14} className="text-champagne mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-[10px] text-neutral-500 tracking-widest uppercase mb-1">
                      Nomor Sertifikat CITES / BKSDA
                    </p>
                    <p className="font-mono text-sm text-white">{fish.certificate}</p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mb-8 p-5 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
                <p className="font-sans text-[10px] text-neutral-500 tracking-widest uppercase mb-2">
                  Catatan Kurator Atelier
                </p>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">{fish.notes}</p>
              </div>

              {/* Price & CTA */}
              <div className="mb-6">
                <p className="font-sans text-[10px] text-neutral-500 mb-1 tracking-widest uppercase">
                  Investasi Kurasi
                </p>
                <p className="font-serif text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim mb-6 font-light">{fish.priceNote}</p>

                {fish.status !== "sold" ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={getWhatsAppUrl("arwana", fish.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="fish-detail-whatsapp-btn"
                      className="btn-whatsapp justify-center flex-1"
                    >
                      <MessageCircle size={16} />
                      Inquiry WhatsApp — {fish.id}
                    </a>
                    <Link href="/konsultasi" className="btn-outline justify-center text-xs flex-1">
                      Janji Temu Viewing
                    </Link>
                  </div>
                ) : (
                  <div>
                    <p className="font-sans text-sm text-neutral-400 mb-4 font-light">
                      Spesimen ini telah diadopsi oleh kolektor. Silakan jelajahi koleksi lain yang masih tersedia:
                    </p>
                    <Link href="/arwana" className="btn-outline text-xs">
                      ← Kembali ke Arsip Koleksi
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Fish */}
          {related.length > 0 && fish.status === "sold" && (
            <div className="mt-20 pt-16 border-t border-white/[0.08]">
              <h2 className="font-serif text-2xl text-white mb-10 font-light">
                Koleksi yang Masih <em className="italic text-champagne">Tersedia</em>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/arwana/${r.slug}`}
                    className="card-fish bg-[#0A0A0A] group p-0 rounded-2xl overflow-hidden border border-white/[0.08]"
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
                      <p className="font-mono text-[10px] text-neutral-400 mb-1">{r.id}</p>
                      <h3 className="font-serif text-lg text-white group-hover:text-champagne transition-colors font-light">
                        {r.name}
                      </h3>
                      <p className="font-sans text-xs text-neutral-400 mt-1 font-light">
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
    </div>
  );
}
