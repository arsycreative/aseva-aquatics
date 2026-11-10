import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Konsultasi Privat — Rancang Bangun Akuarium Custom & Kurasi Arwana Super Red",
  description:
    "Jadwalkan konsultasi privat dan studi kelayakan sipil bersama kurator & teknisi ASEVA AQUATICS. Layanan survei lokasi di Bandung, Jabodetabek, dan Jawa Barat.",
  alternates: {
    canonical: "https://asevaaquatics.com/konsultasi",
  },
  openGraph: {
    title: "Konsultasi Privat — ASEVA AQUATICS",
    description:
      "Formulir reservasi konsultasi privat dan analisis spasial akuarium custom atau kurasi arwana super red bersertifikat CITES.",
    url: "https://asevaaquatics.com/konsultasi",
    siteName: "ASEVA AQUATICS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/aquarium-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Konsultasi Desain Akuarium Custom ASEVA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konsultasi Privat — ASEVA AQUATICS",
    description: "Jadwalkan konsultasi arsitektur akuarium custom dan kurasi arwana super red.",
    images: ["/images/aquarium-interior.jpg"],
  },
};

export default function KonsultasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Formulir Konsultasi Privat ASEVA AQUATICS",
    description:
      "Layanan konsultasi arsitektur akuarium custom dan kurasi arwana super red bersertifikat CITES di Bandung & Jabodetabek.",
    url: "https://asevaaquatics.com/konsultasi",
    mainEntity: {
      "@type": "Organization",
      name: "ASEVA AQUATICS",
      telephone: `+${SITE_CONFIG.whatsapp}`,
      email: SITE_CONFIG.email,
      areaServed: ["Bandung", "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", "Jawa Barat"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      {children}
    </>
  );
}

