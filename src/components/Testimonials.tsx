import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Ayşe K.", loc: "Tokat", text: "Yapraklar çok taze ve lezzetliydi. Sarma yaparken hiç yırtılmadı. Kesinlikle tavsiye ederim!" },
  { name: "Mehmet D.", loc: "Turhal", text: "Siparişim aynı gün kargolandı, ertesi gün elimdeydi. Kalite ve hız bir arada. Teşekkürler!" },
  { name: "Fatma Y.", loc: "Niksar", text: "Yıllardır farklı yerlerden yaprak aldım ama bu kadar ince ve damarsız yaprak ilk defa buldum. Harika!" },
  { name: "Ali R.", loc: "Erbaa", text: "Annemin yapraklarını hatırlatan bir tat. Gerçekten Tokat'ın özü bu yapraklar." },
  { name: "Zeynep S.", loc: "Amasya", text: "Komşuya ikram ettim, o da hemen sipariş verdi. Herkes bayıldı sarmalara!" },
  { name: "Hasan B.", loc: "Sivas", text: "Restoran için toplu aldım, müşterilerimiz çok memnun kaldı. Sürekli sipariş veriyoruz." },
  { name: "Elif T.", loc: "Tokat", text: "Kapıda ödeme seçeneği çok güven verici. Ürün gelene kadar ödeme yapmamak büyük artı." },
  { name: "Murat C.", loc: "Zile", text: "Paketleme çok özenli, yapraklar sapasağlam geldi. Tek bir kırık yaprak bile yoktu." },
  { name: "Havva N.", loc: "Çorum", text: "Bayramda misafirler için aldım, sofrada en çok beğenilenler yaprak sarması oldu." },
  { name: "Kemal A.", loc: "Yozgat", text: "Fiyat/performans olarak piyasadaki en iyi seçeneklerden biri. Tavsiye ederim." },
  { name: "Gülşen M.", loc: "Tokat", text: "Her ay düzenli sipariş veriyorum, kalite hiç düşmüyor. Güvenilir bir marka." },
  { name: "Osman P.", loc: "Turhal", text: "Yaprakların inceliğini ve kokusunu tarif edemem. Açıp koklayınca Tokat'a gidiyorsunuz." },
  { name: "Derya E.", loc: "Niksar", text: "Anneanneme gönderdim, çok sevindi. Eline sağlık dedi bana sanki ben sarmışım!" },
  { name: "Burak H.", loc: "Erbaa", text: "3 kg'lık paketi aldım, buzluğa koydum. Aylarca taze kalıyor, muhteşem!" },
  { name: "Sema O.", loc: "Reşadiye", text: "İlk defa internetten yaprak aldım, hiç pişman olmadım. Eline sağlık!" },
  { name: "Yusuf K.", loc: "Amasya", text: "Kargoyla gelen yaprak bu kadar taze olabilir mi dedim. Şaşırdım, bravo!" },
  { name: "Nurcan D.", loc: "Tokat", text: "Komşularla beraber toplu sipariş verdik, herkese ayrı ayrı paketlenmiş geldi. Çok düşüncelisiniz." },
  { name: "Emre V.", loc: "Sivas", text: "Eşimin en sevdiği yemek yaprak sarma, artık yaprak bulmak dert değil. Sağolun!" },
  { name: "Hatice L.", loc: "Zile", text: "5 kg aldım düğün için, 500 yaprak sardık hiç biri yırtılmadı. Kalite üstü kalite." },
  { name: "İbrahim G.", loc: "Çorum", text: "Dedemin bağ yapraklarının tadını arıyordum, sonunda buldum. Bu yapraklar o tat!" },
  { name: "Sevgi U.", loc: "Tokat", text: "WhatsApp'tan sipariş vermek çok kolay. Yazıyorsunuz, hemen dönüyorlar." },
  { name: "Cengiz F.", loc: "Turhal", text: "Arkadaşıma hediye gönderdim, o kadar beğendi ki kendi de sipariş verdi." },
  { name: "Pınar Z.", loc: "Niksar", text: "Yapraklar hem büyük hem ince. Sarma yapmak zevkli hale geliyor." },
  { name: "Serkan I.", loc: "Erbaa", text: "İlk siparişte biraz tereddüt ettim ama şimdi düzenli müşteriyim. Güvenebilirsiniz." },
  { name: "Mine T.", loc: "Yozgat", text: "Ramazanda çok yoğun sipariş veriyoruz, hiç aksaklık yaşanmadı. Teslimat hep zamanında." },
  { name: "Volkan S.", loc: "Amasya", text: "Lokantam için 5'er kiloluk paketler alıyorum. Müşterilerim yaprak sarmayı çok seviyor." },
  { name: "Tuğba R.", loc: "Tokat", text: "Anne tarifimle bu yaprakları birleştirince muhteşem oluyor. Teşekkürler Tokat Yaprak Evi!" },
  { name: "Adem N.", loc: "Sivas", text: "Kurye çok kibar ve ilgiliydi. Ürün de paketleme de teslimat da 10 numara." },
  { name: "Fadime C.", loc: "Reşadiye", text: "Köyde büyüdüm, bu yapraklar köyün yaprakları gibi doğal. Hiç kimyasal kokusu yok." },
  { name: "Ömer B.", loc: "Turhal", text: "Çocuklar yaprak sarmayı sevmezdi, bu yapraklarla yapınca yemeye başladılar!" },
  { name: "Sibel A.", loc: "Zile", text: "Her yaprak birbirinin aynısı, seçim çok özenli yapılmış belli. Kaliteli iş." },
  { name: "Tarkan M.", loc: "Tokat", text: "Gurme bir arkadaşım var, o bile bu yaprakları övdü. Bu kadarını beklemiyordum." },
  { name: "Esra H.", loc: "Çorum", text: "Anneler gününde anneme sürpriz gönderdim, çok duygulanmış. Güzel bir hediye fikri!" },
  { name: "Kadir Y.", loc: "Niksar", text: "Geçen yıl da almıştım, bu yıl da aynı kalite. Tutarlılık çok önemli, bravo." },
  { name: "Dilek P.", loc: "Erbaa", text: "Komşu illere de gönderdiklerini bilmiyordum. Amasya'daki teyzeme de yollattım." },
  { name: "Ferhat E.", loc: "Yozgat", text: "Kargo kutusunun içi köpük korumayla doluydu, yapraklar tertemiz geldi. Özen görüldü." },
  { name: "Rabia O.", loc: "Tokat", text: "İftar sofrasında yaprak sarma olmazsa olmaz. Bu yapraklarla iftar çok güzel geçiyor." },
  { name: "İsmail K.", loc: "Turhal", text: "Esnaf olarak söyleyeyim, bu fiyata bu kaliteyi başka yerde bulamazsınız." },
  { name: "Melek D.", loc: "Amasya", text: "Instagram'dan gördüm, sipariş verdim. Gerçekten fotoğraflardaki gibi geldi, şaşırmadım." },
  { name: "Cem V.", loc: "Sivas", text: "Piknik için aldık, mangal yanında sarma sardık. Harika bir deneyimdi!" },
  { name: "Sultan G.", loc: "Reşadiye", text: "Yıllardır Tokat'tan yaprak getirtiyordum, artık bu kadar uğraşma yok. Tek tık ile sipariş!" },
  { name: "Barış L.", loc: "Zile", text: "Teslimat süresi inanılmaz hızlı. Sabah sipariş verdim, akşam elimdeydi." },
  { name: "Neslihan F.", loc: "Tokat", text: "Vejetaryen misafirlerim için etli değil zeytinyağlı sarma yaptım, yapraklar muazzamdı." },
  { name: "Ümit T.", loc: "Çorum", text: "5 yıldız az kalır. Ürün, hizmet, iletişim her şey mükemmel." },
  { name: "Aslı W.", loc: "Niksar", text: "Yurtdışından aileye göndermek istiyordum, yurt içi çok hızlı geldi. Yurt dışına da gönderseniz keşke!" },
  { name: "Ahmet Z.", loc: "Erbaa", text: "Komşum tavsiye etti, memnun kaldım. Şimdi ben de herkese tavsiye ediyorum." },
  { name: "Betül I.", loc: "Turhal", text: "Yapraklar o kadar ince ki ışığa tutunca neredeyse şeffaf. Bu incelik çok zor bulunur." },
  { name: "Deniz R.", loc: "Tokat", text: "Her mevsim aynı kalite, kış ortasında bile taze yaprak bulabiliyorsunuz. Süper!" },
  { name: "Gökhan S.", loc: "Yozgat", text: "Hem anneme hem kayınvalideme aldım, ikisi de çok beğendi. Aile içi barış sağlandı!" },
  { name: "Leyla U.", loc: "Amasya", text: "Organik ve doğal ürünlere önem veriyorum. Bu yapraklar tam istediğim gibi, katkısız ve saf." },
];

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <div className="w-[300px] shrink-0 bg-brand-cream rounded-2xl p-6 shadow-sm flex flex-col gap-3">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
        ))}
      </div>
      <p className="text-brand-text/70 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
      <div>
        <p className="font-semibold text-brand-text text-sm">{r.name}</p>
        <p className="text-brand-text/50 text-xs">{r.loc}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <p className="text-center text-brand-green font-semibold text-sm tracking-wide uppercase mb-2">
          Müşterilerimizin Yorumları
        </p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-brand-dark">
          Mutlu Müşteriler
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <ReviewCard key={`r-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
