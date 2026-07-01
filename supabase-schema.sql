-- Supabase SQL Editor'da çalıştırın

-- Ürünler tablosu
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  kg INTEGER NOT NULL,
  price INTEGER NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '/images/product-1kg.jpg',
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Siparişler tablosu
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_name TEXT NOT NULL,
  address TEXT NOT NULL,
  note TEXT,
  status TEXT NOT NULL DEFAULT 'beklemede'
    CHECK (status IN ('beklemede', 'onaylandi', 'hazirlaniyor', 'teslim_edildi', 'iptal')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Başlangıç ürünleri
INSERT INTO products (name, kg, price, description, image_url) VALUES
  ('1 KG Tokat Yaprağı', 1, 350, 'Ev kullanımı için ideal özenle seçilmiş yapraklar.', '/images/product-1kg.jpg'),
  ('3 KG Tokat Yaprağı', 3, 950, 'Kalabalık aileler ve stok yapmak isteyenler için.', '/images/product-3kg.jpg'),
  ('5 KG Tokat Yaprağı', 5, 1500, 'Toplu alım, restoran ve ev yapımı üretim için ideal seçim.', '/images/product-5kg.jpg');

-- RLS (Row Level Security) - herkese okuma izni
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Herkes ürünleri okuyabilir" ON products
  FOR SELECT USING (true);

CREATE POLICY "Herkes sipariş oluşturabilir" ON orders
  FOR INSERT WITH CHECK (true);

-- Auth olan kullanıcılar (admin) her şeyi yapabilir
CREATE POLICY "Admin ürün yönetimi" ON products
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin sipariş yönetimi" ON orders
  FOR ALL USING (auth.role() = 'authenticated');
