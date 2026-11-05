"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Eye } from "lucide-react";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface ProjectGalleryClientProps {
  title: string;
  city: string;
  images: string[];
}

export default function ProjectGalleryClient({
  title,
  city,
  images,
}: ProjectGalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setActiveImageIndex(i);
              setLightboxOpen(true);
            }}
            className="group relative aspect-fish rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050505] cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          >
            <Image
              src={img}
              alt={`${title} — Dokumentasi Visual ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between">
              <span className="text-[11px] font-mono text-neutral-300">
                FOTO 0{i + 1} / 0{images.length}
              </span>
              <div className="w-8 h-8 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-champagne">
                <Maximize2 size={13} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        initialIndex={activeImageIndex}
        title={title}
        subtitle={`DOKUMENTASI ARSITEKTURAL · ${city.toUpperCase()}`}
      />
    </>
  );
}

