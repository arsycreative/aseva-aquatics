import type { Metadata } from "next";
import Link from "next/link";
import { STATS, SITE_CONFIG } from "@/lib/data";
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
  },
};

export default function TentangPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-navy border-b border-white/5">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="section-label block mb-4">Tentang Kami</span>
            <h1 className="font-serif text-ivory mb-6">
              ASEVA AQUATICS:
              <br />
              <em className="text-gold">Cerita di Balik Karya</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label block mb-6">Asal Mula</span>
              <h2 className="font-serif text-3xl text-ivory mb-8">
                Lahir dari Kecintaan
                <br />
                <em className="text-gold">yang Mendalam</em>
              </h2>
              <div className="space-y-5 text-ivory-muted font-sans text-sm leading-relaxed">
                <p>
                  ASEVA AQUATICS lahir dari keyakinan yang sederhana namun kuat: sebuah aquarium yang dirancang 
                  dengan benar tidak memerlukan pembenaran. Ia berbicara sendiri — melalui ketenangan airnya, 
                  kilau warna ikannya, dan cara ia mengubah energi seluruh ruangan.
                </p>
                <p>
                  Selama lebih dari 12 tahun, kami telah mendampingi kolektor arwana serius, pemilik rumah 
                  premium, dan pengusaha hospitality dalam mewujudkan visi mereka. Setiap proyek mengajarkan 
                  kami sesuatu yang baru — tentang air, tentang ikan, dan tentang bagaimana manusia berinteraksi 
                  dengan ekosistem yang hidup di dalam rumah mereka.
                </p>
                <p>
                  Berbasis di Bandung, kami melayani seluruh Jawa Barat, Jabodetabek, dan seluruh Indonesia 
                  untuk pengiriman arwana bersertifikat.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-navy-secondary p-8 text-center">
                    <div className="font-serif text-4xl text-gold mb-2">{stat.value}</div>
                    <div className="font-sans text-xs text-ivory-muted tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-navy-secondary border border-gold/20">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={14} className="text-gold" />
                  <span className="font-sans text-xs text-gold tracking-widest uppercase">Berbasis di Bandung</span>
                </div>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">
                  Studio dan workshop kami berada di Bandung. Kunjungan hanya dengan janji temu. 
                  Kami melayani Bandung Raya (Zona 1) dan Jabodetabek & Jawa Barat (Zona 2).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legality Section */}
      <section
        id="legalitas"
        className="section-padding bg-navy-secondary border-t border-white/5"
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Standar Legalitas</span>
            <h2 className="font-serif text-ivory">
              Setiap Ikan Kami
              <br />
              <em className="text-gold">Punya Dokumennya</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                icon: <Shield size={24} className="text-gold" />,
                title: "Sertifikat Captive-Bred",
                desc: "Seluruh arwana berasal dari penangkar berizin resmi BKSDA. Sertifikat captive-bred dikeluarkan dan dapat diverifikasi langsung ke BKSDA setempat.",
              },
              {
                icon: <Award size={24} className="text-gold" />,
                title: "Microchip & CITES",
                desc: "Setiap ikan dilengkapi microchip unik yang dapat dibaca dengan alat scanner standar internasional. Pengiriman lintas provinsi dilengkapi dokumen angkut resmi.",
              },
              {
                icon: <Shield size={24} className="text-gold" />,
                title: "Rekam Jejak Penangkar",
                desc: "Kami hanya bermitra dengan penangkar yang dapat menunjukkan riwayat induk (broodstock) minimal 2 generasi ke belakang, memastikan keaslian genetik.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy p-8 md:p-10">
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-serif text-xl text-ivory mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 border border-arwana/20 bg-arwana/5">
            <p className="font-sans text-xs text-ivory-muted leading-relaxed">
              <strong className="text-arwana-light">⚠ Catatan Hukum:</strong> Arwana (Scleropages formosus) 
              adalah satwa yang dilindungi dan diatur perdagangannya (CITES Appendix I). Perdagangan yang sah 
              di Indonesia hanya untuk hasil penangkaran dari penangkar berizin BKSDA. Mohon verifikasi 
              persyaratan terkini langsung dengan BKSDA dan penangkar mitra Anda.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy border-t border-white/5 text-center">
        <div className="section-container">
          <h2 className="font-serif text-ivory mb-6">
            Ingin Mengenal Kami <em className="text-gold">Lebih Dekat?</em>
          </h2>
          <Link href="/konsultasi" className="btn-primary">
            Jadwalkan Pertemuan
          </Link>
        </div>
      </section>
    </>
  );
}
