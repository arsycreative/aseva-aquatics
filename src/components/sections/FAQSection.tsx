"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#040406] border-t border-white/[0.08]" aria-label="FAQ ASEVA AQUATICS">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <HelpCircle size={12} className="text-champagne" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase">
                PANDUAN &amp; KONSULTASI AWAL
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight mb-4">
              Pertimbangan Teknis Sebelum Memulai
            </h2>

            <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed mb-8 font-light">
              Pertimbangan seputar estimasi investasi, sirkulasi filtrasi dry-wet tersembunyi, dan sertifikasi resmi CITES di Bandung &amp; Jabodetabek.
            </p>

            <a
              href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya ingin menanyakan beberapa hal mengenai layanan Anda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs inline-flex items-center gap-2.5 font-medium py-3 px-6"
            >
              <MessageCircle size={14} />
              <span>Diskusi Teknis via WhatsApp</span>
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
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
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
                      ? "bg-[#09090E] border-champagne/40 shadow-lg shadow-black/70"
                      : "bg-[#060608] border-white/[0.05] hover:border-white/15"
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
                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "border-champagne text-champagne bg-champagne/10"
                          : "border-white/10 text-neutral-400 group-hover:border-white/30"
                      }`}
                    >
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pt-3 border-t border-white/[0.06] mt-3"
                      >
                        <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}