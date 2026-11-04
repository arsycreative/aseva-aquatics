"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/arwana", label: "Arwana" },
  { href: "/aquarium-custom", label: "Aquarium Custom" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/jurnal", label: "Jurnal" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Minimalist Wordmark */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-lg tracking-[0.28em] font-normal text-white group-hover:text-neutral-300 transition-colors">
              ASEVA
            </span>
            <span className="font-sans text-[7px] tracking-[0.4em] uppercase text-neutral-500 -mt-0.5">
              AQUATICS
            </span>
          </Link>

          {/* Clean Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-[11px] tracking-[0.22em] uppercase text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Understated Single Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/konsultasi"
              className="inline-flex items-center px-5 py-2 rounded-full border border-white/15 bg-white/[0.02] text-white text-[10px] font-sans tracking-[0.2em] uppercase transition-all duration-300 hover:border-white/50 hover:bg-white/[0.08]"
            >
              Konsultasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Minimalist Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8 mobile-menu-enter md:hidden">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-serif text-2xl text-neutral-200 hover:text-white transition-colors font-light block"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-white/[0.08] space-y-3">
            <Link
              href="/konsultasi"
              className="btn-primary w-full text-center text-xs justify-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Konsultasi Ruang
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
