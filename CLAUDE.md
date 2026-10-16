# CLAUDE.md

Landing page de una sola página para **Operia** (nombre provisional). Astro + Tailwind CSS v4, sitio estático y sin backend. Se despliega en Vercel o Netlify.

## Negocio

- **Qué es:** consultora de transformación operativa para PYMES en Lima, Perú. **No vende software.** Integra herramientas existentes (ERP, CRM, Power BI, automatización de flujos, WhatsApp Business, IA) para eliminar trabajo manual y dar control de la operación.
- **Cliente ideal:** dueños y gerentes de empresas de 10 a 100 personas: distribuidoras, importadoras, industria pequeña/mediana y servicios B2B.
- **Objetivo único de la página:** que agenden un diagnóstico gratuito de 30 minutos. Toda decisión de contenido o diseño debe servir a ese objetivo; no agregar secciones, enlaces o CTAs que distraigan.
- **Idioma y tono:** español de Perú, profesional y directo, tuteo ("agenda", "tu empresa"). Moneda en soles (`S/`).

## Reglas (obligatorias)

1. **No inventar** testimonios, logos de clientes, cifras, estadísticas, casos ni plazos. Si falta un dato real, usar un marcador visible entre corchetes: `[TU NÚMERO]`, `[CIFRA REAL]`, etc. El componente `Marked.astro` los resalta en la página.
2. **Todos los datos editables viven en `src/config/site.ts`**: nombre, razón social, contacto, Calendly, dominio, SEO, analítica y textos de cada sección. Los componentes no deben llevar textos de contenido escritos directamente; el nombre siempre se toma de `site.name`.
3. **Diseño:**
   - Colores: verde oscuro `#10211D` (`ink`: cabecera y bloques destacados), fondo claro `#F3F4F1` (`paper`), ámbar `#E8A33D` (`amber`: botones principales, **siempre con texto `ink`**, nunca blanco, por contraste), verde `#0F5C4D` (`pine`: enlaces y detalles). Los tokens están en `src/styles/global.css`.
   - Tipografías: Sora para títulos (`font-display`) e IBM Plex Sans para texto (`font-sans`). Las carga la API de fuentes de Astro (`fonts` en `astro.config.mjs`) desde Google Fonts y las sirve desde el propio dominio. No volver a enlazar `fonts.googleapis.com`.
   - Estilo sobrio: sin degradados llamativos, sin emojis. Íconos SVG de trazo simple en `src/components/Icon.astro`.
   - **Mobile first**: la mayoría entra desde el celular vía WhatsApp. Revisar siempre a 375–390 px.
4. **SEO:** title, meta description (≤ 160 caracteres), Open Graph y Twitter card en `layouts/Base.astro`; favicon; sitemap (`@astrojs/sitemap`); `robots.txt` generado en `pages/robots.txt.ts`. `og-image.png` y los favicons PNG se generan en el build (`src/lib/images.ts`).
5. **Accesibilidad:** contraste AA, `<a>` y `<button>` reales, `alt` en imágenes, foco visible, enlace "Saltar al contenido", respetar `prefers-reduced-motion`.
6. **Rendimiento:** Lighthouse móvil 90+ (actualmente 100 en las cuatro categorías). Nada de librerías de cliente innecesarias. Calendly se carga de forma diferida con IntersectionObserver. Los scripts de terceros solo se cargan si están activados.
7. **Analítica:** GA4 y Meta Pixel quedan preparados en `components/Analytics.astro` y se activan solo si `site.analytics.ga4Id` o `site.analytics.metaPixelId` tienen valor. Los botones de contacto llevan `data-track="..."` para registrar eventos.

## Estructura de la página (orden fijo)

1. Header fijo: logo, anclas (Problemas, Cómo trabajamos, Para quién) y botón "Agendar diagnóstico".
2. Hero con el visual "Hoy vs Con Operia" (`FlowCompare.astro`).
3. Problemas (6 tarjetas).
4. Cómo trabajamos (4 pasos numerados).
5. Para quién (10 a 100 personas y 4 rubros).
6. Retorno: tabla de ejemplo con valores entre corchetes.
7. Agenda (`#agenda`): Calendly si hay `calendlyUrl`; si no, tarjeta con WhatsApp (mensaje prellenado) y correo.
8. Footer: nombre, "Lima, Perú", razón social y año.

## Comandos

```bash
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

Requiere Node ≥ 22.22.

## Notas técnicas

- `src/lib/images.ts` convierte el texto a trazos SVG con `opentype.js` y la fuente Sora de `src/assets/fonts/`. Así la imagen sale igual en macOS y en el servidor de build. No usar `toPathData()` de opentype.js 2.0: genera `NaN` al redondear, por eso hay un serializador propio.
- Para cambiar el logo: `components/Logo.astro`, `public/favicon.svg` y `markSvg` en `src/lib/images.ts`.
- Antes de publicar, buscar marcadores pendientes con `grep -rn "\[" src/config/site.ts`.
