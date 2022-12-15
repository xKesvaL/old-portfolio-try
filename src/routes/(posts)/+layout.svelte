<script lang="ts">
  import '$lib/app.scss';

  import Waves from '$lib/components/layout/Waves.svelte';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

  import Image from '$lib/components/base/Image.svelte';
  import Tag from '$lib/components/base/Tag.svelte';
  import Section from '$lib/components/layout/Section.svelte';
  import PostCard from '$lib/components/base/PostCard.svelte';
  import Grid3x3 from '$lib/components/layout/Grid3x3.svelte';

  import dateformat from 'dateformat';

  export let data: { post: Post };
  $: ({ post } = data);
</script>

<div class="markdown-layout">
  <Waves />

  <Header />

  <main aria-label="Blog article content">
    <article id="markdown-content">
      <div class="header">
        <h1>{post.title}</h1>
        <div class="note">Published on {dateformat(post.date, 'UTC:dd mmmm yyyy')}</div>
        {#if post.updated}
          <div class="note">Updated on {dateformat(post.updated, 'UTC:dd mmmm yyyy')}</div>
        {/if}
        <div class="note">{post.readingTime}</div>
        <div class="tags">
          {#each post.tags as tag}
            <Tag>{tag}</Tag>
          {/each}
        </div>
      </div>
      <div class="cover-image">
        <Image path="{post.type}/{post.slug}" filename="cover" alt="Cover Image" />
      </div>
      <div class="content">
        <slot />
      </div>
    </article>
    {#if post.relatedProjects && post.relatedProjects.length > 0}
      <div class="related-posts container">
        <Section
          title="Related posts"
          description="Have some time? Feel free to read some other posts by me."
          align="top"
        >
          <Grid3x3>
            {#each post.relatedProjects as rel}
              <PostCard post={rel} type="projects" />
            {/each}
          </Grid3x3>
        </Section>
      </div>
    {/if}
  </main>

  <Footer />
</div>
