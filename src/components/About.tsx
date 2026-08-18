import { Users, Calendar, Store, Sparkles } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Store,
    title: 'Tienda especializada',
    desc: 'Encontrá juegos de mesa, TCG, accesorios, dados y material para rol.',
  },
  {
    icon: Users,
    title: 'Comunidad de jugadores',
    desc: 'Conectate con jugadores, formá grupos y encontrá mesas para tu próxima campaña.',
  },
  {
    icon: Calendar,
    title: 'Eventos y torneos',
    desc: 'Fichines, torneos, presentaciones, lanzamientos y noches temáticas.',
  },
  {
    icon: Sparkles,
    title: 'Experiencia guiada',
    desc: 'Staff que te ayuda a elegir tu próximo juego o a aprender las reglas.',
  },
];

export function About() {
  return (
    <section id="tienda" className="px-24 py-64 md:px-32">
      <div className="mx-auto max-w-layout">
        <div className="mb-40 text-center">
          <span className="mb-12 inline-block text-body-sm text-magenta">La Tienda</span>
          <h2 className="mb-16 text-2xl font-black text-white">
            Un espacio hecho por y para jugadores
          </h2>
          <p className="mx-auto max-w-2xl text-body text-text-dim">
            Casa Ludus nace como punto de encuentro para quienes disfrutan de jugar en mesa. Ya sea
            que busques una partida de rol, un duelo de cartas o un juego para la tarde del domingo,
            acá encontrás tu lugar.
          </p>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="card">
              <div className="mb-16 inline-flex rounded-full bg-surface-2 p-16 text-cyan">
                <item.icon size={22} />
              </div>
              <h3 className="mb-10 font-semibold text-white">{item.title}</h3>
              <p className="text-body text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
