"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services-data";
import ServiceCard from "@/components/ServiceCard";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Šta nudimo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6b] mb-4">
            Naše usluge
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Hausmajstor Pančevo i Beograd — sve popravke u kući i stanu na
            jednom mestu. Brzo, kvalitetno i povoljno, dostupni 0-24h.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={cardVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-slate-500 mb-4">
            Nemate na listi? Pitajte nas — radimo i sve ostale popravke u kući!
          </p>
          <Link
            href="/usluge"
            className="inline-flex items-center gap-2 bg-[#1a3a6b] hover:bg-[#122a52] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Sve usluge →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
