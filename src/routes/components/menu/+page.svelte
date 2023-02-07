<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Dropdown, DropdownWrapper, type NavItem } from 'daks-svelte';

  const items: NavItem[] = [
    { label: 'Link 10', href: '#__8' },
    { label: 'Button 0', handle: () => alert('handle click 0') },
    { label: 'Link 50', href: '#__48' },
    { label: 'Button 1', handle: () => alert('handle click 1') },
    { label: 'Link 80', href: '#__78' }
  ];

  const title = 'DAKS • Dropdown Menu';
  const description = 'DAKS: dropdown Menu';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Dropdown Menu</h1>
  </header>

  <div
    id="dropdown"
    class="content flex justify-between mb-16 uppercase">
    <Dropdown
      let:id
      let:hidden
      class="px-4 py-2 rounded-md shadow-md shadow-black"
      label="Dropdown 0">
      <DropdownWrapper
        {id}
        {hidden}
        class="
          mt-1
          bg-neutral-50/95 dark:bg-slate-700/95
          shadow-lg shadow-gray-600 lg:shadow-none lg:drop-shadow-md
          rounded-md focus:outline-none"
        classLink="
          hover:text-sky-500 dark:hover:text-sky-300
          hover:bg-gray-500/50"
        {items} />
    </Dropdown>
    <Dropdown
      let:id
      let:hidden
      class="px-4 py-2 rounded-sm drop-shadow-sm"
      label="Dropdown 1">
      <DropdownWrapper
        {id}
        {hidden}
        class="
          right-0 mt-1 text-right
          bg-neutral-50/95 dark:bg-slate-700/95
          shadow-lg shadow-gray-600 lg:shadow-none lg:drop-shadow-md
          rounded-md focus:outline-none"
        classLink="
          hover:text-sky-500 dark:hover:text-sky-300
          hover:bg-gray-500/50"
        {items} />
    </Dropdown>
  </div>

  <div class="content space-y-8">
    {#each Array(99) as val, key}
      <div id="__{key}">{key + 1} {val || '...'}</div>
    {/each}
  </div>
</main>
