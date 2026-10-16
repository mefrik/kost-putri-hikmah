import { BadgePercent } from "lucide-react";
import { pricing, getPromotionPrice, formatPrice } from "../../data/pricing.js";

export default function PriceCard({ compact = false }) {
  const promo = pricing.promotion;
  const promoPrice = getPromotionPrice();

  return (
    <article className={`price-card${compact ? " price-card-compact" : ""}`}>
      <div className="price-card-heading">
        <span className="price-card__eyebrow">
          {promo.enabled ? promo.name : "Harga sewa"}
        </span>
        {promo.enabled && <BadgePercent size={24} aria-hidden="true" />}
      </div>

      {promo.enabled && promoPrice !== null ? (
        <>
          <p className="price-card__normal">
            Harga normal <s>{formatPrice(pricing.normalPrice)}</s>
          </p>
          <p className="price-card__amount">
            {formatPrice(promoPrice)} <span>/bulan</span>
          </p>
          <span className="price-card__discount">
            Hemat {formatPrice(pricing.normalPrice - promoPrice)} (
            {promo.discountPercent}%)
          </span>
          <p className="price-card__terms">
            {promo.eligibleFor}. Periksa syarat dan periode promo sebelum
            menyewa.
          </p>
        </>
      ) : (
        <>
          <p className="price-card__amount">
            {formatPrice(pricing.normalPrice)} <span>/bulan</span>
          </p>
          <p className="price-card__terms">
            Konfirmasikan ketersediaan kamar dan biaya tambahan kepada pemilik.
          </p>
        </>
      )}
    </article>
  );
}