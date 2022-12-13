<script lang="ts">
  import TwitterIcon from '$lib/svg/socials/TwitterIcon.svelte';
  import GitHubIcon from '$lib/svg/socials/GithubIcon.svelte';
  import LinkedInIcon from '$lib/svg/socials/LinkedinIcon.svelte';
  import EmailIcon from '$lib/svg/socials/EmailIcon.svelte';
  import InstagramIcon from '$lib/svg/socials/InstagramIcon.svelte';
</script>

<!-- Credit to https://github.com/MatFantinel -->

<div class="socials">
  <a href="https://github.com/xKesvaL" target="_blank" rel="noreferrer" title="See my GitHub!">
    <GitHubIcon />
  </a>
  <a
    href="https://instagram.com/xKesvaL"
    target="_blank"
    rel="noreferrer"
    title="See my Instagram!"
  >
    <InstagramIcon />
  </a>
  <a
    href="https://www.linkedin.com/in/jordan-abeddou/"
    target="_blank"
    rel="noreferrer"
    title="See my LinkedIn!"
  >
    <LinkedInIcon />
  </a>
  <a href="https://twitter.com/xKesvaL" target="_blank" rel="noreferrer" title="See my Twitter!">
    <TwitterIcon />
  </a>
  <a href="mailto:jabeddou@gmail.com" target="_blank" rel="noreferrer" title="Send me an email!">
    <EmailIcon />
  </a>
</div>

<style lang="scss">
  .socials {
    display: flex;
    align-items: center;
    gap: var(--sp-m);

    a {
      width: 2rem;
      color: var(--text-color);

      @media (prefers-reduced-motion: no-preference) {
        transition: color 0.2s ease;
      }

      &:hover {
        color: var(--primary-color);
      }
    }
  }
</style>
