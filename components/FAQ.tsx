"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const faqs = [
  {
    question: "Da li hausmajstor Pančevo dolazi i za manje popravke?",
    answer:
      "Da, dolazimo za sve vrste popravki — od manjeg čavla do kompleksnijih radova. Nema posla koji je premanji ili preveći za naš tim.",
  },
  {
    question: "Koliko brzo možete da dođete na intervenciju?",
    answer:
      "Za hitne intervencije dostupni smo 0-24h i trudimo se da dođemo unutar sat vremena od poziva. Hausmajstor Beograd i Pančevo — brz dolazak garantovan.",
  },
  {
    question: "Da li radite i vikendom i praznikom?",
    answer:
      "Da, radimo 7 dana u nedelji, uključujući vikende i praznike. Dostupni smo 0-24h jer kvarovi ne čekaju.",
  },
  {
    question: "Koliko košta dolazak hausmajstora?",
    answer:
      "Dolazak i dijagnostika su besplatni za Pančevo i Beograd. Cena posla se dogovara pre početka radova — transparentno, bez skrivenih troškova.",
  },
  {
    question: "Da li dajete garanciju na urađene radove?",
    answer:
      "Da, dajemo garanciju na sve izvedene radove. Koristimo kvalitetan materijal proverenih proizvođača i stojimo iza svakog posla.",
  },
  {
    question: "Koje oblasti pokrivate — samo Pančevo ili i Beograd?",
    answer:
      "Pokrivamo ceo Pančevo i Beograd i okolinu. Vodoinstalater Pančevo, elektricar Pančevo, servis bojlera Pančevo — tu smo za vas.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Česta pitanja
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6b] mb-4">
              Najčešća pitanja
            </h2>
            <p className="text-slate-500 text-lg">
              Imate pitanje? Pogledajte najčešće odgovore ili nas direktno
              pozovite.
            </p>
          </motion.div>

          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="text-[#1a3a6b] font-semibold text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronIcon open={open === i} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
