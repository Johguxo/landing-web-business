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

export async function ogImagePng(): Promise<Buffer> {
  const W = 1200;
  const H = 630;
  const pad = 80;
  const bold = loadFont("Sora-Bold.ttf");
  const regular = loadFont("Sora-Regular.ttf");

  const name = textPath(bold, site.name, { x: pad + 76, y: pad + 30, size: 42, fill: PAPER });

  // Titular: reduce el tamaño si el texto es largo, para que quepa en 3 líneas.
  let size = 68;
  let tagline = textPath(bold, site.seo.ogTagline, { x: pad, y: 0, size, maxWidth: W - pad * 2, lineHeight: 1.18, fill: PAPER });
  while (tagline.lines > 3 && size > 40) {
    size -= 4;
    tagline = textPath(bold, site.seo.ogTagline, { x: pad, y: 0, size, maxWidth: W - pad * 2, lineHeight: 1.18, fill: PAPER });
  }
  const blockH = size * 1.18 * (tagline.lines - 1) + size;
  const top = Math.round((H - blockH) / 2 + size * 0.85);
  tagline = textPath(bold, site.seo.ogTagline, { x: pad, y: top, size, maxWidth: W - pad * 2, lineHeight: 1.18, fill: PAPER });

  const footer = textPath(regular, site.seo.ogFooter, {
    x: pad + 120,
    y: H - pad + 2,
    size: 24,
    fill: MUTED,
  });

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${INK}"/>
  <g transform="translate(${pad - 2} ${pad - 26})">${markInner("light")}</g>
  ${name.svg}
  ${tagline.svg}
  <rect x="${pad}" y="${H - pad - 6}" width="96" height="6" rx="3" fill="${AMBER}"/>
  ${footer.svg}
</svg>`;

  return sharp(Buffer.from(svg)).png().toBuffer();
}
