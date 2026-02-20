import Image from "next/image";
import Link from "next/link";
import { PHONE_1, PHONE_1_HREF, PHONE_2, PHONE_2_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";
import { services } from "@/lib/services-data";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0d1f3d] text-blue-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Hausmajstor Beograd Pančevo"
                height={44}
                width={160}
                className="h-34 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-blue-300">
              Profesionalne usluge hausmajstora za Beograd i Pančevo. Dostupni 0-24h, svakog dana.
            </p>
          </div>

          {/* Usluge */}
          <div>
            <h4 className="text-white font-semibold mb-3">Usluge</h4>
            <ul className="space-y-1.5 text-sm text-blue-300">
              {services.map((s) => (
                <li key={s.slug} className="flex items-center gap-1.5">
                  <span className="text-orange-400">›</span>
                  <Link href={`/usluge/${s.slug}`} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-semibold mb-3">Kontakt</h4>
            <div className="space-y-2 text-sm">
              <a
                href={PHONE_1_HREF}
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                <PhoneIcon />
                {PHONE_1}
              </a>
              <a
                href={PHONE_2_HREF}
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                <PhoneIcon />
                {PHONE_2}
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors mt-1 break-all"
              >
                <EmailIcon />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2 text-blue-300 mt-3">
                <LocationIcon />
                <span>Beograd / Pančevo</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <ClockIcon />
                <span>Radimo 0-24h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <span>© {currentYear} Hausmajstor Beograd / Pančevo. Sva prava zadržana.</span>
          <span>
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/sr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Manikam Web Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}
