<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Dropdown } from 'daks-svelte';

  const items: (MenuItem | NavLink)[][] = [
    [{ label: 'Link Link Link Link Link 0 0', href: '#dropdown' }],
    [
      { label: 'Link 1 0', href: '#dropdown' },
      { name: 'Button 1 1', handle: () => alert('handle click 1 1') }
    ],
    [
      { label: 'Link 2 0', href: '#dropdown' },
      { label: 'Link 2 1', href: '#dropdown' },
      { name: 'Button Button Button Button 2 2', handle: () => alert('handle click 2 2') }
    ],
    [{ label: 'Link 3 0', href: '#dropdown' }]
  ];

  const title = 'DAKS • Dropdown';
  const description = 'DAKS: dropdown';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Dropdown</h1>
  </header>

  <div class="content nb-16">
    <Dropdown
      class="mr-8"
      label="Dropdown 0"
      {items} />
    <Dropdown
      class="fixed"
      label="Dropdown 1"
      {items} />
  </div>

  <div class="content space-y-4">
    {#each Array(21) as val, key}
      <div>{key + 1} {val || '...'}</div>
    {/each}
  </div>
</main>
