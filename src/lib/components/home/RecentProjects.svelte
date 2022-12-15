<script lang="ts">
  import PostCard from '$lib/components/base/PostCard.svelte';
  import Section from '../layout/Section.svelte';
  import GridProjects from '../layout/GridProjects.svelte';

  export let projects: Post[] = [];
</script>

<section id="recent-projects">
  <Section
    title="Recent Projects"
    description="Here are some of my recent projects. I'm always working on something new, so check back soon!"
    buttonText="View All"
    buttonUrl="/projects"
    align="top"
    direction="row"
  >
    <GridProjects>
      {#each projects as post}
        <PostCard {post} showImage={true} type="projects" />
      {/each}
    </GridProjects>
  </Section>
</section>
