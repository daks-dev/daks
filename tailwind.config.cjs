/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,svelte,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}'
  ],

  presets: [
    require('daks-svelte/assets/tailwindcss/presets/font-family.cjs'),
    require('daks-svelte/assets/tailwindcss/presets/common.cjs')
  ]

  // theme: { extend: {} }
};
