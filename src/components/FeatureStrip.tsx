import { Headphones, Package, Truck, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Headphones, label: "Ücretsiz Danışmanlık" },
  { icon: Package, label: "Hijyenik Paketleme" },
  { icon: Truck, label: "Hızlı Teslimat" },
  { icon: ShieldCheck, label: "Güvenli Alışveriş" },
];

export default function FeatureStrip() {
  return (
    <section className="bg-brand-cream py-10">
      <div className="max-w-7xl mx-auto px-4">
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
