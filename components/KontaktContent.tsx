"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  PHONE_1,
  PHONE_1_HREF,
  PHONE_2,
  PHONE_2_HREF,
  EMAIL,
  EMAIL_HREF,
  TERRITORY,
  WORKING_HOURS,
} from "@/lib/constants";

// Info cards stagger from left
const cardListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { x: -36, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.48, ease: "easeOut" } },
};

export default function KontaktContent() {
  return (
    <>
      {/* Hero — dark blue bar */}
      <section className="bg-[#1a3a6b] py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb — subtle fade from left */}
          <motion.nav
            className="flex items-center gap-2 text-blue-300 text-sm mb-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Početna
            </Link>
            <span>/</span>
            <span className="text-white">Kontakt</span>
          </motion.nav>

          {/* H1 — dramatic slide from left */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 75,
              damping: 18,
              delay: 0.2,
            }}
          >
            Kontaktirajte nas
          </motion.h1>

          {/* Subtitle — fade with delay */}
          <motion.p
            className="text-blue-200 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Hausmajstor Pančevo i Beograd — dostupni 0-24h, 7 dana u nedelji.
            Pozovite ili pošaljite poruku.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: info cards — stagger from left */}
            <div className="space-y-8">
              <div>
                <motion.h2
                  className="text-2xl font-bold text-[#1a3a6b] mb-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  Kontakt informacije
                </motion.h2>

                <motion.div
                  className="space-y-4"
                  variants={cardListVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Phone 1 */}
                  <motion.a
                    variants={cardItem}
                    href={PHONE_1_HREF}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                      <PhoneIcon className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Telefon 1</p>
                      <p className="font-bold text-[#1a3a6b] text-lg">{PHONE_1}</p>
                    </div>
                  </motion.a>

                  {/* Phone 2 */}
                  <motion.a
                    variants={cardItem}
                    href={PHONE_2_HREF}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                      <PhoneIcon className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Telefon 2</p>
                      <p className="font-bold text-[#1a3a6b] text-lg">{PHONE_2}</p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    variants={cardItem}
                    href={EMAIL_HREF}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                      <EmailIcon className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Email</p>
                      <p className="font-bold text-[#1a3a6b]">{EMAIL}</p>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    variants={cardItem}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <LocationIcon className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Teritorija</p>
                      <p className="font-semibold text-[#1a3a6b]">{TERRITORY}</p>
                    </div>
                  </motion.div>

                  {/* Working hours */}
                  <motion.div
                    variants={cardItem}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <ClockIcon className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Radno vreme</p>
                      <p className="font-semibold text-[#1a3a6b]">
                        Svaki dan, {WORKING_HOURS}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Map block — scale + fade */}
              <motion.div
                className="bg-[#1a3a6b] rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-white font-bold text-lg mb-2">Oblast rada</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Pokrivamo ceo Pančevo, Beograd i okolne opštine. Vodoinstalater
                  Pančevo, elektricar Pančevo, servis bojlera — dolazimo do
                  vas.
                </p>
                <a
                  href="https://maps.google.com/?q=Pančevo,+Serbia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
                >
                  <MapIcon />
                  Pogledajte na mapi →
                </a>
              </motion.div>
            </div>

            {/* Right: form — slides from right */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[#1a3a6b] mb-6">
                Pošaljite poruku
              </h2>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
    </svg>
  );
}
