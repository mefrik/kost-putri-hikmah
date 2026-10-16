import { BadgePercent } from "lucide-react";
import SectionTitle from "../common/SectionTitle.jsx";
import PriceCard from "../common/PriceCard.jsx";
import { pricing } from "../../data/pricing.js";
import WhatsAppButton from "../common/Button.jsx";

export default function PromoSection() {
  return (
    <section className="section promo-section" id="promo" aria-labelledby="promo-title">
      <SectionTitle
        eyebrow="HARGA TRANSPARAN"
        title="Pilih sesuai anggaranmu"
        description="Periksa harga dan ketentuan sewa sebelum memutuskan."
        id="promo-title"
      />
      <div className="promo-layout">
        <div className="promo-copy">
          <BadgePercent size={34} aria-hidden="true" />
          <h3>{pricing.promotion.enabled ? "Promo khusus pelajar" : "Harga sewa bulanan"}</h3>
          <p>
            {pricing.promotion.enabled
              ? "Promo hanya berlaku untuk pelajar yang memenuhi persyaratan dan selama periode yang dikonfirmasi pemilik."
              : "Informasi promo pelajar dapat dikonfirmasi langsung kepada pemilik."}
          </p>
          <WhatsAppButton>Konfirmasi Harga</WhatsAppButton>
        </div>
        <PriceCard />
      </div>
    </section>
  );
}