"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/arwana", label: "Arwana" },
  { href: "/aquarium-custom", label: "Aquarium Custom" },
  { href: "/panduan-arwana-super-red", label: "Panduan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/jurnal", label: "Jurnal" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.08] py-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-7"
        }`}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center transition-all duration-500 group-hover:border-champagne group-hover:shadow-[0_0_20px_rgba(229,213,197,0.3)]">
              <span className="font-serif text-base text-champagne font-light">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.22em] font-normal text-white group-hover:text-champagne transition-colors duration-300">
                ASEVA
              </span>
              <span className="font-sans text-[7.5px] tracking-[0.35em] uppercase text-neutral-400 -mt-0.5">
                AQUATICS · ATELIER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link text-[11px]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300"
              aria-label="Direct WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-sans font-medium tracking-[0.16em] uppercase transition-all duration-500 hover:bg-[#E5D5C5] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-[0.98]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Konsultasi Ruang</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer / Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col pt-28 px-8 mobile-menu-enter lg:hidden">
          <div className="text-[10px] uppercase font-sans tracking-[0.3em] text-neutral-400 mb-6">
            Navigasi Koleksi & Layanan
          </div>
          <ul className="flex flex-col gap-5 flex-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-white/[0.06] pb-4"
              >
                <Link
                  href={link.href}
                  className="font-serif text-2xl text-white hover:text-champagne transition-colors flex items-center justify-between font-light"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans text-neutral-500 tracking-widest font-mono">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-8 space-y-3">
            <Link
              href="/konsultasi"
              className="btn-primary w-full text-center text-xs"
              onClick={() => setIsMobileOpen(false)}
            >
              Jadwalkan Konsultasi Ruang
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center text-xs justify-center flex items-center gap-2"
            >
              <MessageCircle size={15} /> Chat WhatsApp Pribadi
            </a>
          </div>
        </div>
      )}
    </>
  );
}
