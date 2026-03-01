import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-creamDark bg-darkNeutral py-8 text-white/80">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-lg font-semibold text-white">
            MIMILCORNER
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#menu" className="hover:text-white">
              Menu
            </Link>
            <Link href="#tentang" className="hover:text-white">
              Tentang Kami
            </Link>
            <Link href="#galeri" className="hover:text-white">
              Galeri
            </Link>
            <Link href="#testimoni" className="hover:text-white">
              Testimoni
            </Link>
            <Link href="#kontak" className="hover:text-white">
              Kontak
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-sm text-white/60">
          Landungsari, Kec. Dau, Kabupaten Malang, Jawa Timur · Buka 24 Jam
        </p>
      </div>
    </footer>
  );
}
