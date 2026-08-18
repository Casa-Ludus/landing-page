import { Dices, Swords, CreditCard } from 'lucide-react';
import { SITE } from '../config/site';

const CATEGORIES = [
  { icon: Swords, label: 'Rol', desc: 'D&D, Pathfinder y más mesas narrativas' },
  { icon: Dices, label: 'Juegos de mesa', desc: 'Estrategia, party y clásicos' },
  { icon: CreditCard, label: 'TCG', desc: 'Magic, Yu-Gi-Oh!, Pokémon y torneos' },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-24 pt-96 md:px-32"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[60vh] w-[60vh] rounded-full bg-magenta/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-layout text-center">
        <span className="mb-16 inline-block rounded-chip border border-border/60 bg-surface/60 px-16 py-8 text-body-sm text-text-dim">
          Abierto de miércoles a domingo · 15 a 23 hs
        </span>
        <h1 className="mb-20 text-h2 font-black text-white text-glow">
          {SITE.name}
        </h1>
        <p className="mx-auto mb-32 max-w-2xl text-body text-text-dim">
          {SITE.description}
        </p>
        <div className="mb-40 flex flex-wrap items-center justify-center gap-16">
          <a
            href="#contacto"
            className="rounded-rs-pill bg-primary px-24 py-13 font-semibold text-white transition-all duration-rs hover:-translate-y-px hover:opacity-75"
          >
            Reservar una mesa
          </a>
          <a
            href="#tienda"
            className="rounded-rs-pill border border-border/60 bg-surface px-24 py-13 font-semibold text-white transition-all duration-rs hover:-translate-y-px hover:bg-surface-2"
          >
            Conocer la tienda
          </a>
        </div>

        <div className="grid gap-16 sm:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="card flex flex-col items-center gap-12 text-center"
            >
              <div className="rounded-full bg-surface-2 p-16 text-magenta">
                <cat.icon size={24} />
              </div>
              <h3 className="font-semibold text-white">{cat.label}</h3>
              <p className="text-body-sm text-text-muted">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
