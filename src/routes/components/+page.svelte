<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Dropdown, Select, type NavItem } from 'daks-svelte';

  const items: NavItem[] = [
    { label: 'Link', href: '/#' },
    { label: 'Button', handle: () => setTimeout(() => alert('Handle 0'), 300) }
  ];

  const title = 'DAKS • Dropdown';
  const description = 'DAKS: dropdown';

  onMount(() => document?.lazyload?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Dropdown</h1>
  </header>

  <div class="content mb-16">
    <h1 class="mb-8 text-2xl">Menu...</h1>
    <Dropdown
      label="Dropdown"
      {items}
      inline />
  </div>

  <div class="content">
    <h1 class="mb-8 text-2xl">Select...</h1>
    <Select />
  </div>
</main>
