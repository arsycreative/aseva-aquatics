import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  const pageUrl = `https://asevaaquatics.com/jurnal/${article.slug}`;

  return {
    title: `${article.title} | Jurnal ASEVA AQUATICS`,
    description: article.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: pageUrl,
      siteName: "ASEVA AQUATICS",
      locale: "id_ID",
      type: "article",
      publishedTime: article.publishedAt,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

// Static article content
const ARTICLE_CONTENT: Record<string, string> = {
  "anatomi-arwana-super-red-kelas-kolektor": `
Arwana Super Red (Scleropages formosus) adalah salah satu satwa akuatik paling bergengsi di dunia kolektor kelas atas. Memahami anatomi dan kriteria kualitasnya bukan sekadar pengetahuan — ini adalah fondasi untuk membuat keputusan investasi dan kurasi yang tepat.

## Kriteria Utama Penilaian Grade

Kualitas arwana super red dinilai dari empat aspek utama yang saling berkaitan:

**1. Perkembangan Warna (Color Development)**
Warna merah arwana berkembang seiring usia. Ikan muda biasanya menampilkan warna merah muda atau jingga keemasan. Intensitas warna merah darah penuh biasanya baru tampak di usia 3–5 tahun. Ring (pinggiran) emas pada sisik adalah indikator genetik yang kuat untuk potensi warna di masa depan.

**2. Bentuk Tubuh (Body Shape)**
Tubuh ideal arwana super red adalah proporsional dengan lebar tubuh sekitar 1/4 dari panjang total. Badan yang terlalu kurus atau terlalu gemuk mengindikasikan kondisi kesehatan yang tidak optimal.

**3. Bentuk Kepala dan Mulut (Head Shape)**
Salah satu ciri khas yang paling dicari adalah kepala berbentuk "sendok" (spoon head) — di mana rahang bawah sedikit terbalik ke atas. Ini adalah ciri genetik premium yang langka.

**4. Kualitas Sirip (Fin Quality)**
Sirip punggung (dorsal), anal, dan ekor yang simetris dan berbentuk "dayung" sempurna adalah tanda kualitas tertinggi. Sirip yang robek, asimetris, atau memendek mengurangi nilai ikan secara signifikan.

## Memahami Sistem Grade

Tidak ada standar grade tunggal yang disepakati secara universal. Namun sebagian besar kolektor dan penangkar menggunakan sistem berikut:

- **Grade A+ / Kontes Champion**: Warna merah darah merata penuh, sirip sempurna, kepala sendok tajam, aktif dan berwibawa. Sangat langka.
- **Grade A**: Warna merah sangat baik, minor imperfection diperbolehkan. Pilihan favorit kebanyakan kolektor serius.
- **Grade B+**: Warna baik dengan potensi berkembang, cocok untuk kolektor yang sabar dan berpengalaman dalam tanning.
- **Grade B**: Warna standar, cocok untuk pemula atau sebagai elemen hidup penghias ruang.

## Peran Genetik dan Penangkar

Kualitas induk (broodstock) sangat menentukan potensi anakan. Penangkar bereputasi tinggi di Kalimantan Barat memiliki program seleksi genetik ketat selama bertahun-tahun. Ini adalah alasan mengapa ikan dari penangkar berbeda bisa memiliki nilai yang sangat berbeda meski secara fisik di usia muda tampak serupa.

Di ASEVA AQUATICS, kami hanya bermitra dengan penangkar yang dapat menunjukkan rekam jejak induk dan riwayat anakan setidaknya dua generasi ke belakang.
  `,
  "estimasi-biaya-aquarium-custom-2026": `
Salah satu pertanyaan paling umum yang kami terima adalah: "Berapa biaya membuat aquarium custom kelas atas?" Jawaban jujurnya adalah: bergantung pada volume, ketebalan kaca optik, dan kerumitan integrasi arsitektur interior. Panduan ini akan membantu Anda memahami variabel penentu investasi tersebut.

## Komponen Biaya Utama

**1. Kaca Optik Kristal Low-Iron (30–40% dari total biaya)**
Kaca adalah komponen terbesar. Perbedaan antara kaca biasa dan kaca low-iron kristal ultra-clear bisa mencapai 3–5× lipat harga. Untuk aquarium di atas 1.000 liter, kaca low-iron adalah investasi mutlak karena perbedaan kejernihan visualnya sangat kontras tanpa warna hijau keruh.

- Kaca tempered biasa: Rp 400.000–800.000/m²
- Kaca low-iron ultra-clear: Rp 1.200.000–2.500.000/m²

**2. Sistem Filtrasi Sump & Life-Support (20–30%)**
Sistem filtrasi yang tersembunyi (sump tank) memerlukan instalasi presisi namun menghasilkan tampilan yang sepenuhnya bersih tanpa kabel atau pipa kasat mata di ruang utama.

**3. Fabrikasi Presisi & Rekayasa Rangka (25–35%)**
Ini adalah biaya keahlian atelier. Sambungan kaca presisi bebas gelembung, kabinet custom tahan air, dan integrasi panel dinding memerlukan keahlian teknisi berpengalaman belasan tahun.

**4. Pencahayaan Spektrum Fotometri (10–20%)**
Modul LED spektrum tinggi khusus tanning pigmen merah arwana dan sistem otomasi fajar-senja.

## Estimasi Berdasarkan Ukuran

Berikut adalah estimasi untuk instalasi aquarium dinding built-in dengan material low-iron kristal premium:

- Dimensi 150 × 60 × 60 cm (Volume 540 L): Kisaran Rp 25–50 juta
- Dimensi 200 × 80 × 70 cm (Volume 1.120 L): Kisaran Rp 50–100 juta
- Dimensi 300 × 100 × 80 cm (Volume 2.400 L): Kisaran Rp 100–200 juta
- Dimensi 400 × 120 × 100 cm (Volume 4.800 L): Kisaran Rp 200–400 juta

*Catatan: Estimasi di atas berfokus pada tangki, struktur kabinet, dan hidrolika tanpa satwa koleksi.*

## Pertimbangan Struktural Gedung

- **Beban lantai sipil**: Untuk akuarium di atas 1 ton, koordinasi struktural lantai bangunan wajib dikalkulasikan
- **Kelistrikan cadangan**: Penyediaan jalur sirkuit listrik khusus atau koneksi UPS
- **Akses air bersih & pembuangan**: Saluran drainase otomatis untuk mempermudah perawatan rutin tanpa ember
  `,
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = ARTICLE_CONTENT[slug] || article.excerpt;

  return (
    <div className="bg-black text-white min-h-screen">
      {/* JSON-LD Article & Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": `https://asevaaquatics.com/jurnal/${article.slug}#article`,
                headline: article.title,
                description: article.excerpt,
                image: [`https://asevaaquatics.com${article.coverImage}`],
                datePublished: article.publishedAt,
                dateModified: article.publishedAt,
                mainEntityOfPage: `https://asevaaquatics.com/jurnal/${article.slug}`,
                articleSection: article.category === "arwana" ? "Arwana Super Red" : "Aquarium Custom",
                author: {
                  "@type": "Organization",
                  name: "ASEVA AQUATICS",
                  url: "https://asevaaquatics.com",
                },
                publisher: {
                  "@type": "Organization",
                  name: "ASEVA AQUATICS",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://asevaaquatics.com/apple-touch-icon.png",
                  },
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `https://asevaaquatics.com/jurnal/${article.slug}#breadcrumb`,
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
                    name: "Jurnal",
                    item: "https://asevaaquatics.com/jurnal",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: article.title,
                    item: `https://asevaaquatics.com/jurnal/${article.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/jurnal" className="hover:text-white transition-colors">Jurnal</Link>
            <span>/</span>
            <span className="text-white truncate">{article.title.slice(0, 35)}...</span>
          </nav>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10">
              {article.category === "arwana" ? "Arwana Super Red" : "Aquarium Custom"}
            </span>
            <span className="font-mono text-xs text-neutral-400">· {article.readTime}</span>
            <span className="font-mono text-xs text-neutral-400">· {formatDate(article.publishedAt)}</span>
          </div>
          <h1 className="font-serif text-white max-w-3xl leading-tight mb-6 font-light text-3xl sm:text-5xl">
            {article.title}
          </h1>
          <p className="font-sans text-base md:text-lg text-neutral-400 max-w-2xl leading-relaxed font-light">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8">
              <div className="prose-aseva">
                {content.trim().split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={i} className="font-serif text-3xl text-white mt-12 mb-6 font-light">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3 key={i} className="font-serif text-xl text-white mt-8 mb-4 font-normal">
                        {paragraph.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-2.5 mb-6">
                        {paragraph.split("\n").map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-champagne mt-1 text-xs flex-shrink-0">✦</span>
                            <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                              {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                            </p>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed mb-6 font-light">
                      {paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  );
                })}
              </div>

              {/* Embedded CTA */}
              <div className="mt-16 p-8 md:p-10 rounded-3xl bg-[#0A0A0A] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <span className="font-mono text-[10px] text-champagne tracking-widest uppercase mb-3 block font-medium">
                  KONSULTASI SPESIFIK
                </span>
                <h3 className="font-serif text-2xl text-white mb-4 font-light">
                  Diskusikan Bersama Tim Kurator ASEVA
                </h3>
                <p className="font-sans text-sm text-neutral-400 mb-8 leading-relaxed font-light">
                  Artikel wawasan ini adalah pengantar. Setiap ruang hunian dan visi arsitektur memiliki tantangan unik tersendiri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/konsultasi" className="btn-primary text-xs">
                    Jadwalkan Konsultasi Ruang
                  </Link>
                  <Link
                    href={article.category === "arwana" ? "/arwana" : "/aquarium-custom"}
                    className="btn-outline text-xs"
                  >
                    {article.category === "arwana" ? "Lihat Koleksi Arwana" : "Lihat Layanan Custom"}
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/[0.08]">
                  <h3 className="font-serif text-lg text-white mb-5 font-light">
                    Artikel Terkait Lainnya
                  </h3>
                  <ul className="space-y-4">
                    {JOURNAL_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3).map((a) => (
                      <li key={a.slug} className="border-b border-white/[0.06] pb-3 last:border-b-0">
                        <Link
                          href={`/jurnal/${a.slug}`}
                          className="font-sans text-xs text-neutral-400 hover:text-white transition-colors leading-relaxed block font-light"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/[0.08]">
                  <span className="font-mono text-[10px] text-champagne tracking-widest uppercase mb-2 block font-medium">
                    PERCAKAPAN LANGSUNG
                  </span>
                  <h3 className="font-serif text-lg text-white mb-3 font-light">Butuh Panduan Khusus?</h3>
                  <p className="font-sans text-xs text-neutral-400 mb-6 leading-relaxed font-light">
                    Tim ahli kami siap menjawab pertanyaan teknis mengenai ruangan Anda.
                  </p>
                  <Link href="/konsultasi" className="btn-primary w-full justify-center text-xs">
                    Konsultasi Ruang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
