"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
      <div className="min-h-screen bg-navy flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-gold/30 rounded-full">
            <CheckCircle size={28} className="text-gold" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
            Terima kasih,<br />
            <em className="text-gold">{formData.name}.</em>
          </h1>
          <p className="font-sans text-sm text-ivory-muted mb-10 leading-relaxed">
            Tim kurator kami akan menghubungi Anda dalam <strong className="text-ivory">2 jam</strong> di hari kerja. 
            Untuk percakapan lebih cepat, langsung buka WhatsApp kami sekarang.
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
          <p className="font-sans text-xs text-ivory-dim">
            Atau kembali ke{" "}
            <Link href="/" className="text-gold hover:underline">
              halaman utama
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-[#0A0F14] border-b border-white/[0.08] relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">PRIVATE ATELIER CONSULTATION</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal leading-tight mb-6">
              Jadwalkan Konsultasi Ruang
              <span className="block font-serif italic text-gradient-gold">bersama Kurator ASEVA</span>
            </h1>
            <p className="font-sans text-xs md:text-base text-ivory-muted leading-relaxed font-light">
              Mulai dari eksplorasi awal, pemilihan spesimen arwana bersertifikat, hingga analisis teknis arsitektur untuk instalasi akuarium custom di Bandung dan Jabodetabek.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Netlify Forms static HTML detection */}
              <form
                name="konsultasi"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
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
                    Email <span className="text-ivory-dim">(opsional)</span>
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
                      Kota / Wilayah <span className="text-arwana">*</span>
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
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="font-sans text-xs text-arwana mt-2">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="interest">
                      Minat <span className="text-arwana">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="form-field appearance-none cursor-pointer"
                    >
                      <option value="">Pilih minat Anda</option>
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
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
                    Rentang Investasi <span className="text-arwana">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUDGET_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 p-4 border cursor-pointer transition-all duration-300 ${
                          formData.budget === opt
                            ? "border-gold bg-gold/10 text-ivory"
                            : "border-white/10 text-ivory-muted hover:border-gold/40"
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
                          className={`w-3 h-3 rounded-full border flex-shrink-0 transition-all ${
                            formData.budget === opt ? "bg-gold border-gold" : "border-white/30"
                          }`}
                        />
                        <span className="font-sans text-xs leading-tight">{opt}</span>
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
                    Cerita Singkat <span className="text-ivory-dim">(opsional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ukuran ruangan, konsep yang Anda inginkan, atau pertanyaan spesifik..."
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
                      className="mt-0.5 flex-shrink-0 accent-gold"
                    />
                    <span className="font-sans text-xs text-ivory-muted leading-relaxed">
                      Saya menyetujui bahwa data yang saya berikan akan digunakan oleh ASEVA AQUATICS 
                      semata-mata untuk keperluan konsultasi dan komunikasi. Sesuai{" "}
                      <Link href="/legal" className="text-gold hover:underline">
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
                  className="btn-primary w-full justify-center"
                >
                  Kirim Permintaan Konsultasi
                </button>
                <p className="font-sans text-xs text-ivory-dim text-center">
                  Atau langsung hubungi:{" "}
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    WhatsApp kami
                  </a>
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-8 bg-navy-secondary border border-white/[0.08]">
                <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase block mb-2">
                  PROTOKOL PELAYANAN
                </span>
                <h3 className="font-serif text-xl text-ivory mb-6 font-normal">
                  Tahapan Setelah Submit
                </h3>
                <ol className="space-y-5">
                  {[
                    { step: "01", title: "Verifikasi Permintaan", text: "Form Anda ditangkap secara aman oleh sistem atelier kami." },
                    { step: "02", title: "Kontak Personal < 2 Jam", text: "Kurator senior kami akan menghubungi Anda via WhatsApp resmi." },
                    { step: "03", title: "Diskusi Konsep Ruang", text: "Membahas gaya arsitektur hunian, dimensi ideal, dan preferensi satwa." },
                    { step: "04", title: "Survei Lokasi Eksklusif", text: "Survei teknis bebas biaya di seluruh area Bandung Raya." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3.5">
                      <span className="font-mono text-xs text-gold font-light flex-shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <span className="font-serif text-sm text-ivory block mb-0.5">{item.title}</span>
                        <p className="font-sans text-xs text-ivory-muted leading-relaxed font-light">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-8 bg-navy-secondary border border-gold/30">
                <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase block mb-2">
                  DIRECT CONCIERGE
                </span>
                <h3 className="font-serif text-xl text-ivory mb-3 font-normal">Perbincangan Langsung</h3>
                <p className="font-sans text-xs text-ivory-muted mb-6 leading-relaxed font-light">
                  Ingin respon instan untuk pertanyaan ketersediaan ikan atau jadwal survei darurat?
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 border border-gold bg-gold text-navy font-sans text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
                >
                  <MessageCircle size={15} />
                  <span>Buka Chat WhatsApp</span>
                </a>
                <p className="font-mono text-[10px] text-ivory-dim mt-4 text-center tracking-wider">
                  {SITE_CONFIG.operatingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

