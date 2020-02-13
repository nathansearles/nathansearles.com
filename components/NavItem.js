import theme from "../styles/_variables";
import Link from "./Link";

const NavItem = props => {
  return (
    <li>
      <Link href={props.href} activeClassName="active">
        <a>
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
            padding: 4px 8px;
            margin: 0 8px;
            display: inline-block;

            span {
              position: relative;
              border-bottom: 2px solid transparent;
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
                transform-origin: 0% 50%;
                transition: transform 0.35s cubic-bezier(0.77, 0, 0.175, 1);
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
          &:hover,
          &:active,
          &:focus {
            text-decoration: none;
          }
        }
      `}</style>
    </li>
  );
};

export default NavItem;
