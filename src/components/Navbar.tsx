"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/arwana", label: "Arwana" },
  { href: "/aquarium-custom", label: "Aquarium Custom" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/jurnal", label: "Jurnal" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Minimalist Wordmark */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-lg tracking-[0.28em] font-normal text-white group-hover:text-champagne transition-colors">
              ASEVA
            </span>
            <span className="font-sans text-[7px] tracking-[0.4em] uppercase text-neutral-400 group-hover:text-neutral-300 transition-colors -mt-0.5">
              AQUATICS
            </span>
          </Link>

          {/* Clean Desktop Navigation with Active States */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href} className="relative py-1">
                  <Link
                    href={link.href}
                    className={`font-sans text-[11px] tracking-[0.22em] uppercase transition-all duration-300 relative ${
                      isActive
                        ? "text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* Active Link Glow Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Understated Single Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/konsultasi"
              className={`inline-flex items-center px-5 py-2 rounded-full border text-[10px] font-sans tracking-[0.2em] uppercase transition-all duration-300 ${
                pathname === "/konsultasi"
                  ? "bg-white text-black border-white font-medium shadow-md shadow-white/20"
                  : "border-white/15 bg-white/[0.02] text-white hover:border-white/50 hover:bg-white/[0.08]"
              }`}
            >
              Konsultasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors z-50 relative"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileOpen ? <X size={22} className="text-white" /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Staggered Animated Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8 md:hidden"
          >
            {/* Ambient Backlight */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-champagne/[0.04] rounded-full blur-[120px] pointer-events-none" />

            <ul className="flex flex-col gap-6 relative z-10">
              {NAV_LINKS.map((link, index) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`font-serif text-2xl sm:text-3xl font-light transition-colors flex items-center justify-between ${
                        isActive ? "text-champagne font-normal" : "text-neutral-300 hover:text-white"
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="text-xs font-mono text-champagne">✦ AKTIF</span>}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="pt-8 border-t border-white/[0.08] space-y-4 relative z-10"
            >
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>ATELIER BANDUNG</span>
                <span className="text-emerald-400">● CITES COMPLIANT</span>
              </div>
              <Link
                href="/konsultasi"
                className="btn-primary w-full text-center text-xs justify-center py-3.5 flex items-center gap-2"
                onClick={() => setIsMobileOpen(false)}
              >
                <span>Jadwalkan Konsultasi Ruang</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
