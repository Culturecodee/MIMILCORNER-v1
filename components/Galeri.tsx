import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    alt: 'Nasi dan lauk pauk',
  },
  {
    src: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80',
    alt: 'Nasi tumpeng',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    alt: 'Jajanan dan kue',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    alt: 'Hidangan catering',
  },
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    alt: 'Masakan rumahan',
  },
  {
    src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    alt: 'Makanan Indonesia',
  },
];

export function Galeri() {
  return (
    <section id="galeri" className="border-t border-creamDark bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-darkNeutral sm:text-3xl">
          Galeri
        </h2>
        <p className="mt-2 text-softBrown">
          Hasil masakan dan penyajian MIMILCORNER.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden bg-creamDark"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
