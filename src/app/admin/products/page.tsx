"use client";
import { useEffect, useState } from "react";
import { supabase, Product } from "@/lib/supabase";
import { Plus, Pencil, Trash2, X } from "lucide-react";

const EMPTY: Omit<Product, "id" | "created_at"> = {
  name: "",
  kg: 1,
  price: 0,
  description: "",
  image_url: "/images/product-1kg.jpg",
  active: true,
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Partial<Product> | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await supabase.from("products").select("*").order("kg");
    setProducts(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, created_at, ...rest } = editing as Product;

    if (id) {
      await supabase.from("products").update(rest).eq("id", id);
    } else {
      await supabase.from("products").insert(rest);
    }

    setEditing(null);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  };

  if (loading) {
    return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full" /></div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif font-bold text-gray-900">Ürünler</h1>
        <button
          onClick={() => setEditing({ ...EMPTY })}
          className="flex items-center gap-2 bg-brand-green hover:bg-brand-light text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          <Plus size={18} /> Yeni Ürün
        </button>
      </div>

      {/* Product list */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Ürün</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">KG</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Fiyat</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Durum</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900 text-sm">{p.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{p.description}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{p.kg} KG</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">₺{p.price.toLocaleString("tr-TR")}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${p.active ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {p.active ? "Aktif" : "Pasif"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => setEditing(p)} className="text-gray-400 hover:text-brand-green mr-3">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => handleDelete(p.id)} className="text-gray-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr><td colSpan={5} className="px-6 py-12 text-center text-gray-400 text-sm">Henüz ürün eklenmemiş.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit/Add Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-serif font-bold text-gray-900">
                {editing.id ? "Ürün Düzenle" : "Yeni Ürün Ekle"}
              </h2>
              <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ürün Adı</label>
                <input
                  type="text"
                  value={editing.name ?? ""}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                  placeholder="ör: 1 KG Tokat Yaprağı"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">KG</label>
                  <input
                    type="number"
                    value={editing.kg ?? 1}
                    onChange={(e) => setEditing({ ...editing, kg: Number(e.target.value) })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fiyat (₺)</label>
                  <input
                    type="number"
                    value={editing.price ?? 0}
                    onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
                <textarea
                  value={editing.description ?? ""}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  rows={2}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Görsel URL</label>
                <input
                  type="text"
                  value={editing.image_url ?? ""}
                  onChange={(e) => setEditing({ ...editing, image_url: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editing.active ?? true}
                  onChange={(e) => setEditing({ ...editing, active: e.target.checked })}
                  className="rounded border-gray-300"
                  id="active"
                />
                <label htmlFor="active" className="text-sm text-gray-700">Aktif (sitede görünsün)</label>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                İptal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium bg-brand-green hover:bg-brand-light text-white rounded-lg transition-colors"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
