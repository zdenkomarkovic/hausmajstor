import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Hausmajstor Pančevo Beograd — Popravke 0-24h",
  description:
    "Hausmajstor Pančevo Beograd — vodoinstalater, elektricar, servis bojlera i šporeta, montaža nameštaja. Hitna vodoinstalaterska intervencija i sve popravke u kući i stanu. Besplatan dolazak, dostupni 0-24h.",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <FAQ />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}
