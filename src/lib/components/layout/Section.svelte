<script lang="ts">
  export let title: string;
  export let description: string | null = null;
  export let buttonText: string | null = null;
  export let buttonUrl: string | null = null;
  export let buttonClass: string = 'bg-primary text-default';

  export let direction: 'column' | 'row' = 'column';
  export let align: 'left' | 'right' | 'top' = 'left';
</script>

<div class="section-container {align}">
  <div class="title-area {direction}">
    <div class="top">
      <h2>
        {title}
      </h2>
      {#if description}
        <p>
          {description}
        </p>
      {/if}
    </div>
    {#if buttonText && buttonUrl}
      <a href={buttonUrl} class="button {buttonClass}">
        {buttonText}
      </a>
    {/if}
  </div>
  <div class="content-area">
    <slot />
  </div>
</div>

<style lang="scss">
  @use '../../scss/abstracts' as *;

  .section-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-l);
    padding: var(--sp-xl) 0;

    .title-area {
      flex: 2; // 2/7

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: var(--sp-s);

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--sp-xxs);
      }

      .button {
        min-width: 11rem;
        max-width: 100%;
        width: auto;
      }
    }

    .content-area {
      flex: 5; // 5/7

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @include for-tablet-portrait-up {
      &.left {
        .title-area {
          order: 1;
        }
        .content-area {
          order: 2;
        }
      }
      &.right {
        .title-area {
          order: 2;
        }
        .content-area {
          order: 1;
        }
      }
      &.top {
        flex-direction: column;
        .title-area {
          order: 1;
          max-width: 50rem;
        }
        .content-area {
          order: 2;
          width: 100%;
        }

        .title-area.row {
          max-width: 100%;
          width: 100%;
          flex-direction: row;
          justify-content: space-between;

          .top {
            width: 40%;

            * {
              text-align: left;
            }
          }
        }
      }
    }

    @include for-tablet-portrait-down {
      flex-direction: column;
    }
  }
</style>
