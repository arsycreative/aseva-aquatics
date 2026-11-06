import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Award, CheckCircle, ArrowRight, MessageCircle, Sparkles, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

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
    title: "Bentuk Kepala: Spoon Head (Sendok) vs Bullet Head",
    badge: "Karakter Wajah",
    description:
      "Arwana kelas kontes paling dicari memiliki profil kepala cekung menyerupai sendok (spoon head) yang tajam. Bentuk ini memberikan siluet agresif dan aristokratik saat ikan menatap ke depan, berbeda dengan bullet head biasa.",
    points: [
      "Garis dahi menukik tajam lalu naik kembali ke punggung",
      "Bibir atas dan bawah simetris (bebas dari kelainan cakil/underbite)",
      "Mata tegak sejajar dan cerah, bebas dari gejala drop-eye (mata turun)",
    ],
  },
  {
    title: "Sisik & Ring Warna: Level 5 & Level 6 Crossing",
    badge: "Genetik & Pigmen",
    description:
      "Keunggulan utama Super Red (Kapuas Hulu lineage) terletak pada intensitas merah dan kilau ring emas pada sisik. Pada usia muda, ring hijau keemasan mulai menutup, lalu bertransformasi menjadi merah darah (Blood Red) atau merah cabai (Chili Red).",
    points: [
      "Level 5 (Full Ring): Seluruh sisik baris kelima berkilau pekat",
      "Level 6 (Crossing): Kilau emas/merah melintasi baris punggung teratas",
      "Inti sisik (base color) padat tanpa bercak kusam",
    ],
  },
  {
    title: "Bentuk Dayung & Sirip: Dayung Lebar & Ekor Kipas",
    badge: "Proporsi Tubuh",
    description:
      "Ikan juara memiliki sirip dada (dayung) yang panjang melebihi tutup insang, sering kali menyentuh atau melampaui sirip perut. Sirip ekor lebar membentuk kipas penuh tanpa lipatan atau robekan.",
    points: [
      "Dayung lebar membuka tegap menyerupai sayap burung elang",
      "Sirip anal dan dorsal simetris serta menyatu harmonis dengan ekor",
      "Tulang sirip lurus kuat, berenang stabil tanpa goyangan miring",
    ],
  },
  {
    title: "Mentalitas & Postur Berenang",
    badge: "Karisma",
    description:
      "Arwana super red sejati tidak hanya dinilai saat diam di foto. Kualitas terlihat saat berenang: tenang, mendominasi seluruh ruang akuarium, responsif terhadap gerakan, dan memiliki nafsu makan agresif.",
    points: [
      "Berenang di lapisan air atas dan tengah dengan gaya anggun",
      "Tidak panik atau menabrak kaca saat didekati manusia",
      "Sungut (barbel) panjang, lurus ke depan sejajar, tanpa bengkok",
    ],
  },
];

const FAQS = [
  {
    q: "Berapa ukuran ideal akuarium untuk Arwana Super Red dewasa?",
    a: "Untuk arwana dewasa (panjang 50–65 cm), ukuran akuarium minimal adalah 200 x 70 x 60 cm atau 200 x 80 x 60 cm dengan ketebalan kaca minimal 12–15 mm. Lebar minimal 70–80 cm krusial agar ikan dapat berputar tanpa melengkungkan tulang belakang secara ekstrem.",
  },
  {
    q: "Bagaimana cara memverifikasi keaslian dokumen sertifikat dan microchip?",
    a: "Setiap ikan ASEVA AQUATICS memiliki microchip pasif 15 digit (standar ISO 11784/11785) yang ditanam di punggung. Nomor chip dipindai menggunakan scanner RFID dan dicocokkan dengan sertifikat asli penangkar resmi berizin BKSDA/CITES.",
  },
  {
    q: "Apa perbedaan Arwana Super Red Chili Red vs Blood Red?",
    a: "Chili Red memiliki warna merah cabai menyala dengan ring sisik tipis dan mata merah cerah, tubuh cenderung lebih ramping dengan ekor runcing berbentuk diamond. Blood Red memiliki warna merah pekat seperti darah dengan base sisik tebal dan ekor bulat melebar menyerupai kipas.",
  },
  {
    q: "Berapa lama proses tanning hingga warna merah matang sempurna?",
    a: "Warna merah arwana berkembang bertahap sesuai genetika dan usia. Fase tanning intensif umumnya dimulai saat ikan mencapai ukuran 25–30 cm (usia 1–1,5 tahun), dan warna merah matang penuh tercapai pada usia 3–5 tahun dengan pakan tinggi karotenoid dan parameter air terjaga.",
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

      <article className="min-h-screen pt-28 pb-24">
        {/* Hero Section */}
        <header className="relative border-b border-white/[0.08] py-20 md:py-28 overflow-hidden bg-black">
          <div className="section-container relative">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-champagne-dim" />
                <span className="section-label">Pillar Guide · Otoritas Kurasi</span>
                <span className="text-white/20">|</span>
                <span className="text-xs font-sans text-neutral-400 tracking-wider">Spesies: Scleropages formosus</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-light mb-6">
                Panduan Komprehensif
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim block italic">Arwana Super Red Kelas Kolektor</span>
              </h1>
              <p className="font-sans text-base md:text-lg text-neutral-400 leading-relaxed mb-8 font-light">
                Memahami standar genetika Kapuas Hulu, anatomi sendok, verifikasi nomor microchip CITES resmi,
                hingga tata kelola lingkungan air untuk menghadirkan sang naga air di hunian Anda.
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
            </div>
          </div>
        </header>

        {/* Featured Guide Banner Image */}
        <section className="section-container py-12">
          <div className="relative h-[340px] md:h-[480px] rounded-3xl border border-white/[0.08] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/journal/anatomi-arwana.jpg"
              alt="Anatomi Arwana Super Red Scleropages formosus kualitas kontes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-400 font-sans border-t border-white/[0.08] pt-4">
              <span>Kurasi: ASEVA AQUATICS Heritage Collection</span>
              <span className="text-champagne font-medium">Standar Kontes Internasional</span>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Anatomy */}
        <section className="section-container py-16">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">KRITERIA ANATOMI</span>
              <span className="w-8 h-px bg-champagne-dim" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light mt-2 mb-4">
              4 Pilar Penilaian Kelas Kontes
            </h2>
            <p className="text-sm font-sans text-neutral-400 leading-relaxed font-light">
              Di mata kolektor serius dan juri kontes dunia, keindahan arwana diukur dari presisi anatomi yang tidak dapat dimanipulasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ANATOMY_CRITERIA.map((crit, idx) => (
              <div key={idx} className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-white/[0.08] relative flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10">
                      {crit.badge}
                    </span>
                    <span className="text-3xl font-serif text-neutral-700 font-light">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3 font-light">{crit.title}</h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                    {crit.description}
                  </p>
                </div>
                <ul className="space-y-2.5 border-t border-white/[0.06] pt-4">
                  {crit.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs font-sans text-neutral-300 font-light">
                      <CheckCircle size={13} className="text-champagne flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Legal & CITES Appendix I Section */}
        <section className="bg-[#050505] border-y border-white/[0.08] py-20 md:py-28">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="section-label">Kepastian Hukum & Konservasi</span>
                <h2 className="font-serif text-3xl md:text-5xl text-white mt-2 mb-6 leading-tight font-light">
                  Legalitas Satwa Resmi: Microchip 15 Digit & Sertifikat CITES
                </h2>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed mb-4 font-light">
                  Arwana Super Red (<em>Scleropages formosus</em>) terdaftar dalam <strong className="text-white font-normal">CITES Appendix I</strong> sebagai
                  satwa yang dilindungi ketat. Di Indonesia, perdagangan yang sah hanya diperbolehkan untuk spesimen hasil
                  penangkaran resmi generasi kedua (F2) ke atas dari penangkar bersertifikat BKSDA.
                </p>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed mb-8 font-light">
                  Setiap ekor arwana yang dikurasi oleh ASEVA AQUATICS dilengkapi:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
                    <Shield className="text-champagne mb-2" size={20} />
                    <h4 className="font-serif text-base text-white mb-1 font-light">Microchip Pasif 15 Digit</h4>
                    <p className="text-xs text-neutral-400 font-light">Identitas permanen tak dapat dipalsukan, dapat dipindai langsung dengan RFID reader.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
                    <Award className="text-champagne mb-2" size={20} />
                    <h4 className="font-serif text-base text-white mb-1 font-light">Sertifikat Captive-Bred</h4>
                    <p className="text-xs text-neutral-400 font-light">Dokumen resmi silsilah penangkar berizin lengkap dengan cap dan nomor registrasi.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link href="/tentang" className="btn-outline text-xs">
                    Pelajari Standar Legalitas ASEVA
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-[#0A0A0A] relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <div className="text-center pb-6 border-b border-white/[0.08]">
                    <Sparkles className="text-champagne mx-auto mb-2" size={28} />
                    <span className="font-serif text-xl text-white block font-light">Garansi Hidup Selamat (DOA)</span>
                    <span className="text-[10px] text-neutral-400 tracking-widest uppercase font-mono">Dead on Arrival Guarantee</span>
                  </div>
                  <p className="text-xs font-sans text-neutral-400 leading-relaxed py-6 font-light">
                    ASEVA AQUATICS memberlakukan protokol pengiriman beroksigen medis dengan pemantauan suhu real-time untuk seluruh area Bandung Raya, Jabodetabek, dan kota besar Jawa Barat. Kami menjamin ikan tiba dalam kondisi hidup, sehat, dan bugar di akuarium Anda.
                  </p>
                  <div className="text-center pt-2">
                    <Link href="/legal" className="text-xs text-white hover:underline">
                      Baca Kebijakan Garansi DOA & Privasi →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Water Quality & High Plateau Care (Bandung Context) */}
        <section className="section-container py-20">
          <div className="max-w-3xl mx-auto">
            <span className="section-label text-center block mb-2">Manajemen Lingkungan Hidup</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white text-center mb-8 font-light">
              Parameter Air Ideal di Iklim Dataran Tinggi & Tropis
            </h2>
            <div className="space-y-6 font-sans text-sm text-neutral-400 leading-relaxed font-light">
              <p>
                Di wilayah seperti Bandung Utara yang sejuk, suhu air sering turun di bawah 25°C pada malam hari. Suhu dingin dapat memperlambat metabolisme arwana, menurunkan nafsu makan, dan memicu stres sisik. Oleh karena itu, sistem pemanas otomatis (<em>titanium heater</em>) dengan kontroler digital adalah kebutuhan mutlak.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] text-center">
                  <span className="text-white font-serif text-2xl block mb-1 font-light">28–30°C</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">Suhu Stabil</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] text-center">
                  <span className="text-white font-serif text-2xl block mb-1 font-light">6.5–7.0</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">pH Air Seimbang</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] text-center">
                  <span className="text-white font-serif text-2xl block mb-1 font-light">&lt; 150</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">TDS (PPM)</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] text-center">
                  <span className="text-white font-serif text-2xl block mb-1 font-light">0 ppm</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">Amonia & Nitrit</span>
                </div>
              </div>

              <p>
                Sistem filtrasi biologis multi-chamber (sump tank) dengan media biomedium berpori tinggi memastikan amonia hasil sisa pakan langsung diurai sebelum mencemari ekosistem. Inilah alasan mengapa desain akuarium custom ASEVA selalu dirancang menyatu dengan sistem pendukung kehidupan (<em>life-support</em>) tanpa kompromi.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="bg-[#050505] border-t border-white/[0.08] py-20">
          <div className="section-container max-w-4xl">
            <div className="text-center mb-12">
              <span className="section-label">Tanya Jawab</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white mt-2 font-light">
                Pertanyaan Seputar Arwana Super Red
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
                  <h3 className="font-serif text-lg text-white mb-2 flex items-start gap-3 font-light">
                    <HelpCircle size={18} className="text-champagne flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed pl-7 font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-container py-16">
          <div className="rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-8 md:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <h2 className="font-serif text-2xl md:text-4xl text-white mb-4 font-light">
              Tertarik Mengoleksi Arwana Super Red Bersertifikat?
            </h2>
            <p className="font-sans text-sm text-neutral-400 max-w-xl mx-auto mb-8 font-light">
              Kunjungi katalog aktif kami atau jadwalkan sesi private viewing langsung dengan kurator ASEVA AQUATICS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/arwana" className="btn-primary text-xs">
                Jelajahi Koleksi Ikan Tersedia
              </Link>
              <Link href="/konsultasi" className="btn-outline text-xs">
                Jadwalkan Konsultasi Ruang
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
