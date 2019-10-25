import css from "styled-jsx/css";
import theme from "./_variables";

export default css`
  #projects {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 24px;
    row-gap: 24px;

    @media (${theme.breakpoint.md}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (${theme.breakpoint.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    .project {
      margin: 16px 0;
      text-align: center;

      h2 {
        font-weight: ${theme.font.bold};
        font-size: 1rem;
        margin: 0;
        line-height: 2.5rem;
        color: ${theme.color.black};
      }

      p {
        margin: 0;
        font-size: 16px;
        color: ${theme.color.secondary};
        @media (${theme.breakpoint.md}) {
          opacity: 0;
          transform: translateY(8px);
          transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1) 100ms,
            opacity 350ms cubic-bezier(0.4, 0, 0.2, 1) 100ms;
        }
      }

      a {
        position: relative;
        display: block;
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
          text-decoration: none;
          @media (${theme.breakpoint.md}) {
            h2 {
              color: ${theme.color.black};
            }

            p {
              opacity: 1;
              transform: translateY(0%);
            }

            .thumbnail :global(picture) {
              :global(img) {
                transform: scale(1.035);
              }
            }
          }
        }
      }

      .thumbnail {
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04),
          0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04),
          0 16px 32px rgba(0, 0, 0, 0.04), 0 32px 64px rgba(0, 0, 0, 0.04);

        :global(picture) {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: auto;
          :global(img) {
            width: 100%;
            height: auto;
            position: relative;
            transform: scale(1, 1);
            transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1) 100ms;
          }
        }
      }
    }
  }
`;
