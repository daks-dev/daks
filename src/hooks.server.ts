
import type { Handle } from '@sveltejs/kit';
import _handle from 'daks-svelte/app/hooks.server';


import.meta.env.DEV && (await import('daks-svelte/ui/iconify/server'));

const redirects: any = {
  '/carousel': '/components/carousel',
  '/lightbox': '/components/lightbox'
};

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname in redirects) {
    return new Response(undefined, {
      status: 308,
      headers: {
        location: redirects[event.url.pathname]
      }
    });
  }
  return await _handle({ event, resolve });
};
