<div class="waves-container">
  <svg
    class="waves"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    shape-rendering="auto"
  >
    <defs>
      <path
        id="gentle-wave"
        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
      />
    </defs>
    <g class="parallax">
      <use
        xlink:href="#gentle-wave"
        x="48"
        y="0"
        fill="rgba(var(--page-background-color-rgb),0.7)"
      />
      <use
        xlink:href="#gentle-wave"
        x="48"
        y="3"
        fill="rgba(var(--page-background-color-rgb),0.5)"
      />
      <use
        xlink:href="#gentle-wave"
        x="48"
        y="5"
        fill="rgba(var(--page-background-color-rgb),0.3)"
      />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="var(--page-background-color)" />
    </g>
  </svg>
</div>

<style lang="scss">
  @use '../../scss/breakpoints' as *;

  .waves-container {
    background: linear-gradient(60deg, var(--waves-color-start) 0%, var(--waves-color-end) 100%);
    position: absolute;
    width: 100%;
    height: min(65vh, 31rem);

    @include for-phone {
      height: min(75vh, 25rem);
    }
  }

  .waves {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15vh;
    min-height: 6rem;
    max-height: 9rem;
  }

  .parallax {
    & > use {
      @media screen and (prefers-reduced-motion: no-preference) {
        animation: waving 60s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      }
    }

    & > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 10s;
    }
    & > use:nth-child(2) {
      animation-delay: -4s;
      animation-duration: 20s;
    }
    & > use:nth-child(3) {
      animation-delay: -8s;
      animation-duration: 30s;
    }
    & > use:nth-child(4) {
      animation-delay: -12s;
      animation-duration: 40s;
    }
  }

  @keyframes waving {
    0% {
      transform: translateX(-95px);
    }
    100% {
      transform: translateX(80px);
    }
  }
</style>
