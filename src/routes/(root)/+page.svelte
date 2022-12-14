<script lang="ts">
  import About from '$lib/components/home/About.svelte';
  import Hero from '$lib/components/home/Hero.svelte';

  export let data;
  let { projects, posts } = data;
</script>

<div class="container">
  <Hero />
  <About />
  {#each projects as project}
    {project.title}
  {/each}
  {#each posts as post}
    {post.title}
  {/each}
</div>
