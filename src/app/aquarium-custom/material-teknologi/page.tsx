import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Material & Teknologi Aquarium Premium — Kaca Low-Iron, Filtrasi Life-Support",
  description:
    "Spesifikasi teknis lengkap material aquarium custom ASEVA: kaca ultra-clear low-iron, silikon marine-grade, sistem filtrasi sump tank tersembunyi, pencahayaan spektrum LED.",
};

const MATERIALS = [
  {
    category: "Kaca",
    title: "Low-Iron Ultra-Clear Glass",
    specs: ["Transmisi cahaya 92%+", "Tanpa distorsi warna kehijauan", "Ketebalan 12mm–25mm sesuai volume", "Tersedia hingga 3m × 1,5m per lembar"],
    description: "Kaca standar mengandung besi yang memberi warna kehijauan pada tampilan air. Kaca low-iron (ultra-clear) menghilangkan besi ini, menghasilkan kejernihan absolut yang sepadan dengan tampilannya.",
    whyItMatters: "Warna merah arwana dan kecantikan karang hanya dapat tampil sempurna di balik kaca ultra-clear.",
  },
  {
    category: "Sambungan",
    title: "Silikon Marine-Grade",
    specs: ["GE Sanitary atau Dow Corning 795", "Non-toxic, aman untuk ikan dan biota", "Elastisitas tinggi, tahan bocor 10+ tahun", "Tidak kuning atau rapuh dalam air"],
    description: "Silikon standar bangunan mengandung bahan anti-jamur yang beracun bagi ikan. Kami menggunakan silikon marine-grade yang diformulasikan khusus untuk lingkungan akuatik.",
    whyItMatters: "Sambungan yang tepat adalah perbedaan antara aquarium yang bocor dalam 2 tahun dan yang bertahan 15 tahun.",
  },
  {
    category: "Filtrasi",
    title: "Sistem Sump Tank Tersembunyi",
    specs: ["Kapasitas sump 15–30% volume utama", "Media filter: wool, bio-ball, ceramic ring", "Pompa balik silent (<30dB)", "Protein skimmer untuk aquarium laut"],
    description: "Sistem sump memindahkan seluruh peralatan filtrasi ke dalam kabinet tersembunyi, menghasilkan tampilan aquarium yang bersih tanpa kabel atau selang yang terlihat.",
    whyItMatters: "Inilah mengapa aquarium mewah tidak pernah terlihat kabelnya — semua tersembunyi di dalam kabinet yang dirancang khusus.",
  },
  {
    category: "Pencahayaan",
    title: "LED Spektrum Khusus",
    specs: ["Warna: 14.000K–20.000K untuk aquarium air tawar", "Spektrum khusus tanning untuk arwana", "Timer otomatis siang-malam", "Intensitas dapat diatur (dimmer)"],
    description: "Pencahayaan yang tepat bukan hanya tentang estetika — ini tentang kesehatan ikan dan perkembangan warna arwana. Spektrum yang salah dapat menghambat perkembangan warna merah.",
    whyItMatters: "Cahaya yang tepat adalah rahasia warna merah darah arwana yang memukau.",
  },
];

export default function MaterialPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy border-b border-white/5">
        <div className="section-container">
          <nav className="flex items-center gap-2 font-sans text-xs text-ivory-dim mb-8">
            <Link href="/" className="hover:text-gold">Beranda</Link>
            <span>/</span>
            <Link href="/aquarium-custom" className="hover:text-gold">Aquarium Custom</Link>
            <span>/</span>
            <span className="text-ivory">Material & Teknologi</span>
          </nav>
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Spesifikasi Teknis</span>
            <h1 className="font-serif text-ivory mb-6">
              Material & Teknologi
              <br />
              <em className="text-gold">yang Menjustifikasi Harga</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed">
              Mengapa aquarium premium lebih mahal? Bukan karena mereknya — tapi karena materialnya. 
              Halaman ini menjelaskan secara teknis apa yang ada di dalam setiap aquarium ASEVA.
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="space-y-0">
            {MATERIALS.map((mat, index) => (
              <div
                key={mat.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-white/5 last:border-b-0"
              >
                {/* Left */}
                <div className={`p-8 lg:p-12 border-b lg:border-b-0 ${index % 2 === 0 ? "lg:border-r" : "lg:order-2"} border-white/5`}>
                  <span className="section-label block mb-4">{mat.category}</span>
                  <h2 className="font-serif text-2xl md:text-3xl text-ivory mb-6">
                    {mat.title}
                  </h2>
                  <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-6">
                    {mat.description}
                  </p>
                  <div className="p-5 border border-gold/20 bg-gold/5">
                    <p className="font-sans text-xs text-gold font-medium mb-2 tracking-widest uppercase">
                      Mengapa Ini Penting
                    </p>
                    <p className="font-sans text-sm text-ivory-muted italic leading-relaxed">
                      &ldquo;{mat.whyItMatters}&rdquo;
                    </p>
                  </div>
                </div>
                {/* Right — Specs */}
                <div className={`p-8 lg:p-12 bg-navy-secondary ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="font-sans text-xs text-gold tracking-widest uppercase mb-6">
                    Spesifikasi
                  </p>
                  <ul className="space-y-4">
                    {mat.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3">
                        <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                        <p className="font-sans text-sm text-ivory-muted leading-relaxed">
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
      <section className="py-20 bg-navy-secondary border-t border-white/5">
        <div className="section-container text-center">
          <span className="section-label block mb-4">Untuk Arsitek & Desainer Interior</span>
          <h2 className="font-serif text-ivory mb-4">
            Butuh Spesifikasi Teknis <em className="text-gold">Lebih Detail?</em>
          </h2>
          <p className="font-sans text-sm text-ivory-muted max-w-lg mx-auto mb-10">
            Kami menyediakan dokumen teknis lengkap untuk kebutuhan perencanaan struktur dan koordinasi MEP. Hubungi kami langsung.
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
    </>
  );
}

