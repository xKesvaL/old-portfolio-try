<script lang="ts">
  import Socials from './Socials.svelte';
  import Logo from '$lib/svg/logos/Logo.svelte';
</script>

<!-- Credit to https://github.com/MatFantinel -->

<header aria-label="Page header">
  <nav class="container" aria-label="Header navigation">
    <div class="nav-start">
      <a href="/" class="logo">
        <Logo />
      </a>
      <div class="nav-links">
        <a href="/projects" class="nav-link | enhance">Projects</a>
        <a href="/resume" class="nav-link | enhance">Resume</a>
      </div>
    </div>
    <div class="nav-end">
      <Socials />
    </div>
  </nav>
</header>

<style lang="scss">
  @use '../../scss/abstracts/breakpoints' as *;

  header {
    position: relative;
    padding-block: var(--sp-m);

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include for-phone {
        justify-content: center;
      }

      .nav-start {
        display: flex;
        align-items: center;
        gap: var(--sp-l);
        font-size: var(--fs-s);
        font-weight: var(--fw-medium);

        .logo {
          height: 4rem;
          aspect-ratio: 1;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--sp-m);

          .nav-link {
            color: var(--text-color);
          }
        }

        @include for-phone {
          flex-direction: column;
          justify-content: center;
          gap: var(--sp-s);
        }
      }

      .nav-end {
        @include for-phone {
          display: none;
        }
      }
    }
  }
</style>
