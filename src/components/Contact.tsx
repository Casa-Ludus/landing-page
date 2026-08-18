import { Mail, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { MapEmbed } from './MapEmbed';
import { SITE } from '../config/site';

const CONTACT_ITEMS = [
  { icon: MapPin, label: 'Dirección', value: `${SITE.address.street}, ${SITE.address.city}` },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: 'Teléfono', value: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: Clock, label: 'Horario', value: 'Miércoles a domingo · 15:00 a 23:00 hs' },
];

const SOCIAL_ITEMS = [
  { icon: Instagram, label: 'Instagram', href: SITE.social.instagram },
  { icon: Facebook, label: 'Facebook', href: SITE.social.facebook },
  { icon: MessageCircle, label: 'WhatsApp', href: SITE.social.whatsapp },
];

export function Contact() {
  return (
    <section id="contacto" className="px-24 py-64 md:px-32">
      <div className="mx-auto max-w-layout">
        <div className="mb-40 text-center">
          <span className="mb-12 inline-block text-body-sm text-magenta">Contacto</span>
          <h2 className="mb-16 text-2xl font-black text-white">Vení a conocernos</h2>
          <p className="mx-auto max-w-2xl text-body text-text-dim">
            Estamos en Buenos Aires. Escribinos para reservar tu mesa, consultar por productos o
            sumarte a la comunidad.
          </p>
        </div>

        <div className="grid gap-24 lg:grid-cols-2">
          <div className="card flex flex-col justify-between">
            <div>
              <h3 className="mb-24 font-semibold text-white">Datos de contacto</h3>
              <ul className="space-y-16">
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-start gap-12">
                    <div className="rounded-full bg-surface-2 p-10 text-cyan">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <span className="mb-4 block text-body-xs text-text-muted">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white transition-colors duration-rs hover:text-magenta"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-32">
              <span className="mb-12 block text-body-xs text-text-muted">Seguinos</span>
              <div className="flex gap-12">
                {SOCIAL_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-surface-2 p-12 text-text-nav transition-all duration-rs hover:-translate-y-px hover:text-white hover:shadow-cyan-glow"
                    aria-label={item.label}
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <MapEmbed src={SITE.mapEmbed} className="h-[400px] lg:h-auto" />
        </div>
      </div>
    </section>
  );
}
