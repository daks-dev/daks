<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Icon } from 'daks-svelte';

  const title = 'DAKS • WEB разработка';
  const description = 'DAks DEV: WEB разработка HTML, JS, CSS, Svelte, Tailwind CSS';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="grow justify-center items-center text-center"
  itemprop="mainContentOfPage">
  <header class="mb-4">
    <h1 class="mb-4 lg:mb-16 text-2xl lg:text-3xl xl:text-4xl !text-slate-400">
      HTML5 • CSS3 • JS
    </h1>
    <h2
      class="mb-4 lg:mb-8
             text-3xl md:text-4xl lg:text-5xl xl:text-7xl
             text-shadow text-slate-700 dark:text-slate-300"
      style:--text-shadow-val="5px"
      style:--text-shadow-color="rgba(128,128,128,.75)">
      • Svelte •
    </h2>
    <h2
      class="mb-12 lg:mb-24
             text-2xl md:text-4xl lg:text-5xl xl:text-6xl
             text-shadow text-slate-700 dark:text-slate-300"
      style:--text-shadow-val="5px"
      style:--text-shadow-color="rgba(128,128,128,.75)">
      • Tailwind CSS •
    </h2>
    <h3 class="text-lg md:text-xl xl:text-2xl !text-slate-500">&copy; DVA [DAKS]</h3>
  </header>
  <a
    rel="noreferrer"
    class="opacity-50 hover:opacity-100 text-slate-500 hover:text-sky-500 hover:scale-110
           transition-all duration-300 ease-in-out"
    href="https://github.com/daks-dev/daks.git"
    target="_blank">
    <Icon
      icon="line-md:github-loop"
      class="w-[20vmin] h-[20vmin] vector-non-scaling-stroke">
      2022 &star; Svelte.Kit
    </Icon>
  </a>
</main>
