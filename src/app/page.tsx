import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TwoDoorsSection from "@/components/sections/TwoDoorsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import StatsSection from "@/components/sections/StatsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturedFishSection from "@/components/sections/FeaturedFishSection";
import PortfolioPreviewSection from "@/components/sections/PortfolioPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium Bandung",
  description:
    "ASEVA AQUATICS — Kurasi Arwana Super Red bersertifikat dan desain aquarium custom kelas atas di Bandung, Jabodetabek, dan Jawa Barat. Kunjungan dengan janji temu.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TwoDoorsSection />
      <PhilosophySection />
      <StatsSection />
      <ProcessSection />
      <FeaturedFishSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationCTA />
    </>
  );
}
