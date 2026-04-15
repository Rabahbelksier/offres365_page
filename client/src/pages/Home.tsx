import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import offresIcon from "@assets/icon_1772163543674.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Gallery />
        <Contact appName="Offres 365" appIcon={offresIcon} appTagline="Rabah coupons" />
      </main>
      <Footer />
    </div>
  );
}
