<script lang="ts">
  export let color: string = 'primary';
</script>

<div class="tag bg-{color} text-default">
  <slot />
</div>

<style lang="scss">
  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--sp-xxs);
    padding: var(--sp-xxs) var(--sp-s);
    border-radius: 10px;
    font-weight: 500;
    font-size: var(--fs-xxs);
    width: fit-content;
    white-space: nowrap;
  }
</style>
