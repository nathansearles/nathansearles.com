import theme from "../styles/_variables";
import Link from "./Link";

const NavItem = props => {
  return (
    <li>
      <Link href={props.href} activeClassName="active">
        <a className={props.style}>
          <span>{props.label}</span>
        </a>
      </Link>
      <style jsx>{`
        li {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        a {
          &:link,
          &:visited {
            font-weight: ${theme.font.bold};
            color: var(--font);
            font-size: 0.75rem;
            line-height: 1rem;
            text-transform: uppercase;
            text-decoration: none;
            padding: 4px 10px;
            margin: 0 8px;
            display: inline-block;
            span {
              position: relative;
            }
          }
          &:hover,
          &:active,
          &:focus {
            text-decoration: none;
          }
        }

        a.text {
          &:link,
          &:visited {
            span {
              &:after {
                transform: scaleX(0);
                content: "";
                display: block;
                height: 2px;
                width: 100%;
                background-color: var(--background-inverted);
                position: absolute;
                left: 50%;
                bottom: -4px;
                margin-left: -50%;
                transform-origin: 50% 50%;
                transition: transform 250ms cubic-bezier(0.19, 1, 0.22, 1);
              }
            }
            &.active {
              span {
                color: var(--font);
                &:after {
                  transform: scaleX(1);
                }
              }
            }
          }
        }

        a.box {
          &:link,
          &:visited {
            position: relative;
            color: var(--font-inverted);
            span {
              &:before {
                z-index: -1;
                content: "";
                display: block;
                width: calc(100% + 20px);
                height: calc(100% + 8px);
                background-color: var(--background-inverted);
                position: absolute;
                left: 50%;
                bottom: -4px;
                margin-top: -6px;
                margin-left: calc(-50% - 10px);
                transform-origin: 50% 50%;
                transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
              }
            }

            &.active {
              color: var(--font);
              span {
                &:before {
                  width: 100%;
                  height: 2px;

                  left: 50%;
                  bottom: -4px;
                  margin-left: -50%;
                }
              }
            }
          }
        }
      `}</style>
    </li>
  );
};

export default NavItem;
