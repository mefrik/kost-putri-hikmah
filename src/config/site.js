const env = import.meta.env;

export const siteConfig = {
  name: "Kost Putri Hikmah",
  city: "Purwokerto",
  areaDescription:
    "Dekat dengan SMA Negeri 1, SMA Negeri 2 dan SMP N 6 Purwokerto.",
  address: env.VITE_KOST_ADDRESS?.trim() || "",
  linkaddress: env.VITE_KOST_LINK?.trim() || "",
  whatsappNumber: env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || "",
  normalPrice: 400000,
  studentPromoEnabled: env.VITE_STUDENT_PROMO_ENABLED === "true",
};
