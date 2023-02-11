import { sveltekit } from '@sveltejs/kit/vite';
import pluginImagetools from 'daks-svelte/vite/plugin-imagetools';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  logLevel: 'error', // 'info'
  plugins: [pluginImagetools(), sveltekit()],
  // server: { fs: { strict: false } },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
};

export default config;
