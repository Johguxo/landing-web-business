# Landing page de Operia

Sitio estático de una sola página hecho con [Astro](https://astro.build) y Tailwind CSS. Su único objetivo es que el visitante agende un diagnóstico gratuito de 30 minutos.

No tiene backend ni base de datos. Se publica gratis en Vercel o Netlify.

---

## 1. Correrlo en tu computadora

Necesitas **Node.js 22.22 o superior** ([descargar](https://nodejs.org)). Para revisar tu versión, ejecuta `node -v`.

```bash
npm install        # instala dependencias (solo la primera vez)
npm run dev        # servidor local en http://localhost:4321
```

Otros comandos:

| Comando           | Qué hace                                                  |
| ----------------- | --------------------------------------------------------- |
| `npm run build`   | Genera el sitio final en la carpeta `dist/`               |
| `npm run preview` | Sirve `dist/` para revisar el resultado antes de publicar |

---

## 2. Qué editar: `src/config/site.ts`

Todos los datos y textos están en **un solo archivo**: `src/config/site.ts`. No necesitas tocar los componentes para cambiar contenido.

Todo lo que aparece **entre corchetes**, como `[TU NÚMERO]`, es un dato pendiente. En la página se ve resaltado en amarillo a propósito, para que no se publique por error.

| Campo                      | Qué poner                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------- |
| `name`                     | Nombre comercial. Se actualiza en logo, títulos, textos e imagen para redes.           |
| `legalName`                | Razón social para el footer (ej. `Operia S.A.C.`).                                      |
| `ruc`                      | Opcional. Si lo completas, aparece en el footer.                                        |
| `url`                      | Tu dominio final, ej. `https://www.operia.pe`. Se usa en sitemap, canonical y Open Graph. |
| `contact.email`            | Correo de contacto.                                                                     |
| `contact.whatsapp`         | Número con código de país, **solo dígitos**: `51987654321`.                             |
| `contact.whatsappMessage`  | Mensaje que aparece ya escrito al abrir WhatsApp.                                       |
| `contact.calendlyUrl`      | Enlace de tu evento de Calendly. **Si lo dejas vacío**, la sección de agenda muestra solo WhatsApp y correo. |
| `seo.title` / `seo.description` | Título y descripción para Google y al compartir el enlace.                        |
| `seo.ogTagline`            | Frase grande de la imagen que se ve al compartir por WhatsApp o LinkedIn.               |
| `analytics.ga4Id`          | ID de Google Analytics 4 (`G-XXXXXXXXXX`). Vacío = desactivado.                         |
| `analytics.metaPixelId`    | ID de Meta Pixel (solo números). Vacío = desactivado.                                   |
| `team.people`              | **Quién te atiende**: nombre, cargo, foto, experiencia y LinkedIn. Es el elemento que más confianza genera: complétalo con datos reales. |
| `faq.items`                | Preguntas frecuentes. Dos respuestas tienen marcadores (plazo típico y cómo proteges la información). |
| `hero`, `problems`, `process`, `audience`, `roi`, `booking` | Textos de cada sección.                          |

### Foto del equipo

Guarda la foto en `public/equipo/` (cuadrada, mínimo 400×400 px, en `.jpg` o `.webp`, idealmente de menos de 150 KB) y pon la ruta en `team.people[0].photo`, por ejemplo `"/equipo/juan-perez.jpg"`. Una foto real, con buena luz y de frente, vale más que cualquier logo. Para agregar más personas, añade otro objeto al arreglo `people`.

### Calendly

1. En Calendly, crea un evento de 30 minutos (ej. "Diagnóstico gratuito").
2. Copia su enlace (`https://calendly.com/tu-usuario/diagnostico`) y pégalo en `contact.calendlyUrl`.
3. El calendario se carga solo cuando el visitante llega a esa sección, para no hacer más lenta la página.

### Analítica (GA4 y Meta Pixel)

Pega el ID en `analytics.ga4Id` o `analytics.metaPixelId` y vuelve a publicar. Mientras estén vacíos, no se carga ningún script de terceros.

Con la analítica activa, los clics en los botones de agendar, WhatsApp y correo se registran como eventos: `click_agendar_header`, `click_agendar_hero`, `click_agendar_retorno`, `click_whatsapp` y `click_email`. Puedes marcarlos como conversión en GA4 o en Meta.

> Si activas analítica, revisa tus obligaciones de aviso de privacidad según la Ley N.º 29733 de Protección de Datos Personales.

### Imagen para redes y favicon

`og-image.png`, `favicon.png` y `apple-touch-icon.png` se generan automáticamente en cada build a partir del nombre y la frase de `site.ts`. El código está en `src/lib/images.ts`. El favicon vectorial está en `public/favicon.svg`; si cambias el logo, actualízalo también ahí y en `src/components/Logo.astro`.

---

## 3. Publicar en Vercel

1. Sube el proyecto a un repositorio de GitHub (puede ser privado).
2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub y haz clic en **Add New → Project**.
3. Elige el repositorio. Vercel detecta Astro solo; no cambies nada y haz clic en **Deploy**.
4. En uno o dos minutos tendrás una URL tipo `operia.vercel.app`.

Cada vez que hagas `git push` a la rama principal, Vercel vuelve a publicar automáticamente.

> **Netlify** funciona igual: **Add new site → Import an existing project**, elige el repo y deja los valores detectados (build `npm run build`, carpeta `dist`).

---

## 4. Conectar un dominio `.pe`

### Comprar el dominio

Los dominios `.pe` y `.com.pe` se registran a través de los registradores acreditados por **Punto PE** (administrado por la Red Científica Peruana). Consulta la lista en [punto.pe](https://punto.pe). Necesitarás los datos de la empresa (razón social y RUC) o de una persona titular.

### Apuntarlo a Vercel

1. En Vercel, entra al proyecto → **Settings → Domains** → escribe tu dominio (ej. `operia.pe`) → **Add**.
2. Agrega también `www.operia.pe` y elige cuál será el principal; el otro redirige automáticamente.
3. Vercel te muestra los registros DNS que debes crear. Normalmente son:

   | Tipo    | Nombre | Valor                  |
   | ------- | ------ | ---------------------- |
   | `A`     | `@`    | `76.76.21.21`          |
   | `CNAME` | `www`  | `cname.vercel-dns.com` |

   Usa siempre los valores exactos que muestre Vercel en pantalla, porque pueden variar por proyecto.

4. Entra al panel DNS de tu registrador y crea esos registros. Otra opción es cambiar los *nameservers* del dominio a los de Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
5. La propagación puede tardar desde minutos hasta 48 horas. Vercel activa el certificado HTTPS solo.

### Último paso

Cambia `url` en `src/config/site.ts` a tu dominio final (ej. `https://operia.pe`) y vuelve a publicar. Así el sitemap, la URL canónica y la imagen para redes apuntan al dominio correcto.

Para comprobar cómo se ve el enlace al compartirlo, usa el [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/) o el [depurador de Meta](https://developers.facebook.com/tools/debug/). WhatsApp guarda en caché la vista previa, así que los cambios pueden tardar en reflejarse.

---

## Estructura

```
src/
├── config/site.ts        ← datos y textos editables
├── components/           ← una sección por archivo (Header, Hero, Problems…)
├── layouts/Base.astro    ← <head>: SEO, Open Graph, fuentes, analítica
├── lib/images.ts         ← genera og-image.png y los íconos PNG
├── pages/                ← index.astro + robots.txt, og-image y favicons
├── styles/global.css     ← colores, tipografías y botones
└── assets/fonts/         ← Sora (licencia OFL) para generar la imagen para redes
```
