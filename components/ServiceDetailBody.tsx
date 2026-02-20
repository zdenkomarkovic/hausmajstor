"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PHONE_1, PHONE_1_HREF, PHONE_2, PHONE_2_HREF } from "@/lib/constants";
import { services, type Service } from "@/lib/services-data";

interface Props {
  service: Service;
}

const featureVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const featureItem: Variants = {
  hidden: { x: -24, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// FAQ items slide from the RIGHT — opposite to features
const faqVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const faqItem: Variants = {
  hidden: { x: 30, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const galleryVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const galleryItem: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiceDetailBody({ service }: Props) {
  return (
    <main className="pt-24">
      {/* Hero with image — Ken Burns zoom-out */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a6b]/90 via-[#1a3a6b]/70 to-[#1a3a6b]/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          {/* Breadcrumb — slides from left */}
          <motion.nav
            className="flex items-center gap-2 text-blue-300 text-sm mb-4"
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Početna
            </Link>
            <span>/</span>
            <Link href="/usluge" className="hover:text-white transition-colors">
              Usluge
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </motion.nav>

          {/* Title — spring from bottom */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.45,
            }}
          >
            {service.title}
          </motion.h1>

          {/* Subtitle — pure fade with delay */}
          <motion.p
            className="text-blue-200 mt-2 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-10">
            {/* Long description — slides from left */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-[#1a3a6b] mb-4">O usluzi</h2>
              {service.longDesc.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-4">
                  {para.trim()}
                </p>
              ))}
            </motion.div>

            {/* Features — stagger from left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-[#1a3a6b] mb-4">Šta je uključeno</h2>
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={featureVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                {service.features.map((f) => (
                  <motion.li key={f} variants={featureItem} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700 text-sm">{f}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Gallery — stagger scale */}
            {service.extraImages.length > 0 && (
              <div>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={galleryVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {service.extraImages.map((img, i) => (
                    <motion.div
                      key={i}
                      variants={galleryItem}
                      className="relative h-52 rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} — primer rada ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* FAQ — stagger from RIGHT (opposite of features) */}
            {service.faq.length > 0 && (
              <div>
                <motion.h2
                  className="text-2xl font-bold text-[#1a3a6b] mb-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  Česta pitanja
                </motion.h2>
                <motion.div
                  className="space-y-4"
                  variants={faqVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {service.faq.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={faqItem}
                      className="border border-slate-200 rounded-xl p-5"
                    >
                      <h3 className="font-semibold text-[#1a3a6b] mb-2">{item.question}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>

          {/* ── Sidebar — slides from right ── */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="sticky top-28 space-y-4">
              <div className="bg-[#1a3a6b] rounded-2xl p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-2">Potrebna vam je ova usluga?</h3>
                <p className="text-blue-200 text-sm mb-5">
                  Dostupni 0-24h. Besplatan dolazak i procena u Pančevu i Beogradu.
                </p>
                <motion.a
                  href={PHONE_1_HREF}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3.5 rounded-xl transition-colors mb-3"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <PhoneIcon />
                  {PHONE_1}
                </motion.a>
                <motion.a
                  href={PHONE_2_HREF}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <PhoneIcon />
                  {PHONE_2}
                </motion.a>
                <Link
                  href="/kontakt"
                  className="mt-3 flex items-center justify-center text-blue-300 hover:text-white text-sm transition-colors"
                >
                  Pošaljite poruku →
                </Link>
              </div>

              {/* Other services — stagger in */}
              <motion.div
                className="bg-slate-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
              >
                <h3 className="text-[#1a3a6b] font-bold mb-3">Ostale usluge</h3>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s, i) => (
                      <motion.li
                        key={s.slug}
                        initial={{ x: 16, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                      >
                        <Link
                          href={`/usluge/${s.slug}`}
                          className="text-slate-600 hover:text-orange-500 text-sm transition-colors flex items-center gap-2"
                        >
                          <span className="text-orange-400">→</span>
                          {s.title}
                        </Link>
                      </motion.li>
                    ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
