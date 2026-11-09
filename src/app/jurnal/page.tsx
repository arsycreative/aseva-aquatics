import type { Metadata } from "next";
import { JOURNAL_ARTICLES } from "@/lib/data";
import JournalFilterClient from "@/components/JournalFilterClient";

export const metadata: Metadata = {
  title: "Jurnal Edukasi — Arwana Super Red & Aquarium Custom",
  description:
    "Artikel edukasi mendalam tentang arwana super red, aquarium custom, material kaca low-iron, dan perawatan. Panduan dari para ahli ASEVA AQUATICS untuk kolektor dan arsitek.",
  alternates: {
    canonical: "https://asevaaquatics.com/jurnal",
  },
  openGraph: {
    title: "Jurnal Edukasi — Arwana Super Red & Aquarium Custom | ASEVA AQUATICS",
    description:
      "Wawasan teknis seputar arwana super red Kapuas Hulu, kalkulasi beban sipil akuarium, kaca optik kristal, dan stabilitas biologi air.",
    url: "https://asevaaquatics.com/jurnal",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/journal/anatomi-arwana.jpg",
        width: 1200,
        height: 630,
        alt: "Jurnal Edukasi ASEVA AQUATICS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurnal Edukasi ASEVA AQUATICS",
    description: "Panduan teknis akuarium custom mewah dan kurasi arwana super red kelas kontes.",
    images: ["/images/journal/anatomi-arwana.jpg"],
  },
};

export default function JurnalPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-[#090B10] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-champagne/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne" />
              <span className="section-label">WAWASAN & OTORITAS TEKNIS</span>
            </div>
            <h1 className="font-serif text-white mb-6 font-light">
              Jurnal
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                ASEVA AQUATICS
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Panduan teknis dari kurator satwa dan insinyur akuarium kami — mulai dari anatomi genetik Arwana Super Red Kapuas Hulu hingga spesifikasi kaca kristal low-iron dan parameter air dataran tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Articles */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <JournalFilterClient articles={JOURNAL_ARTICLES} />
        </div>
      </section>
    </div>
  );
}
