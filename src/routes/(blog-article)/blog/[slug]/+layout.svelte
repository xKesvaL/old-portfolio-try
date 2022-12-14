<script lang="ts">
  import '../app.scss';

  import Waves from '$lib/components/layout/Waves.svelte';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="markdown-layout">
  <Waves />

  <Header />

  <main aria-label="Main page">
    <slot />
  </main>

  <Footer />
</div>
