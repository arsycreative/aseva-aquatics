"use client";

import { STATS } from "@/lib/data";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section
      className="bg-[#030305] border-y border-white/[0.08] py-16 md:py-24 relative overflow-hidden"
      aria-label="Pencapaian dan rekam jejak ASEVA AQUATICS"
    >
      <div className="section-container relative z-10">
        {/* Monolithic Strip with Vertical Architectural Hairlines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/[0.08]">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`py-4 px-4 sm:px-8 relative group ${
                index % 2 === 0 ? "border-r border-white/[0.06]" : ""
              } ${index < 3 ? "lg:border-r lg:border-white/[0.06]" : "lg:border-r-0"}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-medium">
                  INDEX 0{index + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne/40 group-hover:bg-champagne transition-colors" />
              </div>

              <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-champagne-dim">
                  {stat.value}
                </span>
              </div>

              <div className="font-sans text-[11px] sm:text-xs text-neutral-400 tracking-[0.16em] uppercase font-light leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Trust Seal Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-xs font-sans font-light"
        >
          <div className="flex items-center gap-2 text-neutral-300">
            <ShieldCheck size={14} className="text-champagne flex-shrink-0" />
            <span>Seluruh spesimen Arwana teregistrasi BKSDA &amp; CITES Internasional</span>
          </div>
          <div className="flex items-center gap-6 text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
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