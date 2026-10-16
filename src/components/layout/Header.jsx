import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import WhatsAppButton from "../common/Button.jsx";

const navItems = [
  ["Beranda", "#beranda"],
  ["Fasilitas", "#fasilitas"],
  ["Galeri", "#galeri"],
  ["Lokasi", "#lokasi"],
  ["FAQ", "#faq"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a
        className="brand"
        href="#beranda"
        aria-label="Kost Putri Hikmah - Beranda"
      >
        <span className="brand-icon">
          <Heart size={22} aria-hidden="true" />
        </span>
        <span>
          Kost Putri <b>Hikmah</b>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav
        id="primary-navigation"
        className={menuOpen ? "nav nav-open" : "nav"}
        aria-label="Navigasi utama"
      >
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <WhatsAppButton>Hubungi Kami</WhatsAppButton>
      </nav>
    </header>
  );
}
