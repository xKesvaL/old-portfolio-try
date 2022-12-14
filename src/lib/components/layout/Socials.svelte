<script lang="ts">
  import TwitterIcon from '$lib/svg/socials/TwitterIcon.svelte';
  import GitHubIcon from '$lib/svg/socials/GithubIcon.svelte';
  import LinkedInIcon from '$lib/svg/socials/LinkedInIcon.svelte';
  import EmailIcon from '$lib/svg/socials/EmailIcon.svelte';
  import InstagramIcon from '$lib/svg/socials/InstagramIcon.svelte';
</script>

<!-- Credit to https://github.com/MatFantinel -->

<div class="socials">
  <a href="https://github.com/xKesvaL" target="_blank" rel="noreferrer">
    <GitHubIcon />
  </a>
  <a href="https://instagram.com/xKesvaL" target="_blank" rel="noreferrer">
    <InstagramIcon />
  </a>
  <a href="https://www.LinkedIn.com/in/jordan-abeddou/" target="_blank" rel="noreferrer">
    <LinkedInIcon />
  </a>
  <a href="https://twitter.com/xKesvaL" target="_blank" rel="noreferrer">
    <TwitterIcon />
  </a>
  <a href="mailto:jabeddou@gmail.com" target="_blank" rel="noreferrer">
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
        color: rgba(var(--primary-color-rgb));
      }
    }
  }
</style>
