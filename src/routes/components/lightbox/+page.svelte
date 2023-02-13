<script lang="ts">
  import { YandexMetrikaHit, Async, LightboxKit } from 'daks-svelte';
  import { sources, squares, labels } from 'daks-svelte/assets/images/gallery';

  const getter = async () => ({
    images: await sources(),
    thumbnails: await squares(),
    labels
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

  <Async
    let:value
    {getter}>
  <LightboxKit
    class="container gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    {...value}
    grid
    rounded
    shadow />
    </Async>
</main>
