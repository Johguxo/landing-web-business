import type { APIRoute } from "astro";
import { iconPng } from "../lib/images";

/** Logo cuadrado (512×512) para los datos estructurados de Google. */
export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await iconPng(512)), { headers: { "Content-Type": "image/png" } });
