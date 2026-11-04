import type { Metadata } from "next";
import Link from "next/link";
import { PROCESS_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proses Pembuatan Aquarium Custom — Dari Visi hingga Serah Terima",
  description:
    "Transparansi penuh proses kerja 4 langkah ASEVA AQUATICS: Visi, Perancangan, Pembuatan, Pemasangan. Dari diskusi pertama hingga aquarium menyala di ruang Anda.",
};

const DETAILED_STEPS = [
  {
    number: "01",
    title: "Visi & Konsultasi Ruang",
    duration: "1–2 Pertemuan",
    activities: [
      "Survei lokasi untuk mengukur dimensi ruang, orientasi visual, dan jalur plumbing",
      "Diskusi mendalam tentang konsep estetika interior dan fungsi ekosistem yang diinginkan",
      "Penilaian beban lantai struktural gedung (krusial untuk aquarium berkapasitas di atas 500L)",
      "Presentasi portofolio atelier dan studi kasus serupa",
    ],
    output: "Dokumen brief proyek, studi kelayakan, dan estimasi investasi awal",
  },
  {
    number: "02",
    title: "Perancangan & Engineering 3D",
    duration: "1–2 Minggu",
    activities: [
      "Pemodelan teknis 3D dan koordinasi gambar kerja dengan arsitek / kontraktor MEP",
      "Kalkulasi ketebalan kaca optik low-iron ultra-clear dan faktor keselamatan hidrolika",
      "Spesifikasi sistem filtrasi sump biologis tersembunyi dan pompa isolasi getaran",
      "Rancangan pencahayaan spektrum terprogram (tanning spektrum penuh)",
      "Presentasi blueprint final untuk persetujuan klien",
    ],
    output: "Gambar kerja 3D final, Bill of Materials, dan jadwal fabrikasi terinci",
  },
  {
    number: "03",
    title: "Fabrikasi di Workshop Atelier",
    duration: "2–6 Minggu",
    activities: [
      "Pemotongan dan bevel kaca kristal presisi tinggi menggunakan mesin CNC",
      "Bonding presisi dengan silikon marine-grade Wacker kelas internasional",
      "Fabrikasi rangka baja anti-karat dan kabinet interior custom sesuai moodboard arsitek",
      "Uji hidrolika dan kebocoran tahap I di workshop selama minimum 48 jam",
      "Perakitan sistem filtrasi sump, otomatisasi level air, dan panel listrik rapi",
    ],
    output: "Unit akuarium tersertifikasi workshop, dokumentasi video uji hidrolika",
  },
  {
    number: "04",
    title: "Instalasi, Commissioning & Serah Terima",
    duration: "1–3 Hari",
    activities: [
      "Pengiriman logistik berpelindung dan pengangkatan khusus ke lokasi lantai proyek",
      "Integrasi kabel dan pipa tak kasat mata ke dalam dinding dan kabinet",
      "Pengisian hidrolika dan uji kebocoran komprehensif di lokasi selama 72 jam",
      "Commissioning siklus nitrogen biologis dan kalibrasi parameter air",
      "Edukasi pemeliharaan kepada staf atau pemilik hunian",
      "Penyerahan sertifikat garansi struktur 3 tahun resmi ASEVA",
    ],
    output: "Akuarium aktif beroperasi hening, garansi struktur 3 tahun aktif, manual book operasional",
  },
];

export default function ProsesPage() {
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
            <span className="text-white">Proses</span>
          </nav>
          <div className="max-w-2xl">
            <span className="section-label block mb-4">METODOLOGI ARSITEKTUR</span>
            <h1 className="font-serif text-white mb-6 font-light">
              Proses 4 Tahap
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Menuju Mahakarya Akuarium
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed font-light">
              Tanpa kejutan biaya, tanpa improvisasi amatir di lapangan. Setiap tahap kami dokumentasikan secara terbuka sehingga Anda dan arsitek Anda selalu memegang kendali penuh atas kualitas.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="space-y-10">
            {DETAILED_STEPS.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A0A0A] p-8 lg:p-12 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Step Number */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">TAHAP</span>
                    <span className="font-serif text-5xl lg:text-7xl text-neutral-700 block font-light leading-none">
                      {step.number}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-neutral-300 border border-white/10 px-3.5 py-1.5 rounded-full bg-white/[0.02]">
                    {step.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9">
                  <h2 className="font-serif text-3xl text-white mb-8 font-light">
                    {step.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Activities */}
                    <div>
                      <p className="font-mono text-[10px] text-champagne tracking-widest uppercase mb-4 font-medium">
                        KEGIATAN & RUANG LINGKUP
                      </p>
                      <ul className="space-y-3.5">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-champagne mt-1 text-xs flex-shrink-0">✦</span>
                            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                              {activity}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Output */}
                    <div>
                      <p className="font-mono text-[10px] text-champagne tracking-widest uppercase mb-4 font-medium">
                        OUTPUT DOKUMEN & FISIK
                      </p>
                      <div className="p-6 rounded-2xl bg-[#111111] border border-white/[0.08]">
                        <p className="font-sans text-sm text-white leading-relaxed font-light">
                          {step.output}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505] border-t border-white/[0.08] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
            Siap Memulai <em className="italic text-champagne">Langkah Pertama?</em>
          </h2>
          <p className="font-sans text-sm text-neutral-400 max-w-md mx-auto mb-10 font-light">
            Konsultasi visi ruang dan survei lokasi awal di Bandung Raya kami lakukan tanpa biaya komitmen.
          </p>
          <Link href="/konsultasi" className="btn-primary">
            Jadwalkan Konsultasi Ruang
          </Link>
        </div>
      </section>
    </div>
  );
}
