<script lang="ts">
  import Avatar from '$lib/svg/Avatar.svelte';
  import Sparkling from '../style/Sparkling.svelte';
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
    <div class="blob one" />
    <div class="blob two" />
    <div class="blob three" />
    <div class="image">
      <Avatar />
    </div>
  </div>
</section>

<style lang="scss">
  @use '../../scss/abstracts/breakpoints' as *;

  #about {
    position: relative;

    .avatar {
      width: 16rem;
      height: 16rem;
      aspect-ratio: 1/1;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .image {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
</style>
