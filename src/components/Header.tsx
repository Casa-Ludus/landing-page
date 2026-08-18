import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { NAV_LINKS } from '../config/site';
import { cn } from '../lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-nav border-b border-border/30 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-layout items-center justify-between px-24 py-12 md:px-32">
        <a href="#inicio" className="transition-opacity duration-rs hover:opacity-75">
          <BrandLogo className="text-lg" />
        </a>

        <nav className="hidden items-center gap-24 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-nav transition-colors duration-rs hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-rs-pill bg-primary px-16 py-10 font-semibold text-white transition-all duration-rs hover:-translate-y-px hover:opacity-75 md:inline-flex"
        >
          Reservar mesa
        </a>

        <button
          className="inline-flex text-white md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden bg-surface transition-all duration-rs md:hidden',
          open ? 'max-h-96 border-b border-border/30' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col gap-12 px-24 py-16">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-nav transition-colors duration-rs hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-rs-pill bg-primary px-16 py-10 text-center font-semibold text-white"
          >
            Reservar mesa
          </a>
        </nav>
      </div>
    </header>
  );
}
