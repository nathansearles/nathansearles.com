import { useState, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import Link from "./Link";

import theme from "../styles/variables";

const links = [
  { href: "/", label: "Projects" },
  { href: "/tech", label: "Tech" },
  { href: "/experience", label: "Experience" },
  { href: "/info", label: "Info" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = props => {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    // Toggle body scroll
    isMenuOpen ? enableBodyScroll(ref.current) : disableBodyScroll(ref.current);

    // Set menu state
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    return () => {
      // On unload clear scroll locks
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <>
      <nav className="top-nav" role="navigation">
        <div>
          <h1>
            Nathan Searles <span className="desc">Web Developer</span>
          </h1>
          <ul>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href} activeClassName="active">
                  <a>
                    <span>{label}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <button
            title="Open Menu"
            onClick={handleMenuToggle}
            className="nav-icon"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      <nav
        className={`side-nav ${isMenuOpen ? "nav-open" : ""}`}
        role="navigation"
        ref={ref}
        style={{ visibility: "hidden" }}
      >
        <div>
          <ul>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href} as={href} activeClassName="active">
                  <a>
                    <span>{label}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        onClick={handleMenuToggle}
        className={`ui-mask ${isMenuOpen ? "nav-open" : ""}`}
      ></div>

      <style jsx>{`
        nav.top-nav {
          display: grid;
          grid-template-columns: [leftGutter] 1fr [content] 10fr [rightGutter] 1fr;
          max-width: ${theme.maxWidth};
          margin: 0 auto;
          position: relative;
          padding: 24px 0;
          & > div {
            grid-column: content;
            display: flex;
            flex-direction: row;
            width: 100%;
            flex-wrap: nowrap;
          }
          h1 {
            display: inline;
            padding: 4px 0;
            font-weight: ${theme.font.bold};
            font-size: 0.8rem;
            line-height: 1rem;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            letter-spacing: 0.025em;
            text-transform: uppercase;
            width: auto;
            margin-right: auto;

            span.desc {
              font-weight: ${theme.font.regular};
              display: block;
            }
          }
          ul {
            display: none;
            list-style: none;
            padding: 0;
            margin: 0;

            li a span {
              display: block;
            }
          }

          li {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }

          a {
            &:link,
            &:visited {
              font-weight: ${theme.font.bold};
              color: ${theme.color.black};
              font-size: 0.8rem;
              line-height: 1rem;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              text-decoration: none;
              padding: 4px 8px;
              margin: 0 8px;
              display: inline-block;

              span {
                border-bottom: 2px solid transparent;
              }
              &.active {
                span {
                  color: ${theme.color.black};

                  border-bottom: 2px solid ${theme.color.primary};
                }
              }
            }
            &:hover,
            &:active,
            &:focus {
              text-decoration: none;
            }
          }

          .nav-icon {
            display: block;
            padding: 8px;
            width: 40px;
            position: relative;
            top: 0;
            z-index: 40;

            .bar {
              height: 2px;
              width: 100%;
              display: block;

              + .bar {
                margin-top: 3px;
              }
              &:first-child {
                width: 20px;
              }
              &:last-child {
                width: 14px;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
