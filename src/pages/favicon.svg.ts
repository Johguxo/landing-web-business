import type { APIRoute } from "astro";
import { markSvg } from "../lib/logo";

export const GET: APIRoute = () => new Response(markSvg(), { headers: { "Content-Type": "image/svg+xml" } });
