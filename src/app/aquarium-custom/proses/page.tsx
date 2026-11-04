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
    title: "Visi & Konsultasi",
    duration: "1–2 Pertemuan",
    activities: [
      "Survei lokasi untuk mengukur dimensi ruang, kondisi lantai, dan jalur pipa",
      "Diskusi mendalam tentang konsep, gaya interior, dan fungsi yang diinginkan",
      "Penilaian beban lantai dan struktur bangunan (penting untuk aquarium di atas 500L)",
      "Presentasi referensi dan portofolio proyek serupa",
    ],
    output: "Dokumen brief proyek dan estimasi harga awal",
  },
  {
    number: "02",
    title: "Perancangan & Presentasi",
    duration: "1–2 Minggu",
    activities: [
      "Gambar teknis 3D dan tampak atas/samping/depan",
      "Pemilihan kaca (low-iron ultra-clear, ketebalan sesuai volume)",
      "Spesifikasi sistem filtrasi, pompa, dan tata letak kabinet",
      "Rancangan pencahayaan dan spektrum warna LED",
      "Presentasi desain final untuk persetujuan klien",
    ],
    output: "Gambar kerja final, Bill of Materials, dan jadwal produksi",
  },
  {
    number: "03",
    title: "Pembuatan di Workshop",
    duration: "2–6 Minggu",
    activities: [
      "Pemotongan kaca presisi menggunakan mesin CNC",
      "Bonding menggunakan silikon marine-grade profesional",
      "Fabrikasi kabinet dari bahan premium sesuai desain",
      "Uji kebocoran pertama di workshop selama minimum 48 jam",
      "Perakitan sistem filtrasi, pompa, dan instalasi kelistrikan",
    ],
    output: "Unit aquarium siap kirim, dokumentasi uji kebocoran workshop",
  },
  {
    number: "04",
    title: "Instalasi & Serah Terima",
    duration: "1–3 Hari",
    activities: [
      "Pengiriman dan pengangkatan unit aquarium ke lokasi",
      "Instalasi dan koneksi ke sistem kelistrikan dan plumbing",
      "Pengisian air dan uji kebocoran di lokasi selama 72 jam",
      "Commissioning sistem filtrasi dan kalibrasi parameter air",
      "Pelatihan operasional kepada pemilik atau staf",
      "Serah terima resmi dengan dokumen garansi kebocoran 12 bulan",
    ],
    output: "Aquarium menyala sempurna, garansi aktif, manual operasional",
  },
];

export default function ProsesPage() {
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
            <span className="text-ivory">Proses</span>
          </nav>
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Transparansi Penuh</span>
            <h1 className="font-serif text-ivory mb-6">
              Proses 4 Langkah
              <br />
              <em className="text-gold">Menuju Aquarium Impian</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed">
              Tidak ada kejutan biaya, tidak ada ketidakjelasan. Setiap tahap kami komunikasikan secara terbuka sehingga Anda selalu tahu persis di mana posisi proyek Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="space-y-0">
            {DETAILED_STEPS.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-white/5 last:border-b-0 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number */}
                <div className="lg:col-span-2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex items-start justify-between lg:flex-col lg:justify-start gap-4">
                  <div>
                    <span className="font-serif text-6xl text-gold/20 block leading-none">
                      {step.number}
                    </span>
                    <div className="w-8 h-px bg-gold mt-4" />
                  </div>
                  <span className="font-sans text-xs text-ivory-dim border border-white/10 px-3 py-1.5 whitespace-nowrap">
                    {step.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-10 p-8 lg:p-12">
                  <h2 className="font-serif text-3xl text-ivory mb-8">
                    {step.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Activities */}
                    <div>
                      <p className="font-sans text-xs text-gold tracking-widest uppercase mb-4">
                        Kegiatan
                      </p>
                      <ul className="space-y-3">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-gold mt-1 text-xs flex-shrink-0">✦</span>
                            <p className="font-sans text-sm text-ivory-muted leading-relaxed">
                              {activity}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Output */}
                    <div>
                      <p className="font-sans text-xs text-gold tracking-widest uppercase mb-4">
                        Output yang Anda Terima
                      </p>
                      <div className="p-5 bg-navy-secondary border border-white/5">
                        <p className="font-sans text-sm text-ivory leading-relaxed">
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
      <section className="py-20 bg-navy-secondary border-t border-white/5 text-center">
        <div className="section-container">
          <h2 className="font-serif text-ivory mb-4">
            Siap Memulai <em className="text-gold">Langkah Pertama?</em>
          </h2>
          <p className="font-sans text-sm text-ivory-muted max-w-md mx-auto mb-10">
            Konsultasi visi dan survei lokasi awal kami lakukan tanpa biaya apapun.
          </p>
          <Link href="/konsultasi" className="btn-primary">
            Jadwalkan Konsultasi Gratis
          </Link>
        </div>
      </section>
    </>
  );
}

