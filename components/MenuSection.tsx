import Image from 'next/image';

const menuCategories = [
  {
    id: 'nasi-kotak',
    name: 'Nasi Kotak',
    description:
      'Nasi putih dengan lauk pauk pilihan. Praktis untuk acara kantor, rapat, atau acara santai.',
    price: 'Rp 15.000',
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Nasi kotak Indonesia',
  },
  {
    id: 'nasi-tumpeng',
    name: 'Nasi Tumpeng',
    description:
      'Tumpeng lengkap dengan lauk tradisional. Cocok untuk syukuran, ulang tahun, dan acara adat.',
    price: 'Rp 350.000',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Nasi tumpeng',
  },
  {
    id: 'snack-box',
    name: 'Snack Box',
    description:
      'Beragam jajanan pasar dan kue tradisional. Ideal untuk coffee break, arisan, atau pengajian.',
    price: 'Rp 12.000',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Snack dan jajanan',
  },
  {
    id: 'paket-event',
    name: 'Paket Catering Event',
    description:
      'Paket lengkap untuk arisan, pengajian, ulang tahun, kantor. Menu bisa disesuaikan.',
    price: 'Hubungi kami',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Catering event',
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="border-t border-creamDark bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-darkNeutral sm:text-3xl">
          Menu
        </h2>
        <p className="mt-2 text-softBrown">
          Pilihan hidangan untuk setiap kebutuhan acara Anda.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuCategories.map((item) => (
            <li key={item.id}>
              <article className="group flex h-full flex-col overflow-hidden border border-creamDark bg-cream">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-darkNeutral">{item.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-softBrown">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-warmBrown">
                    Mulai {item.price}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
