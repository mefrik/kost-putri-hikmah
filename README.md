# Kost Putri Hikmah

Landing page React + Vite untuk Kost Putri Hikmah, siap dibangun untuk Firebase Hosting.

## Kebutuhan
- Node.js versi LTS
- npm
- Akun/proyek Firebase untuk hosting

## Menjalankan lokal
```bash
npm install
cp .env.example .env
npm run dev
```
Di Windows PowerShell, salin `.env.example` menjadi `.env` secara manual jika `cp` tidak tersedia.

## Konfigurasi
Edit `.env`:
- `VITE_WHATSAPP_NUMBER`: nomor WA internasional tanpa `+`, spasi, atau tanda baca.
- `VITE_KOST_ADDRESS`: alamat lengkap yang sudah diverifikasi.
- `VITE_STUDENT_PROMO_ENABLED`: `true` hanya saat promo 25% benar-benar berlaku; jika tidak, gunakan `false`.

Harga normal Rp400.000/bulan. Jika promo diaktifkan, harga promo dihitung sebagai Rp300.000/bulan. Tentukan syarat dan periode promo sebenarnya sebelum publikasi. Variabel `VITE_*` disertakan ke bundle browser, jadi jangan simpan rahasia atau kredensial di sana.

## Foto
Tambahkan foto asli yang sudah mendapat izin ke `public/images/` dengan nama:
- `room-1.webp`
- `room-2.webp`
- `bathroom.webp`

Jangan menggunakan gambar contoh seolah-olah merupakan foto kos. Bila file foto belum tersedia, halaman menampilkan placeholder.

## Build
```bash
npm run lint
npm run build
npm run preview
```

## Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Inisialisasi: `firebase init hosting`
4. Pilih proyek Firebase yang benar dan direktori publik `dist`.
5. Jika ditanya, pilih konfigurasi single-page app.
6. Build dan deploy:
```bash
npm run build
firebase deploy --only hosting
```
File `firebase.json` sudah mengarahkan permintaan SPA ke `index.html`. Periksa hasil di URL yang ditampilkan Firebase CLI.

## Sebelum publikasi
- Isi nomor WhatsApp dan alamat.
- Tambahkan foto asli.
- Verifikasi biaya tambahan, aturan kos, periode promo, dan kelayakan diskon.
- Jangan mengklaim jarak pasti ke sekolah tanpa memeriksa alamat.
