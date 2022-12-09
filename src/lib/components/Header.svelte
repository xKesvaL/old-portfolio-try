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
        <li><a href="/" class="| hover-underline">Home</a></li>
        <li>
          <a href="/" class="| hover-underline">Learn</a>
        </li>
        <li>
          <a href="/" class="| hover-underline">Contact</a>
        </li>
      </ul>
    </nav>
    <button class="discover | hover-background primary--ultradark">Discover</button>
  </div>
</header>
<div class="header-placeholder" />

<style lang="scss">
  .header-placeholder {
    min-height: 10vh;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    font-weight: var(--fw-bold);
    font-size: var(--fs-m);
    background-color: var(--clr-neutral-dark-iv);
    max-height: 10vh;
    width: 100%;
    z-index: 99;

    .container {
      justify-content: flex-end;
      gap: var(--sp-xl);
      align-items: center;
      min-height: 10vh;
      container-type: size;
    }

    .trademark {
      margin-right: auto;
      width: clamp(8rem, 25%, 12rem);

      img {
        width: 100%;
      }
    }

    .primary-navigation {
      & > ul:has(li:hover) > li:not(:hover) {
        opacity: 0.5;
        color: var(--clr-neutral-ultradark);
      }

      ul {
        display: flex;
        list-style: none;
        gap: var(--sp-m);
        font-size: clamp(var(--fs-s), 2vw, var(--fs-m));

        li {
          transition-property: color, opacity;
          transition-duration: 0.5s;
          transition-timing-function: ease-out;
          display: flex;
          cursor: pointer;
          align-items: center;
          position: relative;

          a,
          span {
            color: var(--clr-neutral);
            text-decoration: none;
          }

          svg {
            margin-left: var(--sp-xxs);
            width: 30px;
            stroke: white;
            transition: transform 0.25s ease-out;
          }
        }
      }
    }

    .discover {
      padding: var(--sp-xs) var(--sp-s);
      cursor: pointer;
      color: var(--clr-neutral);
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
