<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Dropdown, Select, type NavItem } from 'daks-svelte';

  const items: NavItem[] = [
    { label: 'Link 0 0', href: '#' },
    { label: 'Link 1 0', href: '#' },
    { label: 'Button 1 1', handle: () => alert('handle click 1 1') },
    { label: 'Link 2 0', href: '#' },
    { label: 'Link 2 1', href: '#' },
    { label: 'Button 2 2', handle: () => alert('handle click 2 2') },
    { label: 'Link 3 0', href: '#' }
  ];

  const title = 'DAKS • Tailwind CSS';
  const description = 'фреймворк компонующий CSS классы для создания любого дизайна Tailwind CSS';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Tailwind&nbsp;CSS&nbsp;!</h1>
    <h2>API для вашей системы проектирования</h2>
  </header>

  <div class="content mb-16">
    <p>
      Служебные классы <strong>Tailwind CSS</strong> помогают Вам работать в рамках ограничений
      системы вместо того, чтобы загромождать ваши таблицы стилей произвольными значениями.
      <b>Tailwind CSS</b> позволяет легко придерживаться выбора цвета, интервалов, типографики, теней
      и всего остального, что составляет хорошо продуманную систему дизайна.
    </p>
  </div>

  <section
    id="dropdown"
    class="content mb-16">
    <h1 class="mb-8 text-2xl">Dropdown...</h1>
    <Dropdown
      class="mr-8"
      label="Dropdown 0"
      {items} />
    <Dropdown
      class="fixed"
      label="Dropdown 1"
      {items} />
  </section>

  <section
    id="select"
    class="content mt-16">
    <h1 class="mb-8 text-2xl">Select...</h1>
    <Select />
  </section>
</main>
