import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TwoDoorsSection from "@/components/sections/TwoDoorsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import StatsSection from "@/components/sections/StatsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturedFishSection from "@/components/sections/FeaturedFishSection";
import FullWidthBannerSection from "@/components/sections/FullWidthBannerSection";
import PortfolioPreviewSection from "@/components/sections/PortfolioPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium Bandung",
  description:
    "ASEVA AQUATICS — Kurasi Arwana Super Red bersertifikat dan desain aquarium custom kelas atas di Bandung, Jabodetabek, dan Jawa Barat. Kunjungan dengan janji temu.",
  alternates: {
    canonical: "https://asevaaquatics.com",
  },
  openGraph: {
    title: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium",
    description:
      "Kurasi Arwana Super Red bersertifikat CITES & desain akuarium arsitektural kelas atas di Bandung, Jabodetabek, dan Jawa Barat.",
    url: "https://asevaaquatics.com",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium",
    description:
      "Kurasi Arwana Super Red bersertifikat CITES & desain akuarium arsitektural kelas atas di Bandung dan Jabodetabek.",
    images: ["/og-image.jpg"],
  },
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
      <FullWidthBannerSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationCTA />
    </>
  );
}
