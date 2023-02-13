
import type { Handle } from '@sveltejs/kit';
import { iconkit, hooks } from 'daks-svelte/server';

import.meta.env.DEV && iconkit();

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
  return await hooks({ event, resolve });
};
