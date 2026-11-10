import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Proses Pembuatan Aquarium Custom — Dari Visi hingga Serah Terima",
  description:
    "Transparansi penuh proses kerja 4 langkah ASEVA AQUATICS: Visi, Perancangan, Pembuatan, Pemasangan. Dari diskusi pertama hingga aquarium menyala di ruang Anda.",
  alternates: {
    canonical: "https://asevaaquatics.com/aquarium-custom/proses",
  },
  openGraph: {
    title: "Metodologi & Proses Rancang Bangun Akuarium Custom — ASEVA AQUATICS",
    description:
      "Panduan transparansi tahapan studi kelayakan sipil, pemodelan CAD 3D, fabrikasi CNC kaca kristal, dan uji kebocoran 72 jam.",
    url: "https://asevaaquatics.com/aquarium-custom/proses",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/journal/kaca-aquarium.jpg",
        width: 1200,
        height: 630,
        alt: "Proses Kerja Akuarium Custom ASEVA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proses Kerja Akuarium Custom ASEVA AQUATICS",
    description: "4 Tahap realisasi akuarium mewah presisi tinggi di Bandung & Jabodetabek.",
    images: ["/images/journal/kaca-aquarium.jpg"],
  },
};

const DETAILED_STEPS = [
  {
    number: "01",
    code: "FASE I / ORIENTASI",
    title: "Visi & Audit Struktural Ruang",
    duration: "1–2 Pertemuan",
    activities: [
      "Survei lokasi untuk mengukur dimensi ruang, orientasi pandang, dan jalur pemipaan gedung",
      "Evaluasi titik beban lantai struktural sipil (wajib untuk kapasitas akuarium >1.000 Liter)",
      "Penyelarasan konsep material kabinet bersama pemilik hunian atau desainer interior",
    ],
    output: "Dokumen Studi Kelayakan Sipil, Brief Konsep, & Estimasi Anggaran",
  },
  {
    number: "02",
    code: "FASE II / REKAYASA CAD",
    title: "Perancangan 3D & Spesifikasi Hidrolika",
    duration: "1–2 Minggu",
    activities: [
      "Pembuatan gambar kerja CAD 3D dan koordinasi jalur elektrikal/plumbing (MEP)",
      "Kalkulasi ketebalan kaca Low-Iron (12mm–19mm / Laminated) dengan Safety Factor 3.8×",
      "Perancangan kompartemen sump biologis kedap suara (<28 dB) & spektrum lampu tanning",
    ],
    output: "Blueprint Gambar Kerja Final, Spesifikasi Material, & Jadwal Fabrikasi",
  },
  {
    number: "03",
    code: "FASE III / FABRIKASI",
    title: "Konstruksi Kaca Optik di Workshop",
    duration: "2–5 Minggu",
    activities: [
      "Pemotongan CNC dan diamond flat-polishing tepi kaca kristal Low-Iron",
      "Injeksi silikon struktural Jerman bebas gelembung mikro (<0.5mm seam)",
      "Perakitan sasis baja hollow berlapis epoxy anti-karat dan uji rendam tahap I (48 jam)",
    ],
    output: "Unit Tangki & Kabinet Tersertifikasi QC Workshop + Video Uji Tekanan",
  },
  {
    number: "04",
    code: "FASE IV / COMMISSIONING",
    title: "Instalasi, Uji 72 Jam & Serah Terima",
    duration: "1–3 Hari",
    activities: [
      "Instalasi presisi di lokasi dan integrasi pemipaan dry-wet tak kasat mata",
      "Uji beban hidrostatik penuh dan kalibrasi kebisingan akustik selama 72 jam",
      "Maturasi awal bakteri nitrifikasi biologis dan serah terima sertifikat garansi 3 tahun",
    ],
    output: "Ekosistem Akuarium Aktif (<28 dB), Manual Operasional, & Garansi Resmi 3 Tahun",
  },
];

export default function ProsesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header (Slate #090B10) */}
      <section className="relative pt-36 pb-20 bg-[#090B10] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <nav className="flex items-center gap-2 font-sans text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/aquarium-custom" className="hover:text-white transition-colors">Aquarium Custom</Link>
            <span>/</span>
            <span className="text-white">Proses</span>
          </nav>
          <ScrollReveal className="max-w-2xl">
            <span className="section-label block mb-4">METODOLOGI ARSITEKTUR</span>
            <h1 className="font-serif text-white mb-6 font-light">
              Proses 4 Tahap
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                Menuju Mahakarya Akuarium
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Tanpa improvisasi di lapangan dan tanpa biaya tersembunyi. Setiap tahapan didokumentasikan secara terukur agar selaras dengan jadwal proyek arsitektur Anda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Telemetry Summary Strip (Monolith #030305) */}
      <section className="py-10 bg-[#030305] border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
            {[
              { label: "FAKTOR KEAMANAN", val: "3.8× Hydrostatic" },
              { label: "TOLERANSI SILIKON", val: "< 0.5mm Seam" },
              { label: "UJI KEBOCORAN GANDA", val: "48 Jam + 72 Jam" },
              { label: "GARANSI STRUKTUR", val: "3 Tahun Resmi" },
            ].map((item) => (
              <div key={item.label} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <span className="block font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-1">
                  {item.label}
                </span>
                <span className="font-serif text-2xl text-white font-light">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps (Warm Charcoal #0A0A0E) */}
      <section className="section-padding bg-[#0A0A0E]">
        <div className="section-container">
          <div className="space-y-8">
            {DETAILED_STEPS.map((step, idx) => (
              <ScrollReveal key={step.number} delay={idx * 0.08}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#111218] p-8 lg:p-12 rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
                  {/* Step Number */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
                    <div>
                      <span className="font-mono text-[10px] text-champagne-light uppercase tracking-widest block mb-2">
                        {step.code}
                      </span>
                      <span className="font-serif text-5xl lg:text-7xl text-white/20 block font-light leading-none">
                        {step.number}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-white border border-champagne/30 px-3.5 py-1.5 rounded-full bg-champagne/10">
                      Estimasi: {step.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6 font-light">
                      {step.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      {/* Activities */}
                      <div className="md:col-span-7">
                        <p className="font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-4 font-medium">
                          PROTOKOL & RUANG LINGKUP
                        </p>
                        <ul className="space-y-3">
                          {step.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-champagne-light mt-1 text-xs flex-shrink-0">✦</span>
                              <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                                {activity}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Output */}
                      <div className="md:col-span-5">
                        <p className="font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-4 font-medium">
                          DELIVERABLE TAHAP INI
                        </p>
                        <div className="p-6 rounded-2xl bg-black/50 border border-white/10">
                          <p className="font-sans text-sm text-white leading-relaxed font-light">
                            {step.output}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Smoked Lounge #08080B) */}
      <section className="py-24 bg-[#08080B] border-t border-white/[0.08] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
              Siap Memulai <em className="italic text-champagne">Tahap Pertama?</em>
            </h2>
            <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 font-light">
              Konsultasi visi ruang dan survei kelayakan awal di wilayah Bandung Raya dilakukan tanpa biaya komitmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konsultasi" className="btn-primary">
                Jadwalkan Konsultasi Ruang
              </Link>
              <Link href="/aquarium-custom#kalkulator" className="btn-outline text-xs">
                Buka Kalkulator Spesifikasi
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
