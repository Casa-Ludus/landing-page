import { BrandLogo } from './BrandLogo';
import { MapEmbed } from './MapEmbed';
import { SITE, NAV_LINKS } from '../config/site';

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-surface px-24 pt-48 md:px-32">
      <div className="mx-auto max-w-layout">
        <div className="grid gap-32 pb-48 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <BrandLogo className="mb-16 text-lg" />
            <p className="mb-16 text-body text-text-dim">{SITE.tagline}</p>
            <p className="text-body-sm text-text-muted">
              {SITE.address.street}, {SITE.address.city}, {SITE.address.country}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 block text-body-sm text-text-nav transition-colors duration-rs hover:text-white"
            >
              {SITE.email}
            </a>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-16 font-semibold text-white">Navegación</h4>
            <ul className="space-y-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body text-text-nav transition-colors duration-rs hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-16 font-semibold text-white">Dónde estamos</h4>
            <MapEmbed className="h-[220px]" />
          </div>
        </div>

        <div className="border-t border-border/30 py-20 text-center text-body-xs text-text-muted">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
