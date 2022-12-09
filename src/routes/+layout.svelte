<script lang="ts">
  import '../css/style.scss';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<div class="container">
  <slot />
</div>

<Footer />
