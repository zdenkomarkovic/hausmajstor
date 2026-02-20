import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, PHONE_1, PHONE_2 } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "hausmajstor Pančevo",
    "hausmajstor Beograd",
    "vodoinstalater Pančevo",
    "elektricar Pančevo",
    "servis bojlera Pančevo",
    "popravka šporeta Pančevo",
    "montaža nameštaja Beograd",
    "hitna vodoinstalaterska intervencija",
    "popravke u kući i stanu",
    "0-24h hausmajstor",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  telephone: [PHONE_1, PHONE_2],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pančevo",
    addressRegion: "Vojvodina",
    addressCountry: "RS",
  },
  areaServed: [
    { "@type": "City", name: "Pančevo" },
    { "@type": "City", name: "Beograd" },
  ],
  openingHours: "Mo-Su 00:00-24:00",
  url: SITE_URL,
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
