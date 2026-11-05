"use client";

import { STATS } from "@/lib/data";
import { ShieldCheck, Award, Calendar, CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const STAT_ICONS = [Award, Calendar, CheckCircle2, Zap];

export default function StatsSection() {
  return (
    <section
      className="bg-[#050507] border-y border-white/[0.08] py-16 md:py-24 relative overflow-hidden"
      aria-label="Pencapaian dan rekam jejak ASEVA AQUATICS"
    >
      {/* Precision grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-champagne/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Architectural Glass Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-10 border-b border-white/[0.08]">
          {STATS.map((stat, index) => {
            const IconComponent = STAT_ICONS[index] || Award;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 sm:p-6 rounded-2xl bg-[#09090D] border border-white/[0.06] hover:border-champagne/40 transition-all duration-500 relative group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-medium">
                    INDEX 0{index + 1}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-champagne/80 group-hover:text-champagne group-hover:bg-champagne/10 transition-colors">
                    <IconComponent size={13} />
                  </div>
                </div>

                <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-champagne-dim">
                    {stat.value}
                  </span>
                </div>

                <div className="font-sans text-[11px] sm:text-xs text-neutral-400 tracking-[0.15em] uppercase font-light leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Trust Seal Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-xs font-sans font-light"
        >
          <div className="flex items-center gap-2 text-neutral-300">
            <ShieldCheck size={15} className="text-champagne flex-shrink-0" />
            <span>Seluruh spesimen Arwana teregistrasi BKSDA &amp; CITES Internasional</span>
          </div>
          <div className="flex items-center gap-5 text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
            <span>BANDUNG</span>
            <span>·</span>
            <span>JAKARTA</span>
            <span>·</span>
            <span>SE-INDONESIA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}