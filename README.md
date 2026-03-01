# MIMILCORNER – Landing Page

Landing page profesional untuk MIMILCORNER, catering 24 jam di Malang (Landungsari, Dau).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build Produksi

```bash
npm run build
npm start
```

## Fitur

- Navigasi: Home, Menu, Tentang Kami, Galeri, Testimoni, Kontak
- Hero dengan headline dan CTA (Pesan Sekarang, Lihat Menu)
- Section Menu: Nasi Kotak, Nasi Tumpeng, Snack Box, Paket Catering Event
- Tentang Kami, Galeri, Testimoni, Kontak
- Tombol WhatsApp mengambang (wa.me/6285730349744)
- SEO: title, meta description, keywords, Open Graph
- Responsif (mobile-first)
- Gambar via next/image (Unsplash placeholder)

## Kustomisasi

- **Google Maps**: Ganti `src` iframe di `components/Kontak.tsx` dengan embed URL dari Google Maps (Share → Sematkan peta).
- **Gambar**: Ganti URL gambar di komponen dengan aset sendiri atau hosting; sesuaikan `next.config.js` jika pakai domain lain.
- **metadataBase**: Di `app/layout.tsx`, ubah `metadataBase` ke URL domain production Anda.
