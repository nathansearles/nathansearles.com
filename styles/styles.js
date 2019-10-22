/* styles.js */
import css from "styled-jsx/css";
import base from "./base.js";

// Scoped styles
export const button = css`
  button {
    color: hotpink;
  }
`;

// Global styles
export const body = base;

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
