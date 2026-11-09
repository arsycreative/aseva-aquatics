import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

Warna merah arwana berkembang seiring usia. Ikan muda biasanya menampilkan warna merah muda atau jingga keemasan. Intensitas warna merah darah penuh biasanya baru tampak di usia 3–5 tahun. Ring (pinggiran) emas atau merah tegas pada sisik baris ke-5 dan ke-6 adalah indikator genetik yang kuat untuk potensi warna di masa depan.

**2. Bentuk Tubuh (Body Shape)**

Tubuh ideal arwana super red adalah proporsional dengan lebar tubuh sekitar 1/4 dari panjang total (broad body / sumo posture). Punggung yang mendatar kokoh tanpa lekukan dini mengindikasikan struktur tulang belakang yang prima.

**3. Bentuk Kepala dan Mulut (Head Shape)**

Salah satu ciri khas yang paling dicari adalah kepala berbentuk "sendok" (spoon head) — di mana garis profil atas kepala melengkung cekung dengan rahang bawah yang presisi menutup rapat tanpa cakil (protruding jaw). Sungut (barbel) wajib lurus, simetris, dan mengarah tegak ke depan.

**4. Kualitas Sirip (Fin Quality)**

Sirip punggung (dorsal), anal, dan ekor yang simetris serta membuka lebar menyerupai "dayung" atau kipas sempurna adalah tanda kualitas tertinggi. Sirip dada (pectoral) yang panjang melengkung anggun menambah nilai estetika gerak saat berenang.

## Memahami Sistem Grade

Tidak ada standar grade tunggal yang disepakati secara universal. Namun sebagian besar kolektor dan penangkar menggunakan sistem berikut:

- **Grade A+ / Kontes Champion**: Warna merah darah merata penuh hingga punggung (full block ring), sirip dayung lebar sempurna, kepala sendok tajam, mata jernih bebas drop-eye, dan mental berwibawa. Sangat langka.
- **Grade A**: Warna merah pekat dengan ring tegas, proporsi tubuh ideal, minor imperfection sangat minim. Pilihan favorit kolektor serius.
- **Grade B+**: Warna baik dengan potensi berkembang tinggi melalui program tanning terarah, cocok untuk kolektor yang menikmati proses progresi warna.
- **Grade B**: Warna standar dengan anatomi sehat dan lengkap, ideal sebagai spesimen pertama penghias ruang.

## Peran Genetik dan Penangkar

Kualitas induk (broodstock) sangat menentukan potensi anakan. Penangkar bereputasi tinggi di Kapuas Hulu, Kalimantan Barat memiliki program seleksi genetik ketat selama bertahun-tahun. Ini adalah alasan mengapa ikan dari penangkar berbeda bisa memiliki nilai yang sangat berbeda meski secara fisik di usia muda tampak serupa.

Di ASEVA AQUATICS, kami hanya bermitra dengan penangkar resmi yang dapat menunjukkan rekam jejak induk dan riwayat anakan setidaknya dua generasi ke belakang.
  `,
  "estimasi-biaya-aquarium-custom-2026": `
Salah satu pertanyaan paling umum yang kami terima adalah: "Berapa biaya membuat aquarium custom kelas atas?" Jawaban jujurnya adalah: bergantung pada volume air, ketebalan kaca optik, dan kerumitan integrasi arsitektur interior. Panduan ini akan membantu Anda memahami variabel penentu investasi tersebut.

## Komponen Biaya Utama

**1. Kaca Optik Kristal Low-Iron (30–40% dari total biaya)**

Kaca adalah komponen struktural dan visual terbesar. Perbedaan antara kaca float biasa dan kaca low-iron kristal ultra-clear bisa mencapai 3–4× lipat harga pada ketebalan 15mm–19mm. Untuk aquarium di atas 1.000 liter, kaca low-iron adalah investasi mutlak karena menghilangkan bias warna hijau keruh pada kaca tebal.

- **Kaca Float / Tempered Biasa**: Rp 600.000–1.100.000/m² (tergantung ketebalan)
- **Kaca Low-Iron Ultra-Clear Optik**: Rp 1.800.000–3.800.000/m² (ketebalan 15mm–19mm monolitik)

**2. Sistem Filtrasi Sump & Life-Support (20–30%)**

Sistem filtrasi bawah (sump tank) memerlukan rekayasa perpipaan overflow dry-wet dan ruang mekanis kedap suara. Hasilnya adalah tampilan ruang tamu yang 100% bersih tanpa kabel, selang, atau tabung filter yang terlihat, dengan tingkat kebisingan di bawah 28 dB.

**3. Fabrikasi Presisi & Rekayasa Rangka Baja (25–35%)**

Ini adalah komponen keahlian atelier. Sambungan silikon struktural Jerman bebas gelembung mikro, sasis baja hollow galvanis berlapis epoxy anti-korosi, serta kabinet kayu berlapis HPL/duco tahan lembap memerlukan keahlian teknisi berpengalaman belasan tahun.

**4. Pencahayaan Spektrum Fotometri (10–15%)**

Modul LED spektrum terkalibrasi (14.000K–20.000K) khusus untuk menstimulasi pigmen kromofor merah arwana sekaligus dilengkapi otomasi siklus fajar-senja.

## Estimasi Berdasarkan Ukuran

Berikut adalah estimasi investasi untuk instalasi aquarium custom kelas atas dengan material low-iron kristal, struktur kabinet baja, dan sistem sump biologis lengkap:

- **Dimensi 150 × 60 × 60 cm (Volume 540 L, Kaca 12mm)**: Kisaran Rp 25–45 juta
- **Dimensi 200 × 80 × 70 cm (Volume 1.120 L, Kaca 15mm)**: Kisaran Rp 55–95 juta
- **Dimensi 300 × 100 × 80 cm (Volume 2.400 L, Kaca 19mm)**: Kisaran Rp 110–190 juta
- **Dimensi 400 × 120 × 100 cm (Volume 4.800 L, Kaca 19mm Laminated)**: Kisaran Rp 220–400+ juta

*Catatan: Estimasi di atas mencakup tangki optik, struktur kabinet arsitektural, dan rekayasa hidrolika tanpa satwa koleksi.*

## Pertimbangan Struktural Gedung

- **Beban lantai sipil**: Untuk akuarium di atas 1.200 liter (bobot total >1,5 ton), evaluasi posisi balok gantung atau pelat lantai wajib diperhitungkan sejak tahap desain.
- **Kelistrikan cadangan**: Penyediaan jalur MCB terpisah dan backup baterai/UPS otomatis untuk menjaga sirkulasi aerasi saat listrik padam.
- **Jalur drainase otomatis**: Integrasi pipa air bersih (RO/filtrasi karbon) dan pipa buang langsung ke saluran gedung agar penggantian air rutin berlangsung cukup dengan memutar keran.
  `,
  "kaca-low-iron-ultra-clear-vs-tempered": `
Ketika merancang akuarium bervolume di atas 1.000 liter, kaca bukan lagi sekadar pembatas air — ia adalah komponen struktur bertekanan tinggi sekaligus lensa optik. Kesalahan memilih jenis kaca dapat berakibat fatal: mulai dari distorsi warna yang merusak kemewahan sisik Arwana Super Red hingga risiko kegagalan struktural.

## Mengapa Kaca Biasa Tampak Kehijauan?

Kaca arsitektural standar (clear float glass) mengandung kadar besi oksida (Fe2O3) sekitar 0,1% dalam campuran silikanya. Pada ketebalan tipis seperti jendela 5mm, rona hijau ini nyaris tak terlihat. Namun hukum fisika akuarium menuntut ketebalan kaca 15mm hingga 19mm untuk menahan tekanan hidrostatik air.

Pada ketebalan 15mm–19mm, kandungan besi oksida menciptakan efek filter hijau kebiruan yang pekat. Akibatnya, air yang sebenarnya jernih tampak keruh, dan pendaran sisik merah darah Arwana Super Red tereduksi menjadi jingga kecokelatan yang kusam.

## Keunggulan Optik Kaca Low-Iron (Ultra-Clear Crystal)

Kaca Low-Iron menurunkan kandungan besi oksida hingga lebih dari 90% dibanding kaca float biasa. Perbedaan performanya sangat signifikan bagi instalasi kelas atas:

- **Transmisi Cahaya 91,5%+ (Hingga 99,2% Kejernihan Visual)**: Menghilangkan bias kehijauan secara mutlak, sehingga batas antara udara dan air seolah menghilang.
- **Akurasi Spektrum Warna Asli (True Color Rendering)**: Merah darah (Imperial Crimson), kilau ring emas, dan kontras sisik terpancar 100% sesuai genetik aslinya.
- **Tepi Kaca Berkilau Biru Es (Ice-Blue Edge)**: Saat dipoles dengan teknik diamond flat-polish, tepi kaca low-iron memancarkan rona kristal biru muda yang bersih, bukan hijau gelap.

## Bahaya Kaca Tempered Tunggal pada Akuarium Besar

Banyak orang mengira kaca tempered adalah pilihan paling aman untuk akuarium karena 4–5× lebih kuat dari kaca biasa (annealed). Dalam dunia rekayasa akuarium besar, penggunaan kaca tempered tunggal justru menyimpan risiko katastropik.

**1. Sifat Pecah Total (Spontaneous Shattering)**

Kaca annealed tebal (15mm–19mm) jika mengalami benturan ekstrem hanya akan mengalami retak rambut (hairline crack) yang masih menahan air sementara waktu sehingga penghuni rumah sempat menyelamatkan ikan dan menguras air. Sebaliknya, kaca tempered jika titik kritisnya tertembus akan langsung hancur berkeping-keping menjadi ribuan butiran dalam hitungan milidetik — menumpahkan ribuan liter air sekaligus ke ruang tamu Anda.

**2. Distorsi Gelombang Optik (Roller Wave Distortion)**

Proses pemanasan oven tempering sering meninggalkan efek gelombang mikro pada permukaan kaca. Saat dilihat dari sudut miring di dalam air, bayangan ikan akan tampak sedikit melengkung atau terdistorsi.

## Solusi Puncak: Low-Iron Annealed Tebal & Laminated SGP

Untuk keamanan tertinggi tanpa mengorbankan optik, ASEVA AQUATICS menerapkan dua standar rekayasa:

- **Monolithic Low-Iron Annealed (15mm–19mm) dengan Safety Factor 3,8×**: Dirancang dengan ketebalan ekstra dan sistem euro-bracing keliling sehingga defleksi (lengkungan kaca) mendekati nol.
- **Low-Iron Laminated Glass (2×10mm atau 2×12mm dengan Interlayer SGP/PVB)**: Untuk akuarium di atas 3.000 liter atau lobi publik, dua lembar kaca low-iron disatukan dengan lapisan polimer struktural. Jika satu lapis retak karena benturan luar biasa, lapisan interlayer tetap menahan air 100% tanpa bocor sedikit pun.
  `,
  "parameter-air-arwana-di-bandung": `
Memelihara Arwana Super Red di kawasan dataran tinggi seperti Bandung Utara (Dago Pakar, Setiabudi, Lembang) maupun Kota Baru Parahyangan memiliki tantangan mikro-iklim tersendiri. Habitat asli *Scleropages formosus* di hulu Sungai Kapuas dan Danau Sentarum, Kalimantan Barat, adalah perairan tropis hangat dengan suhu stabil sepanjang tahun.

## Tantangan Iklim Dataran Tinggi Bandung

Suhu udara malam hingga dini hari di dataran tinggi Bandung kerap turun ke kisaran 17°C–21°C. Tanpa sistem termal yang terkalibrasi, suhu air akuarium dapat merosot ke angka 23°C–24°C serta mengalami fluktuasi harian lebih dari 3°C.

**Dampak Fluktuasi Suhu bagi Arwana Super Red:**

- **Penurunan Metabolisme & Nafsu Makan**: Di bawah 26°C, enzim pencernaan arwana melambat drastis. Ikan menjadi pasif, parkir di dasar, dan menolak pakan.
- **Kerentanan terhadap White Spot (Ich) & Jamur Sisik**: Perubahan suhu mendadak melemahkan lapisan lendir pelindung (mucus coat) pada sisik.
- **Kuncupnya Sirip & Stres Warna**: Suhu dingin membuat pigmen kromofor merah menyempit sehingga warna ikan tampak memucat.

## Standar Parameter Air Ideal ASEVA di Bandung

Agar Arwana Super Red tampil prima, agresif, dan memancarkan warna merah maksimal di iklim Bandung, berikut adalah parameter telemetri yang wajib dijaga:

- **Suhu Air Stabil (28,0°C – 29,5°C)**: Fluktuasi harian antara siang dan malam tidak boleh melebihi ±0,5°C.
- **Derajat Keasaman / pH (6,2 – 6,8)**: Air sedikit asam (soft-acidic) meniru karakteristik air gambut Kalimantan dan menjaga kecerahan warna merah.
- **Kekerasan Karbonat / kH (2 – 4 dKH)**: Berfungsi sebagai penyangga (buffer) agar pH tidak anjlok mendadak (pH crash) akibat proses nitrifikasi biologis.
- **Amonia (NH3) & Nitrit (NO2) Mutlak 0 ppm**: Keduanya bersifat toksik. Nitrat (NO3) dijaga di bawah 20 ppm melalui pergantian air rutin.
- **TDS (Total Dissolved Solids) 80 – 180 ppm**: Air yang terlalu sadah (keras/tinggi kapur) di beberapa titik sumur bor harus difiltrasi terlebih dahulu.

## Rekayasa Termal & Filtrasi Khusus Dataran Tinggi

Di setiap instalasi akuarium custom ASEVA untuk wilayah Bandung Raya, kami merancang protokol teknis khusus:

**1. Dual Redundant Titanium Heater dengan External Controller**

Kami tidak pernah mengandalkan satu batang pemanas kaca biasa. Kami memasang dua unit pemanas berbahan titanium anti-pecah di dalam kompartemen sump yang dikendalikan oleh thermostat digital eksternal berpresisi 0,1°C. Jika satu unit melemah, unit kedua otomatis mengambil alih, dan sensor akan memutus arus jika suhu melebihi batas aman 30,5°C.

**2. Isolasi Termal Kabinet & Pipa Sump**

Kompartemen sump di bawah kabinet dilapisi peredam akustik yang sekaligus berfungsi sebagai isolator termal, menahan pelepasan panas air ke lantai granit/marmer yang dingin di malam hari.

**3. Sistem Drip / Pre-Heated Water Change**

Kesalahan terbesar pemilik arwana di Bandung adalah memasukkan air keran dingin (21°C) secara langsung saat menguras 30% air. Instalasi ASEVA menyediakan kompartemen aging/conditioning atau jalur pencampuran terukur sehingga air baru memiliki suhu dan pH yang selaras sebelum masuk ke tangki utama.
  `,
  "dokumen-legalitas-arwana-cites-bksda": `
Arwana Asia (*Scleropages formosus*), khususnya varietas Super Red asal Kalimantan Barat, merupakan salah satu satwa air tawar paling dilindungi di dunia. Status konservasinya berada di bawah **CITES Appendix I** serta dilindungi oleh Undang-Undang Republik Indonesia. Bagi kolektor kelas atas, kelengkapan dokumen legalitas bukan sekadar formalitas hukum — melainkan sertifikat keaslian yang menjamin nilai investasi satwa tersebut.

## Mengapa Arwana Super Red Wajib Bersertifikat?

Karena populasi liarnya di alam dilindungi secara ketat, perdagangan dan kepemilikan Arwana Super Red secara sah hanya diizinkan untuk spesimen hasil penangkaran resmi generasi kedua (**F2 / Captive-Bred**) dan seterusnya dari penangkar yang mengantongi izin Kementerian Lingkungan Hidup dan Kehutanan (BKSDA) serta terdaftar di sekretariat CITES di Jenewa.

Memiliki arwana tanpa microchip dan sertifikat resmi berisiko hukum serius (penyitaan satwa dilindungi) serta membuat nilai jual kembali (resale value) ikan tersebut jatuh di mata kolektor resmi.

## Tiga Pilar Dokumen Legalitas Arwana Resmi

Setiap spesimen Arwana Super Red yang dikurasi oleh ASEVA AQUATICS wajib melewati verifikasi tiga instrumen legalitas berikut:

**1. Transponder Microchip RFID 15-Digit (Standar ISO 11784/11785)**

Setiap ikan yang telah mencapai ukuran aman (biasanya 12–15 cm ke atas) diinjeksi dengan transponder microchip pasif seukuran bulir padi di jaringan otot bawah sisik punggung bagian depan. Microchip ini tidak membutuhkan baterai, aman seumur hidup ikan, dan memancarkan kode unik 15 digit saat dipindai dengan alat *RFID Scanner*.

**2. Sertifikat Keaslian Penangkar (Certificate of Identity / Captive-Bred)**

Sertifikat fisik bersegel hologram dari penangkar resmi yang memuat:
- **Nomor Microchip 15-Digit**: Wajib 100% identik hingga digit terakhir dengan angka yang muncul di layar alat scanner pada tubuh ikan.
- **Varietas & Silsilah Indukan**: Menjelaskan strain Super Red (Chili Red / Blood Red) beserta kode kolam atau pasangan induknya.
- **Tanggal Tetas / Injeksi Chip & Tanda Tangan Pejabat Berwenang**: Mengonfirmasi bahwa spesimen adalah hasil budidaya sah (F2/F3).

**3. Dokumen SATS-DN (Surat Angkut Tumbuhan dan Satwa Dalam Negeri)**

Untuk pengiriman spesimen melintasi batas provinsi atau pulau (misalnya dari Kalimantan Barat ke Bandung atau dari Atelier Bandung ke Jakarta/Surabaya), perjalanan satwa wajib disertai dokumen karantina ikan dan SATS-DN resmi yang diterbitkan oleh Balai Konservasi Sumber Daya Alam (BKSDA).

## Prosedur Verifikasi Serah Terima di ASEVA AQUATICS

Kami menerapkan standar transparansi mutlak pada setiap serah terima spesimen kepada klien:

- **Pemindaian Langsung (Live RFID Scanning)**: Di hadapan Anda (atau melalui rekaman video resolusi tinggi tanpa jeda sebelum pengiriman luar kota), kurator kami memindai tubuh arwana menggunakan RFID reader dan mencocokkannya langsung dengan lembar sertifikat asli.
- **Pemeriksaan Anatomi 14 Titik**: Memastikan ikan bebas dari cacat tersembunyi (mata, tutup insang, sungut, sirip, garis gurat sisi/lateral line, dan postur renang).
- **Arsip Digital Permanen**: Nomor microchip dan salinan dokumen spesimen Anda tercatat dalam basis data klien ASEVA untuk memudahkan klaim garansi maupun konsultasi perawatan jangka panjang.
  `,
};

function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*[^*]+\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="text-white font-medium">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} className="italic text-neutral-300">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

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
      <section className="relative pt-36 pb-16 bg-[#090B10] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/jurnal" className="hover:text-white transition-colors">Jurnal</Link>
            <span>/</span>
            <span className="text-white truncate">{article.title.slice(0, 40)}...</span>
          </nav>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-[10px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full bg-champagne/15 text-champagne-light border border-champagne/30">
              {article.category === "arwana" ? "Arwana Super Red" : "Aquarium Custom"}
            </span>
            <span className="font-mono text-xs text-neutral-400">· {article.readTime} baca</span>
            <span className="font-mono text-xs text-neutral-400">· {formatDate(article.publishedAt)}</span>
          </div>
          <h1 className="font-serif text-white max-w-4xl leading-tight mb-6 font-light text-3xl sm:text-5xl">
            {article.title}
          </h1>
          <p className="font-sans text-base md:text-lg text-neutral-300 max-w-2xl leading-relaxed font-light">
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
              {/* Featured Cover Image */}
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 mb-12 bg-[#0A0A0E] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="prose-aseva">
                {content.trim().split("\n\n").map((paragraph, i) => {
                  const trimmed = paragraph.trim();
                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2 key={i} className="font-serif text-2xl sm:text-3xl text-white mt-12 mb-5 font-light pb-3 border-b border-white/[0.08]">
                        {trimmed.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
                    return (
                      <h3 key={i} className="font-serif text-xl sm:text-2xl text-white mt-9 mb-3 font-normal flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                        <span>{trimmed.slice(2, -2)}</span>
                      </h3>
                    );
                  }
                  if (trimmed.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-3 mb-7 pl-1">
                        {trimmed.split("\n").map((item, j) => (
                          <li key={j} className="flex items-start gap-3.5">
                            <span className="text-champagne-light mt-1.5 text-[10px] flex-shrink-0">✦</span>
                            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-0">
                              {renderFormattedText(item.replace(/^- /, ""))}
                            </p>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed mb-6 font-light">
                      {renderFormattedText(trimmed)}
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
