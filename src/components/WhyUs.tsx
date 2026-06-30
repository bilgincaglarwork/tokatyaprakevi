import { MapPin, Feather, Leaf, CreditCard, Truck } from "lucide-react";

const REASONS = [
  { icon: MapPin, title: "Tokat Yoresinden", desc: "Dogrudan Tokat'in bereketli topraklarindan" },
  { icon: Feather, title: "Incecik ve Damarsiz", desc: "Ozenle secilmis en kaliteli yapraklar" },
  { icon: Leaf, title: "Katkisiz & Dogal", desc: "Hicbir kimyasal islem uygulanmaz" },
  { icon: CreditCard, title: "Kapida Odeme", desc: "Guvenli kapida odeme imkani" },
  { icon: Truck, title: "Yerel Teslimat", desc: "Tokat ve cevre illere hizli gonderim" },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-green-main font-semibold text-sm tracking-wide uppercase mb-2">
          Neden Biz?
        </p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-green-dark mb-10">
          Neden Tokat Yaprak Evi?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {REASONS.map((r) => (
            <div key={r.title} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-16 h-16 bg-green-main/10 rounded-full flex items-center justify-center">
                <r.icon size={28} className="text-green-main" />
              </div>
              <h3 className="font-semibold text-text text-sm">{r.title}</h3>
              <p className="text-text/60 text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
