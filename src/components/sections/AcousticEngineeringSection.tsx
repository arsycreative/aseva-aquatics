"use client";

import { useState } from "react";
import { Volume2, VolumeX, Eye, ShieldCheck, Sparkles, Sliders } from "lucide-react";

export default function AcousticEngineeringSection() {
  const [selectedDb, setSelectedDb] = useState<"conventional" | "library" | "aseva">("aseva");

  const soundLevels = {
    conventional: {
      db: "62 dB",
      title: "Akuarium Konvensional",
      subtitle: "Getaran motor & gemericik pipa berisik",
      description:
        "Pompa celup murah tanpa damper menghasilkan dengung struktural frekuensi rendah yang merambat ke lantai dan dinding ruangan. Mengganggu ketenangan ruang keluarga dan kamar tidur.",
      waveColor: "bg-red-500",
      waveHeight: ["h-8", "h-14", "h-10", "h-16", "h-12", "h-14", "h-9"],
      status: "Bising & Mengganggu",
    },
    library: {
      db: "40 dB",
      title: "Ruang Perpustakaan Senyap",
      subtitle: "Standar keheningan membaca",
      description:
        "Tingkat kebisingan rata-rata ruang baca tertutup tanpa percakapan. Standar akustik untuk konsentrasi kerja dan istirahat.",
      waveColor: "bg-amber-400",
      waveHeight: ["h-4", "h-7", "h-5", "h-8", "h-6", "h-7", "h-4"],
      status: "Standar Tenang",
    },
    aseva: {
      db: "< 28 dB",
      title: "ASEVA Hydro-Acoustic Engineering",
      subtitle: "Hening mutlak — nyaris tak terdeteksi telinga",
      description:
        "Menggunakan pompa DC sine-wave dengan vibration decoupler, pipa hidrolika beveled 45° bebas turbulensi, dan kabinet berlapis busa peredam akustik. Anda hanya melihat keindahan ikan melayang tanpa suara.",
      waveColor: "bg-emerald-400",
      waveHeight: ["h-2", "h-3", "h-2", "h-3.5", "h-2", "h-3", "h-2"],
      status: "Keheningan Sempurna",
    },
  };

  const currentSound = soundLevels[selectedDb];

  return (
    <section
      className="py-28 md:py-36 bg-[#08080A] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Rekayasa Akustik dan Optik ASEVA"
    >
      {/* Background Architectural Mesh */}
      <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-champagne/[0.025] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Editorial Top Intro — Split Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-champagne block mb-4 font-medium">
              BREAKTHROUGH ENGINEERING · AKUSTIK & OPTIK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light leading-[1.08]">
              Keheningan Mutlak,
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Kejernihan Tanpa Rona.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
              Akuarium mewah bukan hanya soal visual — tetapi bagaimana ia menyatu dalam arsitektur tanpa dengung suara pompa dan tanpa distorsi warna kaca.
            </p>
          </div>
        </div>

        {/* Feature 1: Interactive Acoustic Decibel Sound Visualizer */}
        <div className="bg-[#0D0D12] rounded-3xl border border-white/[0.08] p-8 md:p-14 mb-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08] mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Volume2 size={16} className="text-champagne" />
                <span className="font-mono text-xs tracking-widest text-neutral-300 uppercase">
                  SIMULATOR TINGKAT KEBISINGAN HIDROLIKA
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-sans font-light">
                Klik perbandingan di bawah untuk mengamati perbedaan getaran & akustik
              </p>
            </div>

            {/* Toggle Switch Buttons */}
            <div className="flex flex-wrap p-1.5 rounded-full bg-black/60 border border-white/10 gap-1">
              <button
                onClick={() => setSelectedDb("conventional")}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider transition-all duration-300 ${
                  selectedDb === "conventional"
                    ? "bg-red-500/20 text-red-300 border border-red-500/40"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Konvensional (62 dB)
              </button>
              <button
                onClick={() => setSelectedDb("library")}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider transition-all duration-300 ${
                  selectedDb === "library"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Perpustakaan (40 dB)
              </button>
              <button
                onClick={() => setSelectedDb("aseva")}
                className={`px-5 py-2 rounded-full text-xs font-sans tracking-wider font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedDb === "aseva"
                    ? "bg-white text-black shadow-lg shadow-white/20"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <Sparkles size={12} className={selectedDb === "aseva" ? "text-champagne-dim" : ""} />
                ASEVA (&lt; 28 dB)
              </button>
            </div>
          </div>

          {/* Soundstage Visualizer Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Decibel Metric Display */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
                HASIL PENGUKURAN DECIBEL (JARAK 1 METER)
              </span>
              <div className="font-serif text-5xl sm:text-7xl md:text-8xl text-white font-light leading-none mb-4 tracking-tight">
                {currentSound.db}
              </div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${currentSound.waveColor} animate-pulse`} />
                <span className="font-mono text-xs text-neutral-300 tracking-wider uppercase font-medium">
                  {currentSound.status}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 font-normal">
                {currentSound.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                {currentSound.description}
              </p>
            </div>

            {/* Sound Wave Frequency Graphic */}
            <div className="lg:col-span-7 bg-black/70 rounded-2xl border border-white/[0.06] p-8 flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 border-b border-white/[0.06] pb-3 mb-6">
                <span>SPECTRUM FREKUENSI 20Hz – 20kHz</span>
                <span className="text-champagne">HYDRO-ACOUSTIC TEST</span>
              </div>

              {/* Animated Waveform Bars */}
              <div className="flex items-end justify-center gap-2 sm:gap-3 h-28 my-auto px-4">
                {currentSound.waveHeight.map((h, i) => (
                  <div
                    key={i}
                    className={`w-3 sm:w-4 rounded-full ${currentSound.waveColor} ${h} transition-all duration-700 opacity-80`}
                    style={{
                      animation: selectedDb === "aseva" ? "pulse 2s infinite" : "pulse 0.8s infinite",
                      animationDelay: `${i * 120}ms`,
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-sans text-neutral-400 pt-4 border-t border-white/[0.06]">
                <span>Peredaman: Anti-Cavitation Silicone Mount</span>
                <span className="text-white font-mono">DAMPING RATIO 94.6%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Dual Technical Pillars (Optic Glass & Structural Safety) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card A: 99.2% Optic Low-Iron Glass */}
          <div className="bg-[#0A0A0E] rounded-3xl border border-white/[0.08] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-champagne">
                <Eye size={18} />
              </div>
              <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                OPTICAL CLARITY
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-3">
              Kaca Kristal Diamant Low-Iron
            </h3>
            <p className="font-sans text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-8">
              Kaca float biasa memiliki kandungan besi tinggi yang memunculkan rona hijau keruh dan mendistorsi warna arwana. ASEVA hanya menggunakan kaca impor rendah besi dengan transmitansi 99.2% yang membuat air tampak melayang tanpa dinding.
            </p>

            {/* Visual Glass Edge Comparison */}
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-sans">Kaca Standar Toko (Float Glass)</span>
                <span className="font-mono text-emerald-600">86% Transmisi (Kehijauan)</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-700/60 h-full w-[86%]" />
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-white font-sans font-medium">Kaca Diamant Ultra-Clear ASEVA</span>
                <span className="font-mono text-champagne font-medium">99.2% Transmisi Murni</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-champagne via-white to-champagne h-full w-[99.2%]" />
              </div>
            </div>
          </div>

          {/* Card B: Structural Safety Factor 3.8x */}
          <div className="bg-[#0A0A0E] rounded-3xl border border-white/[0.08] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-champagne">
                <ShieldCheck size={18} />
              </div>
              <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                ENGINEERING INTEGRITY
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-3">
              Faktor Keamanan Struktur 3.8×
            </h3>
            <p className="font-sans text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-8">
              Volume air ribuan liter menahan beban tonase masif. Standar komersial hanya memakai faktor 2.0x, sedangkan ASEVA menerapkan kalkulasi ketebalan kaca 15mm – 25mm dengan faktor aman 3.8x dan silikon struktural buatan Jerman tanpa risiko kebocoran seumur hidup.
            </p>

            {/* Structural Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.06]">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="font-mono text-lg text-white block font-light">3.8×</span>
                <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-wider">
                  Beban Hidrostatis
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="font-mono text-lg text-champagne block font-light">&lt; 0.5 mm</span>
                <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-wider">
                  Toleransi Nat Silikon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
