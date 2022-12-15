<div class="grid-container">
  <slot />
</div>

<style lang="scss">
  @use '../../scss/abstracts' as *;

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--sp-s);

    @include for-tablet-portrait-down {
      grid-template-columns: 1fr;
    }

    // Select every 3 elements, starting from position 2
    // And make it take up 2 rows
    > :global(:nth-child(3n + 2)) {
      grid-row: span 2;
    }
  }
</style>
