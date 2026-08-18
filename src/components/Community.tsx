import { MessageCircle, Users } from 'lucide-react';
import { SITE } from '../config/site';

export function Community() {
  return (
    <section className="px-24 py-32 md:px-32">
      <div className="mx-auto max-w-layout">
        <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-primary to-surface p-32 md:p-48">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-magenta/30 blur-[60px]" />

          <div className="relative z-10 flex flex-col items-center gap-24 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-lg">
              <span className="mb-12 flex items-center justify-center gap-8 text-body-sm text-diamond md:justify-start">
                <Users size={14} /> Comunidad
              </span>
              <h2 className="mb-12 text-2xl font-black text-white">Sumate a la comunidad de Casa Ludus</h2>
              <p className="text-body text-text-dim">
                Entrá al Discord o grupo de WhatsApp para encontrar mesa, intercambiar cartas y enterarte de los
                eventos antes que nadie.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12">
              <a
                href={SITE.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-8 rounded-rs-pill bg-surface px-20 py-12 font-semibold text-white transition-all duration-rs hover:-translate-y-px hover:bg-surface-2"
              >
                <Users size={16} /> Discord
              </a>
              <a
                href={SITE.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-8 rounded-rs-pill bg-green/15 px-20 py-12 font-semibold text-green transition-all duration-rs hover:-translate-y-px hover:bg-green/25"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
