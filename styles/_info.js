import css from "styled-jsx/css";
import theme from "./_variables";

export default css`
  .layout-info {
    display: grid;
    grid-template-columns: 1fr;

    @media (${theme.breakpoint.md}) {
      display: grid;
      grid-template-columns: [image] 5fr [content] 5fr;
      row-gap: 24px;
      column-gap: 24px;
    }

    @media (${theme.breakpoint.lg}) {
      display: grid;
      grid-template-columns: [gutter] 1fr [image] 3fr [content] 4fr [gutter] 1fr;
      row-gap: 24px;
      column-gap: 24px;
    }

    & > div {
      display: flex;
    }

    .portrait {
      grid-column: image;
    }

    .content {
      grid-column: content;
      padding-top: 24px;
      @media (${theme.breakpoint.md}) {
        padding-left: 24px;
      }
      h2 {
        margin-top: 0;
        margin-bottom: 0;
      }
      p:last-of-type {
        margin-bottom: 0;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;
