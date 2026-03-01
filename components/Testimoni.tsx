const testimonials = [
  {
    name: 'Bu Siti',
    text: 'Pesen nasi kotak buat rapat kantor, tepat waktu dan nasinya enak. Lauknya juga bersih.',
  },
  {
    name: 'Bapak Ahmad',
    text: 'Tumpeng untuk syukuran anak saya. Keluarganya pada suka, porsinya pas.',
  },
  {
    name: 'Ika',
    text: 'Snack box buat arisan dirumah. Jajanannya beragam dan harganya bersahabat.',
  },
  {
    name: 'Bu Dewi',
    text: 'Sudah langganan untuk pengajian. Masakannya tidak terlalu berminyak, cocok.',
  },
];

export function Testimoni() {
  return (
    <section id="testimoni" className="border-t border-creamDark bg-creamDark/50 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-darkNeutral sm:text-3xl">
          Testimoni
        </h2>
        <p className="mt-2 text-softBrown">
          Apa kata pelanggan tentang MIMILCORNER.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <li key={i}>
              <blockquote className="border-l-2 border-warmBrown/50 bg-white p-4 pl-5">
                <p className="text-softBrown">&ldquo;{t.text}&rdquo;</p>
                <cite className="mt-3 block text-sm font-medium not-italic text-darkNeutral">
                  — {t.name}
                </cite>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
