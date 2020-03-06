import css from "styled-jsx/css";
import theme from "./_variables";

export default css.global`
  h1,
  .h1 {
    font-weight: ${theme.font.regular};
    font-size: 1.8rem;
    line-height: 2.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--font);
    @media (${theme.breakpoint.md}) {
      font-size: 2.2rem;
      line-height: 3rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  h2,
  .h2 {
    font-weight: ${theme.font.regular};
    font-size: 1.5rem;
    line-height: 2.2rem;
    margin-top: 1.5rem;
    margin-bottom: 0;
    color: var(--font);
  }
  h3,
  .h3 {
    font-weight: ${theme.font.bold};
    font-size: 0.75rem;
    line-height: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--font);
    text-transform: uppercase;
  }
  h4,
  .h4 {
    font-weight: ${theme.font.semibold};
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0rem;
    color: var(--font);
  }
  h5,
  .h5 {
    font-weight: ${theme.font.semibold};
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0rem;
  }
  p,
  ul,
  ol,
  pre,
  table,
  blockquote {
    font-weight: ${theme.font.regular};

    margin-top: 0rem;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    color: var(--font-secondary);
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    font-weight: ${theme.font.regular};
    margin-top: 0rem;
    margin-bottom: 0rem;
    color: var(--font-secondary);
  }

  hr,
  .hr {
    border: 1px solid;
    margin: -1px 0;
  }
  a,
  b,
  i,
  strong,
  em,
  small,
  code {
    line-height: 0;
  }
  sub,
  sup {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }

  p.larger {
    font-weight: ${theme.font.regular};
    font-size: 1rem;
    line-height: 1.8rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--font);
    @media (${theme.breakpoint.md}) {
      font-size: 1.2rem;
      line-height: 2.1rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }

  strong {
    font-weight: ${theme.font.semibold};
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
      font-weight: ${theme.font.semibold};
      transition: color 350ms ease-out;
      color: var(--primary);
    }
    &:hover,
    &:active,
    &:focus {
      color: var(--primary);
    }
  }

  .nowrap {
    white-space: nowrap;
  }
`;
