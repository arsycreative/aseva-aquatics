import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, CheckCircle, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ketentuan Legal, Kebijakan Privasi & Garansi DOA — ASEVA AQUATICS",
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
  openGraph: {
    title: "Ketentuan Legal & Garansi Resmi — ASEVA AQUATICS",
    description: "Perlindungan data pribadi, garansi hidup DOA arwana, dan garansi struktur akuarium ASEVA.",
    url: `${SITE_CONFIG.domain}/legal`,
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Legal ASEVA AQUATICS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketentuan Legal & Garansi Resmi — ASEVA AQUATICS",
    description: "Perlindungan data pribadi, garansi DOA arwana, dan garansi struktur akuarium.",
    images: ["/og-image.jpg"],
  },
};

export default function LegalPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-24">
      {/* Header */}
      <header className="border-b border-white/[0.08] py-16 bg-black">
        <div className="section-container">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-sans text-neutral-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Kembali ke Beranda
            </Link>
            <span className="section-label block mb-2">TRANSPARANSI & INTEGRITAS HUKUM</span>
            <h1 className="font-serif text-3xl md:text-5xl text-white font-light">
              Kebijakan Legal, Privasi & Garansi
            </h1>
            <p className="font-sans text-xs text-neutral-500 mt-3 font-mono">
              Terakhir diperbarui: 3 November 2026 · Berlaku untuk seluruh operasional ASEVA AQUATICS
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
              <Shield className="text-champagne" size={24} />
              <h2 className="font-serif text-2xl text-white font-light">1. Kebijakan Privasi (Kepatuhan UU PDP No. 27/2022)</h2>
            </div>
            <div className="font-sans text-sm text-neutral-400 space-y-3 leading-relaxed font-light">
              <p>
                ASEVA AQUATICS berkomitmen penuh melindungi privasi calon klien dan mitra sesuai amanat Undang-Undang Perlindungan Data Pribadi Republik Indonesia (UU PDP No. 27 Tahun 2022).
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                <li><strong className="text-white font-normal">Pengumpulan Data:</strong> Kami hanya mengumpulkan informasi yang Anda serahkan secara sukarela melalui formulir konsultasi (nama, nomor WhatsApp, email, kota proyek, dan preferensi arsitektur).</li>
                <li><strong className="text-white font-normal">Tujuan Penggunaan:</strong> Data hanya digunakan untuk keperluan korespondensi privat, penjadwalan survei lokasi, pengiriman proposal teknis, dan kurasi satwa arwana.</li>
                <li><strong className="text-white font-normal">Kerahasiaan Eksklusif:</strong> Kami tidak pernah menjual, menyewakan, atau menyebarkan data kontak Anda kepada pihak ketiga untuk tujuan komersial apapun.</li>
                <li><strong className="text-white font-normal">Hak Subjek Data:</strong> Anda memiliki hak untuk meminta pembaruan atau penghapusan data kontak Anda kapan saja melalui kontak resmi concierge kami.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Garansi DOA */}
          <section id="garansi" className="space-y-4 border-t border-white/[0.08] pt-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-champagne" size={24} />
              <h2 className="font-serif text-2xl text-white font-light">2. Garansi Hidup Tiba Selamat (DOA - Dead On Arrival)</h2>
            </div>
            <div className="font-sans text-sm text-neutral-400 space-y-3 leading-relaxed font-light">
              <p>
                Setiap pengiriman Arwana Super Red (<em>Scleropages formosus</em>) di wilayah Bandung Raya, Jabodetabek, dan seluruh kota besar Indonesia dilindungi oleh <strong className="text-white font-normal">Protokol Garansi DOA 100%</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                <li>
                  <strong className="text-white font-normal">Pengemasan Medis Beroksigen:</strong> Ikan dikemas dalam kantong khusus berdinding ganda dengan oksigen murni 99%, penstabil metabolisme alami, dan boks styrofoam berinsulasi termal untuk menjaga suhu optimal selama perjalanan.
                </li>
                <li>
                  <strong className="text-white font-normal">Prosedur Klaim:</strong> Apabila ikan mengalami kematian saat paket pertama kali dibuka, klien wajib menyertakan video <em>unboxing</em> tanpa jeda (unedited) yang memperlihatkan kantong bersegel utuh dan nomor segel ASEVA dalam waktu maksimal 2 jam setelah paket tiba.
                </li>
                <li>
                  <strong className="text-white font-normal">Kompensasi Penuh:</strong> Klien berhak memilih penggantian spesimen arwana dengan grade setara yang disepakati bersama atau pengembalian dana penuh (<em>full refund</em>) sesuai nominal invoice.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Garansi Aquarium Custom */}
          <section id="garansi-aquarium" className="space-y-4 border-t border-white/[0.08] pt-12">
            <div className="flex items-center gap-3">
              <Shield className="text-champagne" size={24} />
              <h2 className="font-serif text-2xl text-white font-light">3. Garansi Struktur & Kebocoran Aquarium Custom</h2>
            </div>
            <div className="font-sans text-sm text-neutral-400 space-y-3 leading-relaxed font-light">
              <p>
                Seluruh unit akuarium custom yang dikonstruksi dan diinstalasi langsung oleh teknisi ASEVA AQUATICS mendapatkan sertifikat garansi resmi:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
                  <span className="text-white font-serif text-2xl block mb-1 font-light">Garansi 3 Tahun</span>
                  <span className="text-xs text-neutral-300 font-medium block mb-1">Kebocoran Sambungan Silikon</span>
                  <p className="text-[11px] text-neutral-500 font-light">Menggunakan silikon struktural marine-grade berdaya lekat tinggi tahan tekanan masif.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
                  <span className="text-white font-serif text-2xl block mb-1 font-light">Garansi 5 Tahun</span>
                  <span className="text-xs text-neutral-300 font-medium block mb-1">Integritas Rangka Baja & Inox</span>
                  <p className="text-[11px] text-neutral-500 font-light">Jaminan ketahanan struktur terhadap lendutan beban dan korosi kelembaban air.</p>
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-light">
                *Garansi tidak mencakup kerusakan fisik akibat bencana alam ekstrem, benturan keras pihak ketiga, atau modifikasi pipa di luar skema resmi teknisi ASEVA.
              </p>
            </div>
          </section>

          {/* Section 4: Kepatuhan Satwa CITES & BKSDA */}
          <section id="legalitas" className="space-y-4 border-t border-white/[0.08] pt-12">
            <div className="flex items-center gap-3">
              <FileText className="text-champagne" size={24} />
              <h2 className="font-serif text-2xl text-white font-light">4. Standar Legalitas Satwa Dilindungi</h2>
            </div>
            <div className="font-sans text-sm text-neutral-400 space-y-3 leading-relaxed font-light">
              <p>
                ASEVA AQUATICS menolak keras segala bentuk perdagangan satwa liar ilegal tangkapan alam (<em>wild-caught</em>). Seluruh spesimen Arwana Super Red yang kami hadirkan berasal dari penangkar resmi berizin yang terdaftar di Balai Konservasi Sumber Daya Alam (BKSDA) Republik Indonesia dan Konvensi CITES Appendix I.
              </p>
              <p>
                Setiap serah terima spesimen arwana selalu disertai dengan sertifikat silsilah fisik penangkar dan pencocokan nomor microchip menggunakan alat pemindai RFID sebelum ikan ditempatkan di hunian klien.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
