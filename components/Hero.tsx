import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] overflow-hidden bg-darkNeutral"
    >
      <Image
        src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1920&q=80"
        alt="Indonesian rice and dishes"
        fill
        className="object-cover opacity-70"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-darkNeutral/50" />
      <div className="relative mx-auto flex min-h-[85vh] max-w-content flex-col justify-center px-4 py-20 sm:px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-mutedGold">
          BUKA 24 JAM
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Catering 24 Jam di Malang – Siap untuk Setiap Momen Spesial Anda
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90">
          Nasi kotak, nasi tumpeng, snack box, dan paket catering untuk acara
          Anda. Bahan segar, resep rumahan, pesan kapan saja.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://wa.me/6285730349744"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-warmBrown px-5 py-2.5 text-sm font-medium text-white transition hover:bg-warmBrown/90"
          >
            Pesan Sekarang
          </Link>
          <Link
            href="#menu"
            className="inline-flex items-center border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Lihat Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
