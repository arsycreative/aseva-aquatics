import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const LOCATION_DATA = {
  bandung: {
    slug: "bandung",
    cityName: "Bandung",
    title: "Aquarium Custom & Arwana Super Red Bandung — ASEVA AQUATICS",
    h1: "Jasa Aquarium Custom & Arwana Super Red di Bandung",
    description:
      "Spesialis aquarium custom premium dan arwana super red bersertifikat di Bandung Raya. Tim inti ASEVA berbasis di Bandung, siap survei dan instalasi 1–2 hari kerja.",
    zone: "Zona 1 — Prioritas Utama",
    intro:
      "Bandung adalah basis atelier utama tim perancang dan workshop fabrikasi ASEVA AQUATICS. Sebagai prioritas utama kami, proyek di Bandung Raya mendapat penanganan tercepat dengan survei bebas biaya komitmen.",
    localContext: [
      "Kawasan Dago Pakar, Setiabudi, dan Kota Baru Parahyangan didominasi arsitektur hunian modern-tropis bertingkat yang menuntut perhitungan beban gravitasi lantai sipil secara cermat.",
      "Suhu udara Bandung Utara yang sejuk (18–22°C di malam hari) memerlukan instalasi titanium heater digital berpresisi tinggi demi menjaga kestabilan metabolisme satwa arwana super red.",
      "Kontur perbukitan dan jalur logistik hunian privat dikalkulasikan secara khusus dalam pemindahan kaca monolitik masif.",
    ],
    coverage: ["Dago & Bandung Utara", "Setiabudi & Cidadap", "Kota Baru Parahyangan", "Mekarwangi & Singgasana", "Buah Batu & Bandung Timur", "Cimahi & Lembang"],
    keywords: ["aquarium custom bandung", "jasa pembuatan aquarium bandung", "arwana super red bandung"],
    faqs: [
      {
        q: "Berapa lama estimasi pengerjaan akuarium custom di Bandung?",
        a: "Untuk akuarium residensial built-in ukuran 1,5 hingga 2 meter, proses rancang bangun hingga commissioning hidrolika memakan waktu 3–5 minggu. Proyek skala besar dapat disesuaikan dengan kurva S pembangunan rumah Anda.",
      },
      {
        q: "Apakah ada biaya untuk survei lokasi hunian di Bandung?",
        a: "Survei teknis dimensi ruang dan jalur plumbing di seluruh area Bandung Raya sepenuhnya bebas biaya komitmen.",
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
    intro:
      "Jakarta dan Jabodetabek adalah pasar metropolitan utama kami. Tim ASEVA rutin melakukan kunjungan terjadwal mingguan untuk koordinasi arsitektur, instalasi teknis, dan pengantaran satwa berlisensi CITES.",
    localContext: [
      "Hunian eksklusif di Jakarta Selatan (Pondok Indah, Senopati), PIK 1 & 2, serta BSD City memiliki ketinggian void ruang tamu yang ideal untuk akuarium kristal dinding masif.",
      "Gedung perkantoran CBD Jakarta (SCBD, Sudirman, Mega Kuningan) mengadopsi akuarium lobi built-in kedap suara sebagai statement kemewahan.",
      "Pengantaran ikan arwana dari Bandung ke Jakarta dilakukan melalui jalur Tol Cipularang dengan kendaraan berpendingin dan pasokan oksigen medis murni.",
    ],
    coverage: ["Jakarta Selatan (Pondok Indah, Senopati)", "Pantai Indah Kapuk (PIK 1 & 2)", "BSD City & Alam Sutera", "Menteng & Kuningan", "Sentul City & Bogor", "Bekasi & Depok"],
    keywords: ["aquarium custom jakarta", "jasa pembuatan aquarium jakarta", "arwana super red jakarta", "aquarium mewah jabodetabek"],
    faqs: [
      {
        q: "Bagaimana skema biaya logistik instalasi akuarium di Jakarta dari Bandung?",
        a: "Biaya logistik pengiriman kaca, rangka baja, dan akomodasi teknisi dicantumkan secara transparan dan terukur di dalam proposal awal sebelum persetujuan proyek.",
      },
      {
        q: "Bagaimana jaminan keselamatan satwa saat pengiriman ke Jakarta?",
        a: "Seluruh pengiriman arwana super red dilindungi protokol garansi hidup selamat (DOA) 100% dengan wadah terisolasi suhu dan tabung oksigen bertekanan.",
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
    intro:
      "ASEVA AQUATICS melayani pemilik hunian residensial dan properti komersial di seluruh kota strategis Jawa Barat dengan jadwal survei terkoordinasi dan pengantaran satwa berlisensi resmi.",
    localContext: [
      "Kawasan pesisir seperti Cirebon dan Indramayu memiliki suhu lingkungan hangat yang memerlukan kalibrasi siklus evaporasi dan kontrol chiller yang berbeda dari dataran tinggi.",
      "Pertumbuhan hunian premium di Karawang, Purwakarta, dan Sukabumi semakin menuntut kehadiran instalasi akuarium custom berkejernihan tinggi.",
    ],
    coverage: ["Cirebon & Indramayu", "Karawang & Purwakarta", "Sukabumi & Cianjur", "Tasikmalaya & Garut", "Subang & Sumedang"],
    keywords: ["aquarium custom jawa barat", "jasa pembuatan aquarium cirebon", "arwana super red jawa barat"],
    faqs: [
      {
        q: "Apakah tim teknisi ASEVA melayani survei ke kota-kota Jawa Barat selain Bandung?",
        a: "Ya, kami menjadwalkan kunjungan survei teknis ke seluruh kota besar di Jawa Barat. Diskusikan rencana proyek Anda melalui formulir konsultasi kami.",
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
          telephone: "+6281234567890",
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

      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/area-layanan" className="hover:text-white transition-colors">Area Layanan</Link>
            <span>/</span>
            <span className="text-white">{data.cityName}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={16} className="text-champagne" />
            <span className="section-label">{data.zone}</span>
          </div>
          <h1 className="font-serif text-white max-w-3xl mb-6 leading-tight font-light text-3xl sm:text-5xl lg:text-6xl">
            {data.h1}
          </h1>
          <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl mb-10 font-light">
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/konsultasi" className="btn-primary">
              Konsultasi Ruang Gratis
            </Link>
            <a
              href={getWhatsAppUrl()}
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

      {/* Coverage Area */}
      <section className="section-padding bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 font-light">
                Cakupan Titik <em className="italic text-champagne">Layanan Utama</em>
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {data.coverage.map((city) => (
                  <span
                    key={city}
                    className="font-sans text-xs text-neutral-300 rounded-full border border-white/10 px-4 py-2 bg-[#0A0A0A]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 font-light">
                Karakteristik & <em className="italic text-champagne">Konteks Wilayah</em>
              </h2>
              <div className="space-y-4">
                {data.localContext.map((ctx, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
                    <CheckCircle size={16} className="text-champagne mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed font-light">{ctx}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#050505]">
        <div className="section-container max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-10 font-light">
            Pertanyaan Umum <em className="italic text-champagne">{data.cityName}</em>
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
                <h3 className="font-serif text-lg text-white mb-3 font-light">{faq.q}</h3>
                <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
