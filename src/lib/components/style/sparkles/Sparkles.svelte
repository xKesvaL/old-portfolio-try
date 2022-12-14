<div class="sparkle-wrapper">
  <div class="slot-wrapper">
    <slot />
  </div>
</div>

<style lang="scss">
  .sparkle-wrapper {
    position: relative;
    display: inline-block;

    .slot-wrapper {
      position: relative;
      z-index: 1;
    }
  }
</style>
