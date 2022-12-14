<script lang="ts">
  import Avatar from '$lib/svg/Avatar.svelte';
  import Sparkling from '../style/Sparkling.svelte';
  import Blob1 from '$lib/svg/blobs/Blob1.svelte';
  import Blob2 from '$lib/svg/blobs/Blob2.svelte';
  import Blob3 from '$lib/svg/blobs/Blob3.svelte';
</script>

<section id="about">
  <div class="info">
    <h2>I have a passion for creating <Sparkling>beautiful</Sparkling> web applications.</h2>
    <p>
      I believe that the best way to learn is to build. I'm always looking for new projects to work
      on and new technologies to learn.
    </p>
  </div>
  <div class="avatar">
    <div class="blob one"><Blob1 /></div>
    <div class="blob two"><Blob2 /></div>
    <div class="blob three"><Blob3 /></div>
    <div class="image">
      <Avatar />
    </div>
  </div>
</section>

<style lang="scss">
  @use '../../scss/abstracts/breakpoints' as *;

  #about {
    position: relative;
    padding: var(--sp-xxxl) 0;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 31rem 20rem;

    @include for-tablet-portrait-down {
      grid-template-columns: 25rem 16rem;
    }

    @include for-phone {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: var(--sp-xs);

      h2 {
        @include for-phone {
          text-align: center;
        }
      }

      p {
        @include for-phone {
          text-align: justify;
        }
      }
    }

    .avatar {
      width: 20rem;
      height: 20rem;
      aspect-ratio: 1/1;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      @include for-tablet-portrait-down {
        width: 16rem;
        height: 16rem;
      }

      .image {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        overflow: hidden;
      }

      .blob {
        position: absolute;
        animation: spin 2s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite forwards;
        animation-play-state: paused;

        &.one {
          height: 130%;
          width: 130%;
          animation-duration: 8s;
        }
        &.two {
          height: 140%;
          width: 140%;
          animation-duration: 4s;
        }
        &.three {
          height: 150%;
          width: 150%;
          animation-duration: 2s;
        }
      }

      &:hover {
        @media screen and (prefers-reduced-motion: no-preference) {
          .blob {
            animation-play-state: running;
          }
        }
      }
    }
  }

  @keyframes spin {
    from {
      rotate: 0turn;
    }

    to {
      rotate: 1turn;
    }
  }
</style>
