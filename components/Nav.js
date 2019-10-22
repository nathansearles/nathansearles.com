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
        button {
          appearance: none;
          border: none;
          background: transparent;
          outline: none;
          appearance: none;
          cursor: pointer;
        }

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
            color: ${theme.color.black};
            span.desc {
              font-weight: ${theme.font.regular};
              color: ${theme.color.secondary};
              display: block;
              @media (${theme.breakpoint.md}) {
                display: inline;
              }
            }
          }
          ul {
            display: none;
            list-style: none;
            padding: 0;
            margin: 0;
            @media (${theme.breakpoint.lg}) {
              flex-wrap: nowrap;
              display: flex;
              position: relative;
              top: -2px;
              right: -18px;
            }
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

            @media (${theme.breakpoint.lg}) {
              display: none;
            }

            .bar {
              height: 2px;
              width: 100%;
              display: block;
              background-color: ${theme.color.black};
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

        nav.side-nav {
          width: 280px;
          overflow-y: auto;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          padding: 24px 0;
          visibility: hidden;
          transition: transform 350ms ease-out, visibility 350ms ease-out;
          transform: translateX(100%);
          background-color: ${theme.color.offWhite};
          &.nav-open {
            visibility: visible !important;
            transform: translateX(0%);
          }
          & > div {
            width: 100%;
          }
          ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0 24px;
            margin: 0;
            position: relative;
            top: 15px;
            li {
              margin-top: 1rem;
              margin-bottom: 1rem;
            }
          }
          a {
            &:link,
            &:visited {
              font-weight: ${theme.font.bold};
              font-size: 0.8rem;
              line-height: 1rem;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              text-decoration: none;
              padding: 4px 8px;
              margin: 0 8px;
              display: block;
              color: ${theme.color.black};
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
          }

          .nav-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 8px;
            position: absolute;
            top: 50px;
            right: 64px;
            z-index: 40;
            text-transform: uppercase;
            @media (${theme.breakpoint.lg}) {
              display: none;
            }
            .bar {
              height: 2px;
              width: 23px;
              display: block;
              background-color: ${theme.color.black};
              &:first-child {
                transform: rotate(45deg);
              }
              &:last-child {
                transform: rotate(-45deg) translateY(-2px);
              }
            }
          }
        }

        .ui-mask {
          background-color: rgba(0, 0, 0, 0.5);
          bottom: 0;
          left: 0;
          opacity: 0;
          position: fixed;
          right: 0;
          top: 0;
          transform: translateZ(0);
          transition: opacity 0.2s linear;
          visibility: hidden;
          z-index: 0;
          &.nav-open {
            opacity: 1;
            visibility: visible;
            z-index: 4;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
