import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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
    code: "01 / OPTIK KACA",
    title: "Low-Iron Ultra-Clear Crystal Glass",
    specs: [
      "Kejernihan visual hingga 99.2% (transmisi spektrum >91.5%)",
      "Eliminasi >90% molekul besi oksida penyebab bias kehijauan",
      "Ketebalan monolitik 12mm–19mm & Laminated SGP 2×12mm",
      "Diamond flat-polished ice-blue edge dengan toleransi <0.2mm",
    ],
    description:
      "Kaca float standar mengandung besi oksida yang menciptakan rona hijau keruh pada kaca tebal. Kaca Low-Iron menghilangkan molekul besi tersebut sehingga menghadirkan kejernihan mutlak setara lensa optik.",
    whyItMatters:
      "Pendaran sisik merah darah Arwana Super Red terpancar 100% akurat tanpa distorsi warna.",
  },
  {
    code: "02 / STRUKTURAL BONDING",
    title: "Silikon Marine-Grade Jerman",
    specs: [
      "Wacker Elastosil / Dow Corning kelas akuatik struktural",
      "100% murni bebas fungisida & pelarut kimia beracun",
      "Modulus elastisitas tinggi dengan daya tahan >15 tahun",
      "Injeksi seam presisi bebas gelembung mikro (<0.5mm)",
    ],
    description:
      "Kami hanya mengaplikasikan silikon struktural akuatik standar Jerman yang tahan terhadap tekanan hidrostatik berton-ton air sekaligus 100% aman bagi mikrobiologi satwa.",
    whyItMatters:
      "Menjamin integritas kedap air jangka panjang tanpa risiko rembesan yang merusak interior hunian.",
  },
  {
    code: "03 / LIFE SUPPORT",
    title: "Sistem Sump Biologis Kedap Suara (<28 dB)",
    specs: [
      "Kapasitas reservoir 25–35% dari total volume tangki utama",
      "Multi-chamber: mekanis micron-sock, keramik bio-pori, & UV",
      "Pompa DC sine-wave dengan dudukan peredam silikon (<28 dB)",
      "Pipa overflow dry-wet tersembunyi 100% di dalam struktur",
    ],
    description:
      "Seluruh siklus mekanis dan biologis tersembunyi di dalam kabinet kedap suara di bawah akuarium. Tidak ada satu pun kabel, selang, atau peralatan pompa yang terlihat di ruang utama.",
    whyItMatters:
      "Air sebening kristal sepanjang tahun dengan keheningan ruang yang lebih senyap dari perpustakaan.",
  },
  {
    code: "04 / FOTOMETRI",
    title: "Pencahayaan Spektrum Kromofor Terprogram",
    specs: [
      "Spektrum 14.000K–20.000K dengan penetrasi kolom air dalam",
      "Panjang gelombang UVA/RGB terkalibrasi untuk tanning sisik",
      "Siklus otomatis: fajar, puncak tropis, senja, & moonlight",
      "Heatsink aluminium anodized pasif tanpa kipas bising",
    ],
    description:
      "Pencahayaan dirancang khusus untuk menstimulasi sel pigmen merah (kromofor) pada sisik Arwana Super Red secara bertahap tanpa memicu stres fotofobia.",
    whyItMatters:
      "Memancarkan kontras merah Imperial Crimson yang dramatis di atas kanvas air gelap.",
  },
];

export default function MaterialPage() {
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
            <span className="text-white">Material & Teknologi</span>
          </nav>
          <ScrollReveal className="max-w-2xl">
            <span className="section-label block mb-4">SPESIFIKASI ARSITEKTUR</span>
            <h1 className="font-serif text-white mb-6 font-light">
              Material & Rekayasa
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                Tanpa Kompromi Kualitas
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Nilai sebuah akuarium kelas atas ditentukan oleh kejernihan kaca optik, kekuatan ikatan silikon struktural, dan keheningan sistem hidrolika yang bertahan lintas generasi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Optical & Acoustic Engineering Comparator (Warm Charcoal #0A0A0E) */}
      <section className="py-20 md:py-28 bg-[#0A0A0E] border-b border-white/[0.08]">
        <div className="section-container">
          <ScrollReveal className="mb-14">
            <span className="section-label block mb-3">TELEMETRI KOMPARASI LABORATORIUM</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Standar Optik & Akustik <em className="italic text-champagne">ASEVA vs Konvensional</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 1. Optical Clarity Comparator */}
            <ScrollReveal>
              <div className="bg-[#111218] p-8 md:p-10 rounded-3xl border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-champagne-light uppercase">
                      KOMPARASI TRANSMISI OPTIK (KACA 19MM)
                    </span>
                    <span className="font-mono text-xs text-white px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">
                      ISO-9050
                    </span>
                  </div>

                  {/* SVG Visual Glass Comparison */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Standard Float Glass */}
                    <div className="p-5 rounded-2xl bg-black/60 border border-emerald-500/20 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] text-emerald-400/90 uppercase tracking-wider">
                          Float Glass Biasa
                        </span>
                        <span className="font-mono text-xs text-neutral-400">83.0%</span>
                      </div>
                      <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-950/90 via-teal-900/50 to-emerald-950/80 border border-emerald-500/30 flex flex-col items-center justify-center p-3 text-center">
                        <span className="w-8 h-3 rounded-full bg-[#B84A39]/70 mb-2 blur-[0.5px]" />
                        <span className="font-mono text-[10px] text-emerald-300/80">
                          Bias Hijau Besi Oksida (Fe₂O₃)
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-neutral-400 mt-3 leading-relaxed font-light">
                        Warna merah arwana tampak kecokelatan & air terlihat keruh kehijauan pada ketebalan ≥15mm.
                      </p>
                    </div>

                    {/* ASEVA Crystal Low-Iron */}
                    <div className="p-5 rounded-2xl bg-black/60 border border-champagne/40 relative overflow-hidden shadow-[0_0_30px_rgba(217,35,56,0.12)]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] text-champagne-light uppercase tracking-wider font-medium">
                          ASEVA Low-Iron
                        </span>
                        <span className="font-mono text-xs text-white font-medium">99.2%</span>
                      </div>
                      <div className="h-24 rounded-xl bg-gradient-to-br from-sky-950/25 via-white/[0.04] to-transparent border border-sky-300/30 flex flex-col items-center justify-center p-3 text-center">
                        <span className="w-8 h-3 rounded-full bg-[#D92338] shadow-[0_0_15px_#D92338] mb-2" />
                        <span className="font-mono text-[10px] text-white">
                          Kejernihan Kristal Murni
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-neutral-300 mt-3 leading-relaxed font-light">
                        Transmisi warna 100% akurat. Pendaran merah darah & ring emas tampil kontras tanpa batas kaca.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <span>REDUKSI BESI OKSIDA: &gt;91%</span>
                  <span className="text-champagne-light">STANDAR ATELIER ASEVA</span>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Acoustic Decibel Scale Comparator */}
            <ScrollReveal delay={0.1}>
              <div className="bg-[#111218] p-8 md:p-10 rounded-3xl border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-champagne-light uppercase">
                      SPEKTRUM AKUSTIK RUANG HUNIAN (DESIBEL)
                    </span>
                    <span className="font-mono text-xs text-white px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">
                      &lt; 28 dB(A)
                    </span>
                  </div>

                  <div className="space-y-5 my-4">
                    {/* Bar 1: ASEVA Sump */}
                    <div className="p-4 rounded-2xl bg-black/50 border border-champagne/40">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-sans text-xs text-white font-medium">
                          Sistem Sump Terisolasi ASEVA (DC Sine-Wave)
                        </span>
                        <span className="font-mono text-sm text-champagne-light font-semibold">
                          26 – 28 dB
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className="h-full w-[32%] bg-gradient-to-r from-champagne-light to-champagne rounded-full" />
                      </div>
                      <span className="block font-mono text-[10px] text-neutral-400 mt-1.5">
                        Setara bisikan daun / lebih hening dari ruang tidur malam hari
                      </span>
                    </div>

                    {/* Bar 2: Library / Quiet Room */}
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/[0.06]">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-sans text-xs text-neutral-300">
                          Standar Ruang Perpustakaan Hening
                        </span>
                        <span className="font-mono text-xs text-neutral-400">
                          38 – 40 dB
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className="h-full w-[52%] bg-white/30 rounded-full" />
                      </div>
                    </div>

                    {/* Bar 3: Conventional Aquarium */}
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/[0.06]">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-sans text-xs text-neutral-400">
                          Filtrasi Akuarium Konvensional (Suara Kucuran & Dengung Pompa AC)
                        </span>
                        <span className="font-mono text-xs text-neutral-400">
                          52 – 58 dB
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className="h-full w-[82%] bg-neutral-600 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <span>SISTEM PIPA: DRY-WET HERBIE OVERFLOW</span>
                  <span className="text-champagne-light">ZERO GURGLE NOISE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Materials Detail Grid (Pitch Black #000000) */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="space-y-8">
            {MATERIALS.map((mat, idx) => (
              <ScrollReveal key={mat.title} delay={idx * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A0A0E] p-8 lg:p-11 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  {/* Left */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <span className="section-label block mb-3">{mat.code}</span>
                      <h2 className="font-serif text-2xl md:text-3xl text-white mb-4 font-light">
                        {mat.title}
                      </h2>
                      <p className="font-sans text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                        {mat.description}
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl border border-champagne/25 bg-champagne/[0.04]">
                      <p className="font-mono text-[10px] text-champagne-light font-medium mb-1 tracking-widest uppercase">
                        ESENSI BAGI RUANG & SATWA
                      </p>
                      <p className="font-sans text-sm text-white/90 italic leading-relaxed font-light">
                        &ldquo;{mat.whyItMatters}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Right — Specs */}
                  <div className="lg:col-span-5 bg-[#12131A] p-7 md:p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-center">
                    <p className="font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-5 font-medium">
                      PARAMETER SPESIFIKASI
                    </p>
                    <ul className="space-y-3.5">
                      {mat.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-3">
                          <span className="text-champagne-light text-xs mt-0.5 flex-shrink-0">✦</span>
                          <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                            {spec}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for architects (Smoked Lounge #08080B) */}
      <section className="py-24 bg-[#08080B] border-t border-white/[0.08]">
        <div className="section-container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <span className="section-label block mb-4">KOLABORASI ARSITEK & DESAINER</span>
            <h2 className="font-serif text-white mb-4 font-light text-3xl sm:text-5xl">
              Butuh Berkas Spesifikasi <em className="italic text-champagne">Teknis MEP?</em>
            </h2>
            <p className="font-sans text-sm text-neutral-400 max-w-lg mx-auto mb-10 font-light">
              Kami menyediakan gambar kerja CAD, kalkulasi titik beban lantai sipil, dan skema jalur pemipaan untuk diintegrasikan ke dokumen proyek Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konsultasi" className="btn-primary">
                Minta Dokumen Teknis MEP
              </Link>
              <Link href="/portofolio" className="btn-outline text-xs">
                Lihat Portofolio Proyek
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
