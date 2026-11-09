import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, Award, Wrench, Calendar, Activity, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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

const WATER_PARAMETERS = [
  { param: "Suhu Termal", target: "28.5°C ± 0.5°C", note: "Dual Titanium Heater" },
  { param: "Keseimbangan pH", target: "6.4 – 6.8 pH", note: "Stabilisasi Gambut Tropis" },
  { param: "Amonia & Nitrit", target: "0.00 ppm", note: "Nitrifikasi Biologis Sump" },
  { param: "Kejernihan TDS", target: "90 – 160 ppm", note: "Kontrol Mineral Terukur" },
];

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

      {/* Header (Slate #090B10) */}
      <section className="relative pt-36 pb-20 bg-[#090B10] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne" />
              <span className="section-label">LAYANAN BERKELANJUTAN</span>
            </div>
            <h1 className="font-serif text-white mb-6 font-light">
              Perawatan & Maintenance
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                Aquarium Eksklusif
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed mb-10 font-light">
              Kejernihan optik pada hari pertama serah terima dijaga secara abadi melalui disiplin pemeliharaan biologis dan mekanis oleh teknisi spesialis ASEVA.
            </p>
            <a
              href={getWhatsAppUrl("maintenance")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3"
            >
              <MessageCircle size={16} />
              Jadwalkan Kunjungan Maintenance
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Parameter Telemetry Strip (Monolith #030305) */}
      <section className="py-12 bg-[#030305] border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
            {WATER_PARAMETERS.map((item) => (
              <div key={item.param} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <span className="block font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-1">
                  {item.param}
                </span>
                <div className="font-serif text-2xl sm:text-3xl text-white font-light mb-1">
                  {item.target}
                </div>
                <span className="font-sans text-xs text-neutral-400 font-light">
                  {item.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Maintenance Protocols (Warm Charcoal #0A0A0E) */}
      <section className="section-padding bg-[#0A0A0E] border-b border-white/[0.08]">
        <div className="section-container">
          <ScrollReveal className="mb-14">
            <span className="section-label block mb-3">PROTOKOL KUNJUNGAN RUTIN</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light">
              6 Standar <em className="italic text-champagne">Pemeliharaan Berkala</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                icon: <Wrench size={22} className="text-champagne-light" />,
                title: "Sterilisasi Filter & Sump",
                desc: "Pembersihan chamber mekanis, pencucian media biologis menggunakan air terdekorinasi, dan vakum detritur dasar.",
              },
              {
                icon: <Activity size={22} className="text-champagne-light" />,
                title: "Uji Parameter Air Digital",
                desc: "Pengukuran presisi pH, amonia, nitrit, nitrat, TDS, dan kalibrasi sensor suhu termal pada setiap kunjungan.",
              },
              {
                icon: <Calendar size={22} className="text-champagne-light" />,
                title: "Water Change Terkondisi",
                desc: "Pergantian air terukur 20–30% dengan suhu dan pH yang telah diselaraskan agar satwa bebas stres osmotik.",
              },
              {
                icon: <Award size={22} className="text-champagne-light" />,
                title: "Peremajaan Media Kimia",
                desc: "Penggantian filter wool mikro, karbon aktif kelas laboratorium, dan resin penyerap organik secara terjadwal.",
              },
              {
                icon: <ShieldCheck size={22} className="text-champagne-light" />,
                title: "Detailing Kaca Low-Iron",
                desc: "Pembersihan kaca kristal bagian dalam dan luar dengan bilah bebas gores, serta inspeksi engsel dan kabinet.",
              },
              {
                icon: <MessageCircle size={22} className="text-champagne-light" />,
                title: "Siaga Darurat Concierge",
                desc: "Prioritas panggilan teknisi jika terjadi anomali perilaku arwana atau kendala kelistrikan di luar jadwal rutin.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.06}>
                <div className="bg-[#111218] p-8 md:p-10 rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] h-full">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="font-serif text-xl text-white mb-3 font-light">{item.title}</h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Package CTA (Smoked Lounge #08080B) */}
      <section className="py-24 bg-[#08080B] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
              Pilih Frekuensi <em className="italic text-champagne">Kunjungan Anda</em>
            </h2>
            <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 leading-relaxed font-light">
              Tersedia kontrak pemeliharaan Mingguan, Dwi-Mingguan, maupun Bulanan yang disesuaikan dengan volume tangki dan populasi biota Anda.
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
