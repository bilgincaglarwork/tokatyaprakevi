import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
