import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Vehicles } from "@/components/site/Vehicles";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EMS Location de Voiture Ouarzazate — Premium 24h/24" },
      { name: "description", content: "Location de voitures premium à Ouarzazate. Réservation simple sur WhatsApp 24h/24. Berlines, SUV et 4x4 pour vos voyages au Maroc, désert, Aït Ben Haddou et Marrakech." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRental",
        name: "EMS Location de Voiture Ouarzazate",
        image: "/og.jpg",
        telephone: "+212642695556",
        address: {
          "@type": "PostalAddress",
          streetAddress: "PHARMACY KABIRI, RENTAL EMS CAR OUARZAZATE, near PARA",
          addressLocality: "Ouarzazate",
          postalCode: "45200",
          addressCountry: "MA",
        },
        openingHours: "Mo-Su 00:00-23:59",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "19" },
      }),
    }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Vehicles />
        <Services />
        <WhyUs />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
