import css from "styled-jsx/css";
import theme from "./_variables";

export default css.global`
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
    background-color: ${theme.color.offWhite};
    /* Disable tap highlight */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  .theme {
    background-color: ${theme.color.offWhite};
    color: ${theme.color.secondary};
    height: 100vh;
    width: 100vw;

    animation-name: fadeIn;
    animation-duration: 0.85s;
    animation-delay: 0.05s;
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
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04),
      0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04),
      0 16px 32px rgba(0, 0, 0, 0.04), 0 32px 64px rgba(0, 0, 0, 0.04);
  }

  .caption {
    font-size: 0.6rem;
    text-align: center;
    color: ${theme.color.secondary};
    a {
      text-decoration: none;
      color: ${theme.color.secondary};
    }
  }

  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    margin: 72px 0;
  }

  .embed-container embed,
  .embed-container iframe,
  .embed-container object {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .media {
    width: 100%;
    display: block;
  }
`;
