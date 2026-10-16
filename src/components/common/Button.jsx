import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site.js";

export default function WhatsAppButton({
  children = "Tanya Ketersediaan",
  className = "",
}) {
  const message = encodeURIComponent(
    "Halo, saya tertarik dengan Kost Putri Hikmah. Boleh minta informasi harga, ketersediaan kamar, dan jadwal survei?",
  );
  const baseUrl = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}`
    : "https://wa.me/";
  const href = `${baseUrl}?text=${message}`;

  return (
    <a
      className={`button button-primary ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi Kost Putri Hikmah melalui WhatsApp"
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
  );
}