import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

  client = createClient(
    url || "https://placeholder.supabase.co",
    key || "placeholder"
  );
  return client;
}

export const supabase = {
  get auth() { return getSupabaseClient().auth; },
  from(table: string) { return getSupabaseClient().from(table); },
};

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
