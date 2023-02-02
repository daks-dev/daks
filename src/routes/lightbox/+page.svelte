<script lang="ts">
  import { YandexMetrikaHit } from 'daks-svelte';
  import { sources, squares } from 'daks-svelte/assets/images/gallery';
  import Grid from './Grid.svelte';

  // import type { PageData } from './$types';
  // export let data: PageData;

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

  <Grid {getter} />
</main>
