<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const primaryHeader = document.querySelector('.primary-header');
    const navButton = document.querySelector('.button-nav');
    const primaryNav = document.querySelector('.primary-navigation');

    navButton?.addEventListener('click', () => {
      primaryNav?.classList.toggle('opened');

      if (primaryNav?.hasAttribute('data-visible')) {
        navButton.setAttribute('aria-expanded', 'false');
      } else {
        navButton.setAttribute('aria-expanded', 'true');
      }
      primaryNav?.toggleAttribute('data-visible');
      primaryHeader?.toggleAttribute('data-overlay');
    });
  });
</script>

<header class="primary-header">
  <div class="container">
    <a href="/" class="trademark">
      <img src="/wynk.svg" alt="" width="200" />
    </a>
    <button class="button-nav" aria-controls="primary-navigation" aria-expanded="false">
      <svg stroke="var(--button-color)" fill="none" class="hamburger" viewBox="-10 -10 120 120">
        <path
          class="line"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        />
      </svg>
      <span class="visually-hidden">Menu</span>
    </button>
    <nav class="primary-navigation">
      <ul>
        <li><a href="/" class="| hover-underline">About</a></li>
        <li><a href="/" class="| hover-underline">Learn</a></li>
        <li><a href="/" class="| hover-underline">Contact</a></li>
      </ul>
    </nav>
    <button class="discover | hover-background accent--ultradark">Discover</button>
  </div>
</header>

<style lang="scss">
  header {
    background: var(--clr-primary);
    font-weight: var(--fw-bold);
    font-size: var(--fs-m);

    .container {
      justify-content: space-between;
      align-items: center;
      min-height: 10vh;
      container: header-container / size;
    }

    .trademark {
      display: flex;
      width: clamp(8rem, 25%, 12rem);

      img {
        width: 100%;
      }
    }

    .primary-navigation ul {
      display: flex;
      list-style: none;
      gap: var(--sp-m);

      &:has(a:hover) > * a:not(:hover) {
        opacity: 0.5;
        color: var(--clr-neutral-ultradark);
      }

      a {
        text-decoration: none;
        color: var(--clr-neutral);
        transition-property: color, opacity;
        transition-duration: 0.5s;
        transition-timing-function: ease-out;
      }
    }

    .discover {
      background-color: var(--clr-accent);
      padding: var(--sp-xs) var(--sp-s);
      cursor: pointer;
    }

    .button-nav {
      display: none;
      overflow: hidden;
      background: transparent;
      border: 0;
      padding: 0;

      .hamburger {
        transition: translate 1s, rotate 1s;
        width: 5rem;
        stroke: var(--clr-neutral);
      }

      &[aria-expanded='true'] .hamburger {
        translate: 5px -5px;
        rotate: 0.125turn;
      }

      .line {
        transition: 1s;
        stroke-dasharray: 60 31 60 300;
        stroke-width: '10';
      }

      &[aria-expanded='true'] .line {
        stroke-dasharray: 60 105 60 300;
        stroke-dashoffset: -90;
      }
    }
  }
</style>
