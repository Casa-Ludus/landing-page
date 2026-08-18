import { useState, FormEvent } from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    setStatus('submitting');

    // Simulación: reemplazar por endpoint real o Netlify Forms / Mailchimp / etc.
    await new Promise((res) => setTimeout(res, 800));

    setStatus('success');
    setEmail('');
  };

  return (
    <section id="novedades" className="px-24 py-64 md:px-32">
      <div className="mx-auto max-w-layout">
        <div className="relative overflow-hidden rounded-card border border-border/30 bg-surface p-32 md:p-48">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-magenta/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-24 md:flex-row md:items-center">
            <div className="max-w-md">
              <span className="mb-12 flex items-center gap-8 text-body-sm text-magenta">
                <Mail size={14} />
                Novedades
              </span>
              <h2 className="mb-12 text-2xl font-black text-white">
                Suscribite al boletín de Casa Ludus
              </h2>
              <p className="text-body text-text-dim">
                Recibí las últimas novedades, lanzamientos, eventos y promociones de la tienda.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-12 sm:flex-row md:w-auto"
              name="newsletter"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div className="hidden">
                <input name="bot-field" />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input min-w-[260px]"
              />
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="rounded-rs-pill bg-primary px-24 py-13 font-semibold text-white transition-all duration-rs hover:-translate-y-px hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-8">
                    <Loader2 size={16} className="animate-spin" /> Enviando
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center justify-center gap-8">
                    <Check size={16} /> ¡Listo!
                  </span>
                ) : (
                  'Suscribirme'
                )}
              </button>
            </form>
          </div>

          {status === 'success' && (
            <p className="relative z-10 mt-20 text-body-sm text-green">
              ¡Gracias! Ya estás en la lista de novedades.
            </p>
          )}
          {status === 'error' && (
            <p className="relative z-10 mt-20 text-body-sm text-red-soft">
              Hubo un error. Volvé a intentarlo más tarde.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
