<script lang="ts">
  import FooterWave from '$lib/svg/utils/FooterWave.svelte';
  import Socials from './Socials.svelte';

  let year = new Date().getFullYear();
</script>

<!-- Credit to https://github.com/MatFantinel -->

<footer>
  <div class="wave">
    <FooterWave />
  </div>
  <div class="content">
    <div class="copyright">© {year} KesvaL</div>
    <div class="credits">
      Inspired from <a
        href="https://github.com/MatFantinel"
        target="_blank"
        class="enhance"
        rel="noreferrer">Matheus Fantinel</a
      > ♥.
    </div>
    <div class="socials">
      <Socials />
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    height: 20rem;
    width: 100%;
    background: var(--footer-background);
    display: grid;
    grid-template-rows: 7.5rem 1fr;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--sp-s);
      text-align: center;
      font-weight: var(--fw-medium);

      .credits {
        font-weight: var(--fw-regular);
        color: var(--text-light-color);
      }
    }
  }
</style>
