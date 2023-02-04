<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Select } from 'daks-svelte';


  const title = 'DAKS • Select';
  const description = 'DAKS: select';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Select</h1>
  </header>

  <div class="content mb-16">
    <Select />
  </div>

  <div class="content space-y-4">
    {#each Array(21) as val, key}
      <div>{key + 1} {val || '...'}</div>
    {/each}
  </div>
</main>
