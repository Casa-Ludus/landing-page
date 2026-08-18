import { cn } from '../lib/utils';

interface MapEmbedProps {
  src?: string;
  className?: string;
  title?: string;
}

/**
 * Mapa embebido. Si no se pasa `src`, usa un fallback genérico de Buenos Aires.
 * Preferentemente pasar `SITE.mapEmbed` para mostrar la ubicación real de Casa Ludus.
 */
export const DEFAULT_MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.741032844!2d-58.57338518359374!3d-34.6157432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90a31%3A0x2d3a3e0d3d0e0f3a!2sBuenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar';

export function MapEmbed({
  src = DEFAULT_MAP_SRC,
  className,
  title = 'Ubicación de Casa Ludus',
}: MapEmbedProps) {
  return (
    <div className={cn('overflow-hidden rounded-card border border-border shadow-rs', className)}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
