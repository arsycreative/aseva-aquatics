"use client";

import { useState, useMemo } from "react";
import { MessageCircle, ShieldCheck, Layers, Scale, Droplets } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const INSTALLATION_TYPES = [
  { id: "builtin", label: "Dinding (Built-In)", factor: 1.0 },
  { id: "divider", label: "Partisi 2 Sisi", factor: 1.15 },
  { id: "peninsula", label: "Free-Standing / Kolom", factor: 1.25 },
];

export default function AquariumCalculatorClient() {
  const [lengthCm, setLengthCm] = useState<number>(240);
  const [widthCm, setWidthCm] = useState<number>(80);
  const [heightCm, setHeightCm] = useState<number>(75);
  const [installType, setInstallType] = useState<string>("builtin");

  const telemetry = useMemo(() => {
    const mainVolumeLiters = Math.round((lengthCm * widthCm * heightCm) / 1000);
    const sumpVolumeLiters = Math.round(mainVolumeLiters * 0.28);
    const totalWaterLiters = mainVolumeLiters + sumpVolumeLiters;

    // Glass thickness recommendation based on hydrostatic height & span (Safety Factor 3.8x)
    let glassSpec = "12mm Low-Iron Crystal";
    let glassNote = "Monolitik Euro-Braced";
    if (heightCm >= 95 || lengthCm >= 350) {
      glassSpec = "2×12mm Laminated SGP";
      glassNote = "Double Low-Iron Structural Interlayer";
    } else if (heightCm >= 80 || lengthCm >= 260) {
      glassSpec = "19mm Low-Iron Crystal";
      glassNote = "Heavy-Duty Monolitik Optik";
    } else if (heightCm >= 65 || lengthCm >= 180) {
      glassSpec = "15mm Low-Iron Crystal";
      glassNote = "Standar Kolektor Arwana";
    }

    // Structural floor weight (water + glass + steel chassis + sump) in Tons
    const totalWeightTons = ((totalWaterLiters * 1.25) / 1000).toFixed(2);

    // Investment range estimation (Rp Juta)
    const typeFactor =
      INSTALLATION_TYPES.find((t) => t.id === installType)?.factor ?? 1.0;
    const baseRatePerLiter =
      heightCm >= 85 ? 0.068 : heightCm >= 75 ? 0.055 : 0.046;
    const minInvest = Math.max(
      25,
      Math.round(mainVolumeLiters * baseRatePerLiter * typeFactor * 0.85)
    );
    const maxInvest = Math.max(
      40,
      Math.round(mainVolumeLiters * baseRatePerLiter * typeFactor * 1.25)
    );

    const typeLabel =
      INSTALLATION_TYPES.find((t) => t.id === installType)?.label ??
      "Built-In";

    const waMessage = `Halo Tim Atelier ASEVA AQUATICS, saya ingin berkonsultasi mengenai pembuatan Aquarium Custom dengan spesifikasi:\n\n• Tipe Instalasi: ${typeLabel}\n• Dimensi: ${lengthCm} × ${widthCm} × ${heightCm} cm\n• Volume Utama: ~${mainVolumeLiters.toLocaleString("id-ID")} Liter (+Sump ${sumpVolumeLiters.toLocaleString("id-ID")} L)\n• Rekomendasi Kaca: ${glassSpec}\n\nMohon informasi jadwal konsultasi teknis lebih lanjut.`;
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(waMessage)}`;

    return {
      mainVolumeLiters,
      sumpVolumeLiters,
      totalWaterLiters,
      glassSpec,
      glassNote,
      totalWeightTons,
      minInvest,
      maxInvest,
      waUrl,
    };
  }, [lengthCm, widthCm, heightCm, installType]);

  return (
    <div className="rounded-3xl bg-[#0D0F17] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.85)] relative overflow-hidden">
      {/* Subtle Ambient Red Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-champagne/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center relative z-10">
        {/* Left: Interactive Sliders (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="font-mono text-[10px] text-champagne-light tracking-[0.25em] uppercase block mb-2">
              SIMULATOR REKAYASA HIDROLIKA & STRUKTUR
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              Kalkulator Spesifikasi <em className="italic text-champagne">Aquarium Custom</em>
            </h3>
          </div>

          {/* Installation Type Selector */}
          <div>
            <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-400 mb-3">
              1. Pilih Tipologi Instalasi Arsitektur
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {INSTALLATION_TYPES.map((type) => {
                const active = installType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setInstallType(type.id)}
                    className={`px-4 py-3 rounded-xl font-sans text-xs tracking-wider transition-all duration-300 text-left border ${
                      active
                        ? "bg-champagne/15 border-champagne text-white font-medium shadow-[0_0_20px_rgba(217,35,56,0.25)]"
                        : "bg-black/50 border-white/10 text-neutral-400 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span className="block text-[10px] font-mono text-champagne-light mb-0.5">
                      {active ? "● AKTIF" : "○ PILIH"}
                    </span>
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dimension Sliders */}
          <div className="space-y-6 bg-black/50 p-6 rounded-2xl border border-white/[0.06]">
            {/* Length */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label
                  htmlFor="calc-length"
                  className="font-sans text-xs uppercase tracking-[0.18em] text-neutral-300"
                >
                  Panjang Bentang (L)
                </label>
                <span className="font-mono text-base text-white font-medium">
                  {lengthCm} <span className="text-xs text-neutral-400">cm</span>{" "}
                  <span className="text-xs text-champagne-light">
                    ({(lengthCm / 100).toFixed(1)} m)
                  </span>
                </span>
              </div>
              <input
                id="calc-length"
                type="range"
                min={120}
                max={450}
                step={10}
                value={lengthCm}
                onChange={(e) => setLengthCm(Number(e.target.value))}
                className="w-full accent-[#D92338] h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-neutral-500 mt-1">
                <span>120 cm</span>
                <span>240 cm (Ideal Arwana)</span>
                <span>450 cm</span>
              </div>
            </div>

            {/* Width */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label
                  htmlFor="calc-width"
                  className="font-sans text-xs uppercase tracking-[0.18em] text-neutral-300"
                >
                  Lebar Kedalaman (W)
                </label>
                <span className="font-mono text-base text-white font-medium">
                  {widthCm} <span className="text-xs text-neutral-400">cm</span>
                </span>
              </div>
              <input
                id="calc-width"
                type="range"
                min={60}
                max={140}
                step={5}
                value={widthCm}
                onChange={(e) => setWidthCm(Number(e.target.value))}
                className="w-full accent-[#D92338] h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-neutral-500 mt-1">
                <span>60 cm</span>
                <span>80–100 cm (Manuver Bebas)</span>
                <span>140 cm</span>
              </div>
            </div>

            {/* Height */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label
                  htmlFor="calc-height"
                  className="font-sans text-xs uppercase tracking-[0.18em] text-neutral-300"
                >
                  Tinggi Kolom Air (H)
                </label>
                <span className="font-mono text-base text-white font-medium">
                  {heightCm} <span className="text-xs text-neutral-400">cm</span>
                </span>
              </div>
              <input
                id="calc-height"
                type="range"
                min={60}
                max={120}
                step={5}
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-[#D92338] h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-neutral-500 mt-1">
                <span>60 cm</span>
                <span>75–85 cm (Proporsi Emas)</span>
                <span>120 cm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Telemetry Output Readout (5 Cols) */}
        <div className="lg:col-span-5 bg-[#07080C] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-[10px] text-champagne-light tracking-widest uppercase block">
                OUTPUT TELEMETRI TEKNIS
              </span>
              <p className="font-mono text-xs text-neutral-400 mt-0.5">
                {lengthCm} × {widthCm} × {heightCm} cm
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-champagne/15 border border-champagne/30 font-mono text-[10px] text-champagne-light">
              SF 3.8×
            </span>
          </div>

          {/* 2x2 Telemetry Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-champagne-light mb-1.5">
                <Droplets size={14} />
                <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                  Volume Utama
                </span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl text-white font-light">
                {telemetry.mainVolumeLiters.toLocaleString("id-ID")}{" "}
                <span className="text-xs font-mono text-neutral-400">L</span>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 mt-1">
                +Sump {telemetry.sumpVolumeLiters.toLocaleString("id-ID")} L
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-champagne-light mb-1.5">
                <Scale size={14} />
                <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                  Beban Lantai
                </span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl text-white font-light">
                ~{telemetry.totalWeightTons}{" "}
                <span className="text-xs font-mono text-neutral-400">Ton</span>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 mt-1">
                Termasuk Kabinet & Sump
              </div>
            </div>

            <div className="col-span-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-champagne-light mb-1">
                  <Layers size={14} />
                  <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                    Spesifikasi Kaca Optik
                  </span>
                </div>
                <div className="font-serif text-xl text-white font-normal">
                  {telemetry.glassSpec}
                </div>
                <div className="font-mono text-[10px] text-neutral-400 mt-0.5">
                  {telemetry.glassNote}
                </div>
              </div>
              <ShieldCheck size={26} className="text-champagne/80 flex-shrink-0" />
            </div>
          </div>

          {/* Estimated Investment Box */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-champagne/15 via-champagne/[0.05] to-transparent border border-champagne/30">
            <span className="font-mono text-[10px] text-champagne-light tracking-widest uppercase block mb-1">
              ESTIMASI INVESTASI TURNKEY
            </span>
            <div className="font-serif text-2xl sm:text-3xl text-white font-light">
              Rp {telemetry.minInvest} – {telemetry.maxInvest}{" "}
              <span className="text-base font-sans text-neutral-300">Juta</span>
            </div>
            <p className="font-sans text-[11px] text-neutral-400 mt-1.5 leading-relaxed font-light">
              Mencakup tangki Low-Iron, sasis baja anti-korosi, kabinet interior, & sistem filtrasi sump senyap (&lt;28 dB).
            </p>
          </div>

          {/* Action CTA */}
          <a
            href={telemetry.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-champagne w-full justify-center text-xs py-4"
          >
            <MessageCircle size={15} />
            <span>Konsultasikan Spesifikasi Ini</span>
          </a>
        </div>
      </div>
    </div>
  );
}

