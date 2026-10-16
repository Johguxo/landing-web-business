import type { APIRoute } from "astro";
import { ogImagePng } from "../lib/images";

export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await ogImagePng()), { headers: { "Content-Type": "image/png" } });
