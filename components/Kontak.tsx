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
            <iframe
              title="Lokasi MIMILCORNER - Landungsari, Dau, Malang"
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.58013501206975!2d112.58967926383856!3d-7.930020598645039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1772379998678!5m2!1sid!2sid"
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
