import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";
import AquariumCalculatorClient from "@/components/AquariumCalculatorClient";

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
    code: "01 / ARSITEKTUR",
    title: "Desain & Kalkulasi Beban Sipil",
    description:
      "Kolaborasi langsung dengan arsitek Anda menghasilkan gambar kerja CAD 3D, simulasi titik beban lantai, dan jalur pemipaan tersembunyi.",
    icon: "✦",
  },
  {
    code: "02 / FABRIKASI",
    title: "Konstruksi Kaca Optik Low-Iron",
    description:
      "Perakitan presisi di workshop ASEVA menggunakan kaca kristal low-iron (12–19mm), silikon struktural Jerman, dan rangka baja anti-korosi.",
    icon: "◈",
  },
  {
    code: "03 / HIDROLIKA",
    title: "Instalasi & Uji Tekanan 72 Jam",
    description:
      "Pemasangan di lokasi, kalibrasi sump kedap suara (<28 dB), serta pengujian beban hidrostatik penuh selama 72 jam sebelum serah terima.",
    icon: "⬡",
  },
  {
    code: "04 / EKOSISTEM",
    title: "Perawatan Berkala & Concierge",
    description:
      "Layanan pemeliharaan terjadwal untuk menjaga kejernihan optik kaca, stabilitas parameter biologi air, dan kesehatan satwa koleksi Anda.",
    icon: "◎",
  },
];

const AQUARIUM_TYPES = [
  {
    title: "Aquarium Dinding (Built-In)",
    description: "Menyatu rata dengan bidang dinding interior tanpa satu pun kabel atau pipa kasat mata.",
    image: "/images/projects/prj-001.jpg",
  },
  {
    title: "Partisi Ruang Dua Sisi",
    description: "Membagi dua zona interior megah sekaligus menghadirkan panorama hidup dari kedua sisi ruang.",
    image: "/images/projects/prj-002.jpg",
  },
  {
    title: "Aquarium Kolom Struktural",
    description: "Mengubah tiang atau sudut struktural menjadi instalasi akuarium monolitik berdimensi dramatis.",
    image: "/images/projects/prj-003.jpg",
  },
  {
    title: "Ikon Lobi Komersial",
    description: "Instalasi berskala monumental untuk lobi kantor pusat, galeri, maupun residensial megah.",
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
          <ScrollReveal className="max-w-2xl">
            <span className="section-label block mb-4">REKAYASA ARSITEKTUR AIR</span>
            <h1 className="font-serif text-white mb-6 leading-tight font-light">
              Desain & Pembuatan
              <br />
              Aquarium Custom
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                Kelas Atas
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed max-w-xl mb-10 font-light">
              Dari denah CAD arsitektur hingga mahakarya kaca optik yang mengalirkan keheningan di ruang Anda. Dirancang dengan standar faktor keamanan 3.8× dan akustik di bawah 28 dB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kalkulator" className="btn-primary">
                Hitung Spesifikasi Ruang
              </a>
              <Link href="/aquarium-custom/material-teknologi" className="btn-outline text-xs">
                Spesifikasi Material & Kaca
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services (Warm Charcoal #0A0A0E) */}
      <section className="section-padding bg-[#0A0A0E] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <ScrollReveal className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne" />
              <span className="section-label">RUANG LINGKUP ATELIER</span>
              <span className="w-8 h-px bg-champagne" />
            </div>
            <h2 className="font-serif text-white font-light text-3xl md:text-5xl">
              Rekayasa <em className="italic text-champagne">End-to-End</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 0.08}>
                <div className="bg-[#111116] p-9 md:p-11 rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-champagne-light uppercase">
                      {service.code}
                    </span>
                    <span className="text-champagne text-xl font-serif">{service.icon}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3 font-light">{service.title}</h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section (Slate #090B10) */}
      <section id="kalkulator" className="section-padding bg-[#090B10] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <AquariumCalculatorClient />
          </ScrollReveal>
        </div>
      </section>

      {/* Aquarium Types (Pitch Black #000000) */}
      <section className="section-padding bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne" />
              <span className="section-label">TIPOLOGI RUANG</span>
              <span className="w-8 h-px bg-champagne" />
            </div>
            <h2 className="font-serif text-white font-light text-3xl md:text-5xl">
              Tiap Ruang, <em className="italic text-champagne">Tiap Karakter</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {AQUARIUM_TYPES.map((type, idx) => (
              <ScrollReveal key={type.title} delay={idx * 0.08}>
                <div className="bg-[#0A0A0E] rounded-2xl border border-white/[0.08] hover:border-white/25 transition-all duration-500 group overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-black">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-95"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="font-serif text-lg text-white mb-2.5 leading-tight font-light">{type.title}</h3>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">{type.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages & Telemetry Links (Smoked Lounge #08080B) */}
      <section className="py-24 bg-[#08080B] border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Link href="/aquarium-custom/proses" className="block bg-[#0E0E14] rounded-3xl border border-white/[0.08] p-9 md:p-11 group hover:border-champagne/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] h-full">
                <span className="section-label block mb-3">TRANSPARANSI PROSES</span>
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-champagne-light transition-colors font-light">
                  Metodologi 4 Tahap Menuju Mahakarya →
                </h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  Dari orientasi visi ruang pertama hingga commissioning hidrolika 72 jam dan serah terima bergaransi 3 tahun.
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Link href="/aquarium-custom/material-teknologi" className="block bg-[#0E0E14] rounded-3xl border border-white/[0.08] p-9 md:p-11 group hover:border-champagne/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] h-full">
                <span className="section-label block mb-3">SPESIFIKASI TEKNIK</span>
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-champagne-light transition-colors font-light">
                  Material Kristal & Teknologi Filtrasi →
                </h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  Komparasi optik kaca low-iron 99.2%, silikon struktural Jerman, pencahayaan spektrum 14.000K, dan sump senyap.
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 bg-black text-center overflow-hidden">
        <div className="section-container relative z-10 max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
              Mulai Percakapan <em className="italic text-champagne">Hari Ini</em>
            </h2>
            <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 font-light">
              Diskusikan dimensi ruang dan konsep interior hunian Anda bersama tim rekayasa akuarium ASEVA.
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
