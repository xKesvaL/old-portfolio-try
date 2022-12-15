<div class="grid-container">
  <slot />
</div>

<style lang="scss">
  @use '../../scss/abstracts' as *;

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--sp-s);

    @include for-phone {
      grid-template-columns: 1fr;
    }
  }
</style>
