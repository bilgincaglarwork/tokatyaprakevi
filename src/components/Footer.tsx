import { Phone, Mail, MapPin, Clock } from "lucide-react";

const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "0545 257 52 28";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@tokatyaprakevi.com";

const QUICK_LINKS = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Urunlerimiz", href: "#urunler" },
  { label: "Hakkimizda", href: "#hakkimizda" },
  { label: "Siparis Ver", href: "#siparis" },
];

const REGIONS = [
  "Tokat", "Turhal", "Zile", "Erbaa", "Niksar", "Resadiye", "Amasya", "Sivas", "Corum", "Yozgat ve Cevresi",
];

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-green-main rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 8.28-4.95 9-10.55C17.85 8.05 17 8 17 8z" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="font-serif font-bold text-lg tracking-wide">TOKAT</span>
                <span className="block font-serif text-green-main text-xs tracking-widest">YAPRAK EVI</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Tokat&apos;in en kaliteli asma yapraklari, dogrudan sofralariniza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Hizli Linkler</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Teslimat Bolgeleri</h4>
            <ul className="space-y-1 text-white/60 text-sm">
              {REGIONS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Iletisim</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-green-main shrink-0" />
                {PHONE}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-green-main shrink-0" />
                {EMAIL}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-green-main shrink-0" />
                Tokat, Turkiye
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-green-main shrink-0" />
                Pzt-Cmt 08.00-20.00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white/40 text-xs">
          &copy; 2024 Tokat Yaprak Evi. Tum haklari saklidir.
        </div>
      </div>
    </footer>
  );
}
