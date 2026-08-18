import { Clock, MapPin } from 'lucide-react';

const EVENTS = [
  {
    day: 'Mar',
    date: '19',
    title: 'Noche de rol: one-shot de D&D 5e',
    time: '19:00 hs',
    place: 'Sala Arcana',
    free: true,
  },
  {
    day: 'Jue',
    date: '21',
    title: 'Torneo informal de Magic: Commander',
    time: '18:30 hs',
    place: 'Zona TCG',
    free: true,
  },
  {
    day: 'Sáb',
    date: '23',
    title: 'Juegos de mesa para toda la familia',
    time: '16:00 hs',
    place: 'Salón principal',
    free: false,
  },
];

export function Events() {
  return (
    <section id="eventos" className="px-24 py-64 md:px-32">
      <div className="mx-auto max-w-layout">
        <div className="mb-40 flex flex-col items-start justify-between gap-16 md:flex-row md:items-end">
          <div>
            <span className="mb-12 inline-block text-body-sm text-magenta">Agenda</span>
            <h2 className="text-2xl font-black text-white">Próximos eventos</h2>
          </div>
          <a
            href="#contacto"
            className="rounded-rs-pill border border-border/60 bg-surface px-16 py-10 font-semibold text-white transition-all duration-rs hover:-translate-y-px hover:bg-surface-2"
          >
            Ver agenda completa
          </a>
        </div>

        <div className="grid gap-16">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="card flex flex-col items-start gap-16 sm:flex-row sm:items-center"
            >
              <div className="flex min-w-[72px] flex-col items-center justify-center rounded-rs bg-surface-2 px-16 py-12">
                <span className="text-body-sm uppercase text-text-muted">{event.day}</span>
                <span className="text-2xl font-black text-white">{event.date}</span>
              </div>

              <div className="flex-1">
                <h3 className="mb-8 font-semibold text-white">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-16 text-body-sm text-text-muted">
                  <span className="flex items-center gap-6">
                    <Clock size={12} /> {event.time}
                  </span>
                  <span className="flex items-center gap-6">
                    <MapPin size={12} /> {event.place}
                  </span>
                </div>
              </div>

              <span
                className={`rounded-chip px-12 py-6 text-body-xs font-semibold ${
                  event.free ? 'bg-green/15 text-green' : 'bg-gold/15 text-gold'
                }`}
              >
                {event.free ? 'Entrada libre' : 'Cupos limitados'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
