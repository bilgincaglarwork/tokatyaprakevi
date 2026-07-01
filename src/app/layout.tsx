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
  title: "Tokat Yaprak Evi | Tokat Asma Yaprağı - Sarmalık Yaprak",
  description:
    "Tokat'ın en kaliteli asma yaprakları. İncecik, damarsız, %100 doğal sarmalık Tokat yaprağı. Kapıda ödeme, hızlı teslimat. Sipariş için WhatsApp'tan yazın.",
  keywords: [
    "tokat yaprağı",
    "asma yaprağı",
    "sarmalık yaprak",
    "tokat asma yaprağı",
    "yaprak sarma",
    "tokat yaprak evi",
  ],
  openGraph: {
    title: "Tokat Yaprak Evi | Tokat Asma Yaprağı",
    description:
      "Tokat'ın meşhur asma yaprakları, doğrudan sofralarınıza. %100 doğal, katkısız.",
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
