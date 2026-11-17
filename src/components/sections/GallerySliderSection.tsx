"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  {
    id: "g-01",
    index: "01",
    tag: "DAGO PAKAR · BANDUNG",
    title: "The In-Wall Sanctuary",
    type: "Aquarium Dinding Built-In · 280 cm",
    image: "/images/typology/built-in-wall.jpg",
    link: "/portofolio/aquarium-dinding-dago-bandung",
  },
  {
    id: "g-02",
    index: "02",
    tag: "KOTA BARU PARAHYANGAN",
    title: "Dual-Aspect Partition",
    type: "Partisi Ruang Dua Sisi · 240 cm",
    image: "/images/typology/room-divider.jpg",
    link: "/portofolio",
  },
  {
    id: "g-03",
    index: "03",
    tag: "SETIABUDI · BANDUNG",
    title: "Structural Column Oasis",
    type: "Kolom Vertikal Kaca · 320 cm",
    image: "/images/typology/column-pillar.jpg",
    link: "/portofolio/aquarium-arwana-villa-kbp",
  },
  {
    id: "g-04",
    index: "04",
    tag: "SCBD · JAKARTA",
    title: "Grand Lobby Panorama",
    type: "Monumental Publik · 450 cm",
    image: "/images/typology/commercial-lobby.jpg",
    link: "/portofolio/aquarium-partisi-perkantoran-bandung",
  },
  {
    id: "g-05",
    index: "05",
    tag: "PENTHOUSE · JAKARTA",
    title: "Skyline Suite Haven",
    type: "Built-In Low-Iron · 300 cm",
    image: "/images/projects/prj-004.jpg",
    link: "/portofolio/aquarium-penthouse-sudirman",
  },
  {
    id: "g-06",
    index: "06",
    tag: "VILLA RESIDENCE · KBP",
    title: "Living Room Accent Tank",
    type: "Partisi Ruang Keluarga · 200 cm",
    image: "/images/projects/prj-003.jpg",
    link: "/portofolio/aquarium-arwana-villa-kbp",
  },
  {
    id: "g-07",
    index: "07",
    tag: "OFFICE BRAGA · BANDUNG",
    title: "Executive Divider",
    type: "Partisi Kaca Kristal · 220 cm",
    image: "/images/projects/prj-002.jpg",
    link: "/portofolio/aquarium-partisi-perkantoran-bandung",
  },
  {
    id: "g-08",
    index: "08",
    tag: "KAPUAS HULU LINEAGE",
    title: "Emperor Crimson",
    type: "Kurasi Super Red Grade A+",
    image: "/images/hero-arwana.jpg",
    link: "/arwana",
  },
];

export default function GallerySliderSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector<HTMLElement>("[data-slider-card]");
    const step = card ? card.offsetWidth + 20 : 340;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-24 md:py-32 bg-[#07080B] relative overflow-hidden border-t border-white/[0.08]"
      aria-label="Dokumentasi Visual Mahakarya Terpasang"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-champagne/[0.025] rounded-full blur-[180px] pointer-events-none" />

      {/* Top Header with Clean Minimal Layout */}
      <div className="section-container relative z-10 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label block mb-3">DOKUMENTASI INSTALASI</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              Mahakarya di <em className="italic text-champagne">Ruang Nyata</em>
            </h2>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Geser ke kiri"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-white/20 bg-white/[0.04] text-white hover:border-champagne/60 hover:bg-champagne/10 hover:text-champagne-light active:scale-95"
                  : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Geser ke kanan"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-white/20 bg-white/[0.04] text-white hover:border-champagne/60 hover:bg-champagne/10 hover:text-champagne-light active:scale-95"
                  : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Slider Track with Peeking Cards (3-4 visible on desktop, partial cut off to signal scrollability) */}
      <div
        ref={sliderRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none scroll-smooth pl-6 md:pl-12 xl:pl-16 pr-12 md:pr-20 pb-4 select-none"
      >
        {GALLERY_ITEMS.map((item, idx) => (
          <Link
            key={item.id}
            href={item.link}
            data-slider-card
            className="group relative flex-shrink-0 w-[74vw] sm:w-[44vw] md:w-[32vw] lg:w-[26vw] xl:w-[23vw] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-[#0D0E14] border border-white/[0.08] hover:border-champagne/50 transition-all duration-500 shadow-[0_15px_45px_rgba(0,0,0,0.7)] flex flex-col justify-between p-5 sm:p-6"
          >
            {/* Photographic Canvas */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={idx < 3}
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-95"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20 group-hover:via-black/20 transition-all duration-500" />

            {/* Card Top Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/90 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                {item.tag}
              </span>
              <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:text-champagne-light group-hover:border-champagne/40 transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </div>

            {/* Card Bottom: Clean Minimal Typography */}
            <div className="relative z-10">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-light leading-snug mb-1 group-hover:text-champagne-light transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-neutral-300 font-light truncate">
                {item.type}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
