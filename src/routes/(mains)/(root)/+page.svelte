<script lang="ts">
  import About from '$lib/components/home/About.svelte';
  import Hero from '$lib/components/home/Hero.svelte';
  import RecentProjects from '$lib/components/home/RecentProjects.svelte';

  let projects: Post[] = [];
</script>

<div class="container">
  <Hero />
  <About />
  <RecentProjects {projects} />
</div>
