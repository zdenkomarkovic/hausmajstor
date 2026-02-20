"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PHONE_1, PHONE_1_HREF, PHONE_2, PHONE_2_HREF } from "@/lib/constants";
import { services } from "@/lib/services-data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a6b] shadow-lg">
      {/* Top bar */}
      <div className="bg-[#122a52] py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <span className="text-blue-200 text-xs hidden sm:block">
            Dostupni 0-24h · Beograd / Pančevo
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={PHONE_1_HREF}
              className="flex items-center gap-1.5 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors"
            >
              <PhoneIcon />
              {PHONE_1}
            </a>
            <a
              href={PHONE_2_HREF}
              className="flex items-center gap-1.5 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors"
            >
              <PhoneIcon />
              {PHONE_2}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Hausmajstor Beograd Pančevo"
            height={48}
            width={180}
            className="h-18 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-blue-100 hover:text-white font-medium text-sm transition-colors"
          >
            Početna
          </Link>

          {/* Usluge dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 text-blue-100 hover:text-white font-medium text-sm transition-colors">
              Usluge
              <ChevronIcon open={servicesOpen} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                >
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/usluge/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors group/item"
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor(s.color)}`} />
                      <span className="text-slate-700 text-sm font-medium group-hover/item:text-[#1a3a6b] transition-colors">
                        {s.title}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/kontakt"
            className="text-blue-100 hover:text-white font-medium text-sm transition-colors"
          >
            Kontakt
          </Link>

          <a
            href={PHONE_1_HREF}
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Pozovi nas
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori meni"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#122a52] border-t border-blue-700 overflow-hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-blue-100 hover:text-white hover:bg-white/10 font-medium px-3 py-2.5 rounded-lg transition-colors"
              >
                Početna
              </Link>

              {/* Mobile Usluge accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-blue-100 hover:text-white hover:bg-white/10 font-medium px-3 py-2.5 rounded-lg transition-colors"
                >
                  Usluge
                  <ChevronIcon open={mobileServicesOpen} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 mt-1 border-l-2 border-blue-700 pl-3 flex flex-col gap-0.5">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/usluge/${s.slug}`}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="text-blue-200 hover:text-white hover:bg-white/10 text-sm px-3 py-2 rounded-lg transition-colors"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="text-blue-100 hover:text-white hover:bg-white/10 font-medium px-3 py-2.5 rounded-lg transition-colors"
              >
                Kontakt
              </Link>

              <a
                href={PHONE_1_HREF}
                className="mt-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-4 py-3 rounded-lg text-center transition-colors"
              >
                Pozovi: {PHONE_1}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function dotColor(textColor: string): string {
  const map: Record<string, string> = {
    "text-blue-600": "bg-blue-500",
    "text-yellow-600": "bg-yellow-500",
    "text-red-600": "bg-red-500",
    "text-orange-600": "bg-orange-500",
    "text-purple-600": "bg-purple-500",
    "text-green-600": "bg-green-500",
  };
  return map[textColor] ?? "bg-slate-400";
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}
