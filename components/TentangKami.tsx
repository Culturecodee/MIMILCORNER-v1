import Image from 'next/image';

export function TentangKami() {
  return (
    <section id="tentang" className="border-t border-creamDark bg-creamDark/50 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
              alt="Dapur dan masakan rumahan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-darkNeutral sm:text-3xl">
              Tentang Kami
            </h2>
            <p className="mt-4 text-softBrown">
              MIMILCORNER adalah catering rumahan di Landungsari, Dau, Malang.
              Kami mengutamakan resep rumahan dan bahan-bahan segar yang diolah
              setiap hari.
            </p>
            <ul className="mt-6 space-y-3 text-softBrown">
              <li className="flex gap-3">
                <span className="text-warmBrown">—</span>
                Resep homemade, rasa seperti masakan rumah.
              </li>
              <li className="flex gap-3">
                <span className="text-warmBrown">—</span>
                Bahan segar, dipilih dan diolah daily.
              </li>
              <li className="flex gap-3">
                <span className="text-warmBrown">—</span>
                Catering lokal terpercaya di Malang.
              </li>
              <li className="flex gap-3">
                <span className="text-warmBrown">—</span>
                Buka 24 jam untuk pesanan mendesak.
              </li>
            </ul>
            <p className="mt-6 text-sm text-softBrown">
              Cocok untuk acara keluarga, arisan, pengajian, ulang tahun,
              meeting kantor, dan berbagai kebutuhan catering lainnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
