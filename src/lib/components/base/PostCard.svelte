<script lang="ts">
  import Card from './Card.svelte';
  import Tag from './Tag.svelte';
  import Image from './Image.svelte';

  export let post: Post;
  export let type: 'post' | 'projects';
  export let showImage = true;
</script>

{#if post}
  <Card url="/{type}/{post.slug}">
    <div slot="image">
      {#if showImage}
        <Image path="{type}/{post.slug}" filename="cover" alt="Cover Image" />
      {/if}
    </div>
    <div slot="content">
      <div class="title">{post.title}</div>
      <div class="note">{post.readingTime}</div>
      <div class="text">{post.excerpt}</div>
    </div>
    <div slot="footer">
      {#if post.tags}
        <div class="tags">
          {#each post.tags.slice(0, 2) as tag}
            <Tag>{tag}</Tag>
          {/each}
        </div>
      {/if}
    </div>
  </Card>
{/if}
