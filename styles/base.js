import css from "styled-jsx/css";
import theme from "./variables";

export default css.global`
  // Inter: https://rsms.me/inter/
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/static/fonts/Inter-Regular.woff2") format("woff2"),
      url("/static/fonts/Inter-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("/static/fonts/Inter-SemiBold.woff2") format("woff2"),
      url("/static/fonts/Inter-SemiBold.woff") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/static/fonts/Inter-Bold.woff2") format("woff2"),
      url("/static/fonts/Inter-Bold.woff") format("woff");
  }

  @mixin regular-font() {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  @mixin semibold-font() {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  @mixin bold-font() {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
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
  }

  body {
    @include regular-font;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.011em;

    /* Disable tap highlight */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  #siteWrapper {
    display: grid;
    grid-template-columns: [leftGutter] 1fr [content] 10fr [rightGutter] 1fr;
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    position: relative;
    padding-bottom: 96px;

    & > div {
      grid-column: content;
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
      $height: 105%;
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
      display: flex;
      justify-content: center;
    }

    img,
    picture {
      width: auto;
      height: 100%;
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
`;
