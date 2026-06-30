"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "0545 257 52 28";
const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

const NAV = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Urunlerimiz", href: "#urunler" },
  { label: "Hakkimizda", href: "#hakkimizda" },
  { label: "Neden Biz?", href: "#neden-biz" },
  { label: "Siparis Ver", href: "#siparis" },
  { label: "Iletisim", href: "#iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-main rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 8.28-4.95 9-10.55C17.85 8.05 17 8 17 8z" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-serif font-bold text-green-dark text-lg tracking-wide">TOKAT</span>
            <span className="block font-serif text-green-main text-xs tracking-widest">YAPRAK EVI</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.href + n.label} href={n.href} className="text-sm text-text hover:text-green-main transition-colors font-medium">
              {n.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${WA}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-green-main hover:bg-green-light text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Phone size={16} />
          {PHONE}
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden text-text" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t px-4 pb-4 space-y-2">
          {NAV.map((n) => (
            <a key={n.href + n.label} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-text hover:text-green-main font-medium">
              {n.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-main text-white text-sm font-semibold px-4 py-2 rounded-lg w-fit"
          >
            <Phone size={16} />
            {PHONE}
          </a>
        </nav>
      )}
    </header>
  );
}
