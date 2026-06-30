import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tokat Yaprak Evi | Tokat Asma Yapragi - Sarmalik Yaprak",
  description:
    "Tokat'in en kaliteli asma yapraklari. Incecik, damarsiz, %100 dogal sarmalik Tokat yapragi. Kapida odeme, hizli teslimat. Siparis icin WhatsApp'tan yazin.",
  keywords: [
    "tokat yapragi",
    "asma yapragi",
    "sarmalik yaprak",
    "tokat asma yapragi",
    "yaprak sarma",
    "tokat yaprak evi",
  ],
  openGraph: {
    title: "Tokat Yaprak Evi | Tokat Asma Yapragi",
    description:
      "Tokat'in meshur asma yapraklari, dogrudan sofralariniza. %100 dogal, katkisiz.",
    url: "https://tokatyaprakevi.com",
    siteName: "Tokat Yaprak Evi",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
