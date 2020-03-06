import css from "styled-jsx/css";
import theme from "./_variables";

export default css.global`
  :root {
    --primary: #3433ff;
    --background: #f4f4f4;
    --background-secondary: #ffffff;
    --background-inverted: #111111;
    --font: #111111;
    --font-secondary: rgba(33, 33, 33, 0.75);
    --font-inverted: #ffffff;
  }

  [data-theme="dark"] {
    --primary: #4746ff;
    --background: #1e1e1e;
    --background-secondary: #2a2a2a;
    --background-inverted: #e5e5e5;
    --font: #e5e5e5;
    --font-secondary: #9a9a9a;
    --font-inverted: #2a2a2a;
  }

  @media (prefers-color-scheme: dark) {
    --primary: #4746ff;
    --background: #1e1e1e;
    --background-secondary: #2a2a2a;
    --background-inverted: #e5e5e5;
    --font: #e5e5e5;
    --font-secondary: #9a9a9a;
    --font-inverted: #2a2a2a;
  }

  html {
    font-size: 18px;
    line-height: 30px;
    -webkit-text-size-adjust: 100%;
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    background-color: var(--background);
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.011em;
    background-color: var(--background);
    /* Disable tap highlight */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  ::selection {
    background-color: var(--background-inverted);
    color: var(--font-inverted);
  }

  .theme {
    background-color: var(--background);
    color: var(--font-secondary);
    height: 100%;
    width: 100vw;

    animation-name: fadeIn;
    animation-duration: 0.25s;
    // animation-delay: 0.025s;
    animation-fill-mode: both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .aspect {
    position: relative;
    width: 100%;
    height: 0;

    &__wide {
      $height: 56.25%;
      padding-bottom: $height;
    }

    &__square {
      $height: 100%;
      padding-bottom: $height;
    }

    &__portrait {
      $height: 133%;
      padding-bottom: $height;
    }

    @media (${theme.breakpoint.md}) {
      &__wide--md {
        $height: 56.25%;
        padding-bottom: $height;
      }
    }

    .aspect__content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    img,
    picture {
      width: 100%;
      height: 100%;
      display: block;
    }

    embed,
    iframe,
    object {
      width: 100%;
      height: 100%;
    }
  }

  .shadow {
    position: relative;
    width: 100%;
    overflow: hidden;

    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04),
      0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04),
      0 16px 32px rgba(0, 0, 0, 0.04), 0 32px 64px rgba(0, 0, 0, 0.04);
  }
`;
