<script lang="ts">
  let className = '';
  export { className as class };
</script>

<code
  class="whitespace-pre px-8 py-5
         border border-gray-300 dark:border-gray-500 rounded-xl
         bg-neutral-50 dark:bg-gray-700
         {className}">
   <slot />
</code>
