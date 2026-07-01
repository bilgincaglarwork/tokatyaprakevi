"use client";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(
  url || "https://placeholder.supabase.co",
  key || "placeholder"
);

export const isSupabaseConfigured = !!(url && key && !url.includes("placeholder"));

export type Product = {
  id: number;
  name: string;
  kg: number;
  price: number;
  description: string;
  image_url: string;
  active: boolean;
  created_at: string;
};

export type Order = {
  id: number;
  customer_name: string;
  phone: string;
  product_name: string;
  address: string;
  note: string | null;
  status: "beklemede" | "onaylandi" | "hazirlaniyor" | "teslim_edildi" | "iptal";
  created_at: string;
};
