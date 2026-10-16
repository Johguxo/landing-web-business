import type { APIRoute } from "astro";
import { iconPng } from "../lib/images";

export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await iconPng(32)), { headers: { "Content-Type": "image/png" } });
