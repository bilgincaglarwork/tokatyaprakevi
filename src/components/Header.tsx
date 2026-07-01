"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "0545 257 52 28";
const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

const NAV = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Ürünlerimiz", href: "#urunler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Neden Biz?", href: "#neden-biz" },
  { label: "Sipariş Ver", href: "#siparis" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="#" className="flex items-center shrink-0">
          <Image src="/images/logo.png" alt="Tokat Yaprak Evi" width={160} height={160} className="h-28 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href + n.label}
              href={n.href}
              className="relative text-base font-serif font-semibold text-brand-dark hover:text-brand-green transition-colors duration-300 py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${WA}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-brand-green hover:bg-brand-light text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-base shadow-md hover:shadow-lg"
        >
          <Phone size={18} />
          {PHONE}
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden text-brand-text" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t px-4 pb-4 space-y-1">
          {NAV.map((n) => (
            <a
              key={n.href + n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-serif font-semibold text-brand-dark hover:text-brand-green hover:pl-2 transition-all duration-200"
            >
              {n.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-green text-white font-semibold px-5 py-2.5 rounded-lg w-fit text-base mt-2"
          >
            <Phone size={18} />
            {PHONE}
          </a>
        </nav>
      )}
    </header>
  );
}
