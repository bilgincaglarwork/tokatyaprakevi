-- Run in Supabase SQL Editor
INSERT INTO storage.buckets (id, name, public) VALUES ('products', 'products', true);

CREATE POLICY "Public read" ON storage.objects FOR SELECT USING (bucket_id = 'products');
CREATE POLICY "Auth upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'products' AND auth.role() = 'authenticated');
CREATE POLICY "Auth update" ON storage.objects FOR UPDATE USING (bucket_id = 'products' AND auth.role() = 'authenticated');
CREATE POLICY "Auth delete" ON storage.objects FOR DELETE USING (bucket_id = 'products' AND auth.role() = 'authenticated');
