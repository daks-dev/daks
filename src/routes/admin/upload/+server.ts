import { building } from '$app/environment';
import { iconset } from 'daks-svelte/server';

export const prerender = false;

export async function GET() {
  return new Response(JSON.stringify(building ? null : await iconset()), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
