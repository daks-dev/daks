import { gallery } from 'daks-svelte';

export const load = async () => ({
  dataset: await gallery.screens()
});
