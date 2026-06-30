import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Ayse K.",
    loc: "Tokat",
    text: "Yapraklar cok taze ve lezzetliydi. Sarma yaparken hic yirtilmadi. Kesinlikle tavsiye ederim!",
  },
  {
    name: "Mehmet D.",
    loc: "Turhal",
    text: "Siparisim ayni gun kargolandi, ertesi gun elimdeydi. Kalite ve hiz bir arada. Tesekkurler!",
  },
  {
    name: "Fatma Y.",
    loc: "Niksar",
    text: "Yillardir farkli yerlerden yaprak aldim ama bu kadar ince ve damarsiz yaprak ilk defa buldum. Harika!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-green-main font-semibold text-sm tracking-wide uppercase mb-2">
          Musterilerimizin Yorumlari
        </p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-green-dark mb-10">
          Mutlu Musteriler
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-cream rounded-2xl p-6 shadow-sm flex flex-col gap-3"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-text/70 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-text text-sm">{r.name}</p>
                <p className="text-text/50 text-xs">{r.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
