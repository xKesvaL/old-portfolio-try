<script lang="ts">
  export let alt: string;
  export let path: string | null = null;
  export let filename: string;
  export let figcaption: string | null = null;

  let imageSrc: string;

  $: imageSrc = `/images/${path ? path + '/' : ''}${filename}`;
</script>

<picture>
  <source srcset="{imageSrc}.webp" type="image/webp" />
  <source srcset="{imageSrc}.avif" type="image/avif" />
  <img src="{imageSrc}.png" {alt} loading="lazy" decoding="async" />

  {#if figcaption}
    <figure>
      <figcaption>{@html figcaption}</figcaption>
    </figure>
  {/if}
</picture>

<style lang="scss">
  picture {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
