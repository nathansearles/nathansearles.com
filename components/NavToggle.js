import theme from "../styles/_variables";
const NavToggle = props => {
  return (
    <button
      title="Open Menu"
      onClick={props.handleMenuToggle}
      className="nav-icon"
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>

      <style jsx>{`
        .nav-icon {
          display: block;
          padding: 8px;
          width: 40px;
          position: relative;
          top: 0;
          z-index: 40;

          appearance: none;
          border: none;
          background: transparent;
          outline: none;
          appearance: none;
          cursor: pointer;

          @media (${theme.breakpoint.lg}) {
            display: none;
          }

          .bar {
            height: 2px;
            width: 100%;
            display: block;
            background-color: var(--background-inverted);
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
      `}</style>
    </button>
  );
};

export default NavToggle;
