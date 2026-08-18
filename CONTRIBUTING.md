# Guía de contribución — Casa Ludus Landing

## Flujo de trabajo

1. Crear una rama nueva a partir de `main`: `git checkout -b feature/nombre-descriptivo`.
2. Hacer commits pequeños y descriptivos en español o inglés, consistente con el resto del historial.
3. Antes de abrir un PR/Pull Request: correr `npm run lint` y `npm run build` localmente.
4. Solicitar revisión del código antes de mergear.

## Convenciones de código

### Estilos

- **Tailwind CSS** para todos los estilos visuales. Evitar CSS arbitrario salvo para `text-shadow` o `keyframes` específicos.
- Usar `cn()` de `src/lib/utils.ts` para combinar clases condicionales.
- Mantener componentes pequeños, enfocados y reutilizables.
- Preferir `function` para componentes en lugar de arrow functions.

### TypeScript

- Tipar props de componentes con interfaces.
- Evitar `any`. Si es necesario, documentar por qué.
- Usar `src/config/site.ts` para datos centralizados.

### Nombres

- Componentes: PascalCase (`Header.tsx`, `Newsletter.tsx`).
- Archivos de utilidades/config: camelCase (`site.ts`, `utils.ts`).
- Clases de Tailwind: usar tokens del design system cuando existan (`text-text-dim`, `bg-surface`, `rounded-card`).

### Accesibilidad

- Todos los botones/iconos deben tener `aria-label` si no incluyen texto visible.
- Asegurar contraste suficiente entre texto y fondo.
- Usar elementos semánticos (`header`, `main`, `section`, `footer`, `nav`).

### Recursos

- Colocar logos e imágenes en `public/` o `public/res/`.
- Optimizar imágenes antes de subirlas (WebP preferido, máximo 200 KB si es posible).

## Revisión obligatoria antes de merge

```bash
npm run lint   # TypeScript check
npm run build  # Build de producción
npm run format # Formatear con Prettier
```

Si el build falla, no mergear.

## Comunicación

- Usar issues para bugs, tareas grandes y discusiones de arquitectura.
- Usar PRs para cualquier cambio en `main`.
- Mantener descripciones claras y referencias a requisitos de diseño o negocio.
