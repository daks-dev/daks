/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,svelte,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}'
  ],

  darkMode: 'class',

  presets: [
    require('daks-svelte/assets/tailwindcss/presets/common.cjs'),
    require('daks-svelte/assets/tailwindcss/presets/font-family.cjs')
  ],

  theme: {
    extend: {
      backgroundImage: {
        'loading-data': 'url(daks-svelte/assets/icons/spinners/blocks-scale.svg)'
      }
    }
  }
};
