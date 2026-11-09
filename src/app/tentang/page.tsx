import type { Metadata } from "next";
import Link from "next/link";
import { STATS } from "@/lib/data";
import { Shield, Award, MapPin, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Tentang ASEVA AQUATICS — Cerita Kami, Standar Legalitas & Tim",
  description:
    "Kenali ASEVA AQUATICS lebih dalam: cerita pendiri, filosofi brand, standar legalitas arwana (BKSDA/CITES), tim ahli, dan komitmen kami terhadap keaslian setiap koleksi.",
  alternates: {
    canonical: "https://asevaaquatics.com/tentang",
  },
  openGraph: {
    title: "Tentang ASEVA AQUATICS — Filosofi & Legalitas Resmi",
    description: "Kurasi Arwana Super Red Bersertifikat & Desain Aquarium Custom Kelas Atas di Bandung dan Jabodetabek.",
    url: "https://asevaaquatics.com/tentang",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/journal/kaca-aquarium.jpg", width: 1200, height: 630, alt: "Atelier ASEVA AQUATICS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang ASEVA AQUATICS",
    description: "Filosofi, standar legalitas CITES, dan tim perancang akuarium custom.",
    images: ["/images/journal/kaca-aquarium.jpg"],
  },
};

export default function TentangPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header (Slate #090B10) */}
      <section className="relative pt-36 pb-20 bg-[#090B10] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <div className="section-container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne" />
              <span className="section-label">REPUTASI & IDENTITAS ATELIER</span>
            </div>
            <h1 className="font-serif text-white mb-6 font-light">
              ASEVA AQUATICS:
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                Di Mana Rekayasa Sipil Bertemu Seni Hidup
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-neutral-300 max-w-2xl leading-relaxed font-light">
              Berbasis di Bandung, kami memadukan kurasi genetik Arwana Super Red Kapuas Hulu berlisensi CITES dengan fabrikasi akuarium kaca optik berstandar arsitektur tinggi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story & Atelier Telemetry (Warm Charcoal #0A0A0E) */}
      <section className="section-padding bg-[#0A0A0E] border-b border-white/[0.08]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center">
            <ScrollReveal className="lg:col-span-7">
              <span className="section-label block mb-4">FILOSOFI KAMI</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 font-light leading-tight">
                Ketenangan Air yang
                <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne">
                  Berbicara Tanpa Kata
                </span>
              </h2>
              <div className="space-y-5 text-neutral-300 font-sans text-sm md:text-base leading-relaxed font-light">
                <p>
                  Selama lebih dari 12 tahun, ASEVA AQUATICS mendampingi kolektor satwa bergengsi, pemilik residensial privat, dan biro arsitektur dalam menghadirkan ekosistem air yang abadi.
                </p>
                <p>
                  Setiap proyek dikerjakan oleh tim multidisiplin: perancang struktur yang menghitung beban lantai berton-ton, spesialis hidrolika yang meredam suara air di bawah 28 dB, dan kurator biologi yang menyeleksi langsung indukan Arwana Super Red di Kalimantan Barat.
                </p>
              </div>

              {/* 3 Core Discipline Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                {[
                  { label: "SILSILAH MURNI", val: "100% F2+ CITES" },
                  { label: "TOLERANSI OPTIK", val: "< 0.5mm Seam" },
                  { label: "GARANSI STRUKTUR", val: "3 Tahun Penuh" },
                ].map((chip) => (
                  <div key={chip.label} className="p-4 rounded-xl bg-black/50 border border-white/[0.07]">
                    <span className="block font-mono text-[10px] text-champagne-light tracking-widest uppercase mb-1">
                      {chip.label}
                    </span>
                    <span className="font-serif text-lg text-white">{chip.val}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="lg:col-span-5 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#12131A] p-7 rounded-2xl border border-white/[0.08] text-center shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                  >
                    <div className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne-light to-champagne mb-2 font-light">
                      {stat.value}
                    </div>
                    <div className="font-sans text-[10px] text-neutral-400 tracking-widest uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-[#12131A] border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-champagne-light" />
                    <span className="font-mono text-[10px] text-champagne-light tracking-widest uppercase font-medium">
                      ATELIER & GALERI BANDUNG
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400">● BY APPOINTMENT</span>
                </div>
                <p className="font-sans text-sm text-neutral-300 leading-relaxed font-light">
                  Workshop fabrikasi kaca dan galeri karantina arwana kami berlokasi di Bandung. Kunjungan tatap muka dijadwalkan secara privat demi menjaga ketenangan biota air.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Legality Section (Pitch Black #000000) */}
      <section id="legalitas" className="section-padding bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne" />
              <span className="section-label">KEPATUHAN SATWA NASIONAL</span>
              <span className="w-8 h-px bg-champagne" />
            </div>
            <h2 className="font-serif text-white font-light text-3xl md:text-5xl">
              Legalitas Penuh <em className="italic text-champagne">CITES & BKSDA</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={24} className="text-champagne-light" />,
                title: "Sertifikat Captive-Bred",
                desc: "Seluruh spesimen berasal dari penangkar resmi berizin BKSDA dengan sertifikat silsilah indukan F2+ yang sah.",
              },
              {
                icon: <Award size={24} className="text-champagne-light" />,
                title: "Microchip RFID 15-Digit",
                desc: "Setiap ikan ditanam transponder microchip ISO 11784/11785 yang dipindai langsung di hadapan Anda saat serah terima.",
              },
              {
                icon: <CheckCircle2 size={24} className="text-champagne-light" />,
                title: "Dokumen Karantina & SATS-DN",
                desc: "Pengiriman lintas kota dan pulau dilengkapi Surat Angkut Tumbuhan dan Satwa Dalam Negeri resmi beserta garansi hidup 100%.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.08}>
                <div className="bg-[#0A0A0E] p-8 md:p-10 rounded-3xl border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)] h-full">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="font-serif text-2xl text-white mb-3 font-light">{item.title}</h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-[#090B10]">
              <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                <strong className="text-white font-medium">Kepatuhan Konservasi:</strong> Arwana Asia (<em>Scleropages formosus</em>) terdaftar dalam CITES Appendix I. ASEVA AQUATICS hanya memperdagangkan spesimen hasil penangkaran resmi generasi kedua (F2) ke atas yang legal secara hukum nasional dan internasional.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA (Smoked Lounge #08080B) */}
      <section className="py-24 bg-[#08080B] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-white mb-6 font-light text-3xl sm:text-5xl">
              Ingin Berdiskusi <em className="italic text-champagne">dengan Tim Kurator?</em>
            </h2>
            <Link href="/konsultasi" className="btn-primary">
              Jadwalkan Janji Temu Privat
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
