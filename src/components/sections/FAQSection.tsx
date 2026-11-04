"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-black border-t border-white/[0.08]" aria-label="FAQ ASEVA AQUATICS">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">PERTANYAAN UMUM</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight mb-6">
              Transparansi
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Sebelum Memulai.
              </span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed mb-10 font-light">
              Pertimbangan teknis seputar biaya akuarium custom, sirkulasi filtrasi, dan prosedur legalitas satwa arwana bersertifikat di Bandung dan Jabodetabek.
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
          </div>

          {/* Right Column (7 cols) — Accordion */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
