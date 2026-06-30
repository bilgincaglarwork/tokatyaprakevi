"use client";
import { MessageCircle } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="bg-green-dark text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <p className="flex flex-wrap gap-x-2 gap-y-0.5">
          <span>Tokat ve Cevre Illere Hizli Teslimat</span>
          <span className="hidden sm:inline">•</span>
          <span>Kapida Odeme Kolayligi</span>
          <span className="hidden sm:inline">•</span>
          <span>%100 Dogal, Katkisiz</span>
        </p>
        <div className="flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
