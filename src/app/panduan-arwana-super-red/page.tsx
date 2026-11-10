import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Award, CheckCircle, ArrowRight, MessageCircle, Sparkles, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Panduan Arwana Super Red: Anatomi, Kriteria Kontes & Legalitas CITES",
  description:
    "Panduan komprehensif kurasi Arwana Super Red (Scleropages formosus). Kenali anatomi sendok, level ring sisik, keaslian microchip CITES, dan manajemen air ideal.",
  keywords: [
    "panduan arwana super red",
    "ciri arwana super red kualitas tinggi",
    "anatomi arwana sendok",
    "sertifikat arwana super red cites",
    "microchip arwana kapuas hulu",
    "perawatan arwana super red bandung",
    "kolektor arwana indonesia",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/panduan-arwana-super-red`,
  },
  openGraph: {
    title: "Panduan Lengkap Arwana Super Red — ASEVA AQUATICS",
    description:
      "Kenali kriteria arwana super red kualitas kontes, verifikasi microchip legalitas resmi, dan rahasia tanning warna merah darah.",
    url: `${SITE_CONFIG.domain}/panduan-arwana-super-red`,
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "article",
    images: [{ url: "/images/journal/anatomi-arwana.jpg", width: 1200, height: 675, alt: "Anatomi Arwana Super Red" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panduan Lengkap Arwana Super Red — ASEVA AQUATICS",
    description: "Anatomi sendok, kriteria kontes, verifikasi microchip, dan manajemen air ideal.",
    images: ["/images/journal/anatomi-arwana.jpg"],
  },
};

const ANATOMY_CRITERIA = [
  {
    title: "Bentuk Kepala: Spoon Head (Sendok)",
    badge: "01 / PROFIL KEPALA",
    description:
      "Spesimen kontes memiliki profil tengkorak atas yang melengkung cekung menyerupai sendok (spoon head) dengan moncong meruncing tegas, menciptakan siluet aristokratik saat berenang.",
    points: [
      "Garis dahi menukik cekung lalu naik kekar ke punggung (broad shoulder)",
      "Katup rahang rapat simetris (bebas dari kelainan cakil / protruding jaw)",
      "Mata jernih sejajar horizontal, bebas gejala drop-eye",
    ],
  },
  {
    title: "Sisik & Ring Warna: Level 5 & 6 Crossing",
    badge: "02 / GENETIK PIGMEN",
    description:
      "Garis keturunan murni Kapuas Hulu memancarkan ring sisik tegas yang berkembang dari rona tembaga keemasan di usia muda menjadi merah darah (Blood Red) atau merah cabai (Chili Red).",
    points: [
      "Level 5 (Full Ring): Lingkar pigmen merah menutup baris sisik kelima",
      "Level 6 (Crossing): Kilau ring menembus deret sisik punggung teratas",
      "Base color sisik bersih berdimensi metalik tanpa bercak kusam",
    ],
  },
  {
    title: "Proporsi Sirip: Dayung Lebar & Ekor Kipas",
    badge: "03 / STRUKTUR SIRIP",
    description:
      "Kualitas juara tampak dari sirip dada (dayung) yang melengkung panjang melewati pangkal sirip perut, dipadukan sirip ekor lebar yang mengembang menyerupai kipas.",
    points: [
      "Dayung pectoral membuka lebar menyerupai rentang sayap elang",
      "Sirip dorsal dan anal menyatu harmonis mengapit pangkal ekor",
      "Tulang jari-jari sirip lurus kokoh tanpa sambungan patah",
    ],
  },
  {
    title: "Mentalitas & Karisma Berenang",
    badge: "04 / KARISMA HIDUP",
    description:
      "Arwana kelas kolektor mendominasi kolom air bagian atas dengan ketenangan berwibawa, responsif terhadap kehadiran pemilik, serta memiliki sepasang sungut yang tegak lurus.",
    points: [
      "Gaya renang tenang mendominasi permukaan dan tengah tangki",
      "Responsif dan agresif saat berburu pakan tanpa sifat penakut",
      "Sungut (barbel) kembar lurus mengarah ke depan membentuk huruf V",
    ],
  },
];

const FAQS = [
  {
    q: "Berapa ukuran ideal akuarium untuk Arwana Super Red dewasa?",
    a: "Untuk arwana dewasa (panjang 50–65 cm), ukuran akuarium minimal adalah 200 × 80 × 70 cm dengan ketebalan kaca Low-Iron minimal 15 mm. Lebar 80 cm sangat krusial agar ikan dapat berputar leluasa tanpa membengkokkan tulang belakang.",
  },
  {
    q: "Bagaimana cara memverifikasi keaslian dokumen sertifikat dan microchip?",
    a: "Setiap ikan ASEVA AQUATICS memiliki microchip pasif 15 digit (standar ISO 11784/11785) yang ditanam di jaringan bawah sisik punggung. Nomor chip dipindai menggunakan scanner RFID di hadapan Anda dan dicocokkan langsung dengan sertifikat asli penangkar berizin BKSDA/CITES.",
  },
  {
    q: "Apa perbedaan Arwana Super Red Chili Red vs Blood Red?",
    a: "Chili Red memiliki warna merah cabai menyala dengan bingkai ring sisik kontras dan bentuk ekor cenderung diamond. Blood Red memiliki warna merah tua pekat merata dengan dasar sisik gelap dan ekor bulat melebar menyerupai kipas.",
  },
  {
    q: "Berapa lama proses tanning hingga warna merah matang sempurna?",
    a: "Fase tanning terarah dimulai saat ikan berukuran 25–30 cm menggunakan pencahayaan spektrum 14.000K–20.000K. Warna merah darah matang penuh umumnya tercapai pada usia 3–5 tahun seiring pematangan genetik dan pakan kaya karotenoid alami.",
  },
];

export default function GuideArwanaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Panduan Arwana Super Red", item: `${SITE_CONFIG.domain}/panduan-arwana-super-red` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="min-h-screen">
        {/* Hero Section (Slate #090B10) */}
        <header className="relative pt-36 pb-20 border-b border-white/[0.08] overflow-hidden bg-[#090B10]">
          <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
          <div className="section-container relative z-10">
            <ScrollReveal className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="w-8 h-px bg-champagne" />
                <span className="section-label">PILLAR GUIDE · OTORITAS KURASI</span>
                <span className="text-white/20">|</span>
                <span className="text-xs font-mono text-neutral-400">Scleropages formosus</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-light mb-6">
                Panduan Komprehensif
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne block italic">
                  Arwana Super Red Kelas Kolektor
                </span>
              </h1>
              <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed mb-8 font-light max-w-2xl">
                Memahami standar genetika Kapuas Hulu, anatomi sendok, verifikasi microchip RFID 15-digit CITES, hingga rekayasa parameter air di iklim dataran tinggi.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/arwana" className="btn-primary text-xs">
                  Lihat Koleksi Arwana Tersedia <ArrowRight size={14} />
                </Link>
                <a
                  href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya ingin konsultasi mengenai kurasi arwana super red.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs"
                >
                  <MessageCircle size={14} /> Diskusi Kurasi via WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* Featured Guide Banner Image + Technical SVG Anatomy Schematic (Warm Charcoal #0A0A0E) */}
        <section className="py-20 md:py-28 bg-[#0A0A0E] border-b border-white/[0.08]">
          <div className="section-container space-y-16">
            <ScrollReveal>
              <div className="relative h-[320px] md:h-[460px] rounded-3xl border border-white/10 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                <Image
                  src="/images/journal/anatomi-arwana.jpg"
                  alt="Anatomi Arwana Super Red Scleropages formosus kualitas kontes"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-300 font-mono border-t border-white/15 pt-4">
                  <span>SPESIMEN: SCLEROPAGES FORMOSUS (KAPUAS HULU)</span>
                  <span className="text-champagne-light font-medium">STANDAR KONTES INTERNASIONAL</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Technical SVG Anatomy & RFID Blueprint Card */}
            <ScrollReveal delay={0.1}>
              <div className="p-7 md:p-10 rounded-3xl bg-[#111218] border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
                  <div>
                    <span className="font-mono text-[10px] text-champagne-light tracking-[0.25em] uppercase block mb-1">
                      SKEMA INSPEKSI 14-TITIK ATELIER ASEVA
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
                      Peta Anatomi & Titik Injeksi <em className="italic text-champagne">Microchip RFID</em>
                    </h2>
                  </div>
                  <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-champagne/15 border border-champagne/30 text-champagne-light">
                    ISO 11784 / 11785
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      code: "TITIK 01 / ANTERIOR",
                      title: "Sungut & Spoon Head",
                      spec: "Barbel lurus simetris huruf V, rahang rapat bebas cakil, lekuk tengkorak cekung.",
                    },
                    {
                      code: "TITIK 02 / DORSAL",
                      title: "Injeksi Microchip RFID",
                      spec: "Transponder pasif 15-digit ditanam steril di otot bawah sisik punggung baris ke-5.",
                    },
                    {
                      code: "TITIK 03 / LATERAL",
                      title: "Ring Sisik Level 5–6",
                      spec: "Susunan sisik harmonis berbaris rapi dengan kilau pigmen merah darah hingga punggung.",
                    },
                    {
                      code: "TITIK 04 / CAUDAL",
                      title: "Dayung & Ekor Kipas",
                      spec: "Sirip pectoral melengkung panjang melampaui sirip perut dan ekor kipas terbuka penuh.",
                    },
                  ].map((marker) => (
                    <div key={marker.code} className="p-5 rounded-2xl bg-black/50 border border-white/[0.07]">
                      <span className="font-mono text-[10px] text-champagne-light tracking-widest uppercase block mb-1.5">
                        {marker.code}
                      </span>
                      <h3 className="font-serif text-lg text-white mb-2 font-normal">{marker.title}</h3>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                        {marker.spec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 4 Pillars of Anatomy */}
            <div>
              <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-champagne" />
                  <span className="section-label">KRITERIA ANATOMI</span>
                  <span className="w-8 h-px bg-champagne" />
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-white font-light">
                  4 Pilar Penilaian <em className="italic text-champagne">Kelas Kontes</em>
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {ANATOMY_CRITERIA.map((crit, idx) => (
                  <ScrollReveal key={crit.title} delay={idx * 0.08}>
                    <div className="bg-[#111218] p-8 md:p-10 rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-champagne/15 text-champagne-light border border-champagne/30">
                            {crit.badge}
                          </span>
                          <span className="text-3xl font-serif text-white/15 font-light">0{idx + 1}</span>
                        </div>
                        <h3 className="font-serif text-2xl text-white mb-3 font-light">{crit.title}</h3>
                        <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                          {crit.description}
                        </p>
                      </div>
                      <ul className="space-y-2.5 border-t border-white/[0.08] pt-5">
                        {crit.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs font-sans text-neutral-300 font-light">
                            <CheckCircle size={13} className="text-champagne-light flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal & CITES Appendix I Section (Pitch Black #000000) */}
        <section className="bg-black border-b border-white/[0.08] py-20 md:py-28">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <ScrollReveal className="lg:col-span-7">
                <span className="section-label block mb-3">KEPASTIAN HUKUM & KONSERVASI</span>
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight font-light">
                  Legalitas Satwa Resmi: <em className="italic text-champagne">Microchip & CITES</em>
                </h2>
                <p className="font-sans text-sm text-neutral-300 leading-relaxed mb-8 font-light">
                  Arwana Super Red (<em>Scleropages formosus</em>) dilindungi dalam <strong className="text-white font-medium">CITES Appendix I</strong>. Kepemilikan legal wajib berasal dari penangkaran resmi generasi kedua (F2) ke atas yang dilengkapi transponder RFID dan sertifikat BKSDA.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-6 rounded-2xl bg-[#0A0A0E] border border-white/[0.08]">
                    <Shield className="text-champagne-light mb-3" size={20} />
                    <h3 className="font-serif text-lg text-white mb-1 font-light">Microchip Pasif 15 Digit</h3>
                    <p className="text-xs text-neutral-400 font-light">Identitas permanen tak dapat dipalsukan, dipindai langsung dengan RFID reader saat serah terima.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#0A0A0E] border border-white/[0.08]">
                    <Award className="text-champagne-light mb-3" size={20} />
                    <h3 className="font-serif text-lg text-white mb-1 font-light">Sertifikat Captive-Bred</h3>
                    <p className="text-xs text-neutral-400 font-light">Dokumen silsilah penangkar resmi Kapuas Hulu beserta izin angkut SATS-DN.</p>
                  </div>
                </div>

                <Link href="/tentang#legalitas" className="btn-outline text-xs">
                  Pelajari Standar Legalitas ASEVA
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.12} className="lg:col-span-5">
                <div className="p-8 md:p-10 rounded-3xl border border-champagne/30 bg-[#0A0A0E] relative shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                  <div className="text-center pb-6 border-b border-white/[0.08]">
                    <Sparkles className="text-champagne-light mx-auto mb-3" size={28} />
                    <span className="font-serif text-2xl text-white block font-light">Garansi Hidup Selamat 100%</span>
                    <span className="text-[10px] text-champagne-light tracking-widest uppercase font-mono mt-1 block">
                      Live Arrival Guarantee (DOA)
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed py-6 font-light">
                    Pengiriman spesimen ke Bandung Raya, Jabodetabek, dan seluruh Indonesia menggunakan kantong ganda berinsulasi termal dengan oksigen medis murni. Risiko perjalanan ditanggung 100% oleh ASEVA AQUATICS.
                  </p>
                  <div className="text-center pt-2">
                    <Link href="/legal" className="text-xs text-champagne-light hover:underline font-mono uppercase tracking-wider">
                      Baca Protokol Garansi DOA →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Water Quality & High Plateau Care (Slate #090B10) */}
        <section className="py-20 md:py-28 bg-[#090B10] border-b border-white/[0.08]">
          <div className="section-container max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label block mb-3">MANAJEMEN EKOSISTEM AIR</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light">
                Parameter Ideal di Iklim <em className="italic text-champagne">Dataran Tinggi</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  { val: "28–29.5°C", label: "Suhu Termal Stabil" },
                  { val: "6.2–6.8", label: "pH Gambut Tropis" },
                  { val: "80–160", label: "TDS Air (ppm)" },
                  { val: "0.00 ppm", label: "Amonia & Nitrit" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-[#11131C] border border-white/10 text-center">
                    <span className="text-white font-serif text-2xl sm:text-3xl block mb-1.5 font-light">
                      {stat.val}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-champagne-light font-mono">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-sm text-neutral-300 text-center max-w-2xl mx-auto leading-relaxed font-light">
                Di kawasan sejuk seperti Bandung Utara, sistem akuarium ASEVA wajib dilengkapi <strong className="text-white font-medium">Dual Redundant Titanium Heater</strong> dan sump biologis terisolasi agar metabolisme serta nafsu makan Arwana Super Red selalu berada di titik puncak.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section (Deep Minimalist #040406) */}
        <section className="bg-[#040406] border-b border-white/[0.08] py-20 md:py-28">
          <div className="section-container max-w-4xl">
            <ScrollReveal className="text-center mb-14">
              <span className="section-label block mb-3">TANYA JAWAB KURATOR</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light">
                Pertanyaan Seputar <em className="italic text-champagne">Arwana Super Red</em>
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.06}>
                  <div className="p-6 md:p-8 rounded-2xl bg-[#0A0A0E] border border-white/[0.08]">
                    <h3 className="font-serif text-xl text-white mb-2.5 flex items-start gap-3 font-light">
                      <HelpCircle size={18} className="text-champagne-light flex-shrink-0 mt-1" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed pl-7 font-light">
                      {faq.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner (Smoked Lounge #08080B) */}
        <section className="py-24 bg-[#08080B]">
          <div className="section-container max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 font-light">
                Siap Mengoleksi <em className="italic text-champagne">Sang Naga Air?</em>
              </h2>
              <p className="font-sans text-sm text-neutral-400 max-w-xl mx-auto mb-10 font-light">
                Jelajahi spesimen terkurasi kami yang siap dipinang atau jadwalkan sesi viewing privat di Atelier Bandung.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/arwana" className="btn-primary text-xs">
                  Jelajahi Koleksi Ikan Tersedia
                </Link>
                <Link href="/konsultasi" className="btn-outline text-xs">
                  Jadwalkan Private Viewing
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </article>
    </div>
  );
}
