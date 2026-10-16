import { siteConfig } from "../config/site.js";

export const pricing = {
  normalPrice: siteConfig.normalPrice,
  promotion: {
    enabled: siteConfig.studentPromoEnabled,
    name: "Promo Khusus Pelajar",
    discountPercent: 12.5,
    eligibleFor: "Pelajar yang memenuhi persyaratan promo",
    terms: [
      "Berlaku bagi pelajar yang memenuhi persyaratan.",
      "Periode dan ketersediaan promo harus dikonfirmasi.",
      "Biaya tambahan, jika ada, dijelaskan sebelum sewa.",
    ],
  },
};

export function getPromotionPrice() {
  if (!pricing.promotion.enabled) return null;
  return Math.round(
    pricing.normalPrice * (1 - pricing.promotion.discountPercent / 100),
  );
}

export function formatPrice(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
