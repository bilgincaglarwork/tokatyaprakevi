import { Headphones, Package, Truck, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Headphones, label: "Ücretsiz Danışmanlık" },
  { icon: Package, label: "Hijyenik Paketleme" },
  { icon: Truck, label: "Hızlı Teslimat" },
  { icon: ShieldCheck, label: "Güvenli Alışveriş" },
];

export default function FeatureStrip() {
  return (
    <section className="bg-brand-cream">
      {/* Kayan şerit */}
      <div className="bg-brand-green overflow-hidden py-2.5">
        <div className="flex animate-marquee-fast whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-white text-sm font-medium mx-8 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
              Tokat ve Çevre İllere Gönderi
              <span className="mx-4 text-white/40">|</span>
              Tüm Türkiye&apos;ye Teslimat
              <span className="mx-4 text-white/40">|</span>
              Kapıda Ödeme
              <span className="mx-4 text-white/40">|</span>
              %100 Doğal &amp; Katkısız
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center">
                <f.icon size={24} className="text-brand-green" />
              </div>
              <span className="text-sm font-semibold text-brand-text">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
