"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { formatConsultationWhatsApp, getWhatsAppUrl } from "@/lib/utils";

const INTEREST_OPTIONS = [
  { id: "Arwana Super Red", label: "Arwana Super Red", desc: "Kurasi Spesimen Bersertifikat CITES" },
  { id: "Aquarium Custom", label: "Aquarium Custom", desc: "Instalasi Kaca Kristal Arsitektural" },
  { id: "Perawatan Aquarium", label: "Perawatan & Maintenance", desc: "Kunjungan & Stabilisasi Biologi Air" },
  { id: "Kolaborasi Arsitek/Interior", label: "Kolaborasi Arsitek / Desainer", desc: "Integrasi Gambar Kerja & Sipil" },
];

const CITY_OPTIONS = [
  { id: "Bandung Raya (Zona 1 — Prioritas Utama)", label: "Bandung Raya", badge: "Zona 1 · Prioritas" },
  { id: "Jabodetabek (Zona 2)", label: "Jabodetabek", badge: "Zona 2 · Terjadwal" },
  { id: "Jawa Barat Lainnya (Zona 2)", label: "Jawa Barat Lainnya", badge: "Zona 2" },
  { id: "Luar Area Layanan", label: "Luar Wilayah Jawa Barat", badge: "Konsultasi Khusus" },
];

const BUDGET_OPTIONS = [
  { id: "Rp 15 juta — Rp 50 juta", label: "Rp 15jt – 50jt", desc: "Unit Display Kompak" },
  { id: "Rp 50 juta — Rp 150 juta", label: "Rp 50jt – 150jt", desc: "Koleksi Arwana / Custom 2–3 Meter" },
  { id: "Rp 150 juta — Rp 500 juta", label: "Rp 150jt – 500jt", desc: "Instalasi Built-In Skala Villa" },
  { id: "Di atas Rp 500 juta", label: "Di atas Rp 500jt", desc: "Proyek Mega Arsitektural" },
  { id: "Belum yakin, ingin berdiskusi terlebih dahulu", label: "Fleksibel / Diskusi Awal", desc: "Penyesuaian Konsep Desain" },
];

export default function KonsultasiPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    city: "",
    interest: "",
    budget: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Nomor WhatsApp wajib diisi";
    else if (!/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(formData.whatsapp.replace(/\s/g, "")))
      newErrors.whatsapp = "Format nomor Indonesia tidak valid (contoh: 08123456789)";
    if (!formData.interest) newErrors.interest = "Pilih kategori layanan yang Anda butuhkan";
    if (!formData.city) newErrors.city = "Pilih wilayah lokasi proyek Anda";
    if (!formData.budget) newErrors.budget = "Pilih estimasi rentang investasi";
    if (!formData.privacy) newErrors.privacy = "Anda harus menyetujui kebijakan privasi data";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    // Submit to Netlify Forms
    const formElement = e.target as HTMLFormElement;
    const data = new FormData(formElement);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
    } catch (err) {
      console.error("Form submission error:", err);
    }

    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const selectOption = (field: "interest" | "city" | "budget", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    const waUrl = formatConsultationWhatsApp({
      name: formData.name,
      city: formData.city,
      interest: formData.interest,
      budget: formData.budget,
    });

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-white/20 bg-white/[0.04] rounded-full">
            <CheckCircle size={28} className="text-champagne" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-4 font-light">
            Terima kasih,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim italic">{formData.name}.</span>
          </h1>
          <p className="font-sans text-sm text-neutral-400 mb-10 leading-relaxed font-light">
            Tim kurator senior kami akan menghubungi Anda dalam kurun waktu <strong className="text-white font-normal">2 jam</strong> di hari kerja. 
            Untuk respon prioritas langsung, Anda dapat membuka percakapan WhatsApp kami sekarang.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex mb-6"
          >
            <MessageCircle size={18} />
            Lanjutkan Percakapan di WhatsApp Sekarang
          </a>
          <p className="font-sans text-xs text-neutral-500">
            Atau kembali ke{" "}
            <Link href="/" className="text-white hover:underline">
              halaman utama
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-20 bg-black border-b border-white/[0.08] relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-champagne-dim" />
              <span className="section-label">PRIVATE ATELIER CONSULTATION</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light leading-tight mb-6">
              Jadwalkan Konsultasi Ruang
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-champagne-dim">
                bersama Kurator ASEVA
              </span>
            </h1>
            <p className="font-sans text-xs md:text-base text-neutral-400 leading-relaxed font-light">
              Mulai dari eksplorasi awal, kurasi spesimen arwana bersertifikat CITES, hingga analisis beban struktur arsitektur untuk instalasi akuarium custom di Bandung dan Jabodetabek.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
            {/* Form (8 cols) */}
            <div className="lg:col-span-8">
              <form
                name="konsultasi"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-10 bg-[#0A0A0A] p-8 md:p-12 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="konsultasi" />
                <input type="hidden" name="interest" value={formData.interest} />
                <input type="hidden" name="city" value={formData.city} />
                <input type="hidden" name="budget" value={formData.budget} />
                <div className="hidden">
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </div>

                {/* Step 1: Minat Layanan (Interactive Cards) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="form-label mb-0">
                      1. Kategori Layanan yang Anda Cari <span className="text-arwana">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-neutral-500">PILIH SALAH SATU</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {INTEREST_OPTIONS.map((item) => {
                      const isSelected = formData.interest === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => selectOption("interest", item.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-start justify-between ${
                            isSelected
                              ? "bg-white/[0.08] border-champagne shadow-lg shadow-black"
                              : "bg-[#0D0D0D] border-white/[0.06] hover:border-white/25 hover:bg-white/[0.02]"
                          }`}
                        >
                          <div>
                            <span className="font-serif text-base text-white block mb-0.5 font-normal">
                              {item.label}
                            </span>
                            <span className="text-[11px] font-sans text-neutral-400 font-light leading-tight block">
                              {item.desc}
                            </span>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                              isSelected
                                ? "border-champagne bg-champagne text-black"
                                : "border-white/20"
                            }`}
                          >
                            {isSelected && <span className="text-[10px] font-bold">✓</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.interest && (
                    <p className="font-sans text-xs text-arwana mt-2">{errors.interest}</p>
                  )}
                </div>

                {/* Step 2: Wilayah Proyek (Interactive Cards) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="form-label mb-0">
                      2. Kota / Wilayah Proyek Anda <span className="text-arwana">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-neutral-500">AREA LAYANAN</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {CITY_OPTIONS.map((city) => {
                      const isSelected = formData.city === city.id;
                      return (
                        <div
                          key={city.id}
                          onClick={() => selectOption("city", city.id)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 text-center flex flex-col justify-between min-h-[85px] ${
                            isSelected
                              ? "bg-white/[0.08] border-champagne shadow-lg"
                              : "bg-[#0D0D0D] border-white/[0.06] hover:border-white/25 hover:bg-white/[0.02]"
                          }`}
                        >
                          <span className="font-serif text-sm text-white font-normal block mb-1">
                            {city.label}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">
                            {city.badge}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {errors.city && (
                    <p className="font-sans text-xs text-arwana mt-2">{errors.city}</p>
                  )}
                </div>

                {/* Step 3: Rentang Investasi (Segmented Radio Cards) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="form-label mb-0">
                      3. Estimasi Rentang Investasi <span className="text-arwana">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-neutral-500">BUDGET RANGE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUDGET_OPTIONS.map((opt) => {
                      const isSelected = formData.budget === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => selectOption("budget", opt.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? "border-champagne bg-white/[0.08] text-white shadow-md shadow-black"
                              : "border-white/10 bg-[#0D0D0D] text-neutral-400 hover:border-white/30"
                          }`}
                        >
                          <div>
                            <span className="font-sans text-xs font-medium text-white block">
                              {opt.label}
                            </span>
                            <span className="font-sans text-[11px] text-neutral-400 font-light">
                              {opt.desc}
                            </span>
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                              isSelected
                                ? "border-champagne bg-champagne text-black"
                                : "border-white/25"
                            }`}
                          >
                            {isSelected && <span className="text-[8px] font-bold">✓</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.budget && (
                    <p className="font-sans text-xs text-arwana mt-2">{errors.budget}</p>
                  )}
                </div>

                {/* Step 4: Contact Details (Name, WA, Email) */}
                <div className="pt-6 border-t border-white/[0.08] space-y-6">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-champagne uppercase block font-medium">
                    4. IDENTITAS &amp; KONTAK PRIVAT
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label" htmlFor="name">
                        Nama Lengkap <span className="text-arwana">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className="form-field"
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="font-sans text-xs text-arwana mt-2">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="whatsapp">
                        Nomor WhatsApp <span className="text-arwana">*</span>
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="08xx xxxx xxxx"
                        className="form-field"
                        autoComplete="tel"
                      />
                      {errors.whatsapp && (
                        <p className="font-sans text-xs text-arwana mt-2">{errors.whatsapp}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="email">
                      Alamat Email <span className="text-neutral-500 font-normal">(opsional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@anda.com"
                      className="form-field"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">
                      Deskripsi Visi / Catatan Tambahan <span className="text-neutral-500 font-normal">(opsional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ukuran ruangan, konsep arsitektur yang Anda inginkan, preferensi ikan, atau pertanyaan spesifik..."
                      className="form-field resize-none"
                      rows={4}
                    />
                  </div>
                </div>

                {/* Privacy Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 flex-shrink-0 accent-white"
                    />
                    <span className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                      Saya menyetujui bahwa data yang saya berikan akan digunakan oleh ASEVA AQUATICS 
                      semata-mata untuk keperluan konsultasi dan komunikasi eksklusif. Sesuai{" "}
                      <Link href="/legal" className="text-white hover:underline">
                        Kebijakan Privasi
                      </Link>{" "}
                      kami.
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="font-sans text-xs text-arwana mt-2">{errors.privacy}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="consultation-submit-btn"
                  className="btn-primary w-full justify-center py-4 text-xs font-semibold"
                >
                  <span>Kirim Permintaan Konsultasi</span>
                  <ArrowRight size={14} />
                </button>

                <p className="font-sans text-xs text-neutral-500 text-center font-light">
                  Atau langsung terhubung ke:{" "}
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-normal"
                  >
                    Concierge WhatsApp Resmi
                  </a>
                </p>
              </form>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <span className="font-mono text-[10px] tracking-[0.25em] text-champagne uppercase block mb-2 font-medium">
                  STANDAR MUTU ATELIER
                </span>
                <h3 className="font-serif text-xl text-white mb-6 font-light">
                  Tahapan Setelah Kirim
                </h3>
                <ol className="space-y-5">
                  {[
                    { step: "01", title: "Verifikasi Berkas", text: "Form Anda diterima secara aman oleh sistem concierge internal kami." },
                    { step: "02", title: "Kontak Personal < 2 Jam", text: "Kurator senior kami akan menghubungi Anda via WhatsApp resmi." },
                    { step: "03", title: "Diskusi Konsep Ruang", text: "Membahas gaya arsitektur hunian, dimensi ideal, dan ketersediaan spesimen." },
                    { step: "04", title: "Survei Lokasi Eksklusif", text: "Survei teknis bebas biaya di seluruh area Bandung Raya." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3.5">
                      <span className="font-mono text-xs text-champagne font-light flex-shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <span className="font-serif text-sm text-white block mb-0.5 font-light">{item.title}</span>
                        <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <span className="font-mono text-[10px] tracking-[0.25em] text-champagne uppercase block mb-2 font-medium">
                  DIRECT CONCIERGE
                </span>
                <h3 className="font-serif text-xl text-white mb-3 font-light">Perbincangan Langsung</h3>
                <p className="font-sans text-xs text-neutral-400 mb-6 leading-relaxed font-light">
                  Ingin respon instan untuk pertanyaan ketersediaan ikan atau koordinasi gambar kerja arsitektur?
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full border border-white/20 text-white font-sans text-xs tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  <MessageCircle size={15} />
                  <span>Buka Chat WhatsApp</span>
                </a>
                <p className="font-mono text-[10px] text-neutral-500 mt-4 text-center tracking-wider">
                  {SITE_CONFIG.operatingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
