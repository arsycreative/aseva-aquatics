import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section
      className="bg-[#080808] border-y border-white/[0.08] py-16 md:py-24 relative overflow-hidden"
      aria-label="Pencapaian dan rekam jejak ASEVA AQUATICS"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="relative pl-6 border-l border-white/15 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                  RECORD 0{index + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne/40" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                  {stat.value}
                </span>
              </div>
              <div className="font-sans text-[11px] md:text-xs text-neutral-400 tracking-[0.18em] uppercase font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
