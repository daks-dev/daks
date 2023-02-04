<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Gallery } from 'daks-svelte';
  import Code from '$lib/components/Code.svelte';

  import { screens as getter } from 'daks-svelte/assets/images/gallery';

  const show = (x: number) =>
    (x < 640 && 1) || (x < 768 && 2) || (x < 1024 && 3) || (x < 1280 && 4) || 5;

  const title = 'DAKS • Carousel';
  const description = 'DAKS: carousel';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Carousel</h1>
  </header>

  <Gallery
    class="container mb-8 drop-shadow-md"
    {getter}
    {show}
    duration={5000}
    check={true} />

  <Code class="content mb-8 drop-shadow-md">
    {`
export let images: undefined | Image[]  = undefined;

export let css: Css = {};

export let show: Show = (n: number) => (n < 480 && 1) || (n < 1024 && 2) || 3;

export let autoplay = false;
export let controls: Controls = ['move', 'play'];

export let duration = 3000;
export let delay = 2000;
export let easing: Easing = quintOut;
export let aspect = 'auto';
export let appear = 10000;

export let nativ = true;
export let loader: Loader = undefined;
export let loaded: Loaded = undefined;
    `.trim()}
  </Code>

  <Code class="content">
    {`
export interface Image {
  src: string,
  width: number,
  height: number,
  title?: string
}

export interface Item {
  id: number,
  order: number,
  data: Element | Image
}

export interface Css {
  item?: string,
  button?: string
}

export type Show = number | ((x: number) => number);

export type Controls = string | string[];

export type Easing = (x: any) => any;

export type Loader = undefined | (() => void);

export type Loaded = undefined | ((e: Event) => void);
    `.trim()}
  </Code>
</main>
