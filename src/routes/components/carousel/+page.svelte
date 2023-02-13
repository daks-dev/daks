<script lang="ts">
  import { YandexMetrikaHit, Async, CarouselKit } from 'daks-svelte';
  import { screens } from 'daks-svelte/assets/images/gallery';

  const getter = async () => ({
    images: await screens()
  });

  const show = (x: number) => (x < 480 && 1) || (x < 1024 && 2) || 3;

  const title = 'DAKS • Carousel';
  const description = 'DAKS: carousel';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Carousel</h1>
  </header>

  <Async
    let:value
    {getter}>
    <CarouselKit
      class="lg:container"
      {...value}
      {show}
      controls="move play"
      autoplay={false}
      duration={3000}
      delay={1500}
      check />
  </Async>
</main>
