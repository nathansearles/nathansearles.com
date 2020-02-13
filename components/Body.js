import theme from "../styles/_variables";

const Body = props => {
  return (
    <div className="page-body">
      {props.children}
      <style jsx>{`
        .page-body {
          padding: 16px 0;

          @media (${theme.breakpoint.md}) {
            padding: ${props.project ? "0 calc(100vw / 16)" : "16px 0"};
          }

          h3:first-of-type {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Body;
