<script lang="ts">
  import { YandexMetrikaHit } from 'daks-svelte';
  import { Async, GalleryKit } from 'daks-svelte';
  import { squares, labels } from 'daks-svelte/assets/images/gallery';

  const getter = async () => ({
    images: await squares(),
    labels
  });

  const title = 'DAKS • Gallery';
  const description = 'DAKS: gallery';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Gallery</h1>
  </header>

  <Async
  let:value
  {getter}>
    <GalleryKit
      class="container gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      classes={{figure: 'items-center', image: 'mb-4', caption: 'text-center'}}
      {...value}
      grid
      rounded
      shadow
      scale
      grayscale />
  </Async>
</main>
