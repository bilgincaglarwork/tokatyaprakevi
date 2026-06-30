"use client";
import { Leaf, Truck, ShieldCheck } from "lucide-react";
import Image from "next/image";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <p className="text-green-main font-semibold tracking-wide text-sm uppercase">
            Tokat&apos;in Meshur Lezzeti
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-green-dark leading-tight">
            Tokat Asma Yapragi
          </h1>
          <p className="font-script text-3xl md:text-4xl text-green-main -mt-2">
            Sofraniza Gelsin
          </p>
          <p className="text-text/70 max-w-lg leading-relaxed">
            Incecik, damarsiz ve aromasiyla fark yaratan Tokat asma yapraklarini ozenle seciyoruz, taze ve hijyenik sekilde kapiniza kadar getiriyoruz.
          </p>

          {/* Mini features */}
          <div className="flex flex-wrap gap-4 text-sm text-text/80">
            <span className="flex items-center gap-1.5">
              <Leaf size={16} className="text-green-main" /> %100 Dogal
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-green-main" /> Taze ve Hijyenik
            </span>
            <span className="flex items-center gap-1.5">
              <Truck size={16} className="text-green-main" /> Hizli Teslimat
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#siparis"
              className="bg-green-main hover:bg-green-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Siparis Ver
            </a>
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-main text-green-main hover:bg-green-main hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>

        {/* Right — image + badge */}
        <div className="flex-1 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Tokat Asma Yapragi"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 -right-2 md:bottom-4 md:-right-6 w-24 h-24 bg-gold rounded-full flex flex-col items-center justify-center text-white text-center shadow-lg border-4 border-white">
            <span className="text-[10px] font-bold leading-tight">%100</span>
            <span className="text-[10px] font-bold leading-tight">DOGAL</span>
            <span className="text-[8px] leading-tight">KATKISIZ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
