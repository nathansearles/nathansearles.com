/* styles.js */
import css from "styled-jsx/css";

// Scoped styles
export const button = css`
  button {
    color: hotpink;
  }
`;

// Global styles
export const body = css.global`
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
`;

// Resolved styles
export const link = css.resolve`
  a {
    color: green;
  }
`;
// link.className -> scoped className to apply to `a` elements e.g. jsx-123
// link.styles -> styles element to render inside of your component

// Works also with default exports
export default css`
  div {
    color: blue;
  }
`;
