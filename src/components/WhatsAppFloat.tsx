"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloat() {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = "1";
        buttonRef.current.style.transform = "translateY(0)";
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      ref={buttonRef}
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn"
      aria-label="Direct WhatsApp Concierge"
      className="fixed bottom-7 right-7 z-50 flex items-center gap-3 bg-[#0A0F14]/90 backdrop-blur-xl border border-gold/40 text-ivory px-5 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:border-gold hover:shadow-[0_15px_50px_rgba(201,169,110,0.3)] transition-all duration-500 hover:scale-105 active:scale-95 group"
      style={{
        opacity: 0,
        transform: "translateY(12px)",
        transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="relative">
        <span className="w-2 h-2 rounded-full bg-[#22C55E] absolute -top-0.5 -right-0.5 animate-pulse" />
        <MessageCircle size={16} className="text-gold group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-medium">
          CONCIERGE
        </span>
        <span className="font-sans text-[11px] text-ivory/80 -mt-0.5 hidden sm:block">
          Private Inquiry
        </span>
      </div>
    </a>
  );
}
