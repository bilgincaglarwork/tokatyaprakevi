"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase, Product } from "@/lib/supabase";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "905452575228";

// Fallback data in case Supabase is not configured yet
const FALLBACK: Product[] = [
  { id: 1, kg: 1, name: "1 KG Tokat Yaprağı", price: 350, description: "Ev kullanımı için ideal özenle seçilmiş yapraklar.", image_url: "/images/product-1kg.jpg", active: true, created_at: "" },
  { id: 2, kg: 3, name: "3 KG Tokat Yaprağı", price: 950, description: "Kalabalık aileler ve stok yapmak isteyenler için.", image_url: "/images/product-3kg.jpg", active: true, created_at: "" },
  { id: 3, kg: 5, name: "5 KG Tokat Yaprağı", price: 1500, description: "Toplu alım, restoran ve ev yapımı üretim için ideal seçim.", image_url: "/images/product-5kg.jpg", active: true, created_at: "" },
];

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>(FALLBACK);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .eq("active", true)
      .order("kg")
      .then(({ data }) => {
        if (data && data.length > 0) setProducts(data);
      });
  }, []);

  return (
    <section id="urunler" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-brand-green font-semibold text-sm tracking-wide uppercase mb-2">
          Ürünlerimiz
        </p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-brand-dark mb-10">
          İhtiyacınıza Uygun Seçenekler
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative h-56">
                <Image src={p.image_url} alt={p.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.kg} KG
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl text-brand-dark font-semibold">{p.name}</h3>
                <p className="text-brand-text/60 text-sm mt-1 flex-1">{p.description}</p>
                <p className="text-2xl font-bold text-brand-green mt-3">
                  ₺{p.price.toLocaleString("tr-TR")}
                </p>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(`Merhaba, ${p.name} sipariş vermek istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-brand-green hover:bg-brand-light text-white font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Sipariş Ver
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
