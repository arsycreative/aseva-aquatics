import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Desain & Pembuatan Aquarium Custom Kelas Atas Bandung & Jabodetabek",
  description:
    "Jasa pembuatan aquarium custom premium di Bandung dan Jabodetabek. Kaca ultra-clear low-iron, sistem filtrasi tersembunyi, garansi kebocoran 3 tahun. Konsultasi gratis.",
  alternates: {
    canonical: "https://asevaaquatics.com/aquarium-custom",
  },
  openGraph: {
    title: "Desain & Pembuatan Aquarium Custom Kelas Atas — ASEVA AQUATICS",
    description: "Karya akuarium mewah terintegrasi arsitektur interior untuk hunian eksklusif di Bandung dan Jabodetabek.",
    url: "https://asevaaquatics.com/aquarium-custom",
    images: [{ url: "/images/aquarium-interior.jpg", width: 1200, height: 630, alt: "Aquarium Custom Luxury Interior" }],
  },
};

const SERVICES = [
  {
    title: "Desain & Konsultasi",
    description:
      "Kolaborasi dengan arsitek dan desainer interior Anda. Kami menghasilkan gambar teknis 3D, simulasi pencahayaan, dan spesifikasi material sebelum satu sekrup pun dipasang.",
    icon: "✦",
  },
  {
    title: "Pembuatan & Fabrikasi",
    description:
      "Seluruh aquarium dibuat di workshop ASEVA menggunakan kaca low-iron ultra-clear, sambungan silikon kelas marine-grade, dan kabinet custom sesuai desain interior.",
    icon: "◈",
  },
  {
    title: "Instalasi & Commissioning",
    description:
      "Tim instalasi berpengalaman memasang, mengisi, dan menjalankan uji kebocoran menyeluruh selama 72 jam sebelum serah terima resmi.",
    icon: "⬡",
  },
  {
    title: "Maintenance & Perawatan",
    description:
      "Paket perawatan berkala untuk menjaga aquarium selalu dalam kondisi prima. Kunjungan rutin, penggantian filter, dan konsultasi teknis terus-menerus.",
    icon: "◎",
  },
];

const AQUARIUM_TYPES = [
  {
    title: "Aquarium Dinding (Built-In)",
    description: "Focal point ruang tamu atau kantor. Terintegrasi sempurna ke dalam struktur dinding.",
    image: "/images/aquarium-interior.jpg",
  },
  {
    title: "Partisi Ruangan Dua Sisi",
    description: "Memisahkan dua ruang sekaligus memperindah keduanya. Dapat dinikmati dari dua arah.",
    image: "/images/aquarium-interior.jpg",
  },
  {
    title: "Aquarium Pilar/Kolom",
    description: "Memanfaatkan kolom struktural menjadi elemen artistik yang dramatis.",
    image: "/images/aquarium-interior.jpg",
  },
  {
    title: "Ikon Lobi Komersial",
    description: "Instalasi skala besar untuk hotel, restoran, kantor, dan pusat perbelanjaan.",
    image: "/images/aquarium-interior.jpg",
  },
];

export default function AquariumCustomPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Aquarium Custom Luxury Design and Construction",
    name: "Jasa Desain & Pembuatan Aquarium Custom Kelas Atas",
    description:
      "Perancangan, fabrikasi kaca low-iron, konstruksi sistem filtrasi tersembunyi, dan instalasi akuarium custom mewah untuk hunian dan komersial di Bandung dan Jabodetabek.",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "ASEVA AQUATICS",
      url: "https://asevaaquatics.com",
    },
    areaServed: [
      { "@type": "City", name: "Bandung" },
      { "@type": "City", name: "Jakarta" },
      { "@type": "State", name: "Jawa Barat" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tipe Aquarium Custom",
      itemListElement: AQUARIUM_TYPES.map((type, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: type.title,
          description: type.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-0 bg-navy min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aquarium-interior.jpg"
            alt="Aquarium custom premium di hunian mewah"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        </div>
        <div className="relative z-10 section-container pb-20">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Jasa Utama</span>
            <h1 className="font-serif text-ivory mb-6 leading-tight">
              Desain & Pembuatan
              <br />
              Aquarium Custom
              <br />
              <em className="text-gold">Kelas Atas</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed max-w-xl mb-10">
              Dari selembar sketsa hingga aquarium yang mengalirkan kehidupan di ruang Anda. Kami menangani semuanya — desain, fabrikasi, instalasi, hingga perawatan berkelanjutan.
            </p>
            <div className="flex flex-col xs:flex-row gap-4">
              <Link href="/konsultasi" className="btn-primary">
                Konsultasi Gratis
              </Link>
              <Link href="/aquarium-custom/proses" className="btn-outline text-xs">
                Lihat Proses Kerja
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-navy border-t border-white/5">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Yang Kami Kerjakan</span>
            <h2 className="font-serif text-ivory">
              Layanan <em className="text-gold">End-to-End</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-navy-secondary p-10 md:p-12">
                <div className="text-gold text-2xl mb-6 font-serif">{service.icon}</div>
                <h3 className="font-serif text-2xl text-ivory mb-4">{service.title}</h3>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aquarium Types */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Jenis Proyek</span>
            <h2 className="font-serif text-ivory">
              Tiap Ruang, <em className="text-gold">Tiap Solusi</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {AQUARIUM_TYPES.map((type) => (
              <div key={type.title} className="bg-navy-secondary group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                    sizes="25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-ivory mb-3 leading-tight">{type.title}</h3>
                  <p className="font-sans text-xs text-ivory-muted leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-navy-secondary border-t border-b border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Garansi Kebocoran", desc: "12 bulan garansi struktural sejak serah terima", icon: "🛡" },
              { title: "Kaca Ultra-Clear", desc: "Low-iron glass untuk kejernihan optimal tanpa distorsi warna", icon: "✨" },
              { title: "Tim Berpengalaman", desc: "Lebih dari 12 tahun pengalaman di industri aquarium premium", icon: "⚙" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 p-8">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-serif text-xl text-ivory">{item.title}</h3>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            <Link href="/aquarium-custom/proses" className="bg-navy-secondary p-10 group hover:bg-navy-light transition-colors duration-300">
              <span className="section-label block mb-4">Transparansi Penuh</span>
              <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-gold transition-colors">
                Proses Kerja 4 Langkah →
              </h3>
              <p className="font-sans text-sm text-ivory-muted leading-relaxed">
                Dari visi pertama hingga serah terima, kami menjaga komunikasi terbuka di setiap tahap.
              </p>
            </Link>
            <Link href="/aquarium-custom/material-teknologi" className="bg-navy-secondary p-10 group hover:bg-navy-light transition-colors duration-300">
              <span className="section-label block mb-4">Spesifikasi Teknis</span>
              <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-gold transition-colors">
                Material & Teknologi →
              </h3>
              <p className="font-sans text-sm text-ivory-muted leading-relaxed">
                Kaca low-iron, silikon marine-grade, sistem filtrasi tersembunyi — ini mengapa harga kami premium.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-secondary border-t border-white/5 text-center">
        <div className="section-container">
          <h2 className="font-serif text-ivory mb-4">
            Mulai Percakapan <em className="text-gold">Hari Ini</em>
          </h2>
          <p className="font-sans text-sm text-ivory-muted max-w-md mx-auto mb-10">
            Konsultasi awal 100% gratis. Ceritakan dimensi ruang dan konsep yang Anda inginkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/konsultasi" className="btn-primary">
              Isi Form Konsultasi
            </Link>
            <a
              href={getWhatsAppUrl("aquarium-custom")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3"
            >
              <MessageCircle size={16} />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
