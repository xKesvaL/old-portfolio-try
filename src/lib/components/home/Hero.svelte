<script lang="ts">
  import ExperienceIcon from '$lib/svg/icons/ExperienceIcon.svelte';
  import ProjectsIcon from '$lib/svg/icons/ProjectsIcon.svelte';
</script>

<section class="hero">
  <h1 class="title">KesvaL here! Hi! 👋</h1>
  <p class="intro" aria-label="Presentation">
    I like to build things. I'm a fullstack developer, a designer, a gamer, a learner, a teacher, a
    builder, a creator, a dreamer and a doer.
  </p>
  <div class="buttons">
    <a href="/projects" class="button bg-page text-default-light">
      <ProjectsIcon />
      Projects
    </a>
    <a href="/resume" class="button bg-primary-light text-default">
      <ExperienceIcon />
      Experience
    </a>
  </div>
</section>

<style lang="scss">
  @use '../../scss/abstracts/breakpoints.scss' as *;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--sp-m);
    padding: var(--sp-xxl) 0;

    @include for-phone {
      padding: var(--sp-xl) 0;
    }

    .title {
      text-align: center;
    }

    .intro {
      font-size: var(--fs-m);
      width: min(100%, 50ch);
      text-align: center;

      @include for-phone {
        display: none;
      }
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: var(--sp-s);
      width: 100%;

      a {
        flex: 0 0 15rem; // grow, shrink, basis
      }

      @include for-phone-sm {
        a {
          flex: 0 0 90%;
        }
      }
    }
  }
</style>
