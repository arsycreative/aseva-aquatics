"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 md:py-36 bg-black border-t border-white/[0.08]" aria-label="FAQ ASEVA AQUATICS">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column with Scroll Reveal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-champagne block mb-3 font-medium">
              TRANSPARANSI &amp; PANDUAN AWAL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight mb-6">
              Pertimbangan Teknis Sebelum Memulai
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed mb-8 font-light">
              Pertimbangan teknis seputar estimasi biaya akuarium custom, sirkulasi filtrasi dry-wet, dan prosedur sertifikasi resmi satwa arwana di Bandung, Jakarta, dan sekitarnya.
            </p>
            <a
              href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya ingin menanyakan beberapa hal mengenai layanan Anda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs inline-flex items-center gap-2.5 font-medium"
            >
              <MessageCircle size={14} />
              <span>Diskusi Langsung via WhatsApp</span>
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

          {/* Right Column with Scroll Reveal (7 cols) — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 divide-y divide-white/[0.08]"
          >
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                  aria-expanded={openIndex === index}
                  id={`faq-question-${index}`}
                >
                  <span
                    className={`font-serif text-lg md:text-xl font-light leading-snug transition-colors duration-300 ${
                      openIndex === index ? "text-champagne" : "text-white group-hover:text-champagne"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-white/40 transition-colors">
                    {openIndex === index ? (
                      <Minus size={13} className="text-white" />
                    ) : (
                      <Plus size={13} className="text-neutral-400 group-hover:text-white transition-colors" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-96 pt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed font-light pl-1">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
