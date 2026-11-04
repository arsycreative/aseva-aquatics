import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ConsultationCTA() {
  return (
    <section
      className="relative py-28 md:py-36 bg-black overflow-hidden border-t border-white/[0.08]"
      aria-label="Invitasi konsultasi pribadi"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-champagne font-medium">
            INVITASI KONSULTASI PRIVAT
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light leading-[1.1] mb-6">
          Ceritakan Visi Ruang Anda
          <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
            kepada Tim Kurator Kami.
          </span>
        </h2>

        <p className="font-sans text-xs md:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed font-light mb-12">
          Setiap proyek akuarium besar dan kurasi arwana super red dimulai dari dialog mendalam. Tanpa kompromi, tanpa estimasi tergesa-gesa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/konsultasi" id="cta-consultation-btn" className="btn-primary w-full sm:w-auto">
            <span>Isi Formulir Konsultasi</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            className="btn-outline w-full sm:w-auto"
          >
            <MessageCircle size={15} />
            <span>Chat WhatsApp Langsung</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-neutral-400 font-sans text-xs font-light">
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-champagne" />
            <span>Respons di bawah 2 jam kerja</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-champagne" />
            <span>Survei gratis Bandung Raya</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={13} className="text-champagne" />
            <span>Kerahasiaan data klien terjamin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
