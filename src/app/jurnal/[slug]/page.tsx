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
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

// Static article content (replace with Sanity CMS in production)
const ARTICLE_CONTENT: Record<string, string> = {
  "anatomi-arwana-super-red-kelas-kolektor": `
Arwana Super Red (Scleropages formosus) adalah salah satu ikan koi paling bergengsi di dunia kolektor. 
Memahami anatomi dan kriteria kualitasnya bukan sekadar pengetahuan — ini adalah fondasi untuk membuat 
keputusan investasi yang tepat.

## Kriteria Utama Penilaian Grade

Kualitas arwana super red dinilai dari empat aspek utama yang saling berkaitan:

**1. Perkembangan Warna (Color Development)**
Warna merah arwana berkembang seiring usia. Ikan muda biasanya menampilkan warna merah muda atau jingga. 
Intensitas warna merah darah penuh biasanya baru tampak di usia 3–5 tahun. Ring (pinggiran) emas pada 
sisik adalah indikator genetik yang kuat untuk potensi warna di masa depan.

**2. Bentuk Tubuh (Body Shape)**
Tubuh ideal arwana super red adalah proporsional dengan lebar tubuh sekitar 1/4 dari panjang total. 
Badan yang terlalu kurus atau terlalu gemuk mengindikasikan kondisi kesehatan yang tidak optimal.

**3. Bentuk Kepala dan Mulut (Head Shape)**
Salah satu ciri khas yang paling dicari adalah kepala berbentuk "sendok" (shovel head) — di mana 
rahang bawah sedikit terbalik ke atas. Ini adalah ciri genetik premium.

**4. Kualitas Sirip (Fin Quality)**
Sirip punggung (dorsal), anal, dan ekor yang simetris dan berbentuk "dayung" sempurna adalah tanda 
kualitas tertinggi. Sirip yang robek, asimetris, atau memendek mengurangi nilai ikan secara signifikan.

## Memahami Sistem Grade

Tidak ada standar grade tunggal yang disepakati secara universal. Namun sebagian besar kolektor dan 
penangkar menggunakan sistem berikut:

- **Grade A+ / Kontes Champion**: Warna merah darah merata penuh, sirip sempurna, kepala sendok, 
  aktif dan agresif. Jarang ditemukan.
- **Grade A**: Warna merah sangat baik, minor imperfection diperbolehkan. Pilihan kebanyakan kolektor serius.
- **Grade B+**: Warna baik dengan potensi berkembang, cocok untuk kolektor yang sabar dan berpengalaman.
- **Grade B**: Warna standar, cocok untuk pemula atau sebagai pajangan ruang.

## Peran Genetik dan Penangkar

Kualitas induk (broodstock) sangat menentukan potensi anakan. Penangkar bereputasi tinggi di Kalimantan 
dan Sumatera memiliki program seleksi genetik ketat selama bertahun-tahun. Ini adalah alasan mengapa 
ikan dari penangkar berbeda bisa memiliki harga yang sangat berbeda meski secara fisik tampak serupa.

Di ASEVA AQUATICS, kami hanya bermitra dengan penangkar yang dapat menunjukkan rekam jejak induk 
dan riwayat anakan setidaknya dua generasi ke belakang.
  `,
  "estimasi-biaya-aquarium-custom-2026": `
Salah satu pertanyaan paling umum yang kami terima adalah: "Berapa biaya membuat aquarium custom?" 
Jawaban jujurnya adalah: tergantung. Tapi panduan ini akan membantu Anda memahami variabel apa saja 
yang memengaruhi biaya.

## Komponen Biaya Utama

**1. Kaca (30–40% dari total biaya)**
Kaca adalah komponen terbesar. Perbedaan antara kaca biasa dan kaca low-iron ultra-clear bisa mencapai 
3–5× lipat harga. Untuk aquarium >1.000 liter, kaca low-iron adalah investasi yang sepadan karena 
perbedaan kejernihan visualnya sangat signifikan.

- Kaca tempered biasa: Rp 400.000–800.000/m²
- Kaca low-iron ultra-clear: Rp 1.200.000–2.500.000/m²

**2. Sistem Filtrasi (20–30%)**
Sistem filtrasi yang tersembunyi (sump tank) memerlukan investasi lebih besar namun menghasilkan 
tampilan yang jauh lebih bersih. Komponen: sump tank, pompa, media filter, skimmer protein (air laut).

**3. Fabrikasi & Tenaga Kerja (25–35%)**
Ini adalah biaya keahlian. Sambungan kaca yang presisi, kabinet custom, dan instalasi yang rapi 
memerlukan tenaga ahli berpengalaman.

**4. Pencahayaan (10–20%)**
LED spektrum premium untuk arwana atau akuascape bisa menjadi komponen yang signifikan.

## Estimasi Berdasarkan Ukuran

Berikut adalah estimasi kasar untuk aquarium dinding (built-in) dengan material premium:

| Dimensi | Volume | Estimasi Biaya |
|---------|--------|----------------|
| 150 × 60 × 60 cm | 540 L | Rp 25–50 juta |
| 200 × 80 × 70 cm | 1.120 L | Rp 50–100 juta |
| 300 × 100 × 80 cm | 2.400 L | Rp 100–200 juta |
| 400 × 120 × 100 cm | 4.800 L | Rp 200–400 juta |

*Catatan: Harga di atas belum termasuk konten ikan, tanaman, atau karang.*

## Yang Sering Terlupakan

- **Biaya struktural**: Untuk aquarium >1 ton, sering diperlukan penguatan struktur lantai
- **Biaya kelistrikan**: Instalasi daya terpisah untuk pompa dan pencahayaan
- **Biaya maintenance tahun pertama**: Filter harus dibersihkan, parameter air dimonitor secara rutin
  `,
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = ARTICLE_CONTENT[slug] || article.excerpt;

  return (
    <>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.publishedAt,
            author: { "@type": "Organization", name: "ASEVA AQUATICS" },
            publisher: {
              "@type": "Organization",
              name: "ASEVA AQUATICS",
              logo: { "@type": "ImageObject", url: "https://asevaaquatics.com/logo.png" },
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
            <Link href="/jurnal" className="hover:text-gold">Jurnal</Link>
            <span>/</span>
            <span className="text-ivory truncate">{article.title.slice(0, 40)}...</span>
          </nav>
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">
              {article.category === "arwana" ? "Arwana Super Red" : "Aquarium Custom"}
            </span>
            <span className="font-sans text-xs text-ivory-dim">· {article.readTime}</span>
            <span className="font-sans text-xs text-ivory-dim">· {formatDate(article.publishedAt)}</span>
          </div>
          <h1 className="font-serif text-ivory max-w-3xl leading-tight mb-6">
            {article.title}
          </h1>
          <p className="font-sans text-base text-ivory-muted max-w-2xl leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose-aseva">
                {content.trim().split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={i} className="font-serif text-3xl text-ivory mt-12 mb-6">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3 key={i} className="font-serif text-xl text-ivory mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-2 mb-6">
                        {paragraph.split("\n").map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-gold mt-1 text-xs flex-shrink-0">✦</span>
                            <p className="font-sans text-sm text-ivory-muted leading-relaxed">
                              {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                            </p>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="font-sans text-sm text-ivory-muted leading-relaxed mb-6">
                      {paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  );
                })}
              </div>

              {/* Embedded CTA */}
              <div className="mt-16 p-8 bg-navy-secondary border border-gold/20">
                <p className="font-sans text-xs text-gold tracking-widest uppercase mb-3">
                  Siap Bertindak?
                </p>
                <h3 className="font-serif text-2xl text-ivory mb-4">
                  Konsultasikan Dengan Tim Ahli Kami
                </h3>
                <p className="font-sans text-sm text-ivory-muted mb-6 leading-relaxed">
                  Artikel ini hanyalah permulaan. Setiap kasus unik dan membutuhkan solusi yang berbeda.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/konsultasi" className="btn-primary text-xs">
                    Konsultasi Gratis
                  </Link>
                  <Link
                    href={article.category === "arwana" ? "/arwana" : "/aquarium-custom"}
                    className="btn-outline text-xs"
                  >
                    {article.category === "arwana" ? "Lihat Koleksi Arwana" : "Lihat Layanan"}
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-6">
                <div className="p-6 bg-navy-secondary border border-white/5">
                  <h3 className="font-serif text-lg text-ivory mb-4">
                    Artikel Terkait
                  </h3>
                  <ul className="space-y-4">
                    {JOURNAL_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3).map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/jurnal/${a.slug}`}
                          className="font-sans text-sm text-ivory-muted hover:text-gold transition-colors leading-tight block"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-navy-secondary border border-gold/20">
                  <p className="font-sans text-xs text-gold tracking-widest uppercase mb-3">
                    Butuh Bantuan?
                  </p>
                  <p className="font-sans text-sm text-ivory-muted mb-4 leading-relaxed">
                    Tim ahli kami siap menjawab pertanyaan spesifik Anda.
                  </p>
                  <Link href="/konsultasi" className="btn-primary w-full justify-center text-xs">
                    Konsultasi Gratis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

