import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontaktContent from "@/components/KontaktContent";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt | Hausmajstor Pančevo Beograd",
  description:
    "Kontaktirajte hausmajstora Pančevo i Beograd. Dostupni 0-24h, 7 dana u nedelji. Besplatan dolazak i procena. Pozovite ili pošaljite poruku.",
  alternates: { canonical: `${SITE_URL}/kontakt` },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <KontaktContent />
      </main>
      <Footer />
    </>
  );
}
