# Casa Ludus — Landing Page

Landing page moderna y oscura para **Casa Ludus**, una tienda y espacio de encuentro dedicado a juegos de mesa, mesas de rol y TCG (Trading Card Games).

## 🚀 Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| [Vite](https://vitejs.dev/) | Build tool y dev server ultrarrápido |
| [React 18](https://react.dev/) | Biblioteca UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS 3](https://tailwindcss.com/) | Estilos utility-first con tokens de diseño propios |
| [Lucide React](https://lucide.dev/) | Iconografía |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Utilidad para clases condicionales |

## 🎨 Sistema de diseño

El proyecto implementa una paleta oscura inspirada en el brief de diseño compartido, con énfasis en:

- Fondo profundo: `#07070F`
- Superficies elevadas: `#0F0F1E`, `#141428`, `#1B1B22`
- Acentos púrpura/cyan/magenta para estados de marca
- Tipografía Inter, con escala compacta (`13px`, `11px`, `10px`)
- Radios redondeados: `20px` cards, `30px` inputs, `50px` chips, botones pill
- Transiciones suaves de `0.22s`

Todos los tokens se encuentran en `tailwind.config.js` y `src/index.css` (custom properties).

## 📁 Estructura del proyecto

```
.
├── .github/workflows/   # CI/CD con GitHub Actions
├── public/res/          # Logo y recursos estáticos
├── src/
│   ├── components/      # Componentes React de la UI
│   ├── config/          # Configuración del sitio (datos, links, contacto)
│   ├── lib/             # Utilidades (cn, helpers)
│   ├── App.tsx          # Composición de la página
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind + custom properties + componentes base
├── dist/                # Build de producción
├── index.html
├── netlify.toml         # Configuración de deploy en Netlify
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con Vite
npm run build    # Build de producción (tsc + vite build)
npm run preview  # Previsualizar el build local
npm run lint     # Type check sin emitir archivos
npm run format   # Formatear con Prettier
```

## 📝 Configuración del sitio

Edita `src/config/site.ts` para cambiar:

- Nombre, tagline y descripción
- Email, teléfono y dirección
- Redes sociales
- Links de navegación
- URL del mapa embebido (Google Maps)

### Cambiar el mapa de ubicación

1. Buscá tu ubicación en Google Maps.
2. Click en **Compartir → Insertar un mapa**.
3. Copiá el valor de `src` del `<iframe>`.
4. Pegalo en `src/config/site.ts` en la propiedad `mapEmbed`.
5. El mapa se actualizará automáticamente en `Contact` y `Footer`.

## 📬 Formulario de novedades

El formulario de suscripción (`Newsletter`) está preparado para funcionar con **Netlify Forms** (`data-netlify="true"`).

Para activarlo en producción:

1. Conectá el repositorio a Netlify.
2. Netlify detectará automáticamente el formulario en el HTML estático generado.
3. Las submissions se verán en el dashboard de Netlify.

Alternativas futuras: Mailchimp, Buttondown, SendGrid, o un endpoint propio.

## 🌐 Deploy automático

El proyecto incluye un workflow de GitHub Actions que compila la app y la publica automáticamente.

- Cada push a `main` dispara un build.
- El artefacto se puede consumir con Netlify Drop, Netlify CLI o Netlify Deploy Preview.
- También se incluye `netlify.toml` para configurar el deploy desde Git.

### Pasos para conectar Netlify

1. Crear un sitio en [Netlify](https://app.netlify.com/) y conectar el repositorio de GitHub.
2. Configurar el build command: `npm run build`.
3. Configurar publish directory: `dist`.
4. (Opcional) Desde Settings → Build & deploy, activar Deploy previews y branch deploys.

## 🧩 Sugerencias para futuras iteraciones

- **Carrousel administrable**: conectar a un CMS headless (Sanity, Strapi, Contentful) o a Netlify CMS para que el equipo pueda editar slides sin tocar código.
- **Catálogo de productos**: integrar Shopify, Tiendanube, WooCommerce o una API propia.
- **Reservas de mesas**: formulario con fecha/hora y confirmación por email/WhatsApp.
- **Sistema de usuarios**: login para reservas, historial de compras y torneos.
- **Blog / Noticias**: sección de artículos para SEO y novedades.
- **Eventos dinámicos**: integrar Google Calendar o un CMS para mostrar la agenda real.
- **Dark/light mode**: aunque el diseño es oscuro por defecto, se puede agregar un toggle con Tailwind `darkMode: 'class'`.
- **Analytics**: agregar Google Analytics 4, Plausible o PostHog para entender el tráfico.
- **SEO**: agregar `react-helmet-async` y generar meta tags por página.
- **A11y**: agregar skip-link, focus-visible mejorado y tests con axe.

## 🤝 Contribuir

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para convenciones de código, flujo de trabajo y buenas prácticas.

## 📄 Licencia

MIT — Casa Ludus.
