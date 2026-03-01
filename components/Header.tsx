'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#kontak', label: 'Kontak' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-creamDark/80 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="#home"
          className="font-display text-xl font-semibold text-darkNeutral sm:text-2xl"
        >
          MIMILCORNER
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-softBrown transition hover:text-warmBrown"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-6 bg-darkNeutral transition ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-darkNeutral transition ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-darkNeutral transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-creamDark/80 bg-cream py-4 md:hidden">
          <ul className="flex flex-col gap-2 px-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-softBrown hover:text-warmBrown"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
