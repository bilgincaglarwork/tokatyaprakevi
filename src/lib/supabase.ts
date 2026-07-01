import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    if (!supabaseUrl || !supabaseAnonKey) {
      // Return a dummy client that won't crash during build
      return createClient("https://placeholder.supabase.co", "placeholder");
    }
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
}

// Lazy-initialized singleton for convenience
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabase() as never)[prop];
  },
});

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
