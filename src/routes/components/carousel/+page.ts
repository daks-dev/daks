import { gallery } from 'daks-svelte';

export const load = async () => ({
  images: await gallery.screens()
});
