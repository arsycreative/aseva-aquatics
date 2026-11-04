import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

const LOCATION_DATA = {
  bandung: {
    slug: "bandung",
    cityName: "Bandung",
    title: "Aquarium Custom & Arwana Super Red Bandung",
    h1: "Jasa Aquarium Custom & Arwana Super Red di Bandung",
    description:
      "Spesialis aquarium custom premium dan arwana super red bersertifikat di Bandung Raya. Tim inti ASEVA berbasis di Bandung, siap survei dan instalasi 1–2 hari kerja.",
    zone: "Zona 1 — Prioritas Utama",
    intro:
      "Bandung adalah rumah bagi tim inti ASEVA AQUATICS. Sebagai prioritas utama kami, proyek di Bandung Raya mendapat penanganan tercepat dengan respons tim yang paling responsif.",
    localContext: [
      "Kawasan Dago, Setiabudi, dan Kota Baru Parahyangan dikenal dengan arsitektur rumah bergaya modern-tropis yang sangat cocok dengan aquarium built-in sebagai focal point ruang tamu.",
      "Suhu udara Bandung yang lebih dingin (18–22°C terutama malam hari) memengaruhi suhu air aquarium. Tim kami selalu merekomendasikan sistem pemanas presisi untuk aquarium arwana di Bandung.",
      "Kontur tanah di kawasan Bandung Utara yang berbukit memerlukan perhatian khusus pada struktur bangunan, terutama untuk aquarium bervolume besar.",
    ],
    coverage: ["Bandung Kota", "Cimahi", "Kabupaten Bandung", "Bandung Barat", "Sumedang", "Lembang"],
    keywords: ["aquarium custom bandung", "jasa pembuatan aquarium bandung", "arwana super red bandung"],
    faqs: [
      {
        q: "Berapa lama pengerjaan aquarium custom di Bandung?",
        a: "Untuk aquarium residensial berukuran standar, proses dari desain hingga instalasi memakan waktu 3–6 minggu. Proyek komersial skala besar bisa 6–12 minggu tergantung kompleksitas.",
      },
      {
        q: "Apakah ada biaya survei lokasi di Bandung?",
        a: "Survei lokasi di Bandung Raya sepenuhnya gratis. Kami percaya bahwa survei yang baik adalah fondasi desain yang tepat.",
      },
    ],
  },
  "jakarta-jabodetabek": {
    slug: "jakarta-jabodetabek",
    cityName: "Jakarta & Jabodetabek",
    title: "Aquarium Custom & Arwana Super Red Jakarta, Jabodetabek",
    h1: "Jasa Aquarium Custom Premium di Jakarta & Jabodetabek",
    description:
      "Spesialis aquarium custom mewah dan arwana super red bersertifikat untuk Jakarta Selatan, Jakarta Barat, PIK, BSD, Pondok Indah, dan seluruh Jabodetabek. Survei terjadwal dari Bandung.",
    zone: "Zona 2 — Terjangkau",
    intro:
      "Jakarta dan Jabodetabek adalah pasar Zona 2 kami. Tim ASEVA rutin melakukan kunjungan terjadwal ke Jakarta dan sekitarnya untuk survei, instalasi, dan perawatan.",
    localContext: [
      "Rumah mewah di kawasan Jakarta Selatan, PIK, dan BSD umumnya memiliki ketinggian langit-langit dan ruang yang ideal untuk aquarium dinding skala besar.",
      "Gedung perkantoran premium di CBD Jakarta (SCBD, Sudirman, Kuningan) banyak yang menggunakan aquarium lobi sebagai statement piece yang berkesan.",
      "Pengiriman arwana dari Bandung ke Jakarta dilakukan dengan standar transport beroksigen khusus melalui jalur tol Cipularang dengan waktu tempuh terkontrol.",
    ],
    coverage: ["Jakarta Selatan", "Jakarta Barat", "Jakarta Pusat", "Jakarta Utara (PIK)", "Tangerang (BSD, Serpong)", "Bekasi", "Depok", "Bogor"],
    keywords: ["aquarium custom jakarta", "jasa pembuatan aquarium jakarta", "arwana super red jakarta", "aquarium mewah jabodetabek"],
    faqs: [
      {
        q: "Berapa biaya tambahan untuk proyek di Jakarta dari Bandung?",
        a: "Untuk proyek di Jabodetabek, terdapat biaya transportasi dan logistik tim yang transparan dan akan dicantumkan dalam penawaran awal. Biaya ini umumnya 5–10% dari total proyek.",
      },
      {
        q: "Bagaimana proses pengiriman arwana dari Bandung ke Jakarta?",
        a: "Pengiriman dilakukan dengan wadah beroksigen khusus melalui jalur darat. Seluruh proses ditangani oleh tim terlatih dengan waktu transit yang diminimalkan untuk keselamatan ikan.",
      },
    ],
  },
  "jawa-barat": {
    slug: "jawa-barat",
    cityName: "Jawa Barat",
    title: "Aquarium Custom & Arwana Super Red Jawa Barat",
    h1: "Jasa Aquarium Custom & Arwana Super Red di Jawa Barat",
    description:
      "Layanan aquarium custom dan arwana super red bersertifikat untuk kota-kota besar di Jawa Barat: Cirebon, Karawang, Sukabumi, Tasikmalaya, Garut, dan Subang.",
    zone: "Zona 2 — Terjangkau",
    intro:
      "ASEVA AQUATICS melayani seluruh Jawa Barat sebagai Zona 2 kami. Survei dan instalasi dilakukan dengan penjadwalan terlebih dahulu untuk memastikan tim kami dapat hadir dengan optimal.",
    localContext: [
      "Kota-kota di pesisir Jawa Barat seperti Cirebon memiliki kelembaban dan suhu yang berbeda dari Bandung, yang memengaruhi pemilihan sistem filtrasi dan pengaturan suhu air.",
      "Potensi pasar aquarium komersial di kota-kota berkembang seperti Karawang dan Purwakarta sangat besar seiring pesatnya pertumbuhan kawasan industri dan hunian premium.",
    ],
    coverage: ["Cirebon", "Karawang", "Sukabumi", "Tasikmalaya", "Garut", "Subang", "Purwakarta", "Cianjur"],
    keywords: ["aquarium custom jawa barat", "jasa pembuatan aquarium cirebon", "arwana super red jawa barat"],
    faqs: [
      {
        q: "Apakah ASEVA melayani kota-kota di Jawa Barat selain Bandung?",
        a: "Ya. Kami melayani seluruh kota besar di Jawa Barat dengan penjadwalan survei dan instalasi. Hubungi kami untuk mendiskusikan jadwal dan biaya logistik yang transparan.",
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
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function AreaLayananPage({ params }: Props) {
  const { kota } = await params;
  const data = LOCATION_DATA[kota as keyof typeof LOCATION_DATA];
  if (!data) notFound();

  return (
    <>
      {/* JSON-LD LocalBusiness + Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: data.h1,
            serviceType: ["Aquarium Custom", "Arwana Super Red", "Perawatan Aquarium"],
            areaServed: {
              "@type": "Place",
              name: data.cityName,
            },
            provider: {
              "@type": "LocalBusiness",
              name: "ASEVA AQUATICS",
              url: "https://asevaaquatics.com",
            },
          }),
        }}
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-navy border-b border-white/5">
        <div className="section-container">
          <nav className="flex items-center gap-2 font-sans text-xs text-ivory-dim mb-8">
            <Link href="/" className="hover:text-gold">Beranda</Link>
            <span>/</span>
            <Link href="/area-layanan" className="hover:text-gold">Area Layanan</Link>
            <span>/</span>
            <span className="text-ivory">{data.cityName}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={14} className="text-gold" />
            <span className="section-label">{data.zone}</span>
          </div>
          <h1 className="font-serif text-ivory max-w-2xl mb-6 leading-tight">
            {data.h1}
          </h1>
          <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed max-w-xl mb-10">
            {data.intro}
          </p>
          <div className="flex flex-col xs:flex-row gap-4">
            <Link href="/konsultasi" className="btn-primary">
              Konsultasi Gratis
            </Link>
            <a
              href={getWhatsAppUrl()}
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

      {/* Coverage Area */}
      <section className="py-16 bg-navy border-b border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl text-ivory mb-6">
                Cakupan <em className="text-gold">Area Layanan</em>
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.coverage.map((city) => (
                  <span
                    key={city}
                    className="font-sans text-xs text-ivory-muted border border-white/10 px-4 py-2"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-ivory mb-6">
                Konteks <em className="text-gold">Lokal</em>
              </h2>
              <div className="space-y-4">
                {data.localContext.map((ctx, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-gold mt-1 flex-shrink-0" />
                    <p className="font-sans text-sm text-ivory-muted leading-relaxed">{ctx}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-secondary">
        <div className="section-container">
          <h2 className="font-serif text-2xl text-ivory mb-10">
            FAQ <em className="text-gold">{data.cityName}</em>
          </h2>
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: data.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              }),
            }}
          />
          <div className="space-y-6 max-w-2xl">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 p-6 bg-navy">
                <h3 className="font-sans text-sm font-medium text-ivory mb-3">{faq.q}</h3>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

