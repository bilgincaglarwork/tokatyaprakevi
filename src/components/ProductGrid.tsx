"use client";
import Image from "next/image";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

const PRODUCTS = [
  {
    kg: 1,
    name: "1 KG Tokat Yapragi",
    price: "350",
    desc: "Ev kullanimi icin ideal ozenle secilmis yapraklar.",
    img: "/images/product-1kg.jpg",
  },
  {
    kg: 3,
    name: "3 KG Tokat Yapragi",
    price: "950",
    desc: "Kalabalik aileler ve stok yapmak isteyenler icin.",
    img: "/images/product-3kg.jpg",
  },
  {
    kg: 5,
    name: "5 KG Tokat Yapragi",
    price: "1.500",
    desc: "Toplu alim, restoran ve ev yapimi uretim icin ideal secim.",
    img: "/images/product-5kg.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section id="urunler" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-green-main font-semibold text-sm tracking-wide uppercase mb-2">
          Urunlerimiz
        </p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-green-dark mb-10">
          Ihtiyaciniza Uygun Secenekler
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((p) => (
            <div
              key={p.kg}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative h-56">
                <Image src={p.img} alt={p.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute top-3 left-3 bg-green-main text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.kg} KG
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl text-green-dark font-semibold">{p.name}</h3>
                <p className="text-text/60 text-sm mt-1 flex-1">{p.desc}</p>
                <p className="text-2xl font-bold text-green-main mt-3">
                  &#8378;{p.price}
                </p>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(`Merhaba, ${p.name} siparis vermek istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-green-main hover:bg-green-light text-white font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Siparis Ver
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
