import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "0545 257 52 28";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@tokatyaprakevi.com";

const QUICK_LINKS = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Ürünlerimiz", href: "#urunler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Sipariş Ver", href: "#siparis" },
];

const REGIONS = [
  "Tokat", "Turhal", "Zile", "Erbaa", "Niksar", "Reşadiye", "Amasya", "Sivas", "Çorum", "Yozgat ve Çevresi",
];

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/images/logo.png" alt="Tokat Yaprak Evi" width={160} height={160} className="h-28 w-auto brightness-110" />
            <p className="text-white/60 text-sm leading-relaxed">
              Tokat&apos;ın en kaliteli asma yaprakları, doğrudan sofralarınıza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Hızlı Linkler</h4>
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
            <h4 className="font-semibold mb-4 text-sm">Teslimat Bölgeleri</h4>
            <ul className="space-y-1 text-white/60 text-sm">
              {REGIONS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">İletişim</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-green shrink-0" />
                {PHONE}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-green shrink-0" />
                {EMAIL}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-green shrink-0" />
                Ertugrulgazi, Gazi Blv. No:42, 60500 Erbaa/Tokat, Türkiye
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-brand-green shrink-0" />
                Pzt-Cmt 08.00-20.00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white/40 text-xs">
          &copy; 2024 Tokat Yaprak Evi. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
