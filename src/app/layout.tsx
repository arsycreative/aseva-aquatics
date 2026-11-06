import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium Bandung",
    template: "%s | ASEVA AQUATICS",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "arwana super red bandung",
    "jual arwana super red bersertifikat",
    "aquarium custom bandung",
    "jasa pembuatan aquarium mewah",
    "aquarium custom jakarta",
    "spesialis aquarium premium",
    "kolektor arwana bandung",
    "aquarium built-in rumah mewah",
    "kontraktor aquarium jabodetabek",
    "perawatan aquarium bandung",
  ],
  authors: [{ name: "ASEVA AQUATICS" }],
  creator: "ASEVA AQUATICS",
  publisher: "ASEVA AQUATICS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASEVA AQUATICS — Karya Hidup dalam Air",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASEVA AQUATICS — Arwana Super Red & Aquarium Custom Premium",
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="bg-black text-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data: Organization, LocalBusiness & WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HomeAndConstructionBusiness",
                  "@id": `${SITE_CONFIG.domain}/#organization`,
                  name: "ASEVA AQUATICS",
                  alternateName: "ASEVA",
                  description: SITE_CONFIG.description,
                  url: SITE_CONFIG.domain,
                  telephone: `+${SITE_CONFIG.whatsapp}`,
                  email: SITE_CONFIG.email,
                  image: `${SITE_CONFIG.domain}/og-image.jpg`,
                  logo: `${SITE_CONFIG.domain}/apple-touch-icon.png`,
                  priceRange: "$$$$",
                  currenciesAccepted: "IDR",
                  paymentAccepted: "Bank Transfer",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bandung",
                    addressRegion: "Jawa Barat",
                    addressCountry: "ID",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -6.9175,
                    longitude: 107.6191,
                  },
                  areaServed: [
                    { "@type": "City", name: "Bandung" },
                    { "@type": "City", name: "Jakarta" },
                    { "@type": "City", name: "Bogor" },
                    { "@type": "City", name: "Depok" },
                    { "@type": "City", name: "Tangerang" },
                    { "@type": "City", name: "Bekasi" },
                    { "@type": "State", name: "Jawa Barat" },
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      opens: "09:00",
                      closes: "17:00",
                    },
                  ],
                  serviceType: [
                    "Desain & Pembuatan Aquarium Custom Mewah",
                    "Kurasi Arwana Super Red Bersertifikat CITES",
                    "Jasa Perawatan & Maintenance Aquarium Berkala",
                  ],
                  knowsAbout: [
                    "Aquarium Custom",
                    "Arwana Super Red (Scleropages formosus)",
                    "Kaca Kristal Low-Iron Diamant",
                    "Sistem Sirkulasi Dry-Wet Sump",
                    "Sertifikasi BKSDA dan CITES Internasional",
                  ],
                  sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.youtubeShorts],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_CONFIG.domain}/#website`,
                  url: SITE_CONFIG.domain,
                  name: "ASEVA AQUATICS",
                  description: SITE_CONFIG.description,
                  publisher: {
                    "@id": `${SITE_CONFIG.domain}/#organization`,
                  },
                  inLanguage: "id-ID",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased selection:bg-white/20 selection:text-white">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
