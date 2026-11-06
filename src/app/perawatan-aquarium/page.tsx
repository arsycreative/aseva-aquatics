import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, Award, Wrench, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Jasa Perawatan & Maintenance Aquarium Premium Bandung & Jabodetabek",
  description:
    "Layanan maintenance aquarium berkala oleh tim ASEVA. Pembersihan filter, monitoring parameter air, pergantian media, dan pembersihan kaca terjadwal di Bandung dan Jabodetabek.",
  keywords: [
    "jasa perawatan aquarium bandung",
    "maintenance aquarium custom",
    "kuras aquarium bandung",
    "perawatan filter arwana",
    "jasa aquarium jakarta",
  ],
  alternates: {
    canonical: "https://asevaaquatics.com/perawatan-aquarium",
  },
  openGraph: {
    title: "Jasa Perawatan & Maintenance Aquarium Premium — ASEVA AQUATICS",
    description: "Perawatan berkala akuarium custom kelas atas untuk menjaga kejernihan ekosistem dan kesehatan satwa Anda.",
    url: "https://asevaaquatics.com/perawatan-aquarium",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/aquarium-interior.jpg", width: 1200, height: 630, alt: "Maintenance Aquarium ASEVA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Perawatan & Maintenance Aquarium Premium — ASEVA AQUATICS",
    description: "Perawatan berkala akuarium custom dan parameter air di Bandung & Jabodetabek.",
    images: ["/images/aquarium-interior.jpg"],
  },
};

export default function PerawatanAquariumPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Aquarium Maintenance and Care Service",
    name: "Jasa Perawatan & Maintenance Aquarium Premium",
    description: "Pembersihan filter, monitoring parameter air, water change berkala, dan perawatan darurat aquarium di Bandung dan Jabodetabek.",
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
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">LAYANAN BERKELANJUTAN</span>
            <h1 className="font-serif text-white mb-6 font-light">
              Perawatan & Maintenance
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Aquarium Eksklusif
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed mb-10 font-light">
              Keindahan akuarium pada hari pertama serah terima hanya dapat bertahan abadi dengan kedisiplinan pemeliharaan yang terukur. 
              Tim teknisi ASEVA memastikan ekosistem akuarium Anda selalu jernih, steril, dan bebas kekhawatiran.
            </p>
            <a
              href={getWhatsAppUrl("maintenance")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3"
            >
              <MessageCircle size={16} />
              Tanyakan Paket Perawatan
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench size={22} className="text-champagne" />,
                title: "Pembersihan Filter & Sump",
                desc: "Pembersihan media filter mekanis dan biologis, siphoning kotoran dasar substrat, dan pembersihan kerak alga secara teliti.",
              },
              {
                icon: <Award size={22} className="text-champagne" />,
                title: "Monitoring Parameter Air Digital",
                desc: "Pengujian laboratorium mini untuk pH, amonia, nitrit, nitrat, TDS, dan kestabilan suhu dengan sensor terkalibrasi.",
              },
              {
                icon: <Calendar size={22} className="text-champagne" />,
                title: "Water Change Terkondisi",
                desc: "Pergantian air berkala 20–30% menggunakan air yang telah diendapkan dan bebas klorin untuk meminimalkan fluktuasi osmotik.",
              },
              {
                icon: <Wrench size={22} className="text-champagne" />,
                title: "Penggantian Media Berkala",
                desc: "Penggantian filter wool, karbon aktif, dan media kimia secara terjadwal untuk menjaga daya serap racun maksimal.",
              },
              {
                icon: <Award size={22} className="text-champagne" />,
                title: "Detailing Kaca Kristal",
                desc: "Pembersihan eksterior kaca kristal low-iron tanpa gores, poles kabinet interior, dan pengecekan kerapian kabel.",
              },
              {
                icon: <MessageCircle size={22} className="text-champagne" />,
                title: "Akses Darurat Concierge",
                desc: "Dukungan konsultasi teknis via WhatsApp prioritas jika terjadi perubahan perilaku ikan atau kendala pompa di luar jadwal.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-serif text-xl text-white mb-3 font-light">{item.title}</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package CTA */}
      <section className="py-24 bg-[#050505] border-t border-white/[0.08] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
            Diskusikan Paket <em className="italic text-champagne">yang Tepat untuk Anda</em>
          </h2>
          <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 leading-relaxed font-light">
            Biaya paket perawatan disesuaikan dengan volume akuarium, jenis biota, dan frekuensi kunjungan (mingguan, dwi-mingguan, atau bulanan).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/konsultasi" className="btn-primary">
              Minta Penawaran Maintenance
            </Link>
            <a
              href={getWhatsAppUrl("maintenance")}
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
    </div>
  );
}
