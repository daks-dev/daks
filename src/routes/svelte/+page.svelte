<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from 'daks-svelte';

  const title = 'DAKS • Svelte';
  const description = 'Фреймворк разработки кибернетически улучшенных веб-приложений Svelte';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Svelte&nbsp;!</h1>
    <h2>кибернетически улучшенные веб-приложения</h2>
  </header>

  <div class="content">
    <p>
      <strong>Svelte</strong> это радикально новый подход к созданию пользовательских интерфейсов. В
      то время как традиционные фреймворки, такие как <em>React</em> и <em>Vue</em>, выполняют
      основную часть своей работы в браузере, <b>Svelte</b> переносит эту работу на этап компиляции,
      который происходит при создании вашего приложения.
    </p>
  </div>
</main>
