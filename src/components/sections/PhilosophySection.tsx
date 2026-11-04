export default function PhilosophySection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden border-t border-white/[0.08]" aria-label="Filosofi ASEVA">
      {/* Subtle Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] font-serif text-[18vw] leading-none whitespace-nowrap text-white">
        A S E V A
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left — Manifest Frame (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative p-10 md:p-14 bg-[#0D0D0D] rounded-3xl border border-white/[0.08] backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-champagne block mb-6 font-medium">
                MANIFIESTO ATELIER · 2026
              </span>

              <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed font-light italic mb-8">
                &ldquo;Bukan sekadar estetika dekoratif — ini adalah pertemuan presisi antara biologi air, fisika gravitasi, dan keheningan seni rupa.&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="font-serif text-base text-white block font-light">ASEVA AQUATICS</span>
                  <span className="font-sans text-[10px] text-neutral-500 tracking-widest uppercase">Prinsip Rekayasa Ruang</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-[10px] text-champagne font-serif">✦</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Narrative & Technical Excellence (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">FILOSOFI & KEHENINGAN RUANG</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight mb-8">
              Ekosistem Hidup sebagai
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Pusat Ketenangan Hunian.
              </span>
            </h2>

            <div className="space-y-6 text-neutral-400 font-sans text-sm md:text-base leading-relaxed font-light mb-12">
              <p>
                ASEVA AQUATICS lahir dari penolakan terhadap konsep akuarium komersial yang bising, berantakan kabel, dan sekadar perakit kaca biasa. Kami memandang akuarium mewah sebagai <strong className="text-white font-normal">elemen arsitektural permanen</strong> yang menuntut perhitungan beban struktur, akustik hidrolika hening, dan kejernihan optik kristal.
              </p>
              <p>
                Setiap karya kami di Bandung, Jakarta, dan Jawa Barat dirancang berdampingan dengan arsitek dan desainer interior Anda. Mengintegrasikan teknologi pendukung kehidupan (<em>life-support</em>) yang sepenuhnya tak kasat mata di balik dinding dan kabinet bernilai seni.
              </p>
            </div>

            {/* 3 Technical Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
              <div>
                <span className="font-mono text-xs text-champagne block mb-1 font-medium">&lt; 28 dB</span>
                <span className="font-serif text-base text-white block mb-0.5 font-light">Akustik Senyap</span>
                <p className="text-[11px] text-neutral-400 font-sans">Pompa berisolasi getaran tanpa dengung</p>
              </div>
              <div>
                <span className="font-mono text-xs text-champagne block mb-1 font-medium">99.2% Optik</span>
                <span className="font-serif text-base text-white block mb-0.5 font-light">Low-Iron Crystal</span>
                <p className="text-[11px] text-neutral-400 font-sans">Kaca bebas rona kehijauan</p>
              </div>
              <div>
                <span className="font-mono text-xs text-champagne block mb-1 font-medium">0 Pipa Terlihat</span>
                <span className="font-serif text-base text-white block mb-0.5 font-light">Sistem Dry-Wet</span>
                <p className="text-[11px] text-neutral-400 font-sans">Jalur sirkulasi tersembunyi total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
