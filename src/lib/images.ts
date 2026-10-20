/**
 * Genera en el build la imagen para redes (og-image.png) y los íconos PNG
 * a partir de src/config/site.ts, para que cambiar el nombre actualice todo.
 * El texto se convierte a trazos SVG con la fuente Sora incluida en el proyecto,
 * así la imagen sale igual en cualquier equipo o servidor de build.
 */
import path from "node:path";
import { readFileSync } from "node:fs";
import opentype from "opentype.js";
import sharp from "sharp";
import { site } from "../config/site";
import { markInner, markSvg } from "./logo";

const INK = "#0E1B2E";
const PAPER = "#F4F6FA";
const AMBER = "#E8A33D";
const MUTED = "#AAB6C8";

const fontsDir = path.join(process.cwd(), "src/assets/fonts");
const loadFont = (file: string) => {
  const buf = readFileSync(path.join(fontsDir, file));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
};

// toPathData() de opentype.js 2.0 genera NaN al redondear; serializamos los comandos aquí.
const n = (v: number) => Math.round(v * 100) / 100;
function pathData(p: opentype.Path): string {
  return p.commands
    .map((c) => {
      switch (c.type) {
        case "M":
        case "L":
          return `${c.type}${n(c.x)} ${n(c.y)}`;
        case "Q":
          return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
        case "C":
          return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
        default:
          return "Z";
      }
    })
    .join("");
}

/** Texto en una o varias líneas (ajuste por palabras) convertido a <path>. */
function textPath(
  font: opentype.Font,
  text: string,
  opts: { x: number; y: number; size: number; maxWidth?: number; lineHeight?: number; fill: string },
): { svg: string; lines: number } {
  const { x, y, size, maxWidth = Infinity, lineHeight = 1.2, fill } = opts;
  const lines: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/)) {
    const next = current ? `${current} ${word}` : word;
    if (current && font.getAdvanceWidth(next, size) > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  const d = lines.map((line, i) => pathData(font.getPath(line, x, y + i * size * lineHeight, size))).join(" ");
  return { svg: `<path d="${d}" fill="${fill}"/>`, lines: lines.length };
}



export async function iconPng(size: number): Promise<Buffer> {
  return sharp(Buffer.from(markSvg({ size }))).png().toBuffer();
}

/** Texto con espaciado entre letras (tracking), letra por letra. */
function trackedPath(font: opentype.Font, text: string, x: number, y: number, size: number, tracking: number, fill: string) {
  let cx = x;
  const parts: string[] = [];
  for (const ch of text) {
    parts.push(pathData(font.getPath(ch, cx, y, size)));
    cx += font.getAdvanceWidth(ch, size) + tracking;
  }
  return { svg: `<path d="${parts.join(" ")}" fill="${fill}"/>`, width: cx - x - tracking };
}

/**
 * Imagen para compartir (1200×630). El logo va grande y centrado porque WhatsApp a veces
 * muestra la vista previa como miniatura cuadrada recortando el centro: así el logo siempre se ve.
 */
export async function ogImagePng(): Promise<Buffer> {
  const W = 1200;
  const H = 630;
  const bold = loadFont("Sora-Bold.ttf");
  const regular = loadFont("Sora-Regular.ttf");

  // Logotipo: símbolo + nombre, con el subtítulo debajo del nombre.
  const markSize = 150;
  const gap = 30;
  const nameSize = 104;
  const subSize = 23;
  const subTracking = 4;
  const nameW = bold.getAdvanceWidth(site.name, nameSize);
  // El ancho del logotipo es el del texto más ancho (nombre o subtítulo), para centrarlo bien.
  const subW = trackedPath(regular, site.tagline.toUpperCase(), 0, 0, subSize, subTracking, MUTED).width;
  const lockupW = markSize + gap + Math.max(nameW, subW + 4);
  const lockupX = Math.round((W - lockupW) / 2);
  const markY = 130;
  const nameX = lockupX + markSize + gap;
  const name = textPath(bold, site.name, { x: nameX, y: markY + 98, size: nameSize, fill: PAPER });
  const sub = trackedPath(regular, site.tagline.toUpperCase(), nameX + 4, markY + 140, subSize, subTracking, MUTED);

  // Frase de valor centrada debajo del logotipo.
  const valueSize = 28;
  const valueW = regular.getAdvanceWidth(site.seo.ogValue, valueSize);
  const value = textPath(regular, site.seo.ogValue, { x: Math.round((W - valueW) / 2), y: 452, size: valueSize, fill: PAPER });

  const domainSize = 26;
  const domainW = bold.getAdvanceWidth(site.seo.ogDomain, domainSize);
  const domain = textPath(bold, site.seo.ogDomain, { x: Math.round((W - domainW) / 2), y: 548, size: domainSize, fill: AMBER });

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${INK}"/>
  <g transform="translate(${lockupX} ${markY}) scale(${markSize / 64})">${markInner("light")}</g>
  ${name.svg}
  ${sub.svg}
  <rect x="${W / 2 - 40}" y="368" width="80" height="5" rx="2.5" fill="${AMBER}"/>
  ${value.svg}
  ${domain.svg}
</svg>`;

  return sharp(Buffer.from(svg)).png().toBuffer();
}
