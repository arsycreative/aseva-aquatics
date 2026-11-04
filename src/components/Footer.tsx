"use client";

import Link from "next/link";
import { MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/utils";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-black border-t border-white/[0.08] text-white">
      {/* Main Footer Directory */}
      <div className="section-container py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Col 1: Brand & Atelier (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover:border-champagne">
                <span className="font-serif text-base text-champagne font-light">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.22em] font-normal text-white">
                  ASEVA
                </span>
                <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-neutral-400 -mt-0.5">
                  AQUATICS · HAUTE VIVARIUM
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 font-sans text-xs md:text-sm leading-relaxed mb-8 max-w-sm font-light">
              Kurasi Arwana Super Red bersertifikat silsilah dan studio desain akuarium custom kelas atas. Melayani hunian residensial eksklusif dan komersial di Bandung, Jabodetabek, dan Jawa Barat.
            </p>

            {/* Socials & Compliance Badge */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-white/40 hover:text-white transition-all duration-300 bg-white/[0.02]"
                aria-label="Instagram Resmi"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-white/40 hover:text-white transition-all duration-300 bg-white/[0.02]"
                aria-label="WhatsApp Private"
              >
                <MessageCircle size={14} />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-neutral-400 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>CITES APPENDIX I & BKSDA COMPLIANT</span>
            </div>
          </div>

          {/* Col 2: Layanan & Koleksi (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-6 font-medium">
              LAYANAN & KOLEKSI
            </h4>
            <ul className="space-y-3.5 text-xs font-sans font-light">
              {[
                { href: "/arwana", label: "Koleksi Arwana Super Red" },
                { href: "/panduan-arwana-super-red", label: "Panduan Anatomi & Kontes" },
                { href: "/aquarium-custom", label: "Desain Aquarium Custom" },
                { href: "/aquarium-custom/proses", label: "Metodologi 4 Tahap" },
                { href: "/aquarium-custom/material-teknologi", label: "Spesifikasi Material & Kaca" },
                { href: "/perawatan-aquarium", label: "Paket Perawatan Berkala" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Area Layanan & Edukasi (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-6 font-medium">
              AREA & JURNAL
            </h4>
            <ul className="space-y-3.5 text-xs font-sans font-light">
              {[
                { href: "/area-layanan", label: "Cakupan Layanan" },
                { href: "/area-layanan/bandung", label: "Bandung Raya (P1)" },
                { href: "/area-layanan/jakarta-jabodetabek", label: "Jabodetabek (P2)" },
                { href: "/area-layanan/jawa-barat", label: "Jawa Barat Lainnya" },
                { href: "/portofolio", label: "Galeri Studi Kasus" },
                { href: "/jurnal", label: "Jurnal & Wawasan" },
                { href: "/tentang", label: "Tentang ASEVA" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Private Consultation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-6 font-medium">
              ATELIER & JANJI TEMU
            </h4>
            <ul className="space-y-4 text-xs font-sans font-light text-neutral-400 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-champagne mt-0.5 flex-shrink-0" />
                <span>Bandung, Jawa Barat (Kunjungan Khusus dengan Janji Temu)</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-champagne flex-shrink-0" />
                <span>Senin – Sabtu, 09.00 – 17.00 WIB</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0A0A0A] mb-6">
              <span className="font-serif text-sm text-white block mb-1 font-light">Private Consultation</span>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed font-light">
                Kami tidak mengoperasikan showroom retail bebas demi ketenangan satwa. Hubungi kurator kami untuk reservasi private viewing.
              </p>
            </div>

            <Link
              href="/konsultasi"
              className="w-full inline-flex items-center justify-center py-3 rounded-full border border-white/20 text-white text-[10px] font-sans tracking-[0.22em] uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Jadwalkan Janji Temu
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] py-6">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-neutral-500">
          <p>© {currentYear} ASEVA AQUATICS. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/legal#garansi" className="hover:text-white transition-colors">
              Kebijakan Garansi DOA & Struktur
            </Link>
            <Link href="/tentang#legalitas" className="hover:text-white transition-colors">
              Kepatuhan Satwa CITES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
