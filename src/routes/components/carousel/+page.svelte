<script lang="ts">
  import { fade, blur, slide } from 'svelte/transition';
  import { linear, sineInOut, quadInOut } from 'svelte/easing';
  import {
    YandexMetrikaHit,
    Icon,
    Carousel,
    BagePlaceholder,
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
    VideoPlaceholder
  } from 'daks-svelte';
  import type { SvelteComponent } from 'svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { images } = data;

  let innerWidth: number;
  const show = (x: number) =>
    (x < 480 && 1) || (x < 1024 && 2) || (x < 1280 && 3) || (x < 1560 && 4) || 5;

  let ratio = 0;
  $: getRatio = () => {
    switch (ratio) {
      case 1:
        return 1;
      case 2:
        return 4 / 3;
      case 3:
        return 16 / 9;
      case 4:
        return 620 / 877;
      case 5:
        return 877 / 620;
      default:
        return undefined;
    }
  };
  $: getRatioName = () => {
    switch (ratio) {
      case 1:
        return '1:1';
      case 2:
        return '4:3';
      case 3:
        return '16:9';
      case 4:
        return 'A4';
      case 5:
        return 'A4 albom';
      default:
        return 'none';
    }
  };

  let count = 0;
  let duration = 3000;
  let delay = 1000;

  let easing = 0;
  $: getEasing = () => {
    switch (easing) {
      case 1:
        return sineInOut;
      case 2:
        return quadInOut;
      default:
        return linear;
    }
  };
  $: getEasingName = () => {
    switch (easing) {
      case 1:
        return 'sineInOut';
      case 2:
        return 'quadInOut';
      default:
        return 'linear';
    }
  };

  let lazyload = false;

  let stream = false;
  let autoplay = false;
  let progress = true;

  let carousel0: SvelteComponent;
  let carousel1: SvelteComponent;
  const init = () => {
    carousel0?.init();
    carousel1?.init();
    if (stream) {
      autoplay = true;
      duration = 7000;
      easing = 0;
    }
  };
  const reset = () => {
    carousel0?.reset(0);
    carousel1?.reset(0);
  };

  let render0 = true;
  let render1 = true;

  const title = 'DAKS • Carousel';
  const description = 'DAKS: carousel';
</script>

<svelte:window bind:innerWidth />

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content mb-8">
    <h1 class="title">DEBUG</h1>
  </header>

  {#if render0 || render1}
    <div class="content mb-4 flex gap-4">
      <label>
        <input
          bind:checked={stream}
          on:change={init}
          type="checkbox" />
        stream
      </label>
      <label>
        <input
          bind:checked={autoplay}
          on:change={init}
          type="checkbox"
          disabled={stream} />
        autoplay
      </label>
      <label>
        <input
          bind:checked={lazyload}
          on:change={init}
          type="checkbox" />
        lazyload
      </label>
      <label>
        <input
          bind:checked={progress}
          type="checkbox" />
        progress
      </label>
    </div>

    <div
      class="
        content mb-4
        grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <label class="flex flex-col">
        duration: {duration / 1000} sec
        <input
          bind:value={duration}
          type="range"
          min="1000"
          max="20000"
          step="1000" />
      </label>
      <label class="flex flex-col">
        delay: {@html stream ? '&mdash;' : `${delay / 1000} sec`}
        <input
          bind:value={delay}
          type="range"
          min="0"
          max="10000"
          step="1000"
          disabled={stream} />
      </label>
      <label class="flex flex-col">
        easing: {getEasingName()}
        <input
          bind:value={easing}
          on:change={init}
          type="range"
          min="0"
          max="2"
          step="1"
          disabled={stream} />
      </label>
    </div>

    <div
      class="
      content mb-16
      grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <label class="flex flex-col">
        count: {count || `${show(innerWidth)} [auto]`}
        <input
          bind:value={count}
          on:change={reset}
          type="range"
          min="0"
          max="5"
          step="1" />
      </label>
      <label class="flex flex-col">
        aspect ratio: {getRatioName()}
        <input
          bind:value={ratio}
          type="range"
          min="0"
          max="5"
          step="1" />
      </label>
    </div>
  {/if}

  <div class="content mb-4">
    <button
      on:click={() => (render0 = !render0)}
      class="py-1 inline-flex items-center hover:text-slate-500">
      <Icon
        class="w-7 h-7"
        icon={render0 ? 'ic:round-unfold-more' : 'ic:round-unfold-less'} />
      <span>images set</span>
    </button>
  </div>
  {#if render0}
    <div
      in:slide={{ duration: 500, easing: sineInOut }}
      out:slide={{ duration: 500, easing: sineInOut }}>
      <Carousel
        bind:this={carousel0}
        class="content mb-16"
        {images}
        show={count || show}
        ratio={getRatio()}
        {duration}
        {delay}
        nativ={!lazyload}
        easing={getEasing()}
        controls="play move"
        {progress}
        {stream}
        {autoplay} />
    </div>
  {/if}

  <div class="content mb-4">
    <button
      on:click={() => (render1 = !render1)}
      class="py-1 inline-flex items-center hover:text-slate-500">
      <Icon
        class="w-7 h-7"
        icon={render1 ? 'ic:round-unfold-more' : 'ic:round-unfold-less'} />
      <span>items slot</span>
    </button>
  </div>
  {#if render1}
    <div
      in:fade={{ duration: 500, easing: sineInOut }}
      out:blur={{ duration: 500, amount: 7, easing: sineInOut }}
      class="transition-all duration-300 ease-in-out">
      <Carousel
        let:width
        let:ratio
        bind:this={carousel1}
        class="content"
        show={count || show}
        ratio={getRatio()}
        {duration}
        {delay}
        nativ={!lazyload}
        easing={getEasing()}
        controls="play move"
        {progress}
        {stream}
        {autoplay}>
        {#each Array(10) as val, key}
          <div
            class="bg-cyan-600/25 odd:bg-cyan-300/25"
            style:width="{width}px">
            <div class="h-full flex items-center py-4 px-5">
              {#if key === 1}
                <Skeleton class="w-full" />
              {:else if key === 3}
                <ImagePlaceholder class="w-full  h-full" />
              {:else if key === 5}
                <TextPlaceholder class="w-full" />
              {:else if key === 7}
                <VideoPlaceholder class="w-full h-full" />
              {:else if key === 9}
                <BagePlaceholder class="w-full" />
              {:else}
                <span class="mx-auto"
                  >#&nbsp;{key} [{width.toFixed(2)}] {ratio ? `(${ratio.toFixed(2)})` : ''}</span>
              {/if}
            </div>
          </div>
        {/each}
      </Carousel>
    </div>
  {/if}
</main>
