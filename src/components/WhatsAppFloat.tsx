"use client";

import { useEffect, useRef } from "react";
import { getWhatsAppUrl } from "@/lib/utils";

function WhatsAppIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = "1";
        buttonRef.current.style.transform = "translateY(0)";
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <a
        ref={buttonRef}
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-float-btn"
        aria-label="Direct WhatsApp Concierge"
        className="relative group flex items-center justify-center w-12 h-12 md:w-13 md:h-13 rounded-full bg-black/85 backdrop-blur-2xl border border-white/20 text-white shadow-[0_15px_40px_rgba(0,0,0,0.9)] hover:border-emerald-500/80 hover:text-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500 hover:scale-105 active:scale-95"
        style={{
          opacity: 0,
          transform: "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, transform 0.2s ease",
        }}
      >
        {/* Subtle status indicator dot */}
        <span className="w-2 h-2 rounded-full bg-emerald-400 absolute top-2 right-2 ring-2 ring-black" />

        {/* Crisp WhatsApp Icon */}
        <WhatsAppIcon size={21} className="transition-transform duration-300 group-hover:scale-110" />

        {/* Discreet Tooltip on Hover (Desktop) */}
        <span className="pointer-events-none absolute right-15 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-xl border border-white/15 text-white text-[10px] font-sans tracking-[0.18em] uppercase shadow-2xl whitespace-nowrap">
          <span>Inquiry WhatsApp</span>
        </span>
      </a>
    </div>
  );
}
