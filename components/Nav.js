import { useState, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import Link from "./Link";

import NavItem from "./NavItem";
import NavToggle from "./NavToggle";
import theme from "../styles/_variables";

const links = [
  { href: "/", label: "Projects" },
  { href: "/tech", label: "Tech" },
  { href: "/experience", label: "Experience" },
  { href: "/info", label: "Info" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  const ref = useRef();
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const handleMenuToggle = () => {
    sideNavOpen
      ? enableBodyScroll(ref.current)
      : disableBodyScroll(ref.current);

    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <>
      <nav className="MainNav" role="navigation">
        <div>
          <Link href="/">
            <h1>Nathan Searles</h1>
          </Link>
          <ul>
            {links.map(({ key, href, label }) => (
              <NavItem key={key} href={href} label={label} />
            ))}
          </ul>
          <NavToggle handleMenuToggle={handleMenuToggle} />
        </div>
      </nav>

      <nav
        className={`SideNav ${sideNavOpen ? "nav-open" : ""}`}
        role="navigation"
        ref={ref}
        style={{ visibility: "hidden" }}
      >
        <div>
          <ul>
            {links.map(({ key, href, label }) => (
              <NavItem key={key} href={href} label={label} sidenav />
            ))}
          </ul>
        </div>
      </nav>
      <div
        onClick={handleMenuToggle}
        className={`UiMask ${sideNavOpen ? "nav-open" : ""}`}
      ></div>

      <style jsx>{`
        nav.MainNav {
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
            cursor: pointer;
            padding: 4px 0;
            font-weight: ${theme.font.bold};
            font-size: 0.75rem;
            line-height: 1rem;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
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
          }
        }

        nav.SideNav {
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
          }
        }
        .UiMask {
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
