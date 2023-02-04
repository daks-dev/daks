<script lang="ts">
  import LazyLoad from 'vanilla-lazyload';
  import { YandexMetrikaInit, RouteTransition, Footer, Navbar, ScreenBlock } from 'daks-svelte';

  import '../app.css';
  import '$iconify';

  import type { PageData } from './$types';
  export let data: PageData;

  import { app, navigation } from '$lib/configs';

  // window.matchMedia('(prefers-color-scheme: dark)').matches
  if (!import.meta.env.SSR) {
    if (!('color-theme' in localStorage)) {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (!document.lazyloadInstance)
      document.lazyloadInstance = new LazyLoad({
        // use_native: true,
        threshold: 0
      });
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
  {...navigation.footer}>
  DAKS&nbsp;DEV
</Footer>

<Navbar
  class="bg-neutral-50 dark:bg-inherit
         onscroll:bg-neutral-700/90 dark:onscroll:bg-slate-700/90
         shadow-sm dark:shadow-md onscroll:shadow-lg"
  {...navigation.navbar} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
