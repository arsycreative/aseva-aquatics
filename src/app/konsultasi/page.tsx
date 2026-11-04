"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { formatConsultationWhatsApp, getWhatsAppUrl } from "@/lib/utils";

const INTEREST_OPTIONS = [
  "Arwana Super Red",
  "Aquarium Custom",
  "Perawatan Aquarium",
  "Kolaborasi Arsitek/Interior",
];

const CITY_OPTIONS = [
  "Bandung Raya (Zona 1 — Prioritas Utama)",
  "Jabodetabek (Zona 2)",
  "Jawa Barat Lainnya (Zona 2)",
  "Luar Area Layanan",
];

const BUDGET_OPTIONS = [
  "Rp 15 juta — Rp 50 juta",
  "Rp 50 juta — Rp 150 juta",
  "Rp 150 juta — Rp 500 juta",
  "Di atas Rp 500 juta",
  "Belum yakin, ingin berdiskusi terlebih dahulu",
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
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Nomor WhatsApp wajib diisi";
    else if (!/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(formData.whatsapp.replace(/\s/g, "")))
      newErrors.whatsapp = "Format nomor Indonesia tidak valid";
    if (!formData.city) newErrors.city = "Pilih kota/wilayah";
    if (!formData.interest) newErrors.interest = "Pilih minat Anda";
    if (!formData.budget) newErrors.budget = "Pilih rentang budget";
    if (!formData.privacy) newErrors.privacy = "Anda harus menyetujui kebijakan privasi";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
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
                className="space-y-8 bg-[#0A0A0A] p-8 md:p-12 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="konsultasi" />
                <div className="hidden">
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </div>

                {/* Name & WA */}
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

                {/* Email */}
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

                {/* City & Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label" htmlFor="city">
                      Kota / Wilayah Proyek <span className="text-arwana">*</span>
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-field appearance-none cursor-pointer"
                    >
                      <option value="">Pilih wilayah Anda</option>
                      {CITY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="font-sans text-xs text-arwana mt-2">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="interest">
                      Kategori Layanan <span className="text-arwana">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="form-field appearance-none cursor-pointer"
                    >
                      <option value="">Pilih fokus ketertarikan Anda</option>
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="font-sans text-xs text-arwana mt-2">{errors.interest}</p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="form-label" htmlFor="budget">
                    Estimasi Rentang Investasi <span className="text-arwana">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUDGET_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                          formData.budget === opt
                            ? "border-white bg-white/[0.08] text-white"
                            : "border-white/10 text-neutral-400 hover:border-white/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={opt}
                          checked={formData.budget === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          className={`w-3.5 h-3.5 rounded-full border flex-shrink-0 transition-all ${
                            formData.budget === opt ? "bg-white border-white ring-2 ring-white/20" : "border-white/30"
                          }`}
                        />
                        <span className="font-sans text-xs leading-tight font-light">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="font-sans text-xs text-arwana mt-2">{errors.budget}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="form-label" htmlFor="message">
                    Deskripsi Visi / Catatan Tambahan <span className="text-neutral-500 font-normal">(opsional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ukuran ruangan, konsep arsitektur yang Anda inginkan, atau pertanyaan spesifik..."
                    className="form-field resize-none"
                    rows={4}
                  />
                </div>

                {/* Privacy */}
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
                  Kirim Permintaan Konsultasi
                </button>
                <p className="font-sans text-xs text-neutral-500 text-center font-light">
                  Atau langsung terhubung ke:{" "}
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
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
                      <span className="font-mono text-xs text-neutral-500 font-light flex-shrink-0 mt-0.5">
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
