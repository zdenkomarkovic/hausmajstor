"use client";

import { motion } from "framer-motion";
import {
  PHONE_1,
  PHONE_1_HREF,
  PHONE_2,
  PHONE_2_HREF,
  TERRITORY,
  WORKING_HOURS,
} from "@/lib/constants";

// 3 cards enter from: left, bottom, right
const cardInitials = [
  { x: -50, y: 0, opacity: 0 },
  { x: 0, y: 50, opacity: 0 },
  { x: 50, y: 0, opacity: 0 },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-[#1a3a6b]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pozovite nas odmah</h2>
          <p className="text-blue-200 max-w-xl mx-auto text-lg">
            Dostupni smo {WORKING_HOURS}, svaki dan. Brza intervencija na teritoriji {TERRITORY}.
          </p>
        </motion.div>

        {/* Cards grid — each from a different direction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone 1 — from left */}
          <motion.a
            href={PHONE_1_HREF}
            initial={cardInitials[0]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0, ease: "easeOut" }}
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-8 text-center group transition-all hover:scale-105"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
              <PhoneIcon />
            </div>
            <p className="text-blue-200 text-sm mb-2">Pozovite:</p>
            <p className="text-white font-bold text-2xl">{PHONE_1}</p>
          </motion.a>

          {/* Phone 2 — from bottom */}
          <motion.a
            href={PHONE_2_HREF}
            initial={cardInitials[1]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-8 text-center group transition-all hover:scale-105"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
              <PhoneIcon />
            </div>
            <p className="text-blue-200 text-sm mb-2">Pozovite:</p>
            <p className="text-white font-bold text-2xl">{PHONE_2}</p>
          </motion.a>

          {/* Hours — from right */}
          <motion.div
            initial={cardInitials[2]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-blue-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ClockIcon />
            </div>
            <p className="text-blue-200 text-sm mb-2">Radno vreme:</p>
            <p className="text-white font-bold text-2xl mb-3">{WORKING_HOURS}</p>
            <div className="flex items-center justify-center gap-1.5 text-blue-200 text-sm">
              <LocationIcon />
              <span>{TERRITORY}</span>
            </div>
          </motion.div>
        </div>

        {/* Big CTA — scale + fade */}
        <motion.div
          className="bg-orange-500 rounded-3xl p-8 sm:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            delay: 0.15,
          }}
        >
          <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3">Hitna intervencija?</h3>
          <p className="text-orange-100 text-lg mb-8 max-w-lg mx-auto">
            Pukla vam je cev? Nema struje? Pokvarilo se grejanje? Zovite odmah — dolazimo brzo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_1_HREF}
              className="flex items-center justify-center gap-2.5 bg-white text-orange-600 hover:bg-orange-50 font-bold text-xl px-10 py-4 rounded-2xl shadow-lg transition-all hover:scale-105"
            >
              <PhoneIcon color="currentColor" />
              {PHONE_1}
            </a>
            <a
              href={PHONE_2_HREF}
              className="flex items-center justify-center gap-2.5 bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold text-xl px-10 py-4 rounded-2xl transition-all hover:scale-105"
            >
              <PhoneIcon />
              {PHONE_2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneIcon({ color = "white" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={color}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
