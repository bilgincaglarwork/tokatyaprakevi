"use client";
import { useState } from "react";
import { ClipboardList, PhoneCall, Package, Banknote } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

const STEPS = [
  { icon: ClipboardList, title: "Siparisinizi Olusturun", desc: "Formu doldurun veya WhatsApp'tan yazin." },
  { icon: PhoneCall, title: "Arayip Teyit Edelim", desc: "Siparislerinizi onaylamak icin sizi arayalim." },
  { icon: Package, title: "Hazirlayalim", desc: "Yapraklarinizi ozenle paketleyelim." },
  { icon: Banknote, title: "Kapida Odeyin", desc: "Teslimat sirasinda odemeni yapin." },
];

const PRODUCTS_OPTIONS = [
  "1 KG Tokat Yapragi - 350 TL",
  "3 KG Tokat Yapragi - 950 TL",
  "5 KG Tokat Yapragi - 1.500 TL",
];

export default function OrderSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: PRODUCTS_OPTIONS[0],
    address: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Merhaba, siparis vermek istiyorum.`,
      `Ad Soyad: ${form.name}`,
      `Telefon: ${form.phone}`,
      `Urun: ${form.product}`,
      `Adres: ${form.address}`,
      form.note ? `Not: ${form.note}` : "",
      `Odeme: Kapida Odeme`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="siparis" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          {/* Left — Steps */}
          <div className="bg-brand-dark text-white p-8 lg:p-12 lg:w-2/5 space-y-8">
            <div>
              <p className="text-brand-green font-semibold text-sm tracking-wide uppercase mb-2">
                Kapida Odeme ile
              </p>
              <h2 className="font-serif text-2xl md:text-3xl leading-snug">
                Siparisinizi Olusturun
              </h2>
            </div>
            <div className="space-y-6">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center shrink-0">
                    <s.icon size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {i + 1}. {s.title}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white p-8 lg:p-12 lg:w-3/5">
            <h3 className="font-serif text-xl text-brand-dark mb-6">Siparis Formu</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-brand-text/70 mb-1">Ad Soyad</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-text/70 mb-1">Telefon</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-brand-text/70 mb-1">Urun Secimi</label>
                <select
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 bg-white"
                >
                  {PRODUCTS_OPTIONS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-brand-text/70 mb-1">Adres</label>
                <textarea
                  required
                  rows={2}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-brand-text/70 mb-1">Siparis Notu (Opsiyonel)</label>
                <textarea
                  rows={2}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 resize-none"
                />
              </div>
              <div className="bg-brand-cream rounded-lg px-4 py-3 text-sm text-brand-text/70">
                Odeme Yontemi: <strong className="text-brand-text">Kapida Odeme</strong>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-light text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Siparis Talebi Gonder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
