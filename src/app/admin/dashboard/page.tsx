"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Package, ShoppingCart, Clock, CheckCircle } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      const [products, orders, pending, delivered] = await Promise.all([
        supabase.from("products").select("id", { count: "exact", head: true }).eq("active", true),
        supabase.from("orders").select("id", { count: "exact", head: true }),
        supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "beklemede"),
        supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "teslim_edildi"),
      ]);
      setStats({
        totalProducts: products.count ?? 0,
        totalOrders: orders.count ?? 0,
        pendingOrders: pending.count ?? 0,
        deliveredOrders: delivered.count ?? 0,
      });
    }
    fetchStats();
  }, []);

  const cards = [
    { label: "Aktif Ürünler", value: stats.totalProducts, icon: Package, color: "bg-blue-500" },
    { label: "Toplam Sipariş", value: stats.totalOrders, icon: ShoppingCart, color: "bg-brand-green" },
    { label: "Bekleyen Sipariş", value: stats.pendingOrders, icon: Clock, color: "bg-amber-500" },
    { label: "Teslim Edilen", value: stats.deliveredOrders, icon: CheckCircle, color: "bg-emerald-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-serif font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${c.color} rounded-lg flex items-center justify-center`}>
                <c.icon size={20} className="text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{c.value}</p>
            <p className="text-sm text-gray-500 mt-1">{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
