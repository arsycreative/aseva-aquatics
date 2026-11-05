"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullWidthBannerSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth parallax scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[55vh] sm:h-[68vh] md:h-[78vh] overflow-hidden border-y border-white/[0.08]"
      aria-label="Dokumentasi Visual Arsitektural ASEVA"
    >
      {/* Background Image Layer with Parallax — Pure Visual Breakout */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 w-full h-[124%] -top-[12%] z-0 pointer-events-none"
      >
        <Image
          src="/images/projects/prj-004.jpg"
          alt="ASEVA AQUATICS — Mahakarya Arsitektur Akuarium"
          fill
          priority
          className="object-cover object-center brightness-[0.92] contrast-[1.05]"
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* Soft gradient blend on top & bottom borders only */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />
    </section>
  );
}
