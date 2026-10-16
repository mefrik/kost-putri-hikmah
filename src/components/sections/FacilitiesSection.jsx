import { BedDouble, Shirt, BookOpen, Wifi, Bath } from "lucide-react";
import SectionTitle from "../common/SectionTitle.jsx";
import { facilities } from "../../data/siteData.js";

const icons = {
  bed: BedDouble,
  wardrobe: Shirt,
  desk: BookOpen,
  wifi: Wifi,
  bathroom: Bath,
};

export default function FacilitiesSection() {
  return (
    <section className="section facilities-section" id="fasilitas" aria-labelledby="facilities-title">
      <SectionTitle
        eyebrow="FASILITAS KOS"
        title="Yang tersedia untuk kebutuhanmu"
        description="Informasi fasilitas dasar yang tersedia di Kost Putri Hikmah."
        id="facilities-title"
      />
      <div className="facility-grid">
        {facilities.map((facility) => {
          const Icon = icons[facility.icon];
          return (
            <article className="facility-card" key={facility.id}>
              <div className="facility-icon"><Icon size={25} aria-hidden="true" /></div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}