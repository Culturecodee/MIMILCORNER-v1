const PHONE = '+62 857-3034-9744';
const WA_LINK = 'https://wa.me/6285730349744';
const ADDRESS =
  'Landungsari, Kec. Dau, Kabupaten Malang, Jawa Timur, Indonesia';

export function Kontak() {
  return (
    <section id="kontak" className="border-t border-creamDark bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-darkNeutral sm:text-3xl">
          Kontak
        </h2>
        <p className="mt-2 text-softBrown">
          Hubungi kami untuk pemesanan atau pertanyaan.
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-warmBrown">
              Telepon & WhatsApp
            </h3>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg font-medium text-darkNeutral hover:text-warmBrown"
            >
              {PHONE}
            </a>
            <h3 className="mt-6 text-sm font-medium uppercase tracking-wider text-warmBrown">
              Alamat
            </h3>
            <p className="mt-2 text-softBrown">{ADDRESS}</p>
            <p className="mt-4 text-sm font-medium text-warmBrown">
              Buka 24 Jam
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-creamDark sm:aspect-video">
            {/* Ganti src dengan embed URL dari Google Maps (Share → Sematkan peta) */}
            <iframe
              title="Lokasi MIMILCORNER - Landungsari, Dau, Malang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.364194604959!2d112.619274!3d-7.966191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628e2d7b2f39f%3A0x5f4646e1a2e4e4e4!2sMalang%2C%20Malang%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1709251200000"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
