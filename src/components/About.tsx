import Image from "next/image";

const STATS = [
  { value: "10+", label: "Yillik Tecrube" },
  { value: "5.000+", label: "Mutlu Musteri" },
  { value: "100%", label: "Memnuniyet" },
  { value: "7/24", label: "Destek" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg"
            alt="Tokat Asma Yapragi uretim"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-6">
          <p className="text-brand-green font-semibold text-sm tracking-wide uppercase">Hakkimizda</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark leading-snug">
            Tokat&apos;in Bereketi Sofralariniza
          </h2>
          <p className="text-brand-text/70 leading-relaxed">
            Yillardir Tokat yoresinin en kaliteli asma yapraklarini ozenle secip, hijyenik kosullarda paketleyerek sofralariniza ulastiriyoruz. Musterilerimizin memnuniyeti her zaman oncelikli hedefimizdir.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-brand-green">{s.value}</p>
                <p className="text-xs text-brand-text/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
