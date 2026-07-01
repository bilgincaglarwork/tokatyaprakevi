import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fetnknioncyngivfmnph.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldG5rbmlvbmN5bmdpdmZtbnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NDE1OTksImV4cCI6MjA5NzIxNzU5OX0.SjO2hpDEkqLNQ1Y-fUA6eK94Ey0SuHD_xX1f6Z8MrJo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
