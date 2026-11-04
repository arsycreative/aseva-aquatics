// src/lib/utils.ts
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "./data";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;
}

export function getWhatsAppUrl(page?: string, code?: string): string {
  let message = WHATSAPP_MESSAGES.default;
  if (page === "arwana") message = WHATSAPP_MESSAGES.arwana(code);
  if (page === "aquarium-custom") message = WHATSAPP_MESSAGES.aquariumCustom;
  if (page === "maintenance") message = WHATSAPP_MESSAGES.maintenance;
  if (page === "portfolio") message = WHATSAPP_MESSAGES.portfolio;
  return buildWhatsAppUrl(message);
}

export function formatConsultationWhatsApp(data: {
  name: string;
  city: string;
  interest: string;
  budget: string;
}): string {
  const message = `Halo ASEVA AQUATICS, saya ${data.name} dari ${data.city}. Saya baru saja mengisi form konsultasi mengenai ${data.interest} dengan estimasi budget ${data.budget}. Mohon informasi jadwal diskusi lebih lanjut.`;
  return buildWhatsAppUrl(message);
}

export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const STATUS_LABELS = {
  available: "Tersedia",
  reserved: "Dipesan",
  sold: "Terjual",
};

export const STATUS_CLASSES = {
  available: "badge-available",
  reserved: "badge-reserved",
  sold: "badge-sold",
};

export const CATEGORY_LABELS = {
  residential: "Residensial",
  commercial: "Komersial",
  arwana: "Aquarium Arwana",
};

