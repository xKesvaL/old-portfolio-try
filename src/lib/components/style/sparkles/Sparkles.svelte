<script lang="ts">
  import SparkleSingle from './SparkleSingle.svelte';
  import { onDestroy, onMount } from 'svelte';
  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

  const defaultColor = 'hsl(50deg, 100%, 50%)'; // Yellow-ish
  const generateSparkle = (color: string = defaultColor): Sparkle => {
    return {
      id: String(random(10000, 99999)),
      createdAt: Date.now(),
      color,
      size: random(10, 20),
      pos: {
        top: random(-20, 80) + '%',
        left: random(0, 100) + '%'
      }
    };
  };

  let sparkles: Sparkle[] = [];
  let interval: NodeJS.Timer;

  onMount(() => {
    interval = setInterval(() => {
      const now = Date.now();
      const sparkle = generateSparkle();

      const nextSparkles = sparkles.filter((sparkle) => {
        // Remove old sparkles
        const delta = now - sparkle.createdAt;
        return delta < 1100;
      });
      // Include our new sparkle
      nextSparkles.push(sparkle);
      sparkles = nextSparkles;
    }, 300);

    onDestroy(() => {
      clearInterval(interval);
    });
  });
</script>

<div class="sparkle-wrapper">
  {#each sparkles as sparkle (sparkle.id)}
    <SparkleSingle color={sparkle.color} size={sparkle.size} pos={sparkle.pos} />
  {/each}
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
