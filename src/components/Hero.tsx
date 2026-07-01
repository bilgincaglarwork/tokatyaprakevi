"use client";
import { useState } from "react";
import { Leaf, Truck, ShieldCheck, CreditCard } from "lucide-react";
import Image from "next/image";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

const OUTER = [
  { icon: Leaf, line1: "%100", line2: "Dogal" },
  { icon: ShieldCheck, line1: "Taze", line2: "Hijyenik" },
  { icon: CreditCard, line1: "Kapida", line2: "Odeme" },
  { icon: Truck, line1: "Hizli", line2: "Teslimat" },
];

export default function Hero() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Tokat Asma Yapragi"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 space-y-7 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
            <Leaf size={14} className="text-brand-gold" />
            <span className="text-sm font-medium tracking-wide">Tokat&apos;in Meshur Lezzeti</span>
          </div>

          <div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] drop-shadow-lg">
              Tokat Asma
              <br />
              Yapragi
            </h1>
            <p className="font-script text-4xl md:text-5xl text-brand-gold mt-3 drop-shadow-md">
              Sofraniza Gelsin
            </p>
          </div>

          <p className="text-white/80 max-w-lg text-lg leading-relaxed">
            Incecik, damarsiz ve aromasiyla fark yaratan Tokat asma yapraklarini ozenle seciyoruz, taze ve hijyenik sekilde kapiniza kadar getiriyoruz.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#siparis"
              className="bg-brand-green hover:bg-brand-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-brand-green/30 hover:shadow-xl hover:shadow-brand-green/40 hover:-translate-y-0.5"
            >
              Siparis Ver
            </a>
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-brand-dark font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm hover:-translate-y-0.5"
            >
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>

        {/* Right — Orbital layout */}
        <div className="flex-1 flex justify-center lg:justify-end">
          {/* Desktop */}
          <div className="relative w-[360px] h-[360px] hidden lg:block">
            {/* Orbit ring */}
            <div className="absolute inset-0 rounded-full border border-brand-gold/20" />
            <div className="absolute inset-6 rounded-full border border-dashed border-brand-gold/15" />

            {/* Center badge */}
            <div
              className="absolute top-1/2 left-1/2 cursor-default transition-all duration-500 ease-out"
              style={{
                transform: hovered !== null
                  ? "translate(-50%, -50%) scale(0.8)"
                  : "translate(-50%, -50%) scale(1)",
                opacity: hovered !== null ? 0.5 : 1,
                zIndex: hovered !== null ? 1 : 10,
              }}
            >
              <div className="w-[140px] h-[140px] rounded-full border-[3px] border-brand-gold/40 flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-brand-gold rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl shadow-brand-gold/40">
                  <span className="text-[9px] font-semibold tracking-widest uppercase opacity-80">Ince Damarsiz</span>
                  <span className="text-3xl font-bold mt-0.5">%100</span>
                  <span className="text-sm font-bold">DOGAL</span>
                  <span className="text-[9px] tracking-wider opacity-80">KATKISIZ</span>
                </div>
              </div>
            </div>

            {/* 4 orbiting circles — placed at 45°, 135°, 225°, 315° */}
            {OUTER.map((c, i) => {
              const angle = (i * 90 + 45) * (Math.PI / 180);
              const radius = 145;
              const cx = 180 + Math.cos(angle) * radius - 50;
              const cy = 180 + Math.sin(angle) * radius - 50;
              const isHovered = hovered === i;
              const isOther = hovered !== null && hovered !== i;

              return (
                <div
                  key={i}
                  className="absolute cursor-default transition-all duration-500 ease-out"
                  style={{
                    top: isHovered ? "50%" : cy,
                    left: isHovered ? "50%" : cx,
                    transform: isHovered
                      ? "translate(-50%, -50%) scale(1.6)"
                      : isOther
                        ? "scale(0.75)"
                        : "scale(1)",
                    zIndex: isHovered ? 20 : 5,
                    opacity: isOther ? 0.35 : 1,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="w-[100px] h-[100px] rounded-full border-[3px] border-brand-gold/40 flex items-center justify-center">
                    <div className="w-[84px] h-[84px] bg-brand-gold rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl shadow-brand-gold/30">
                      <c.icon size={18} className="mb-0.5 opacity-90" />
                      <span className="text-sm font-bold leading-tight">{c.line1}</span>
                      <span className="text-[10px] font-semibold leading-tight opacity-80">{c.line2}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="flex flex-wrap justify-center gap-3 lg:hidden">
            <div className="w-[100px] h-[100px] rounded-full border-2 border-brand-gold/40 flex items-center justify-center">
              <div className="w-[84px] h-[84px] bg-brand-gold rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl">
                <span className="text-[8px] font-semibold tracking-widest uppercase opacity-80">Ince Damarsiz</span>
                <span className="text-xl font-bold">%100</span>
                <span className="text-xs font-bold">DOGAL</span>
                <span className="text-[7px] tracking-wider opacity-80">KATKISIZ</span>
              </div>
            </div>
            {OUTER.map((c, i) => (
              <div key={i} className="w-[80px] h-[80px] rounded-full border-2 border-brand-gold/40 flex items-center justify-center">
                <div className="w-[66px] h-[66px] bg-brand-gold rounded-full flex flex-col items-center justify-center text-white text-center shadow-lg">
                  <c.icon size={14} className="mb-0.5 opacity-90" />
                  <span className="text-[10px] font-bold leading-tight">{c.line1}</span>
                  <span className="text-[8px] font-semibold opacity-80 leading-tight">{c.line2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
