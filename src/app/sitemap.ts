import { MetadataRoute } from "next";
import { FISH_COLLECTION, PORTFOLIO_PROJECTS, JOURNAL_ARTICLES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://asevaaquatics.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/arwana`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/aquarium-custom`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/aquarium-custom/proses`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/aquarium-custom/material-teknologi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/portofolio`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/perawatan-aquarium`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/jurnal`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/area-layanan`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/area-layanan/bandung`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/area-layanan/jakarta-jabodetabek`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/area-layanan/jawa-barat`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/tentang`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/konsultasi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/panduan-arwana-super-red`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/legal`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  const fishPages = FISH_COLLECTION.map((fish) => ({
    url: `${baseUrl}/arwana/${fish.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: fish.status === "available" ? 0.8 : 0.5,
  }));

  const portfolioPages = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${baseUrl}/portofolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalPages = JOURNAL_ARTICLES.map((article) => ({
    url: `${baseUrl}/jurnal/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...fishPages, ...portfolioPages, ...journalPages];
}