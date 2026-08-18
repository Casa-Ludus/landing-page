# Arquitectura — Casa Ludus Landing

## Objetivo

Landing page estática, rápida y fácil de mantener para presentar la tienda, captar suscriptores y mostrar ubicación/contacto. Diseñada para ser extendida a un sitio completo con catálogo, reservas y backoffice.

## Decisiones de stack

### Vite + React + TypeScript

- **Vite**: build rápido, HMR instantáneo, ideal para SPAs estáticas.
- **React 18**: componentes funcionales, hooks, ecosistema maduro.
- **TypeScript**: reduce errores en refactorizaciones y facilita trabajo en equipo.

### Tailwind CSS 3

- Utility-first para prototipar rápido y mantener consistencia.
- Custom tokens en `tailwind.config.js` y CSS custom properties en `src/index.css`.
- No se usa shadcn/ui ni component libraries para mantener control total del diseño y evitar dependencias pesadas.

### Sin framework full-stack (por ahora)

La landing es 100% frontend. El backoffice y el carrousel administrable se implementarán en una fase posterior (ver roadmap en README.md). Esto permite:

- Deploy rápido en Netlify/Vercel.
- Cero costo de infraestructura inicial.
- Iteración ágil sobre el diseño y contenido.

## Estructura de componentes

```
App
├── Header        (navegación fija + menú mobile)
├── main
│   ├── Hero      (titular + CTA + categorías)
│   ├── Newsletter (formulario de suscripción)
│   ├── About     (sección "La Tienda")
│   ├── Events    (agenda de próximos eventos)
│   └── Contact   (datos + mapa embebido)
└── Footer        (brand + links + mapa embebido)
```

## Gestión de datos

- `src/config/site.ts` centraliza todo el contenido editable: contacto, redes, links, navegación, mapa.
- Eventos de ejemplo en `Events.tsx` (reemplazar por datos dinámicos o CMS en el futuro).
- Newsletter: formulario estático preparado para Netlify Forms; puede reemplazarse por un endpoint propio.

## Integraciones planificadas

| Funcionalidad | Integración sugerida |
|---------------|----------------------|
| Carrousel admin | CMS headless (Sanity/Strapi) o Netlify CMS |
| Tienda online | Shopify, Tiendanube o WooCommerce |
| Reservas | Calendly, Google Calendar, o formulario propio |
| Newsletter | Netlify Forms / Mailchimp / Buttondown |
| Analytics | Google Analytics 4 o Plausible |
| Mapa | Google Maps embed (configurable) |

## Performance y SEO

- HTML semántico.
- Meta tags básicos en `index.html`.
- Imágenes optimizadas en `public/`.
- Build estático en `dist/` listo para CDN.

## Roadmap técnico

1. MVP landing estática (hecho).
2. Configurar deploy continuo en Netlify.
3. Reemplazar datos de ejemplo por CMS/API.
4. Agregar carrousel administrable.
5. Integrar catálogo/tienda y reservas.
6. Migrar a Next.js si se requiere SSR/SEO avanzado por página.
