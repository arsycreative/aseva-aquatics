import { STATS } from "@/lib/data";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

export default function StatsSection() {
  return (
    <section
      className="bg-[#050505] border-y border-white/[0.08] py-20 md:py-28 relative overflow-hidden"
      aria-label="Pencapaian dan rekam jejak ASEVA AQUATICS"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-champagne/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Massive Serif Numbers — Expansive Architectural Rhythm */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="relative group">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-medium">
                  CATATAN 0{index + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne/40 group-hover:bg-champagne transition-colors" />
              </div>
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tight mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-champagne-dim">
                  {stat.value}
                </span>
              </div>
              <div className="font-sans text-[11px] md:text-xs text-neutral-400 tracking-[0.18em] uppercase font-light leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Trust Seal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-xs font-sans font-light">
          <div className="flex items-center gap-2 text-neutral-300">
            <ShieldCheck size={15} className="text-champagne" />
            <span>Seluruh spesimen Arwana teregistrasi BKSDA & CITES Internasional</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
            <span>BANDUNG</span>
            <span>·</span>
            <span>JAKARTA</span>
            <span>·</span>
            <span>SE-INDONESIA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
