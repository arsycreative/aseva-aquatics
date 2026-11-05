"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title?: string;
  subtitle?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title,
  subtitle,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  // Sync initial index
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setScale(1);
    }
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setScale(1);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setScale(1);
  }, [images.length]);

  const zoomIn = () => setScale((s) => Math.min(s + 0.4, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.4, 1));
  const resetZoom = () => setScale(1);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between"
      >
        {/* Top Floating Control Bar */}
        <div className="relative z-10 flex items-center justify-between p-6 md:px-10 border-b border-white/[0.08]">
          <div className="flex flex-col">
            {title && (
              <span className="font-serif text-lg md:text-xl text-white font-light">
                {title}
              </span>
            )}
            {subtitle && (
              <span className="font-mono text-[10px] tracking-widest uppercase text-champagne">
                {subtitle}
              </span>
            )}
          </div>

          {/* Controls: Zoom, Counter, Close */}
          <div className="flex items-center gap-3">
            {/* Zoom controls */}
            <div className="hidden sm:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-2 py-1">
              <button
                onClick={zoomOut}
                disabled={scale <= 1}
                className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut size={15} />
              </button>
              <button
                onClick={resetZoom}
                className="px-2 py-0.5 text-[11px] font-mono text-neutral-300 hover:text-white transition-colors"
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                onClick={zoomIn}
                disabled={scale >= 2.5}
                className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-30 transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn size={15} />
              </button>
              {scale > 1 && (
                <button
                  onClick={resetZoom}
                  className="p-1.5 text-champagne hover:text-white transition-colors"
                  aria-label="Reset zoom"
                >
                  <RotateCcw size={13} />
                </button>
              )}
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <span className="font-mono text-xs text-neutral-400 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full">
                {currentIndex + 1} / {images.length}
              </span>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/[0.12] transition-all"
              aria-label="Tutup inspeksi foto"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Center Viewport: Zoomable Image Canvas */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center cursor-zoom-in"
              onClick={() => (scale === 1 ? zoomIn() : resetZoom())}
            >
              <Image
                src={currentImage}
                alt={title || "Inspeksi Visual ASEVA"}
                fill
                className="object-contain"
                sizes="100vw"
                quality={95}
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows if Multiple Images */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-all shadow-xl"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-all shadow-xl"
                aria-label="Foto berikutnya"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Bottom Thumbnail Strip if Multiple Images */}
        {images.length > 1 && (
          <div className="relative z-10 flex items-center justify-center gap-3 p-6 border-t border-white/[0.08]">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => {
                  setCurrentIndex(i);
                  setScale(1);
                }}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border transition-all duration-300 ${
                  i === currentIndex
                    ? "border-champagne scale-110 shadow-lg shadow-black"
                    : "border-white/15 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

