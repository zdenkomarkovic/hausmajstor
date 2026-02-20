"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const testimonials = [
  {
    name: "Milica Jovanović",
    location: "Beograd, Zvezdara",
    service: "Vodoinstalaterski radovi",
    rating: 5,
    text: "Pozvala sam ih u 23h zbog puknutog ceva u kupatilu — za manje od sat vremena su bili kod mene. Vodoinstalater je bio profesionalan, sredio je kvar brzo i uredno. Preporučujem svima koji traže pouzdanog hausmajstora u Beogradu.",
  },
  {
    name: "Dragan Nikolić",
    location: "Pančevo",
    service: "Servis bojlera",
    rating: 5,
    text: "Servisirali su mi bojler koji godinama niko nije dirao. Objasnili su mi šta je problem, zamenili anodu i grejni element, i sada bojler radi bolje nego ikad. Servis bojlera u Pančevu — brzo, stručno i povoljno.",
  },
  {
    name: "Ana Petrović",
    location: "Beograd, Vračar",
    service: "Montaža nameštaja",
    rating: 5,
    text: "Montirali su mi kompletnu IKEA kuhinju i garderobera. Sve je savršeno uravnato i stabilno. Odneli su i svu ambalažu što mi je mnogo pomoglo. Definitivno ću ih zvati ponovo za sledeću montažu nameštaja.",
  },
  {
    name: "Zoran Marković",
    location: "Pančevo, Centar",
    service: "Elektroinstalaterski radovi",
    rating: 5,
    text: "Zamena celokupne elektroinstalacije u stanu prošla je bez problema. Ekipa je radila čisto i uredno, završili su u roku. Elektricar u Pančevu koji zaista zna posao — preporučujem bez rezerve.",
  },
  {
    name: "Jovana Stanković",
    location: "Beograd, Novi Beograd",
    service: "Servis šporeta",
    rating: 5,
    text: "Šporet mi se pokvario dan pre slave. Nazvala sam ih ujutro i isti dan su došli i popravili ga. Neverovatno brza reakcija i stručna popravka. Svaka preporuka za hausmajstora koji radi i u Beogradu i u Pančevu.",
  },
  {
    name: "Marko Đorđević",
    location: "Pančevo",
    service: "Servis grejnih tela",
    rating: 5,
    text: "Pozvao sam ih za servis grejanja pre zime. Odzračili su instalaciju, zamenili termostatske glave i sve je besprekorno radilo tokom cele sezone. Povoljne cene i kvalitetan rad — preporučujem svim komšijama u Pančevu.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hausmajstor Beograd Pančevo",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: testimonials.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
    },
    reviewBody: t.text,
    name: t.service,
  })),
};

// Pure scale — no translate, different feel from other sections
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Utisci klijenata
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6b] mb-4">
              Šta kažu naši klijenti
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Više od 10 godina poverenja — hausmajstor Beograd i Pančevo koji
              ne razočara.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Stars count={5} size="lg" />
              <span className="text-[#1a3a6b] font-bold text-lg">5.0</span>
              <span className="text-slate-400 text-sm">
                ({testimonials.length} recenzija)
              </span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((t) => (
              <motion.article
                key={t.name}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4 cursor-default"
              >
                <Stars count={t.rating} size="sm" />
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1a3a6b] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#1a3a6b] font-semibold text-sm">
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                    <p className="text-orange-500 text-xs font-medium">
                      {t.service}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Stars({ count, size }: { count: number; size: "sm" | "lg" }) {
  const dim = size === "lg" ? 22 : 16;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={dim} height={dim} viewBox="0 0 24 24" fill="#f97316">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}
