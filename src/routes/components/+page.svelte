<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from 'daks-svelte';

  const title = 'DAKS • Components';
  const description = 'DAKS: components';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Components</h1>
  </header>

  <div class="content space-y-4">
    {#each Array(21) as val, key}
      <div>{key + 1} {val || '...'}</div>
    {/each}
  </div>
</main>
