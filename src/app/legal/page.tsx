import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ketentuan Legal, Kebijakan Privasi & Garansi DOA",
  description:
    "Ketentuan layanan, perlindungan data pribadi (UU PDP No. 27/2022), kebijakan garansi hidup (DOA) arwana super red, dan garansi struktur akuarium ASEVA AQUATICS.",
  keywords: [
    "garansi arwana super red",
    "dead on arrival arwana",
    "kebijakan privasi aseva aquatics",
    "garansi aquarium custom bandung",
    "legalitas satwa bksda cites",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/legal`,
  },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Header */}
      <header className="border-b border-white/5 py-14 bg-navy-secondary">
        <div className="section-container">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-sans text-ivory-muted hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Kembali ke Beranda
            </Link>
            <span className="section-label block mb-2">Transparansi & Kepercayaan</span>
            <h1 className="font-serif text-3xl md:text-5xl text-ivory font-normal">
              Kebijakan Legal, Privasi & Garansi
            </h1>
            <p className="font-sans text-sm text-ivory-muted mt-3">
              Terakhir diperbarui: 3 November 2026 · Berlaku untuk seluruh layanan ASEVA AQUATICS
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="section-container py-16">
        <div className="max-w-3xl space-y-16">
          {/* Section 1: UU PDP Privacy */}
          <section id="privasi" className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="text-gold" size={24} />
              <h2 className="font-serif text-2xl text-ivory">1. Kebijakan Privasi (Kepatuhan UU PDP No. 27/2022)</h2>
            </div>
            <div className="font-sans text-sm text-ivory-muted space-y-3 leading-relaxed">
              <p>
                ASEVA AQUATICS berkomitmen melindungi data pribadi seluruh calon klien dan mitra sesuai amanat Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022).
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li><strong>Pengumpulan Data:</strong> Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela melalui formulir konsultasi (nama, nomor WhatsApp, alamat email, kota, dan preferensi desain).</li>
                <li><strong>Tujuan Penggunaan:</strong> Data hanya digunakan untuk keperluan korespondensi konsultasi, penjadwalan survei lokasi, pengiriman penawaran resmi, serta tindak lanjut kurasi arwana.</li>
                <li><strong>Kerahasiaan Eksklusif:</strong> Kami tidak pernah menjual, menyewakan, atau membagikan data kontak Anda kepada pihak ketiga untuk kepentingan pemasaran apa pun.</li>
                <li><strong>Hak Subjek Data:</strong> Anda berhak meminta pembaruan, perbaikan, atau penghapusan riwayat data kontak Anda kapan saja dengan menghubungi kami melalui WhatsApp atau email resmi.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Garansi DOA */}
          <section id="garansi" className="space-y-4 border-t border-white/5 pt-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-gold" size={24} />
              <h2 className="font-serif text-2xl text-ivory">2. Garansi Hidup Tiba Selamat (DOA - Dead On Arrival)</h2>
            </div>
            <div className="font-sans text-sm text-ivory-muted space-y-3 leading-relaxed">
              <p>
                Setiap pengiriman Arwana Super Red (*Scleropages formosus*) di wilayah Bandung Raya, Jabodetabek, dan Jawa Barat dilindungi oleh <strong>Protokol Garansi DOA 100%</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                <li>
                  <strong>Pengemasan Standar Medis:</strong> Ikan dikemas dalam kantong ganda beroksigen murni 99%, diberi penstabil stres alami, dan ditempatkan dalam boks styrofoam berinsulasi termal untuk menjaga suhu 27–29°C selama perjalanan.
                </li>
                <li>
                  <strong>Klaim Garansi:</strong> Apabila ikan mengalami kematian saat kemasan pertama kali dibuka, klien wajib menyertakan video <em>unboxing</em> tanpa jeda (unedited) yang memperlihatkan kantong bersegel utuh dan nomor segel ASEVA dalam kurun waktu maksimal 2 jam setelah paket diterima.
                </li>
                <li>
                  <strong>Kompensasi:</strong> Klien berhak memilih penggantian ikan dengan grade setara yang disepakati bersama atau pengembalian dana penuh (*full refund*) sesuai invoice.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Garansi Aquarium Custom */}
          <section id="garansi-aquarium" className="space-y-4 border-t border-white/5 pt-12">
            <div className="flex items-center gap-3">
              <Shield className="text-gold" size={24} />
              <h2 className="font-serif text-2xl text-ivory">3. Garansi Struktur & Kebocoran Aquarium Custom</h2>
            </div>
            <div className="font-sans text-sm text-ivory-muted space-y-3 leading-relaxed">
              <p>
                Seluruh unit aquarium custom yang dikonstruksi dan diinstalasi langsung oleh tim teknisi ASEVA AQUATICS mendapatkan garansi resmi:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-navy-secondary border border-white/5">
                  <span className="text-gold font-serif text-xl block mb-1">Garansi 3 Tahun</span>
                  <span className="text-xs text-ivory font-medium block mb-1">Kebocoran Sambungan Silikon</span>
                  <p className="text-[11px] text-ivory-muted">Menggunakan silikon struktural Jerman berkekuatan tarik tinggi tahan UV.</p>
                </div>
                <div className="p-4 bg-navy-secondary border border-white/5">
                  <span className="text-gold font-serif text-xl block mb-1">Garansi 5 Tahun</span>
                  <span className="text-xs text-ivory font-medium block mb-1">Integritas Rangka Baja / Inox</span>
                  <p className="text-[11px] text-ivory-muted">Jaminan ketahanan struktur terhadap lendutan dan korosi kelembaban air.</p>
                </div>
              </div>
              <p className="text-xs text-ivory-muted">
                *Garansi tidak mencakup kerusakan akibat bencana alam ekstrem, benturan benda keras oleh pihak ketiga, atau modifikasi pipa di luar rancangan awal teknisi ASEVA.
              </p>
            </div>
          </section>

          {/* Section 4: Kepatuhan Satwa CITES & BKSDA */}
          <section id="legalitas" className="space-y-4 border-t border-white/5 pt-12">
            <div className="flex items-center gap-3">
              <FileText className="text-gold" size={24} />
              <h2 className="font-serif text-2xl text-ivory">4. Standar Legalitas Satwa Dilindungi</h2>
            </div>
            <div className="font-sans text-sm text-ivory-muted space-y-3 leading-relaxed">
              <p>
                ASEVA AQUATICS menolak keras segala bentuk perdagangan satwa liar ilegal (*wild-caught*). Seluruh spesimen Arwana Super Red yang kami hadirkan berasal dari penangkar resmi berizin yang terdaftar di Balai Konservasi Sumber Daya Alam (BKSDA) Republik Indonesia dan Konvensi CITES.
              </p>
              <p>
                Setiap serah terima arwana selalu disertai dengan sertifikat keaslian fisik penangkar dan pencocokan nomor microchip menggunakan alat pemindai RFID sebelum ikan ditempatkan di hunian klien.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
