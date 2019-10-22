import css from "styled-jsx/css";
import theme from "./_variables";

export default css`
  .page-hero {
    padding: 24px 0 48px;
    text-align: center;
    @media (${theme.breakpoint.lg}) {
      padding: 0 calc(100vw / 16) 48px;
    }

    :global(h3:first-of-type) {
      margin-top: 0;
    }
  }

  .page-body {
    padding: 16px 0;

    :global(h3:first-of-type) {
      margin-top: 0;
    }
  }
`;
