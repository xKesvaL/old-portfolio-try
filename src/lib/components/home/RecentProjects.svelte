<script lang="ts">
  import PostCard from '$lib/components/base/PostCard.svelte';

  export let projects: Post[] = [];
</script>

<section id="recent-projects">
  {#each projects as post}
    <PostCard {post} showImage={false} type="project" />
  {/each}
</section>
