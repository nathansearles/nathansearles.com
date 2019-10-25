import css from "styled-jsx/css";
import theme from "./_variables";

export default css`
  .boxed-lists {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 16px;
    row-gap: 24px;
    @media (${theme.breakpoint.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (${theme.breakpoint.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }
    dl {
      background-color: ${theme.color.white};
      padding: 24px;
      display: inline-block;
      text-align: center;
      border-radius: 4px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.025), 0 2px 2px rgba(0, 0, 0, 0.025),
        0 4px 4px rgba(0, 0, 0, 0.025), 0 6px 8px rgba(0, 0, 0, 0.025),
        0 8px 16px rgba(0, 0, 0, 0.025);
      dt {
        font-weight: ${theme.font.bold};
        font-size: 1rem;
        line-height: 1rem;
        margin: 0 0 0.5rem;
        color: ${theme.color.black};
      }
      dd {
        display: inline-block;
        margin-right: 12px;
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }
  }
`;
