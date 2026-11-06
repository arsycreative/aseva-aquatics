import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cakupan Area Layanan: Bandung, Jakarta Jabodetabek & Jawa Barat",
  description:
    "Cakupan layanan survei, pembuatan aquarium custom, kurasi arwana super red, dan maintenance untuk Zona 1 Bandung Raya & Zona 2 Jabodetabek & Jawa Barat.",
  keywords: [
    "aquarium custom bandung",
    "aquarium custom jakarta",
    "aquarium mewah jabodetabek",
    "jasa aquarium custom jawa barat",
    "arwana super red bandung",
    "spesialis aquarium bogor depok tangerang bekasi",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/area-layanan`,
  },
  openGraph: {
    title: "Area Layanan ASEVA AQUATICS — Bandung & Jabodetabek",
    description: "Layanan perancangan aquarium custom dan kurasi arwana bersertifikat untuk hunian premium di Jawa Barat dan Jabodetabek.",
    url: `${SITE_CONFIG.domain}/area-layanan`,
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/aquarium-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Area Layanan ASEVA AQUATICS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Area Layanan ASEVA AQUATICS — Bandung, Jakarta & Jawa Barat",
    description: "Layanan survei, pembuatan aquarium custom, dan kurasi arwana super red bersertifikat.",
    images: ["/images/aquarium-interior.jpg"],
  },
};

const REGIONS = [
  {
    zone: "Zona 1 — Prioritas Utama",
    city: "Bandung & Bandung Raya",
    slug: "bandung",
    desc: "Wilayah operasional pusat atelier ASEVA AQUATICS. Tim arsitektur dan teknisi kami berbasis di Bandung, siap melakukan survei lokasi gratis dan respons perawatan cepat.",
    areas: ["Dago & Bandung Utara", "Setiabudi & Cidadap", "Kota Baru Parahyangan", "Mekarwangi & Singgasana", "Buah Batu & Bandung Timur"],
    timeline: "Survei: 24–48 jam · Respons Maintenance: Same-day",
    tag: "Zona Prioritas 1",
  },
  {
    zone: "Zona 2 — Metropolitan",
    city: "Jakarta & Jabodetabek",
    slug: "jakarta-jabodetabek",
    desc: "Melayani perancangan akuarium built-in untuk residensial mewah, penthouse, dan ruang komersial di kawasan metropolitan Jakarta, Tangerang, Bogor, Depok, dan Bekasi.",
    areas: ["Jakarta Selatan (Pondok Indah, Senopati)", "Pantai Indah Kapuk (PIK 1 & 2)", "BSD City & Alam Sutera", "Menteng & Kuningan", "Sentul City & Bogor"],
    timeline: "Survei: Terjadwal mingguan · Pengiriman Aman Beroksigen via Tol Cipularang",
    tag: "Zona Prioritas 2",
  },
  {
    zone: "Zona 2 — Jawa Barat Lainnya",
    city: "Kota-Kota Strategis Jawa Barat",
    slug: "jawa-barat",
    desc: "Layanan perancangan aquarium custom dan pengantaran satwa berlisensi untuk kota-kota strategis di Jawa Barat dengan standar penanganan VIP berpelindung.",
    areas: ["Cirebon & Indramayu", "Karawang & Purwakarta", "Sukabumi & Cianjur", "Tasikmalaya & Garut"],
    timeline: "Survei: Sesuai kesepakatan jadwal · Ekspedisi Khusus Beroksigen Medis",
    tag: "Zona Prioritas 2",
  },
];

export default function AreaLayananIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Area Layanan", item: `${SITE_CONFIG.domain}/area-layanan` },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen pt-28 pb-24">
        {/* Header */}
        <header className="border-b border-white/[0.08] py-20 md:py-24 bg-black">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="section-label block mb-4">JANGKAUAN INSTALASI & SERVIS</span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-light leading-tight">
                Wilayah Layanan
                <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">ASEVA AQUATICS</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed font-light">
                Untuk menjaga standar presisi konstruksi kaca, ketelitian kalibrasi hidrolika filtrasi, dan keselamatan satwa berlisensi CITES, cakupan operasional kami difokuskan pada <strong className="text-white font-normal">Zona 1 (Bandung Raya)</strong> serta <strong className="text-white font-normal">Zona 2 (Jabodetabek & Jawa Barat)</strong>.
              </p>
            </div>
          </div>
        </header>

        {/* Region Cards */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {REGIONS.map((reg) => (
              <div key={reg.slug} className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-white/[0.08] hover:border-white/25 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10">
                      {reg.tag}
                    </span>
                    <MapPin size={18} className="text-champagne" />
                  </div>
                  <h2 className="font-serif text-2xl text-white mb-2 font-light">{reg.city}</h2>
                  <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                    {reg.desc}
                  </p>

                  <div className="border-t border-white/[0.06] pt-4 mb-6">
                    <span className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest block mb-3">
                      Cakupan Titik Utama:
                    </span>
                    <ul className="space-y-2">
                      {reg.areas.map((area, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-sans text-neutral-300 font-light">
                          <CheckCircle size={12} className="text-champagne flex-shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-[#111111] p-4 rounded-xl border border-white/[0.08] mb-6 text-[11px] font-sans text-neutral-400 flex items-start gap-2.5 font-light">
                    <Clock size={14} className="text-champagne flex-shrink-0 mt-0.5" />
                    <span>{reg.timeline}</span>
                  </div>
                  <Link
                    href={`/area-layanan/${reg.slug}`}
                    className="btn-outline w-full text-center text-xs justify-center flex items-center gap-2"
                  >
                    Buka Halaman {reg.city} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outer Region Note */}
        <section className="section-container py-12">
          <div className="p-10 rounded-3xl border border-white/[0.08] bg-[#0A0A0A] text-center max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <h3 className="font-serif text-2xl text-white mb-3 font-light">Lokasi Anda di Luar Zona 1 & 2?</h3>
            <p className="text-xs md:text-sm font-sans text-neutral-400 leading-relaxed mb-8 font-light">
              Untuk proyek residensial berskala besar atau proyek komersial khusus di luar Jawa Barat & Jabodetabek, tim kami dapat mempertimbangkan penugasan khusus berdasarkan kelayakan teknis dan jadwal.
            </p>
            <div className="flex justify-center">
              <a
                href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya berada di luar Zona 1 & 2 dan ingin menanyakan kemungkinan konsultasi proyek custom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <MessageCircle size={14} /> Hubungi Tim Khusus via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
