import type { Metadata } from "next";
import Link from "next/link";
import { STATS } from "@/lib/data";
import { Shield, Award, MapPin } from "lucide-react";

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
      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08]">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="section-label block mb-4">REPUTASI & IDENTITAS</span>
            <h1 className="font-serif text-white mb-6 font-light">
              ASEVA AQUATICS:
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                Cerita di Balik Mahakarya
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center">
            <div className="lg:col-span-7">
              <span className="section-label block mb-4">ASAL MULA</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 font-light">
                Lahir dari Kecintaan
                <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                  terhadap Presisi Air & Satwa
                </span>
              </h2>
              <div className="space-y-6 text-neutral-400 font-sans text-sm md:text-base leading-relaxed font-light">
                <p>
                  ASEVA AQUATICS lahir dari keyakinan yang sederhana namun tak tergoyahkan: sebuah akuarium mewah yang dirancang dengan presisi sejati tidak memerlukan pembenaran kata-kata. Ia berbicara secara mandiri — melalui ketenangan hening airnya, pendaran merah sisik arwana, dan bagaimana ia mengubah energi sakral seluruh ruang hunian.
                </p>
                <p>
                  Selama lebih dari 12 tahun, kami mendampingi kolektor arwana bergengsi, pemilik hunian privat, dan desainer interior kelas atas dalam merealisasikan visi akuarium yang abadi. Setiap instalasi menuntut keahlian multidisiplin: perhitungan beban gravitasi teknik sipil, dinamika hidrolika hening, dan mikrobiologi air yang terjaga seimbang.
                </p>
                <p>
                  Berbasis di Bandung, kami melayani proyek akuarium custom di Bandung Raya, Jabodetabek, dan pengiriman spesimen arwana bersertifikat CITES ke seluruh Indonesia dengan garansi hidup 100%.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/[0.08] text-center shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                    <div className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim mb-2 font-light">{stat.value}</div>
                    <div className="font-sans text-[10px] text-neutral-400 tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={16} className="text-champagne" />
                  <span className="font-mono text-[10px] text-champagne tracking-widest uppercase font-medium">ATELIER BANDUNG</span>
                </div>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  Studio dan workshop fabrikasi kaca kami berlokasi di Bandung. Akses viewing fisik hanya dibuka dengan sistem private appointment demi ketenangan biota air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legality Section */}
      <section
        id="legalitas"
        className="section-padding bg-[#050505] border-t border-white/[0.08]"
      >
        <div className="section-container">
          <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">KEPATUHAN SATWA NASIONAL</span>
              <span className="w-8 h-px bg-champagne-dim" />
            </div>
            <h2 className="font-serif text-white font-light text-3xl md:text-5xl">
              Legalitas Penuh <em className="italic text-champagne">CITES & BKSDA</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={24} className="text-champagne" />,
                title: "Sertifikat Captive-Bred",
                desc: "Seluruh spesimen arwana berasal dari penangkar resmi berizin BKSDA. Sertifikat silsilah captive-bred sah dan dapat diverifikasi langsung ke basis data pemerintah.",
              },
              {
                icon: <Award size={24} className="text-champagne" />,
                title: "Microchip RFID 15-Digit",
                desc: "Setiap ikan ditanam transponder microchip steril di bawah sisik yang dapat dipindai pemindai RFID standar CITES. Pengiriman antar-provinsi disertai Surat Angkut Satwa Resmi (SATS-DN).",
              },
              {
                icon: <Shield size={24} className="text-champagne" />,
                title: "Silsilah Murni Terverifikasi",
                desc: "Kami menyeleksi spesimen langsung dari peternakan Kapuas Hulu dengan rekam jejak indukan (broodstock) minimal 2 generasi untuk menjamin kemurnian genetik Super Red.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-serif text-xl text-white mb-4 font-light">{item.title}</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
            <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
              <strong className="text-white font-medium">Catatan Hukum Satwa:</strong> Arwana Asia (<em>Scleropages formosus</em>) merupakan satwa yang dilindungi undang-undang Indonesia dan konvensi internasional CITES Appendix I. Perdagangan legal hanya diperbolehkan untuk spesimen hasil penangkaran resmi generasi kedua (F2) ke atas. ASEVA beroperasi secara patuh penuh terhadap seluruh regulasi konservasi hayati.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-white/[0.08] text-center">
        <div className="section-container max-w-2xl mx-auto">
          <h2 className="font-serif text-white mb-6 font-light text-3xl sm:text-5xl">
            Ingin Berdiskusi <em className="italic text-champagne">dengan Tim Kurator?</em>
          </h2>
          <Link href="/konsultasi" className="btn-primary">
            Jadwalkan Janji Temu Privat
          </Link>
        </div>
      </section>
    </div>
  );
}
