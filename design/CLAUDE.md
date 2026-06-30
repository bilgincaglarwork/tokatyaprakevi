# Tokat Yaprak Evi — Statik Landing Page (Claude Code için)

**tokatyaprakevi.com** için TEK SAYFA statik landing. Tokat asma yaprağı (sarmalık) satışı.
Backend YOK, veritabanı YOK, admin YOK. Siparişler WhatsApp üzerinden alınır.
Tasarım referansı: `/design/landing.png` — renk, font, boşluk ve düzeni BİREBİR uydur.

## Stack
- Next.js 14 (App Router, TypeScript) — Vercel'e statik deploy
- Tailwind CSS
- lucide-react (ikonlar)
- Tek bağımlılık felsefesi: hafif tut, gereksiz paket ekleme.

## Sipariş akışı (backend yok)
- "Sipariş Ver" / "WhatsApp'tan Yaz" butonları → `https://wa.me/<NUMARA>` açar.
- Sayfa altındaki sipariş formu (Ad Soyad, Telefon, Ürün Seçimi, Adres, Sipariş Notu,
  Ödeme: Kapıda Ödeme) → "Sipariş Talebi Gönder" basınca alanlardan WhatsApp mesajı
  oluşturup `https://wa.me/<NUMARA>?text=...` ile açar. Hiçbir veri sunucuya gitmez.
- Telefon/WhatsApp/e-posta env'den gelsin:
  NEXT_PUBLIC_WHATSAPP_PHONE=905452575228
  NEXT_PUBLIC_CONTACT_PHONE=0545 257 52 28
  NEXT_PUBLIC_CONTACT_EMAIL=info@tokatyaprakevi.com

## Landing bölümleri (sırayla, /design/landing.png'e göre)
1. **Üst şerit** (koyu yeşil): "Tokat ve Çevre İllere Hızlı Teslimat • Kapıda Ödeme Kolaylığı • %100 Doğal, Katkısız" + Instagram/Facebook/WhatsApp ikonları
2. **Header**: logo (yaprak + "TOKAT YAPRAK EVİ"), nav (Ana Sayfa, Ürünlerimiz, Hakkımızda, Neden Biz?, Sipariş Ver, İletişim), yeşil WhatsApp butonu (telefon)
3. **Hero**: sol "TOKAT'IN MEŞHUR LEZZETİ / **Tokat Asma Yaprağı** / *Sofranıza Gelsin*" (2. satır script font) + açıklama + 3 mini özellik + "Sipariş Ver" / "WhatsApp'tan Yaz" butonları; sağda sarma fotoğrafı + dairesel "%100 DOĞAL KATKISIZ" rozeti
4. **Ürünler**: "Ürünlerimiz / İhtiyacınıza Uygun Seçenekler" — 3 kart statik:
   - 1 KG Tokat Yaprağı — ₺350 — "Ev kullanımı için ideal özenle seçilmiş yapraklar."
   - 3 KG Tokat Yaprağı — ₺950 — "Kalabalık aileler ve stok yapmak isteyenler için."
   - 5 KG Tokat Yaprağı — ₺1.500 — "Toplu alım, restoran ve ev yapımı üretim için ideal seçim."
   Her kartta KG rozeti + "Sipariş Ver" butonu (WhatsApp'a o ürünle önyazılı mesaj açar).
5. **Özellik şeridi**: Ücretsiz Danışmanlık, Hijyenik Paketleme, Hızlı Teslimat, Güvenli Alışveriş
6. **Neden Tokat Yaprak Evi?**: 5 ikon — Tokat Yöresinden, İncecik ve Damarsız, Katkısız & Doğal, Kapıda Ödeme, Yerel Teslimat
7. **Hakkımızda**: fotoğraf + "Tokat'ın Bereketi Sofralarınıza" metni + 4 istatistik (10+ Yıllık Tecrübe, 5.000+ Mutlu Müşteri, 100% Memnuniyet, 7/24 Destek)
8. **Yorumlar**: 3 müşteri yorumu kartı (5 yıldız) — Ayşe K./Tokat, Mehmet D./Turhal, Fatma Y./Niksar
9. **Sipariş bölümü**: koyu yeşil sol panel (4 adımlık süreç: oluştur → arayıp teyit → hazırla → kapıda öde) + sağda form (yukarıdaki WhatsApp akışı)
10. **Footer** (koyu yeşil): logo + slogan, Hızlı Linkler, Teslimat Bölgeleri (Tokat, Turhal, Zile, Erbaa, Niksar, Reşadiye, Amasya, Sivas, Çorum, Yozgat ve Çevresi), İletişim (telefon, e-posta, "Tokat, Türkiye", Pzt-Cmt 08.00-20.00), © 2024

## Tasarım sistemi (görsele göre ince ayarla)
- Ana yeşil: `#4A6B3A` | koyu yeşil panel/footer: `#2E3A22` | krem zemin: `#F6F2E9` | kart: `#FFF` | metin: `#2A2A2A` | altın rozet: `#C9A24B`
- Başlık: serif (Playfair Display); script vurgu (Great Vibes/Dancing Script) sadece "Sofranıza Gelsin" gibi alt başlıklarda; gövde: Inter.
- Mobil öncelikli responsive.
- Görseller `/public/images/` (hero.jpg, product-1kg/3kg/5kg.jpg, about.jpg). Yoksa placeholder kullan, dosya adları net olsun.

## Çalışma akışı
Bileşenlere böl (TopBar, Header, Hero, ProductGrid, FeatureStrip, WhyUs, About, Testimonials, OrderSection, Footer). Tek seferde kur, sonra commit+push. SEO: Türkçe meta + Open Graph + favicon + sitemap + robots. Sahte rakam/yorum uydurma; tasarımdaki örnek içerikle kal.
