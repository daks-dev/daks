<script lang="ts">
  import { Lightboxes, LightboxModal, LightboxThumbnail } from 'daks-svelte';
  import placeholder from 'daks-svelte/assets/icons/placeholder';

  let className: undefined | string = undefined;
  export { className as class };

  export let getter;
  const promise = getter();

  const loader = () =>
    document?.lazyloadInstance && document.lazyloadInstance.update();
</script>

<section class={className}>
  {#await promise}
    <div
      class="w-80 aspect-video mx-auto
             bg-no-repeat bg-center bg-loading-data bg-1/3" />
  {:then { images, thumbnails }}
    <Lightboxes
      class="flex flex-wrap gap-7 justify-center"
      css={{ overlay: 'overflow-offset' }}
      options={{ behaviour: 'hide' }}
      {loader}>
      <svelte:fragment slot="thumbnail">
        {#each thumbnails as thumbnail, idx}
          <LightboxThumbnail>
            <img
              class="lazy
                     rounded-md grayscale hover:grayscale-0
                     bg-no-repeat bg-center bg-1/5 bg-loading bg-gray-300
                     drop-shadow-md hover:shadow-md hover:shadow-slate-900"
              src={placeholder}
              data-src={thumbnail.src}
              width={thumbnail.width / 2}
              height={thumbnail.height / 2}
              alt="skm: thumbnail {idx}"
              loading="lazy" />
            <link rel="image" href={images[idx].src} />
            <link rel="thumbnailUrl" href={thumbnail.src} />
          </LightboxThumbnail>
        {/each}
      </svelte:fragment>
      {#each images as image, idx}
        <LightboxModal>
          <img
            class="bg-no-repeat bg-center bg-1/10 bg-loading"
            src={image.src}
            width={image.width}
            height={image.height}
            alt="skm: image {idx}"
            loading="lazy" />
        </LightboxModal>
      {/each}
    </Lightboxes>
  {:catch error}
    <div
      class="error
             w-80 aspect-video mx-auto">
      {error.message}
    </div>
    {@debug error}
  {/await}
</section>
