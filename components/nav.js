import { useState, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import Link from "./Link";

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
    </>
  );
};

export default Nav;
