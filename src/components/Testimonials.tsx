import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Ayse K.", loc: "Tokat", text: "Yapraklar cok taze ve lezzetliydi. Sarma yaparken hic yirtilmadi. Kesinlikle tavsiye ederim!" },
  { name: "Mehmet D.", loc: "Turhal", text: "Siparisim ayni gun kargolandi, ertesi gun elimdeydi. Kalite ve hiz bir arada. Tesekkurler!" },
  { name: "Fatma Y.", loc: "Niksar", text: "Yillardir farkli yerlerden yaprak aldim ama bu kadar ince ve damarsiz yaprak ilk defa buldum. Harika!" },
  { name: "Ali R.", loc: "Erbaa", text: "Annemin yapraklarini hatirlatan bir tat. Gercekten Tokat'in ozu bu yapraklar." },
  { name: "Zeynep S.", loc: "Amasya", text: "Komsuya ikram ettim, o da hemen siparis verdi. Herkes bayildi sarmalara!" },
  { name: "Hasan B.", loc: "Sivas", text: "Restoran icin toplu aldim, musterilerimiz cok memnun kaldi. Surekli siparis veriyoruz." },
  { name: "Elif T.", loc: "Tokat", text: "Kapida odeme secenegi cok guven verici. Urun gelene kadar odeme yapmamak buyuk arti." },
  { name: "Murat C.", loc: "Zile", text: "Paketleme cok ozenli, yapraklar sapasaglam geldi. Tek bir kirik yaprak bile yoktu." },
  { name: "Havva N.", loc: "Corum", text: "Bayramda misafirler icin aldim, sofrada en cok begenilenler yaprak sarmasi oldu." },
  { name: "Kemal A.", loc: "Yozgat", text: "Fiyat/performans olarak piyasadaki en iyi seceneklerden biri. Tavsiyle ederim." },
  { name: "Gulsen M.", loc: "Tokat", text: "Her ay duzenti siparis veriyorum, kalite hic dusmuyor. Guvenilir bir marka." },
  { name: "Osman P.", loc: "Turhal", text: "Yapraklarin inceligini ve kokusunu tarif edemem. Acip koklayinca Tokat'a gidiyorsunuz." },
  { name: "Derya E.", loc: "Niksar", text: "Anneanneme gonderdim, cok sevindi. Eline saglik dedi bana sanki ben sarmisim!" },
  { name: "Burak H.", loc: "Erbaa", text: "3 kg'lik paketi aldim, buzluga koydum. Aylarca taze kaliyor, muhtesem!" },
  { name: "Sema O.", loc: "Resadiye", text: "Ilk defa internetten yaprak aldim, hic pisman olmadim. Eline saglik!" },
  { name: "Yusuf K.", loc: "Amasya", text: "Kargoyla gelen yaprak bu kadar taze olabilir mi dedim. Sasirdim, bravo!" },
  { name: "Nurcan D.", loc: "Tokat", text: "Komsularla beraber toplu siparis verdik, herkese ayri ayri paketlenmis geldi. Cok dusuncelisiniz." },
  { name: "Emre V.", loc: "Sivas", text: "Esimin en sevdigi yemek yaprak sarma, artik yaprak bulmak dert degil. Sagolun!" },
  { name: "Hatice L.", loc: "Zile", text: "5 kg aldim dugun icin, 500 yaprak sardik hic biri yirtilmadi. Kalite ustu kalite." },
  { name: "Ibrahim G.", loc: "Corum", text: "Dedemin bag yapraklarinin tadini ariyordum, sonunda buldum. Bu yapraklar o tat!" },
  { name: "Sevgi U.", loc: "Tokat", text: "WhatsApp'tan siparis vermek cok kolay. Yaziyorsunuz, hemen donuyorlar." },
  { name: "Cengiz F.", loc: "Turhal", text: "Arkadasima hediye gonderdim, o kadar begendi ki kendi de siparis verdi." },
  { name: "Pinar Z.", loc: "Niksar", text: "Yapraklar hem buyuk hem ince. Sarma yapmak zevkli hale geliyor." },
  { name: "Serkan I.", loc: "Erbaa", text: "Ilk sipariste biraz tereddut ettim ama simdi duzenli musteriyim. Guvenebilirsiniz." },
  { name: "Mine T.", loc: "Yozgat", text: "Ramazanda cok yogun siparis veriyoruz, hic aksaklik yasanmadi. Teslimat hep zamaninda." },
  { name: "Volkan S.", loc: "Amasya", text: "Lokantam icin 5'er kiloluk paketler aliyorum. Musterilerim yaprak sarmayi cok seviyor." },
  { name: "Tugba R.", loc: "Tokat", text: "Anne tarifimle bu yapraklari birlestirince muhtesem oluyor. Tesekkurler Tokat Yaprak Evi!" },
  { name: "Adem N.", loc: "Sivas", text: "Kurye cok kibar ve ilgiliydi. Urun de paketleme de teslimat da 10 numara." },
  { name: "Fadime C.", loc: "Resadiye", text: "Koyde buyudum, bu yapraklar koyun yapraklari gibi dogal. Hic kimyasal kokusu yok." },
  { name: "Omer B.", loc: "Turhal", text: "Cocuklar yaprak sarmayi sevmezdi, bu yapraklarla yapinca yemeye basladilar!" },
  { name: "Sibel A.", loc: "Zile", text: "Her yaprak birbirinin aynisi, secim cok ozenli yapilmis belli. Kaliteli is." },
  { name: "Tarkan M.", loc: "Tokat", text: "Gurme bir arkadasim var, o bile bu yapraklari ovdu. Bu kadarini beklemiyordum." },
  { name: "Esra H.", loc: "Corum", text: "Anneler gununde anneme surpriz gonderdim, cok duygulanmis. Guzel bir hediye fikri!" },
  { name: "Kadir Y.", loc: "Niksar", text: "Gecen yil da almistim, bu yil da ayni kalite. Tutarlilik cok onemli, bravo." },
  { name: "Dilek P.", loc: "Erbaa", text: "Komsu illere de gonderdiklerini bilmiyordum. Amasya'daki teyzeme de yollattim." },
  { name: "Ferhat E.", loc: "Yozgat", text: "Kargo kutusunun ici kopuk korumayla doluydu, yapraklar tertemiz geldi. Ozen goruldu." },
  { name: "Rabia O.", loc: "Tokat", text: "Iftar sofrasinda yaprak sarma olmazsa olmaz. Bu yapraklarla iftar cok guzel geciyor." },
  { name: "Ismail K.", loc: "Turhal", text: "Esnaf olarak soyleyeyim, bu fiyata bu kaliteyi baska yerde bulamazsiniz." },
  { name: "Melek D.", loc: "Amasya", text: "Instagram'dan gordum, siparis verdim. Gercekten fotograflardaki gibi geldi, sasirmadim." },
  { name: "Cem V.", loc: "Sivas", text: "Piknik icin aldik, mangal yaninda sarma sardik. Harika bir deneyimdi!" },
  { name: "Sultan G.", loc: "Resadiye", text: "Yillardir Tokat'tan yaprak getirtiyordum, artik bu kadar ugrasma yok. Tek tik ile siparis!" },
  { name: "Baris L.", loc: "Zile", text: "Teslimat suresi inanilmaz hizli. Sabah siparis verdim, aksam elimdeydi." },
  { name: "Neslihan F.", loc: "Tokat", text: "Vejetaryen misafirlerim icin etli degil zeytinyagli sarma yaptim, yapraklar muazzamdi." },
  { name: "Umit T.", loc: "Corum", text: "5 yildiz az kalir. Urun, hizmet, iletisim her sey mukemmel." },
  { name: "Asli W.", loc: "Niksar", text: "Yurtdisindan aileye gondermek istiyordum, yurt ici cok hizli geldi. Yurt disina da gonderseniz keske!" },
  { name: "Ahmet Z.", loc: "Erbaa", text: "Komsum tavsiye etti, memnun kaldim. Simdi ben de herkese tavsiye ediyorum." },
  { name: "Betul I.", loc: "Turhal", text: "Yapraklar o kadar ince ki isiga tutunca neredeyse seffaf. Bu incelik cok zor bulunur." },
  { name: "Deniz R.", loc: "Tokat", text: "Her mevsim ayni kalite, kis ortasinda bile taze yaprak bulabiliyorsunuz. Super!" },
  { name: "Gokhan S.", loc: "Yozgat", text: "Hem anneme hem kayinvalideme aldim, ikisi de cok begendi. Aile ici baris saglandi!" },
  { name: "Leyla U.", loc: "Amasya", text: "Organik ve dogal urunlere onem veriyorum. Bu yapraklar tam istedigim gibi, katkisiz ve saf." },
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
          Musterilerimizin Yorumlari
        </p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-brand-dark">
          Mutlu Musteriler
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
