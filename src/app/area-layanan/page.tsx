import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Shield, CheckCircle, ArrowRight, Clock, MessageCircle } from "lucide-react";
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
  },
};

const REGIONS = [
  {
    zone: "Zona 1 — Prioritas Utama",
    city: "Bandung & Bandung Raya",
    slug: "bandung",
    desc: "Wilayah operasional pusat ASEVA AQUATICS. Tim arsitektur dan teknisi kami berbasis di Bandung, siap melakukan survei lokasi dan respons perawatan cepat.",
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
    city: "Kota-Kota Besar Jawa Barat",
    slug: "jawa-barat",
    desc: "Layanan perancangan aquarium custom dan pengantaran satwa berlisensi untuk kota-kota strategis di Jawa Barat dengan standar penanganan VIP.",
    areas: ["Cirebon & Indramayu", "Karawang & Purwakarta", "Sukabumi & Cianjur", "Tasikmalaya & Garut"],
    timeline: "Survei: Sesuai kesepakatan jadwal · Ekspedisi Khusus Bertemperature Terjaga",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen pt-28 pb-24">
        {/* Header */}
        <header className="border-b border-white/5 py-16 md:py-20 bg-gradient-to-b from-navy-secondary to-navy">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="section-label">Jangkauan Instalasi & Servis</span>
              <h1 className="font-serif text-3xl md:text-5xl text-ivory mt-3 mb-6 font-normal leading-tight">
                Wilayah Layanan
                <span className="text-gradient-gold block italic font-light">ASEVA AQUATICS</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed mb-6">
                Untuk menjaga standar pengerjaan konstruksi, ketelitian kalibrasi filtrasi, dan keselamatan satwa berlisensi, cakupan layanan kami difokuskan pada wilayah <strong>Zona 1 (Bandung Raya)</strong> serta <strong>Zona 2 (Jabodetabek & Jawa Barat)</strong>.
              </p>
            </div>
          </div>
        </header>

        {/* Region Cards */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {REGIONS.map((reg) => (
              <div key={reg.slug} className="card-glass p-8 flex flex-col justify-between relative group hover:border-gold/40">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-sans tracking-ultra-wide px-3 py-1 bg-gold/10 text-gold border border-gold/20">
                      {reg.tag}
                    </span>
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <h2 className="font-serif text-2xl text-ivory mb-2">{reg.city}</h2>
                  <p className="font-sans text-xs md:text-sm text-ivory-muted leading-relaxed mb-6">
                    {reg.desc}
                  </p>

                  <div className="border-t border-white/5 pt-4 mb-6">
                    <span className="text-[10px] uppercase font-sans text-gold/80 tracking-widest block mb-3">
                      Cakupan Titik Utama:
                    </span>
                    <ul className="space-y-1.5">
                      {reg.areas.map((area, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-sans text-ivory/80">
                          <CheckCircle size={12} className="text-gold flex-shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-navy-light/60 p-3 border border-white/5 mb-6 text-[11px] font-sans text-ivory-muted flex items-start gap-2">
                    <Clock size={14} className="text-gold flex-shrink-0 mt-0.5" />
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
          <div className="p-8 border border-white/10 bg-navy-secondary text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-xl text-ivory mb-3">Lokasi Anda di Luar Zona 1 & 2?</h3>
            <p className="text-xs md:text-sm font-sans text-ivory-muted leading-relaxed mb-6">
              Untuk proyek residensial berskala besar atau proyek komersial khusus di luar Jawa Barat & Jabodetabek, tim kami dapat mempertimbangkan penugasan khusus berdasarkan kelayakan teknis dan jadwal.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya berada di luar Zona 1 & 2 dan ingin menanyakan kemungkinan konsultasi proyek custom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <MessageCircle size={14} /> Hubungi Tim Khusus
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
