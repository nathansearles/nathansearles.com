import css from "styled-jsx/css";
import theme from "./_variables";

export default css`
  .boxes {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 24px;
    row-gap: 24px;
    margin-top: 24px;
    @media (${theme.breakpoint.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
    .box {
      padding: 24px 24px 36px;
      display: block;
      text-align: left;
      border-radius: 4px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.025), 0 2px 2px rgba(0, 0, 0, 0.025),
        0 4px 4px rgba(0, 0, 0, 0.025), 0 6px 8px rgba(0, 0, 0, 0.025),
        0 8px 16px rgba(0, 0, 0, 0.025);
      background-color: ${theme.color.white};
      :global(h2:first-of-type) {
        margin-top: 0;
      }
      p {
        margin-bottom: 24px;
      }
      p:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
