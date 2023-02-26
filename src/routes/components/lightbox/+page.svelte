<script lang="ts">
  import { YandexMetrikaHit, Async, LightboxKit, gallery } from 'daks-svelte';

  const getter = async () => ({
    images: await gallery.getter(gallery.sources),
    thumbnails: await gallery.getter(gallery.squares)
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
      class="
      wrapper
      sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
      {...value}
      grid
      centered
      rounded
      shadow
      scale
      grayscale />
  </Async>
</main>
