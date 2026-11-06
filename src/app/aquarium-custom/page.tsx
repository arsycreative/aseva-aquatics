import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
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
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/aquarium-interior.jpg", width: 1200, height: 630, alt: "Aquarium Custom Luxury Interior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desain & Pembuatan Aquarium Custom Kelas Atas — ASEVA AQUATICS",
    description: "Kaca kristal ultra-clear low-iron, sistem filtrasi tersembunyi, garansi kebocoran.",
    images: ["/images/aquarium-interior.jpg"],
  },
};

const SERVICES = [
  {
    title: "Desain & Konsultasi Ruang",
    description:
      "Kolaborasi dengan arsitek dan desainer interior Anda. Kami menghasilkan gambar teknis 3D, simulasi beban struktural, dan spesifikasi material sebelum satu baut pun dipasang.",
    icon: "✦",
  },
  {
    title: "Pembuatan & Fabrikasi Presisi",
    description:
      "Seluruh aquarium dibuat di workshop ASEVA menggunakan kaca low-iron kristal ultra-clear, sambungan silikon kelas marine-grade, dan rangka baja/kabinet custom bernilai seni.",
    icon: "◈",
  },
  {
    title: "Instalasi & Commissioning",
    description:
      "Tim instalasi berpengalaman memasang, mengisi hidrolika, dan menjalankan uji kebocoran menyeluruh selama 72 jam sebelum serah terima resmi.",
    icon: "⬡",
  },
  {
    title: "Maintenance & Perawatan",
    description:
      "Paket perawatan berkala untuk menjaga aquarium selalu dalam kondisi jernih dan prima. Kunjungan rutin, penggantian media biologi, dan konsultasi teknis berkesinambungan.",
    icon: "◎",
  },
];

const AQUARIUM_TYPES = [
  {
    title: "Aquarium Dinding (Built-In)",
    description: "Focal point ruang keluarga atau eksekutif suite. Terintegrasi rata dinding arsitektural tanpa kabel atau pipa terlihat.",
    image: "/images/projects/prj-001.jpg",
  },
  {
    title: "Partisi Ruang Dua Sisi",
    description: "Membagi dua zona interior megah sekaligus menghidupkan keduanya. Dapat dinikmati dari dua sudut pandang berbeda.",
    image: "/images/projects/prj-002.jpg",
  },
  {
    title: "Aquarium Kolom Struktural",
    description: "Memanfaatkan kolom atau tiang struktural menjadi instalasi artistik silinder atau kubus yang dramatis.",
    image: "/images/projects/prj-003.jpg",
  },
  {
    title: "Ikon Lobi Komersial",
    description: "Instalasi skala besar bernilai magnetis untuk lobi hotel bintang lima, galeri seni, restoran fine-dining, dan kantor pusat.",
    image: "/images/projects/prj-004.jpg",
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
      itemListElement: AQUARIUM_TYPES.map((type) => ({
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
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black min-h-[72vh] flex items-end overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aquarium-interior.jpg"
            alt="Aquarium custom premium di hunian mewah"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />
        </div>
        <div className="relative z-10 section-container pb-12 w-full">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">REKAYASA ARSITEKTUR AIR</span>
            <h1 className="font-serif text-white mb-6 leading-tight font-light">
              Desain & Pembuatan
              <br />
              Aquarium Custom
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Kelas Atas
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed max-w-xl mb-10 font-light">
              Dari selembar denah arsitektur hingga akuarium yang mengalirkan keheningan hidup di ruang Anda. Kami merancang desain, fabrikasi kaca kristal, instalasi filtrasi hening, hingga perawatan berstandar tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/konsultasi" className="btn-primary">
                Konsultasi Ruang
              </Link>
              <Link href="/aquarium-custom/proses" className="btn-outline text-xs">
                Lihat Metodologi 4 Tahap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-black border-t border-white/[0.08]">
        <div className="section-container">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">RUANG LINGKUP ATELIER</span>
              <span className="w-8 h-px bg-champagne-dim" />
            </div>
            <h2 className="font-serif text-white font-light text-3xl md:text-5xl">
              Layanan <em className="italic text-champagne">End-to-End</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-[#0A0A0A] p-10 md:p-12 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="text-champagne text-2xl mb-6 font-serif">{service.icon}</div>
                <h3 className="font-serif text-2xl text-white mb-4 font-light">{service.title}</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aquarium Types with Subtle Grid Pattern */}
      <section className="section-padding bg-[#050505] border-t border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-35 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

        <div className="section-container relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">TIPOLOGI RUANG</span>
              <span className="w-8 h-px bg-champagne-dim" />
            </div>
            <h2 className="font-serif text-white font-light text-3xl md:text-5xl">
              Tiap Ruang, <em className="italic text-champagne">Tiap Karakter</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {AQUARIUM_TYPES.map((type) => (
              <div key={type.title} className="bg-[#0A0A0A] rounded-2xl border border-white/[0.08] group overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <div className="relative h-48 overflow-hidden bg-black">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                    sizes="25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-white mb-3 leading-tight font-light">{type.title}</h3>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-black border-t border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Garansi Struktur 3 Tahun", desc: "Perlindungan struktural dan kebocoran silikon menyeluruh sejak serah terima", icon: "🛡" },
              { title: "Kaca Low-Iron Kristal", desc: "Optik kristal ultra-clear 99.2% kejernihan tanpa distorsi kehijauan", icon: "✨" },
              { title: "Akustik Tersembunyi", desc: "Pompa isolasi getaran senyap di bawah 28 dB, pipa dry-wet tak kasat mata", icon: "⚙" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-serif text-xl text-white font-light">{item.title}</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages with Subtle Dots Pattern */}
      <section className="section-padding bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/aquarium-custom/proses" className="bg-[#0A0A0A] rounded-3xl border border-white/[0.08] p-10 group hover:border-white/25 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <span className="section-label block mb-4">TRANSPARANSI PROSES</span>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-champagne transition-colors font-light">
                Metodologi 4 Tahap Menuju Mahakarya →
              </h3>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                Dari orientasi visi ruang pertama hingga commissioning hidrolika dan serah terima, kami mendokumentasikan setiap tahap secara presisi.
              </p>
            </Link>
            <Link href="/aquarium-custom/material-teknologi" className="bg-[#0A0A0A] rounded-3xl border border-white/[0.08] p-10 group hover:border-white/25 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <span className="section-label block mb-4">SPESIFIKASI TEKNIK</span>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-champagne transition-colors font-light">
                Material Kristal & Teknologi Filtrasi →
              </h3>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                Kaca low-iron optik kristal, silikon marine-grade Wacker, pencahayaan spektrum terprogram, dan sistem sump biologis tersembunyi.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA with Architectural Image Background */}
      <section className="relative py-24 bg-black border-t border-white/[0.08] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/aquarium-interior.jpg"
            alt="Interior Atmosphere"
            fill
            className="object-cover scale-105 opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/80" />
        </div>

        <div className="section-container relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
            Mulai Percakapan <em className="italic text-champagne">Hari Ini</em>
          </h2>
          <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 font-light">
            Konsultasi awal dan studi kelayakan ruang bersama kurator kami. Diskusikan dimensi ruang dan konsep interior hunian Anda.
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
              Chat WhatsApp Langsung
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
