<script lang="ts">
  import { YandexMetrikaHit, Async, LightboxKit } from 'daks-svelte';
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

  <Async
    let:value
    {getter}>
  <LightboxKit
    class="container gap-8"
    {...value}
    rounded
    shadow />
    </Async>
</main>
