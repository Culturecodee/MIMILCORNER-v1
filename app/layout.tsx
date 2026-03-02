import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MIMILCORNER – Catering 24 Jam Malang | Nasi Kotak & Nasi Tumpeng',
  description:
    'Catering Malang buka 24 jam. Nasi kotak, nasi tumpeng, snack box, dan paket catering event. Bahan segar, resep rumahan. Pesan untuk arisan, pengajian, ulang tahun, kantor.',
  keywords: [
    'Catering Malang',
    'Nasi Kotak Malang',
    'Nasi Tumpeng Malang',
    'Catering 24 Jam Malang',
    'catering Dau',
    'catering Landungsari',
  ],
  openGraph: {
    title: 'MIMILCORNER – Catering 24 Jam Malang',
    description:
      'Catering rumahan Malang. Nasi kotak, nasi tumpeng, snack box. Buka 24 jam. Landungsari, Dau.',
    type: 'website',
  },
  robots: 'index, follow',
  metadataBase: new URL('https://mimilcorner.com'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBF8F3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
