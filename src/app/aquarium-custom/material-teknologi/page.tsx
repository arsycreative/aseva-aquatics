import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Material & Teknologi Aquarium Premium — Kaca Low-Iron, Filtrasi Life-Support",
  description:
    "Spesifikasi teknis lengkap material aquarium custom ASEVA: kaca ultra-clear low-iron, silikon marine-grade, sistem filtrasi sump tank tersembunyi, pencahayaan spektrum LED.",
  alternates: {
    canonical: "https://asevaaquatics.com/aquarium-custom/material-teknologi",
  },
  openGraph: {
    title: "Material & Rekayasa Teknologi Akuarium Mewah — ASEVA AQUATICS",
    description:
      "Spesifikasi kaca kristal low-iron 99.2%, silikon struktural marine-grade Jerman, dan sistem filtrasi dry-wet senyap total.",
    url: "https://asevaaquatics.com/aquarium-custom/material-teknologi",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/journal/kaca-aquarium.jpg",
        width: 1200,
        height: 630,
        alt: "Material Kaca Kristal Low-Iron ASEVA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Material & Rekayasa Teknologi ASEVA AQUATICS",
    description: "Kaca optik kristal 99.2% dan sistem filtrasi sump senyap <28dB.",
    images: ["/images/journal/kaca-aquarium.jpg"],
  },
};

const MATERIALS = [
  {
    category: "Optik Kaca",
    title: "Low-Iron Ultra-Clear Crystal Glass",
    specs: ["Transmisi cahaya hingga 99.2%", "Tanpa distorsi rona kehijauan", "Ketebalan 12mm–25mm terhitung hidrolika", "Ukuran masif monolitik tanpa sambungan tengah"],
    description: "Kaca float standar mengandung besi oksida yang memberikan warna kehijauan kusam pada tampilan air. Kaca low-iron optik kristal menghilangkan molekul besi ini, menghadirkan kejernihan absolut setara lensa optik kamera profesional.",
    whyItMatters: "Kemewahan sisik merah arwana dan kejernihan air akuarium hanya dapat terpancar maksimal di balik kaca low-iron kristal murni.",
  },
  {
    category: "Struktural Bonding",
    title: "Silikon Marine-Grade Kedap Tekanan",
    specs: ["Wacker / Dow Corning 795 kelas akuatik internasional", "Formula non-toxic bebas bahan kimia anti-jamur beracun", "Elastisitas tensil tinggi, daya tahan kebocoran 15+ tahun", "Garis sambungan bevel minim tanpa gelembung"],
    description: "Silikon konstruksi bangunan umum mengandung racun anti-jamur yang mematikan ikan. Kami hanya mengaplikasikan silikon marine-grade khusus habitat air dengan kekuatan ikatan struktural elastis terhadap tekanan berton-ton.",
    whyItMatters: "Kualitas bonding silikon adalah penentu mutlak antara akuarium yang bocor merusak interior rumah dan yang berdiri kokoh puluhan tahun.",
  },
  {
    category: "Life Support",
    title: "Sistem Sump Biologis Kedap Suara",
    specs: ["Kapasitas reservoir 20–35% total volume akuarium", "Multi-chamber media biologis keramik berpori mikro", "Pompa sirkulasi DC berisolasi getaran (< 28 dB)", "Dry-wet over-flow pipa tersembunyi total"],
    description: "Sistem filtrasi terpadu memindahkan seluruh siklus mekanis, kimiawi, dan biologis ke dalam kabinet kedap suara di bawah akuarium. Tidak ada kabel, selang, atau peralatan pompa yang merusak estetika interior ruang.",
    whyItMatters: "Inilah rahasia akuarium kelas dunia: air senantiasa sebenar kristal dengan kesunyian total di ruang hunian Anda.",
  },
  {
    category: "Fotometri",
    title: "Pencahayaan Spektrum Terprogram",
    specs: ["Spektrum 14.000K–20.000K penetrasi kedalaman air", "Modul LED khusus tanning kromofor sisik arwana", "Siklus matahari otomatis: fajar, siang, senja, malam", "Peredam panas pasif aluminium penerbangan"],
    description: "Pencahayaan presisi bukan hanya soal keindahan visual — ini merupakan stimulasi biologis terhadap perkembangan pigmen merah pekat arwana super red. Spektrum yang tepat merangsang sel warna tanpa menyebabkan stres.",
    whyItMatters: "Cahaya terkalibrasi memancarkan pantulan pendaran emas dan merah darah arwana secara alami dan dramatis.",
  },
];

export default function MaterialPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/aquarium-custom" className="hover:text-white transition-colors">Aquarium Custom</Link>
            <span>/</span>
            <span className="text-white">Material & Teknologi</span>
          </nav>
          <div className="max-w-2xl">
            <span className="section-label block mb-4">SPESIFIKASI ARSITEKTUR</span>
            <h1 className="font-serif text-white mb-6 font-light">
              Material & Rekayasa
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Tanpa Kompromi Kualitas
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed font-light">
              Mengapa standar ASEVA berada di kelas tersendiri? Nilai sebuah akuarium mewah ditentukan oleh integritas kaca optik, silikon struktural, dan akustik hidrolika yang dirancang bertahan lintas generasi.
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="space-y-10">
            {MATERIALS.map((mat) => (
              <div
                key={mat.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A0A0A] p-8 lg:p-12 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Left */}
                <div className="lg:col-span-7">
                  <span className="section-label block mb-3 font-medium">{mat.category}</span>
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-5 font-light">
                    {mat.title}
                  </h2>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                    {mat.description}
                  </p>
                  <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#111111]">
                    <p className="font-mono text-[10px] text-champagne font-medium mb-1 tracking-widest uppercase">
                      DAMPAK TERHADAP RUANG & SATWA
                    </p>
                    <p className="font-sans text-sm text-neutral-300 italic leading-relaxed font-light">
                      &ldquo;{mat.whyItMatters}&rdquo;
                    </p>
                  </div>
                </div>
                {/* Right — Specs */}
                <div className="lg:col-span-5 bg-[#111111] p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-center">
                  <p className="font-mono text-[10px] text-champagne tracking-widest uppercase mb-5 font-medium">
                    PARAMETER SPESIFIKASI
                  </p>
                  <ul className="space-y-3.5">
                    {mat.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3">
                        <span className="text-champagne text-xs mt-0.5 flex-shrink-0">✦</span>
                        <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                          {spec}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for architects */}
      <section className="py-24 bg-[#050505] border-t border-white/[0.08]">
        <div className="section-container text-center max-w-2xl mx-auto">
          <span className="section-label block mb-4">KOLABORASI PROFESIONAL</span>
          <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
            Butuh Berkas Spesifikasi <em className="italic text-champagne">Teknis MEP?</em>
          </h2>
          <p className="font-sans text-sm text-neutral-400 max-w-lg mx-auto mb-10 font-light">
            Kami menyediakan lembar spesifikasi teknis lengkap, kalkulasi titik beban lantai, dan jalur pipa untuk perencanaan arsitektur Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/konsultasi" className="btn-primary">
              Minta Dokumen Teknis
            </Link>
            <Link href="/portofolio" className="btn-outline text-xs">
              Lihat Portofolio Proyek
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
