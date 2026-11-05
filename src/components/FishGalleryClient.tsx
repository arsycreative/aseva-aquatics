"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Shield, Eye } from "lucide-react";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface FishGalleryClientProps {
  name: string;
  id: string;
  images: string[];
  coverImage: string;
  status: "available" | "reserved" | "sold";
}

export default function FishGalleryClient({
  name,
  id,
  images,
  coverImage,
  status,
}: FishGalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allImages = images && images.length > 0 ? images : [coverImage];

  return (
    <>
      <div className="relative">
        {/* Main Photo Stage */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-fish rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer group bg-black"
        >
          <Image
            src={allImages[activeImageIndex] || coverImage}
            alt={`${name} — Arwana Super Red ${id}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={95}
          />

          {/* Sold Overlay */}
          {status === "sold" && (
            <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] flex items-center justify-center z-10">
              <span className="font-serif text-sm tracking-[0.2em] text-neutral-300 uppercase border border-white/20 px-6 py-2.5 rounded-full">
                Terjual · Arsip Koleksi
              </span>
            </div>
          )}

          {/* Floating Zoom / Inspect Button */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-[11px] font-sans tracking-wider opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
            <Eye size={13} className="text-champagne" />
            <span>Inspeksi Detail Sisik</span>
            <Maximize2 size={12} className="text-neutral-400" />
          </div>
        </div>

        {/* Multiple Image Thumbnails if available */}
        {allImages.length > 1 && (
          <div className="flex items-center gap-3 mt-4">
            {allImages.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImageIndex(i)}
                className={`relative w-20 h-16 rounded-xl overflow-hidden border transition-all ${
                  i === activeImageIndex
                    ? "border-champagne scale-105 shadow-md shadow-black"
                    : "border-white/15 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`${name} preview ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Certification badge */}
        <div className="mt-5 flex items-center gap-3.5 p-4 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
          <Shield size={16} className="text-champagne flex-shrink-0" />
          <p className="font-sans text-xs text-neutral-400 font-light">
            <span className="text-white font-medium">Terverifikasi &amp; Bersertifikat Resmi.</span>{" "}
            Setiap spesimen dilengkapi nomor microchip transponder 15-digit dan sertifikat captive-bred CITES &amp; BKSDA.
          </p>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={allImages}
        initialIndex={activeImageIndex}
        title={`${name} (${id})`}
        subtitle="INSPEKSI DETAIL ANATOMI & SISIK LEVEL 6"
      />
    </>
  );
}

