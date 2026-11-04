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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy border-b border-white/5">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Layanan Berkelanjutan</span>
            <h1 className="font-serif text-ivory mb-6">
              Jasa Perawatan &
              <br />
              <em className="text-gold">Maintenance Aquarium</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed mb-10">
              Aquarium yang indah pada hari pertama hanya bisa dipertahankan dengan perawatan yang konsisten dan tepat. 
              Tim ASEVA hadir untuk memastikan aquarium Anda selalu dalam kondisi prima.
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
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              {
                icon: <Wrench size={20} className="text-gold" />,
                title: "Pembersihan Filter Berkala",
                desc: "Pembersihan media filter (wool, bio-ball, ceramic), siphoning substrat, dan pembersihan kaca dari alga.",
              },
              {
                icon: <Award size={20} className="text-gold" />,
                title: "Monitoring Parameter Air",
                desc: "Pengujian pH, amonia, nitrit, nitrat, GH, KH, dan suhu. Penyesuaian parameter sesuai kebutuhan ikan.",
              },
              {
                icon: <Calendar size={20} className="text-gold" />,
                title: "Pergantian Air Terjadwal",
                desc: "Pergantian air parsial 20–30% secara berkala untuk menjaga kualitas air dan menurunkan kadar nitrat.",
              },
              {
                icon: <Wrench size={20} className="text-gold" />,
                title: "Penggantian Media Habis Pakai",
                desc: "Filter wool, karbon aktif, dan media kimia lainnya diganti sesuai jadwal dan kondisi.",
              },
              {
                icon: <Award size={20} className="text-gold" />,
                title: "Perawatan Kaca & Kabinet",
                desc: "Pembersihan eksterior kaca, kabinet, dan area sekitar aquarium agar selalu tampil bersih dan representatif.",
              },
              {
                icon: <MessageCircle size={20} className="text-gold" />,
                title: "Konsultasi Teknis Berkelanjutan",
                desc: "Akses ke tim ahli kami via WhatsApp untuk pertanyaan teknis di antara jadwal kunjungan rutin.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy-secondary p-8 md:p-10">
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-serif text-xl text-ivory mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package CTA */}
      <section className="py-20 bg-navy-secondary border-t border-white/5 text-center">
        <div className="section-container">
          <h2 className="font-serif text-ivory mb-4">
            Diskusikan Paket <em className="text-gold">yang Tepat untuk Anda</em>
          </h2>
          <p className="font-sans text-sm text-ivory-muted max-w-md mx-auto mb-10 leading-relaxed">
            Harga paket perawatan bergantung pada volume aquarium, jenis ikan, dan frekuensi kunjungan. 
            Hubungi kami untuk mendapatkan penawaran yang sesuai.
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
    </>
  );
}
