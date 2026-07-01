"use client";
import { MapPin, Feather, Leaf, CreditCard, Truck } from "lucide-react";

const REASONS = [
  { icon: MapPin, title: "Tokat Yoresinden", desc: "Dogrudan Tokat'in bereketli topraklarindan ozenle toplanir.", color: "from-green-600 to-green-800" },
  { icon: Feather, title: "Incecik ve Damarsiz", desc: "Bir bir elle secilmis, sarma icin en ideal yapraklar.", color: "from-emerald-500 to-emerald-700" },
  { icon: Leaf, title: "Katkisiz & Dogal", desc: "Hicbir kimyasal islem veya katki maddesi kullanilmaz.", color: "from-lime-600 to-green-700" },
  { icon: CreditCard, title: "Kapida Odeme", desc: "Urun elinize ulastiginda guvenle odemenizi yapin.", color: "from-amber-500 to-amber-700" },
  { icon: Truck, title: "Yerel Teslimat", desc: "Tokat ve cevre illere ayni gun hizli gonderim.", color: "from-teal-500 to-teal-700" },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-brand-green font-semibold text-sm tracking-wide uppercase mb-2">
          Neden Biz?
        </p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-brand-dark mb-4">
          Neden Tokat Yaprak Evi?
        </h2>
        <p className="text-center text-brand-text/60 max-w-2xl mx-auto mb-14">
          Kalite, guven ve lezzeti bir arada sunuyoruz. Iste bizi tercih etmeniz icin 5 neden.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${r.color} transition-all duration-500 group-hover:h-1.5`} />

              {/* Number watermark */}
              <span className="absolute -right-2 -top-4 text-8xl font-bold text-brand-green/[0.04] group-hover:text-brand-green/[0.08] transition-colors duration-500 select-none">
                {i + 1}
              </span>

              {/* Icon */}
              <div className="relative w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-green group-hover:rotate-6 transition-all duration-500">
                <r.icon size={28} className="text-brand-green group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Text */}
              <h3 className="font-serif font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-green transition-colors duration-300">
                {r.title}
              </h3>
              <p className="text-brand-text/60 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
