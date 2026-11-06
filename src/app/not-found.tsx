import Link from "next/link";
import { ArrowLeft, Compass, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-6 pt-32 pb-20">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-red-950/[0.18] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <div className="relative z-10 max-w-xl text-center">
        {/* Monogram Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6">
          <Compass size={12} className="text-champagne animate-spin-slow" />
          <span className="font-mono text-[10px] tracking-[0.28em] text-neutral-300 uppercase">
            STATUS 404 · ATELIER DIRECTORY
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-light mb-4 tracking-tight">
          404
          <span className="block font-serif italic text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim mt-2 font-light">
            Di Luar Koordinat Arsip
          </span>
        </h1>

        <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-10 max-w-md mx-auto">
          Halaman atau spesimen yang Anda tuju telah dipindahkan, teradopsi, atau tidak berada di dalam arsip galeri kami.
        </p>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="btn-primary text-xs py-3 px-6"
          >
            <ArrowLeft size={13} />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/arwana"
            className="btn-outline text-xs py-3 px-6"
          >
            <span>Koleksi Arwana</span>
          </Link>
          <Link
            href="/portofolio"
            className="btn-outline text-xs py-3 px-6"
          >
            <span>Portofolio</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-center gap-2 text-xs text-neutral-400 font-sans">
          <span>Membutuhkan bantuan kurator?</span>
          <a
            href={getWhatsAppUrl("Halo ASEVA AQUATICS, saya mencari informasi di website Anda namun halaman tidak ditemukan.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne hover:underline inline-flex items-center gap-1 font-medium"
          >
            <MessageCircle size={13} />
            <span>Hubungi WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
