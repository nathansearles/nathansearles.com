import css from "styled-jsx/css";
import theme from "./_variables";

export default css`
  .project-hero {
    padding: 36px 0;
  }

  .project-body {
    padding: 16px 0;

    @media (${theme.breakpoint.md}) {
      padding: 16px calc(100vw / 16);
    }

    :global(h3:first-of-type) {
      margin-top: 0;
    }
  }
`;
