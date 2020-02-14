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
            color: ${theme.color.black};
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
                width: 110%;
                background-color: ${theme.color.black};
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -1px;
                margin-left: -55%;
                transform-origin: 50% 50%;
                transition: transform 450ms cubic-bezier(0.19, 1, 0.22, 1);
              }
            }
            &.active {
              span {
                color: ${theme.color.black};
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
            color: ${theme.color.white};
            span {
              &:before {
                z-index: -1;
                content: "";
                display: block;
                width: calc(100% + 20px);
                height: calc(100% + 8px);
                background-color: ${theme.color.black};
                position: absolute;
                left: 50%;
                top: 2px;
                margin-top: -6px;
                margin-left: calc(-50% - 10px);
                transform-origin: 50% 50%;
                transition: all 450ms cubic-bezier(0.19, 1, 0.22, 1);
              }
            }

            &.active {
              color: ${theme.color.black};
              span {
                &:before {
                  width: 110%;
                  height: 2px;
                  left: 50%;
                  top: 50%;
                  margin-top: -1px;
                  margin-left: -55%;
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
