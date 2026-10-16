import { MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../config/site.js";
import WhatsAppButton from "../common/Button.jsx";

export default function LocationSection() {
  const mapsUrl = siteConfig.linkaddress ? siteConfig.linkaddress : "";

  return (
    <section className="section" id="lokasi" aria-labelledby="location-title">
      <div className="location-card">
        <div className="location-copy">
          <span className="eyebrow">LOKASI KOS</span>
          <h2 id="location-title">Di area Purwokerto</h2>
          <p>{siteConfig.areaDescription}</p>
          <p className="location-caveat">
            Jarak dan waktu tempuh bergantung pada alamat dan rute. Hubungi
            pemilik untuk alamat lengkap dan petunjuk arah.
          </p>
          {siteConfig.address && (
            <p className="address">
              <MapPin size={18} aria-hidden="true" />
              {siteConfig.address}
            </p>
          )}
          <div className="location-actions">
            {mapsUrl && (
              <a
                className="button button-outline"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buka Google Maps <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            <WhatsAppButton>Tanya Lokasi</WhatsAppButton>
          </div>
        </div>
        <div className="location-map">
          <iframe
            title="Lokasi Kost Putri Hikmah di Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.2746984325706!2d109.2360684476308!3d-7.421443300832615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655bab9e7e26e9%3A0xab2d28e3aea4a712!2sKost%20Putri%20Hikmah!5e0!3m2!1sen!2sid!4v1792132018105!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
