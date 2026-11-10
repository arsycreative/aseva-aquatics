import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

const LOCATION_DATA = {
  bandung: {
    slug: "bandung",
    cityName: "Bandung",
    title: "Aquarium Custom & Arwana Super Red Bandung — ASEVA AQUATICS",
    h1: "Jasa Aquarium Custom & Arwana Super Red di Bandung",
    description:
      "Spesialis aquarium custom premium dan arwana super red bersertifikat di Bandung Raya. Tim inti ASEVA berbasis di Bandung, siap survei dan instalasi 1–2 hari kerja.",
    zone: "Zona 1 — Prioritas Utama",
    slaSurvey: "24–48 Jam Kerja",
    slaMaintenance: "Respons Hari yang Sama (Same-Day)",
    logisticsMode: "Armada Langsung Workshop Bandung",
    intro:
      "Bandung adalah basis atelier utama tim perancang dan workshop fabrikasi kaca ASEVA AQUATICS. Proyek di wilayah Bandung Raya mendapatkan prioritas survei teknis bebas biaya komitmen dan respons perawatan tercepat.",
    localContext: [
      "Kawasan Dago Pakar, Setiabudi, dan Kota Baru Parahyangan didominasi arsitektur hunian modern-tropis bertingkat yang menuntut perhitungan beban gravitasi lantai sipil secara cermat.",
      "Suhu udara Bandung Utara yang sejuk (18–22°C di malam hari) memerlukan instalasi Dual Titanium Heater digital berpresisi tinggi demi menjaga kestabilan metabolisme Arwana Super Red.",
      "Kontur perbukitan dan akses hunian privat dikalkulasikan secara khusus dalam mobilisasi kaca monolitik berukuran besar.",
    ],
    coverage: [
      "Dago & Bandung Utara",
      "Setiabudi & Cidadap",
      "Kota Baru Parahyangan",
      "Mekarwangi & Singgasana",
      "Buah Batu & Summarecon",
      "Cimahi & Lembang",
    ],
    keywords: ["aquarium custom bandung", "jasa pembuatan aquarium bandung", "arwana super red bandung"],
    faqs: [
      {
        q: "Berapa lama estimasi pengerjaan akuarium custom di Bandung?",
        a: "Untuk akuarium residensial built-in ukuran 1,5 hingga 2,5 meter, proses rancang bangun hingga commissioning hidrolika memakan waktu 3–5 minggu. Proyek skala besar dapat disesuaikan dengan kurva S pembangunan rumah Anda.",
      },
      {
        q: "Apakah ada biaya untuk survei lokasi hunian di Bandung?",
        a: "Survei teknis dimensi ruang, evaluasi beban lantai, dan jalur plumbing di seluruh area Bandung Raya sepenuhnya bebas biaya komitmen.",
      },
    ],
  },
  "jakarta-jabodetabek": {
    slug: "jakarta-jabodetabek",
    cityName: "Jakarta & Jabodetabek",
    title: "Aquarium Custom & Arwana Super Red Jakarta, Jabodetabek — ASEVA AQUATICS",
    h1: "Jasa Aquarium Custom Premium di Jakarta & Jabodetabek",
    description:
      "Spesialis aquarium custom mewah dan arwana super red bersertifikat untuk Jakarta Selatan, Jakarta Barat, PIK, BSD, Pondok Indah, dan seluruh Jabodetabek. Survei terjadwal dari Bandung.",
    zone: "Zona 2 — Metropolitan Prioritas",
    slaSurvey: "Terjadwal Mingguan",
    slaMaintenance: "Kunjungan Rutin Terjadwal",
    logisticsMode: "Ekspedisi Khusus via Tol Cipularang",
    intro:
      "Jakarta dan Jabodetabek merupakan pasar residensial dan komersial utama kami. Tim insinyur ASEVA rutin melakukan kunjungan terjadwal mingguan untuk koordinasi gambar kerja arsitektur, instalasi teknis, serta pengantaran satwa berlisensi CITES.",
    localContext: [
      "Hunian eksklusif di Jakarta Selatan (Pondok Indah, Senopati), PIK 1 & 2, serta BSD City memiliki ketinggian void ruang utama yang ideal untuk instalasi akuarium dinding Low-Iron berdimensi masif.",
      "Ruang eksekutif dan lobi kantor pusat di CBD Jakarta (SCBD, Sudirman, Kuningan) menuntut sistem filtrasi sump berisolasi akustik (<28 dB) yang 100% hening.",
      "Pengantaran Arwana Super Red dari Bandung ke Jakarta dilakukan menggunakan kendaraan berinsulasi termal dengan pasokan oksigen medis murni dan Garansi Hidup 100%.",
    ],
    coverage: [
      "Jakarta Selatan (Pondok Indah, Senopati)",
      "Pantai Indah Kapuk (PIK 1 & PIK 2)",
      "BSD City & Alam Sutera",
      "Menteng, SCBD & Kuningan",
      "Sentul City & Bogor",
      "Bekasi & Depok",
    ],
    keywords: [
      "aquarium custom jakarta",
      "jasa pembuatan aquarium jakarta",
      "arwana super red jakarta",
      "aquarium mewah jabodetabek",
    ],
    faqs: [
      {
        q: "Bagaimana skema biaya logistik instalasi akuarium di Jakarta dari Bandung?",
        a: "Biaya mobilisasi kaca Low-Iron, rangka baja, dan tim instalasi dicantumkan secara transparan sejak awal di dalam proposal penawaran tanpa biaya tersembunyi.",
      },
      {
        q: "Bagaimana jaminan keselamatan satwa saat pengiriman ke Jakarta?",
        a: "Seluruh pengiriman Arwana Super Red dilindungi protokol Garansi Hidup Selamat (DOA) 100% dengan kemasan terisolasi suhu dan tabung oksigen medis.",
      },
    ],
  },
  "jawa-barat": {
    slug: "jawa-barat",
    cityName: "Jawa Barat",
    title: "Aquarium Custom & Arwana Super Red Jawa Barat — ASEVA AQUATICS",
    h1: "Jasa Aquarium Custom & Arwana Super Red di Jawa Barat",
    description:
      "Layanan aquarium custom dan arwana super red bersertifikat untuk kota-kota besar di Jawa Barat: Cirebon, Karawang, Sukabumi, Tasikmalaya, Garut, dan Subang.",
    zone: "Zona 2 — Jawa Barat Regional",
    slaSurvey: "Terjadwal Berdasarkan Proyek",
    slaMaintenance: "Kunjungan Berkala & Dukungan Jarak Jauh",
    logisticsMode: "Armada Berpelindung & Oksigen Medis",
    intro:
      "ASEVA AQUATICS melayani pemilik hunian residensial dan properti komersial di seluruh kota strategis Jawa Barat dengan jadwal survei terkoordinasi dan pengantaran satwa berlisensi resmi.",
    localContext: [
      "Kawasan pesisir seperti Cirebon dan Indramayu memiliki suhu ruang yang lebih hangat sehingga memerlukan desain sirkulasi udara kabinet dan kontrol evaporasi yang optimal.",
      "Pertumbuhan hunian privat dan villa di Karawang, Purwakarta, Sukabumi, hingga Garut menuntut instalasi akuarium berkejernihan kristal yang mudah dirawat.",
    ],
    coverage: [
      "Cirebon & Indramayu",
      "Karawang & Purwakarta",
      "Sukabumi & Cianjur",
      "Tasikmalaya & Garut",
      "Subang & Sumedang",
    ],
    keywords: ["aquarium custom jawa barat", "jasa pembuatan aquarium cirebon", "arwana super red jawa barat"],
    faqs: [
      {
        q: "Apakah tim teknisi ASEVA melayani survei ke kota-kota Jawa Barat selain Bandung?",
        a: "Ya, kami menjadwalkan kunjungan survei teknis dan pengiriman instalasi ke seluruh kota strategis di Jawa Barat.",
      },
    ],
  },
};

interface Props {
  params: Promise<{ kota: string }>;
}

export async function generateStaticParams() {
  return Object.keys(LOCATION_DATA).map((kota) => ({ kota }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kota } = await params;
  const data = LOCATION_DATA[kota as keyof typeof LOCATION_DATA];
  if (!data) return {};

  const pageUrl = `https://asevaaquatics.com/area-layanan/${data.slug}`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: pageUrl,
      siteName: "ASEVA AQUATICS",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/images/aquarium-interior.jpg",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/images/aquarium-interior.jpg"],
    },
  };
}

export default async function AreaLayananPage({ params }: Props) {
  const { kota } = await params;
  const data = LOCATION_DATA[kota as keyof typeof LOCATION_DATA];
  if (!data) notFound();

  const areaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://asevaaquatics.com/area-layanan/${data.slug}#service`,
        name: data.h1,
        description: data.description,
        serviceType: ["Aquarium Custom Mewah", "Arwana Super Red Bersertifikat", "Perawatan Aquarium"],
        areaServed: {
          "@type": "AdministrativeArea",
          name: data.cityName,
        },
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "ASEVA AQUATICS",
          url: "https://asevaaquatics.com",
          telephone: `+${SITE_CONFIG.whatsapp}`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://asevaaquatics.com/area-layanan/${data.slug}#faq`,
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://asevaaquatics.com/area-layanan/${data.slug}#breadcrumb`,
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
            name: "Area Layanan",
            item: "https://asevaaquatics.com/area-layanan",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.cityName,
            item: `https://asevaaquatics.com/area-layanan/${data.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* JSON-LD Service, FAQPage & BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(areaGraph),
        }}
      />

      {/* Header (Slate #090B10) */}
      <section className="relative pt-36 pb-20 bg-[#090B10] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/area-layanan" className="hover:text-white transition-colors">Area Layanan</Link>
            <span>/</span>
            <span className="text-white">{data.cityName}</span>
          </nav>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={16} className="text-champagne-light" />
              <span className="section-label">{data.zone}</span>
            </div>
            <h1 className="font-serif text-white max-w-3xl mb-6 leading-tight font-light text-3xl sm:text-5xl lg:text-6xl">
              {data.h1}
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed max-w-2xl mb-10 font-light">
              {data.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/konsultasi" className="btn-primary">
                Jadwalkan Survei & Konsultasi
              </Link>
              <a
                href={getWhatsAppUrl(`Halo ASEVA AQUATICS, saya berlokasi di wilayah ${data.cityName} dan ingin berkonsultasi mengenai layanan aquarium custom / arwana super red.`)}
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

      {/* Regional SLA Telemetry Strip (Monolith #030305) */}
      <section className="py-10 bg-[#030305] border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/[0.08]">
            <div className="md:pr-8">
              <span className="block font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-1">
                JADWAL SURVEI TEKNIS
              </span>
              <span className="font-serif text-2xl text-white font-light">{data.slaSurvey}</span>
            </div>
            <div className="md:px-8">
              <span className="block font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-1">
                DUKUNGAN MAINTENANCE
              </span>
              <span className="font-serif text-2xl text-white font-light">{data.slaMaintenance}</span>
            </div>
            <div className="md:pl-8">
              <span className="block font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-1">
                MODA LOGISTIK & SATWA
              </span>
              <span className="font-serif text-2xl text-white font-light">{data.logisticsMode}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area & Regional Context (Warm Charcoal #0A0A0E) */}
      <section className="section-padding bg-[#0A0A0E] border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <span className="section-label block mb-3">JANGKAUAN AREA</span>
              <h2 className="font-serif text-2xl md:text-4xl text-white mb-6 font-light">
                Kluster Layanan <em className="italic text-champagne">{data.cityName}</em>
              </h2>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {data.coverage.map((city) => (
                  <span
                    key={city}
                    className="font-sans text-xs text-white rounded-full border border-white/15 px-4 py-2.5 bg-[#12131A]"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <div className="p-6 rounded-2xl bg-black/50 border border-white/[0.08]">
                <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                  Tim kami berkoordinasi langsung dengan pengelola kawasan residensial dan kontraktor interior setempat untuk memastikan kelancaran perizinan kerja serta mobilisasi material kaca besar.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <span className="section-label block mb-3">REKAYASA LOKAL</span>
              <h2 className="font-serif text-2xl md:text-4xl text-white mb-6 font-light">
                Karakteristik & <em className="italic text-champagne">Konteks Wilayah</em>
              </h2>
              <div className="space-y-4">
                {data.localContext.map((ctx, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-6 rounded-2xl bg-[#111218] border border-white/[0.08]">
                    <CheckCircle size={18} className="text-champagne-light mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">{ctx}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ (Deep Minimalist #040406) */}
      <section className="section-padding bg-[#040406] border-b border-white/[0.08]">
        <div className="section-container max-w-4xl">
          <ScrollReveal className="mb-12">
            <span className="section-label block mb-3">INFORMASI OPERASIONAL</span>
            <h2 className="font-serif text-2xl md:text-4xl text-white font-light">
              Pertanyaan Umum Wilayah <em className="italic text-champagne">{data.cityName}</em>
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#0A0A0E]">
                  <h3 className="font-serif text-xl text-white mb-3 font-light">{faq.q}</h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA (Smoked Lounge #08080B) */}
      <section className="py-24 bg-[#08080B] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
              Rencanakan Proyek Anda di <em className="italic text-champagne">{data.cityName}</em>
            </h2>
            <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 font-light">
              Hubungi kami untuk menjadwalkan survei ruang atau melihat katalog spesimen Arwana Super Red yang siap dikirim ke {data.cityName}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/aquarium-custom#kalkulator" className="btn-primary text-xs">
                <span>Hitung Estimasi Aquarium</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/arwana" className="btn-outline text-xs">
                Lihat Koleksi Arwana
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
