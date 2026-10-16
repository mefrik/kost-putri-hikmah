import { Heart } from "lucide-react";
import { siteConfig } from "../../config/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#beranda">
        <span className="brand-icon"><Heart size={20} aria-hidden="true" /></span>
        <span>Kost Putri <b>Hikmah</b></span>
      </a>
      <p>Tempat kos untuk pelajar dan karyawan perempuan di {siteConfig.city}.</p>
      <span className="copyright">
        © {new Date().getFullYear()} Kost Putri Hikmah
      </span>
    </footer>
  );
}