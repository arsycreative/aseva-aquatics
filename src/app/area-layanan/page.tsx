import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

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
    desc: "Basis utama workshop fabrikasi kaca dan galeri karantina ASEVA AQUATICS. Mendapatkan prioritas survei lokasi gratis dan respons teknisi tercepat.",
    areas: [
      "Dago Pakar & Bandung Utara",
      "Setiabudi & Cidadap",
      "Kota Baru Parahyangan",
      "Mekarwangi & Singgasana",
      "Buah Batu & Summarecon",
    ],
    timeline: "Survei: 24–48 Jam · Respons Maintenance: Same-Day",
    tag: "ZONA 1 · HOMEBASE ATELIER",
  },
  {
    zone: "Zona 2 — Metropolitan",
    city: "Jakarta & Jabodetabek",
    slug: "jakarta-jabodetabek",
    desc: "Melayani instalasi akuarium built-in untuk residensial mewah, penthouse, dan kantor pusat di kawasan metropolitan Jakarta dan sekitarnya.",
    areas: [
      "Jakarta Selatan (Pondok Indah, Senopati)",
      "Pantai Indah Kapuk (PIK 1 & PIK 2)",
      "BSD City & Alam Sutera",
      "Menteng, SCBD & Kuningan",
      "Sentul City & Bogor",
    ],
    timeline: "Survei: Terjadwal Mingguan · Logistik via Tol Cipularang",
    tag: "ZONA 2 · METROPOLITAN",
  },
  {
    zone: "Zona 2 — Regional Jawa Barat",
    city: "Kota Strategis Jawa Barat",
    slug: "jawa-barat",
    desc: "Layanan rancang bangun aquarium custom dan pengantaran spesimen arwana berlisensi CITES dengan armada berinsulasi termal.",
    areas: [
      "Cirebon & Indramayu",
      "Karawang & Purwakarta",
      "Sukabumi & Cianjur",
      "Tasikmalaya & Garut",
      "Subang & Sumedang",
    ],
    timeline: "Survei: Terjadwal Khusus · Pengiriman Beroksigen Medis",
    tag: "ZONA 2 · REGIONAL",
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

      {/* Header (Slate #090B10) */}
      <header className="relative pt-36 pb-20 border-b border-white/[0.08] bg-[#090B10] overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne" />
              <span className="section-label">JANGKAUAN INSTALASI & LOGISTIK SATWA</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-light leading-tight">
              Wilayah Layanan
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                ASEVA AQUATICS
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Demi menjaga presisi konstruksi kaca optik dan keselamatan pengiriman satwa berlisensi CITES, operasional tim teknis kami difokuskan pada <strong className="text-white font-medium">Zona 1 (Bandung Raya)</strong> dan <strong className="text-white font-medium">Zona 2 (Jabodetabek & Jawa Barat)</strong>.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Region Cards (Warm Charcoal #0A0A0E) */}
      <section className="section-padding bg-[#0A0A0E] border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {REGIONS.map((reg, idx) => (
              <ScrollReveal key={reg.slug} delay={idx * 0.08}>
                <div className="bg-[#111218] p-8 md:p-10 rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.65)] flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-champagne/15 text-champagne-light border border-champagne/30">
                        {reg.tag}
                      </span>
                      <MapPin size={18} className="text-champagne-light" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3 font-light">{reg.city}</h2>
                    <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                      {reg.desc}
                    </p>

                    <div className="border-t border-white/[0.08] pt-5 mb-6">
                      <span className="text-[10px] uppercase font-mono text-champagne-light tracking-widest block mb-3">
                        CAKUPAN KLUSTER UTAMA:
                      </span>
                      <ul className="space-y-2.5">
                        {reg.areas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-xs font-sans text-neutral-300 font-light">
                            <CheckCircle size={13} className="text-champagne-light flex-shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="bg-black/50 p-4 rounded-xl border border-white/[0.08] mb-6 text-[11px] font-mono text-neutral-300 flex items-start gap-2.5">
                      <Clock size={14} className="text-champagne-light flex-shrink-0 mt-0.5" />
                      <span>{reg.timeline}</span>
                    </div>
                    <Link
                      href={`/area-layanan/${reg.slug}`}
                      className="btn-outline w-full text-center text-xs justify-center flex items-center gap-2"
                    >
                      <span>Detail Layanan {reg.city}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outer Region Note (Smoked Lounge #08080B) */}
      <section className="py-24 bg-[#08080B]">
        <div className="section-container">
          <ScrollReveal>
            <div className="p-10 md:p-14 rounded-3xl border border-white/10 bg-[#111218] text-center max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <span className="section-label block mb-3">PENUGASAN NASIONAL KHUSUS</span>
              <h3 className="font-serif text-2xl sm:text-4xl text-white mb-4 font-light">
                Proyek di Luar <em className="italic text-champagne">Zona 1 & Zona 2?</em>
              </h3>
              <p className="text-xs md:text-sm font-sans text-neutral-300 leading-relaxed mb-8 font-light max-w-xl mx-auto">
                Untuk pengiriman spesimen Arwana Super Red ke seluruh bandara Indonesia (via kargo udara SATS-DN) atau proyek akuarium custom skala besar di luar Jawa Barat, hubungi tim khusus kami.
              </p>
              <div className="flex justify-center">
                <a
                  href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya berada di luar Zona 1 & 2 dan ingin menanyakan kemungkinan konsultasi proyek custom / pengiriman arwana.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  <MessageCircle size={14} /> Hubungi Tim Khusus via WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
