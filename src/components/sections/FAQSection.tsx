"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, MessageCircle, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-black border-t border-white/[0.08]" aria-label="FAQ ASEVA AQUATICS">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column with Visual Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <HelpCircle size={12} className="text-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                PANDUAN &amp; KONSULTASI AWAL
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight mb-4">
              Pertimbangan Teknis Sebelum Memulai
            </h2>

            {/* Visual Guide Card */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] mb-6 group bg-[#0A0A0E]">
              <Image
                src="/images/projects/prj-003.jpg"
                alt="Instalasi Presisi ASEVA AQUATICS"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-serif italic text-champagne">Diskusi Teknis Tanpa Biaya</span>
                <span className="font-mono text-[10px] text-neutral-300 bg-black/70 px-2.5 py-1 rounded-full border border-white/10">
                  Bandung &amp; Jabodetabek
                </span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya ingin menanyakan beberapa hal teknis mengenai pembuatan aquarium custom.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs w-full justify-center py-3 flex items-center gap-2"
            >
              <MessageCircle size={14} />
              <span>Tanyakan Langsung via WhatsApp</span>
              <ArrowRight size={13} />
            </a>

            {/* Structured data for FAQ */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: FAQ_ITEMS.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.answer,
                    },
                  })),
                }),
              }}
            />
          </motion.div>

          {/* Right Column: Accordion (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-3"
          >
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-[#0B0B0F] border-champagne/40 shadow-lg shadow-black/60"
                      : "bg-[#070709] border-white/[0.06] hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                    id={`faq-question-${index}`}
                  >
                    <span
                      className={`font-serif text-base sm:text-lg font-light leading-snug transition-colors duration-300 ${
                        isOpen ? "text-champagne" : "text-white group-hover:text-champagne"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? "border-champagne text-champagne bg-champagne/10" : "border-white/10 text-neutral-400 group-hover:border-white/30"
                    }`}>
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </span>
                  </button>

                  {/* Scannable Crisp Answer */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-3 border-t border-white/[0.06] mt-3"
                    >
                      <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}