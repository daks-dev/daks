<script lang="ts">
  import { YandexMetrikaHit } from 'daks-svelte';
  import Code from '$lib/components/Code.svelte';
  import Grid from './Grid.svelte';

  import { sources, squares } from 'daks-svelte/assets/images/gallery';
  const getter = async () => ({
    images: await sources(),
    thumbnails: await squares()
  });

  const title = 'DAKS • Lightbox';
  const description = 'DAKS: lightbox';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Lightbox</h1>
  </header>

  <Grid
    class="container mb-16"
    {getter} />

  <Code class="content mb-8">
    {`
export let css: Css = {};

export let title = '';
export let description = '';

export let fullscreen = false;
export let scrollable = false;

export let options: Options = {};

export let loader: Loader = undefined;

if (scrollable) fullscreen = options.buttonFullscreen = false;
    `.trim()}
  </Code>

  <Code class="content">
    {`
export interface Options {
  behaviour?: Behaviour;
  clickableClose?: boolean;
  buttonClose?: boolean;
  buttonFullscreen?: boolean;
  enableKeyboard?: boolean;
  bodyScroll?: boolean;
  duration?: number;
}

export interface Css {
  overlay?: string;
  header?: string;
  footer?: string;
}

export interface Item {
  id: number;
  title: string;
  description: string;
}

export type Behaviour = '' | 'hide' | 'loop';

export type Status =
  | undefined
  | {
      countItems: number;
      activeItem: number;
    };

export type Loader = undefined | (() => void);
    `.trim()}
  </Code>
</main>
