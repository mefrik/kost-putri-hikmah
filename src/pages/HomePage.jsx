import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import FacilitiesSection from "../components/sections/FacilitiesSection.jsx";
import GallerySection from "../components/sections/GallerySection.jsx";
import PromoSection from "../components/sections/PromoSection.jsx";
import LocationSection from "../components/sections/LocationSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import WhatsAppButton from "../components/common/Button.jsx";

export default function HomePage() {
  return (
    <div className="site">
      <Header />
      <main>
        <HeroSection />
        <FacilitiesSection />
        <GallerySection />
        <PromoSection />
        <LocationSection />
        <FAQSection />
        <section className="final-cta" aria-labelledby="cta-title">
          <span className="eyebrow">KOST PUTRI HIKMAH</span>
          <h2 id="cta-title">Ingin melihat kamar sebelum menyewa?</h2>
          <p>Hubungi pemilik untuk menanyakan harga, ketersediaan, dan jadwal survei.</p>
          <WhatsAppButton>Hubungi via WhatsApp</WhatsAppButton>
        </section>
      </main>
      <Footer />
    </div>
  );
}