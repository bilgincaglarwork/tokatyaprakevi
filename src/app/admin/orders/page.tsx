"use client";
import { useEffect, useState } from "react";
import { supabase, Order } from "@/lib/supabase";
import { Eye, X } from "lucide-react";

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  beklemede: { label: "Beklemede", color: "bg-amber-50 text-amber-700" },
  onaylandi: { label: "Onaylandı", color: "bg-blue-50 text-blue-700" },
  hazirlaniyor: { label: "Hazırlanıyor", color: "bg-purple-50 text-purple-700" },
  teslim_edildi: { label: "Teslim Edildi", color: "bg-green-50 text-green-700" },
  iptal: { label: "İptal", color: "bg-red-50 text-red-700" },
};

const STATUSES = ["beklemede", "onaylandi", "hazirlaniyor", "teslim_edildi", "iptal"];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Order | null>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const load = async () => {
      let query = supabase.from("orders").select("*").order("created_at", { ascending: false });
      if (filter !== "all") query = query.eq("status", filter);
      const { data } = await query;
      setOrders(data ?? []);
      setLoading(false);
    };
    load();
  }, [filter]);

  const refetch = async () => {
    let query = supabase.from("orders").select("*").order("created_at", { ascending: false });
    if (filter !== "all") query = query.eq("status", filter);
    const { data } = await query;
    setOrders(data ?? []);
  };

  const updateStatus = async (id: number, status: string) => {
    await supabase.from("orders").update({ status }).eq("id", id);
    refetch();
    if (selected?.id === id) {
      setSelected({ ...selected, status: status as Order["status"] });
    }
  };

  if (loading) {
    return <div className="flex justify-center py-20"><div className="animate-spin w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full" /></div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h1 className="text-2xl font-serif font-bold text-gray-900">Siparişler</h1>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === "all" ? "bg-brand-green text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Tümü
          </button>
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === s ? "bg-brand-green text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {STATUS_MAP[s].label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">#</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Müşteri</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Ürün</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Tarih</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Durum</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-400">#{o.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900 text-sm">{o.customer_name}</p>
                    <p className="text-gray-500 text-xs">{o.phone}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{o.product_name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(o.created_at).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={o.status}
                      onChange={(e) => updateStatus(o.id, e.target.value)}
                      className={`px-2 py-1 rounded-lg text-xs font-medium border-0 cursor-pointer ${STATUS_MAP[o.status]?.color ?? ""}`}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{STATUS_MAP[s].label}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => setSelected(o)} className="text-gray-400 hover:text-brand-green">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-400 text-sm">Sipariş bulunmuyor.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-serif font-bold text-gray-900">Sipariş #{selected.id}</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Müşteri</span><span className="font-medium">{selected.customer_name}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Telefon</span><span className="font-medium">{selected.phone}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Ürün</span><span className="font-medium">{selected.product_name}</span></div>
              <div><span className="text-gray-500">Adres</span><p className="font-medium mt-1">{selected.address}</p></div>
              {selected.note && <div><span className="text-gray-500">Not</span><p className="font-medium mt-1">{selected.note}</p></div>}
              <div className="flex justify-between"><span className="text-gray-500">Tarih</span><span className="font-medium">{new Date(selected.created_at).toLocaleString("tr-TR")}</span></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Durum</span>
                <select
                  value={selected.status}
                  onChange={(e) => updateStatus(selected.id, e.target.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border-0 cursor-pointer ${STATUS_MAP[selected.status]?.color ?? ""}`}
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>{STATUS_MAP[s].label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
