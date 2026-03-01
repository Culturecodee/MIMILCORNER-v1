import { Hero } from '@/components/Hero';
import { MenuSection } from '@/components/MenuSection';
import { TentangKami } from '@/components/TentangKami';
import { Galeri } from '@/components/Galeri';
import { Testimoni } from '@/components/Testimoni';
import { Kontak } from '@/components/Kontak';

export default function Home() {
  return (
    <>
      <Hero />
      <MenuSection />
      <TentangKami />
      <Galeri />
      <Testimoni />
      <Kontak />
    </>
  );
}
