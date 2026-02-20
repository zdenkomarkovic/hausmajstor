"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_1, PHONE_1_HREF, PHONE_2, PHONE_2_HREF } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background image — Ken Burns slow zoom-out */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/hero.jpg"
            alt="Hausmajstor radovi"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a6b]/30 via-[#1a3a6b]/85 to-[#1a3a6b]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          {/* Badge — slides from left */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Dostupni 0-24h
          </motion.div>

          {/* H1 — spring pop from bottom */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.35,
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Vaš Pouzdani <span className="text-orange-400">Hausmajstor</span>
          </motion.h1>

          {/* Paragraph — pure fade */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-8"
          >
            Brzo, kvalitetno i povoljno obavljamo sve popravke u kući i stanu. Vodoinstalaterski i
            elektroinstalaterski radovi, servis bojlera, šporeta i grejnih tela, montaža nameštaja.
          </motion.p>

          {/* Territory — slides from left */}
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 text-blue-200 text-sm mb-8"
          >
            <LocationIcon />
            <span>Teritorija: Beograd / Pančevo i okolina</span>
          </motion.div>

          {/* CTA buttons — spring scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 130,
              damping: 14,
              delay: 0.95,
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={PHONE_1_HREF}
              className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
            >
              <PhoneIcon />
              {PHONE_1}
            </a>
            <a
              href={PHONE_2_HREF}
              className="flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all hover:scale-105"
            >
              <PhoneIcon />
              {PHONE_2}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats bar — slides up from bottom */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 20,
          delay: 1.1,
        }}
        className="absolute bottom-0 left-0 right-0 bg-[#122a52]/90 backdrop-blur-sm border-t border-blue-700/50"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-3 gap-4">
          {[
            { value: "0-24h", label: "Dostupnost" },
            { value: "10+", label: "Godina iskustva" },
            { value: "100%", label: "Zadovoljstvo" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25 + i * 0.1, duration: 0.4 }}
            >
              <div className="text-orange-400 font-bold text-xl sm:text-2xl">{stat.value}</div>
              <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
