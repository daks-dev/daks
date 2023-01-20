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
      class="mb-4 lg:mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-7xl dark:text-slate-300 text-shadow"
      style:--text-shadow-val="4px">
      • Svelte •
    </h2>
    <h2
      class="mb-12 lg:mb-24 text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-slate-300 text-shadow"
      style:--text-shadow-val="4px"
      style:--text-shadow-color="rgba(255,255,255,.25)"
      >
      • Tailwind CSS •
    </h2>
    <h3 class="text-lg md:text-xl xl:text-2xl !text-slate-500">&copy; DVA [DAks]</h3>
  </header>
  <a
    rel="noreferrer nofollow"
    class="opacity-50 hover:opacity-100 text-slate-500 hover:text-sky-500 hover:scale-110
           transition-all duration-300 ease-in-out"
    href="https://github.com/diaksid/daks.svelte"
    target="_blank">
    2022 &star; Svelte.Kit
    <Icon
      icon="line-md:github-loop"
      class="w-[20vmin] h-[20vmin] vector-non-scaling-stroke">
      2022 &star; Svelte.Kit
    </Icon>
  </a>
</main>
