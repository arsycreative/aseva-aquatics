import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden border-t border-white/[0.08]" aria-label="Proses kerja ASEVA">
      {/* Precision Drafting Dot Matrix Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-45 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

      {/* Ambient center spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[30rem] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">METODOLOGI ATELIER</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight">
              Empat Tahap Menuju
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Mahakarya Akuarium Anda
              </span>
            </h2>
          </div>
          <Link
            href="/aquarium-custom/proses"
            className="inline-flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne hover:translate-x-2 transition-all duration-300 flex-shrink-0 font-medium"
          >
            <span>Detail Metodologi Lengkap</span>
            <ArrowRight size={14} className="text-champagne" />
          </Link>
        </div>

        {/* Steps Grid with Architectural Blueprint Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="p-8 md:p-10 bg-[#0A0A0A]/95 relative flex flex-col justify-between group hover:bg-[#121212] transition-all duration-500 min-h-[340px]"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                    FASE 0{index + 1}
                  </span>
                  <span className="font-serif text-3xl text-neutral-700 group-hover:text-champagne transition-colors font-light">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-white font-light mb-4 group-hover:text-champagne transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Bottom detail marker */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between mt-8">
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                  Standar Mutu ASEVA
                </span>
                <span className="text-neutral-600 group-hover:text-champagne text-xs transition-colors">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
