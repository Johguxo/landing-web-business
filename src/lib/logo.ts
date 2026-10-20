/**
 * Símbolo de LinkUs: una "L" con nodos de circuito (diseño del socio, redibujado en SVG).
 * Única fuente del logo: lo usan el header/footer (Logo.astro), el favicon, la imagen para redes y el documento de ejemplo.
 */

/** Degradado del logo, de abajo a la izquierda (oscuro) hacia arriba a la derecha (claro). */
const GRADIENTS = {
  /** Sobre fondos claros: colores originales del logo. */
  color: ["#063D90", "#0298F9"],
  /** Sobre fondos oscuros (header, footer): más claro para mantener contraste con el azul marino. */
  light: ["#3D8BFF", "#5CC8FF"],
} as const;

export type MarkVariant = keyof typeof GRADIENTS;

let uid = 0;

/** Contenido interno del símbolo (viewBox 0 0 64 64). */
export function markInner(variant: MarkVariant = "color"): string {
  const [from, to] = GRADIENTS[variant];
  // id único por instancia: el símbolo aparece varias veces en la misma página.
  const id = `lk-grad-${variant}-${uid++}`;
  return [
    `<defs><linearGradient id="${id}" x1="8" y1="62" x2="60" y2="6" gradientUnits="userSpaceOnUse">`,
    `<stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs>`,
    `<g fill="url(#${id})" stroke="url(#${id})">`,
    // La "L": barra vertical + base, con un corte circular alrededor del nodo inferior izquierdo.
    `<path stroke="none" d="M10.5 21Q10.5 16 15.5 16L22.5 16Q23.5 16 23.5 17L23.5 45Q23.5 51 29.5 51L44.5 51Q48.5 51 48.5 55L48.5 61Q48.5 62 47.5 62L18.75 62A10.5 10.5 0 0 0 10.5 45Z"/>`,
    // Circuito: del nodo superior en diagonal, baja y gira hacia el nodo del medio.
    `<path fill="none" stroke-width="6" stroke-linejoin="round" d="M47.1 17.6L32.5 28L32.5 41.5L48 41.5"/>`,
    // Nodos: anillos con el centro vacío.
    `<path stroke="none" fill-rule="evenodd" d="M52.8 3.5a10 10 0 1 1 0 20a10 10 0 1 1 0-20ZM52.8 9.3a4.2 4.2 0 1 0 0 8.4a4.2 4.2 0 1 0 0-8.4Z"/>`,
    `<path stroke="none" fill-rule="evenodd" d="M54.5 34a8 8 0 1 1 0 16a8 8 0 1 1 0-16ZM54.5 38.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7Z"/>`,
    `<path stroke="none" fill-rule="evenodd" d="M10.5 47a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0-17ZM10.5 51.8a3.7 3.7 0 1 0 0 7.4a3.7 3.7 0 1 0 0-7.4Z"/>`,
    `</g>`,
  ].join("");
}

/** SVG completo del símbolo. Con `background`, va sobre un cuadrado redondeado azul marino (favicon). */
export function markSvg({ size = 64, background = true }: { size?: number; background?: boolean } = {}): string {
  const bg = background ? `<rect width="64" height="64" rx="14" fill="#0E1B2E"/>` : "";
  const inner = background
    ? `<g transform="translate(6 5) scale(0.82)">${markInner("light")}</g>`
    : markInner("color");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">${bg}${inner}</svg>`;
}
