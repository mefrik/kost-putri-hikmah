import { ArrowRight, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "../common/Button.jsx";
import PriceCard from "../common/PriceCard.jsx";
import { Image as ImageIcon } from "lucide-react";
import {} from "../../data/siteData.js";

export default function HeroSection() {
  return (
    <section className="hero" id="beranda" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow">KOST PUTRI · PURWOKERTO</span>
        <h1 id="hero-title">
          Temukan tempat tinggal
          <span> yang sesuai denganmu.</span>
        </h1>
        <p className="hero-desc">
          Kost Putri Hikmah menyediakan tempat tinggal untuk pelajar dan
          karyawan perempuan.
        </p>
        <PriceCard />
        <div className="hero-actions">
          <WhatsAppButton>Tanya Ketersediaan</WhatsAppButton>
          <a className="button button-outline" href="#fasilitas">
            Lihat Fasilitas <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-note">
          <CheckCircle2 size={17} aria-hidden="true" />
          Silakan survei untuk melihat kondisi kamar secara langsung.
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-image-placeholder">
          {/* <span className="placeholder-icon">♡</span>
          <strong>Foto asli kamar</strong> */}
          <img
            src="/logo/logo.png"
            alt="Logo Kost Putri Hikmah"
            className="hero-logo"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.hidden = true;
              const fallback = event.currentTarget.nextElementSibling;
              if (fallback) fallback.hidden = false;
            }}
          />
          {/* {hero.map((item) => (
            <figure className="hero-item">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.hidden = true;
                  event.currentTarget.nextElementSibling.hidden = false;
                }}
              />
              <div className="gallery-placeholder" hidden>
                <ImageIcon size={30} aria-hidden="true" />
                <b>{item.title}</b>
                <span>Foto asli belum ditambahkan</span>
              </div>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))} */}
        </div>
      </div>
    </section>
  );
}
