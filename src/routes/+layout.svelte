<script lang="ts">
  import {
    lazyload,
    YandexMetrikaInit,
    RouteTransition,
    Footer,
    Navbar,
    ScreenBlock
  } from 'daks-svelte';

  import '../app.css';
  import '$iconify';

  import type { PageData } from './$types';
  export let data: PageData;

  import { app, nav } from '$lib/configs';

  // window.matchMedia('(prefers-color-scheme: dark)').matches
  if (!import.meta.env.SSR) {
    if (!('color-theme' in localStorage)) {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    document.lazyload ??= lazyload();
  }
</script>

<svelte:head>
  <meta
    name="theme-color"
    content={app.themeColor} />
  <meta
    name="msapplication-TileColor"
    content={app.tileColor} />
  <meta
    name="application-name"
    content={app.shortName} />
  <meta
    name="apple-mobile-web-app-title"
    content={app.shortName} />
</svelte:head>

<RouteTransition
  referesh={data.referesh}
  mode={1}
  class="flex flex-col grow">
  <slot />
</RouteTransition>

<Footer
  class="bg-neutral-200/50 dark:bg-inherit"
  {...nav.footer} />

<Navbar
  class="bg-neutral-50 dark:bg-inherit
         onscroll:bg-neutral-50/95 dark:onscroll:bg-slate-700/95
         shadow-sm dark:shadow-md onscroll:shadow-lg"
  {...nav.navbar} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
