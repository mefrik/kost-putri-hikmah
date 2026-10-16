import { Image as ImageIcon } from "lucide-react";
import SectionTitle from "../common/SectionTitle.jsx";
import { gallery } from "../../data/siteData.js";

export default function GallerySection() {
  return (
    <section className="section" id="galeri" aria-labelledby="gallery-title">
      <SectionTitle
        eyebrow="GALERI"
        title="Lihat kondisi kamar sebelum survei"
        // description="Tambahkan foto asli agar calon penghuni dapat memahami kondisi kos sebelum berkunjung."
        id="gallery-title"
      />
      <div className="gallery-grid">
        {gallery.map((item) => (
          <figure className="gallery-item" key={item.id}>
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
        ))}
      </div>
      {/* <p className="gallery-note">
        Foto pada website harus menggambarkan kondisi Kost Putri Hikmah yang
        sebenarnya.
      </p> */}
    </section>
  );
}
