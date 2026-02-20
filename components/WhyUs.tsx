"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: <ExperienceIcon />,
    title: "10+ godina iskustva",
    desc: "Naš tim iskusnih majstora ima više od 10 godina iskustva u obavljanju svih vrsta popravki u kući i stanu u Pančevu i Beogradu.",
  },
  {
    icon: <SpeedIcon />,
    title: "Brzo i efikasno",
    desc: "Dolazimo unutar sat vremena od poziva. Hitna vodoinstalaterska intervencija i hitne elektro popravke su naš prioritet.",
  },
  {
    icon: <ClockIcon />,
    title: "Dostupni 0-24h",
    desc: "Kvar ne bira vreme — mi smo tu ceo dan i noć, 7 dana u nedelji. Hausmajstor Pančevo i Beograd uvek dostupan.",
  },
  {
    icon: <PriceIcon />,
    title: "Povoljne cene",
    desc: "Transparentne cene bez skrivenih troškova. Besplatan dolazak i dijagnostika za vodoinstalater Pančevo i elektricar Pančevo.",
  },
];

// Cards enter from alternating directions:
// left → bottom → bottom → right
function getCardVariant(i: number) {
  if (i === 0) return { x: -60, y: 0, opacity: 0 };
  if (i === 3) return { x: 60, y: 0, opacity: 0 };
  return { x: 0, y: 60, opacity: 0 };
}

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#1a3a6b]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Zašto mi?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Zašto izabrati nas?
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Pouzdani hausmajstor Pančevo i Beograd — uvek tu kada nam
            zatrebate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={getCardVariant(i)}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
            >
              {/* Icon — spring pop with slight rotation */}
              <motion.div
                className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 14,
                  delay: 0.25 + i * 0.1,
                }}
              >
                {r.icon}
              </motion.div>
              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
    </svg>
  );
}
