import theme from "../styles/_variables";

const Hero = props => {
  return (
    <div className="Hero">
      <div>{props.children}</div>
      <style jsx>{`
        .Hero {
          padding: ${props.project ? "36px 0" : "24px 0 48px"};

          text-align: center;
          @media (${theme.breakpoint.lg}) {
            margin: 10vh 0;
            padding: ${props.project ? "36px 0" : "0 calc(100vw / 16)"};
          }

          h3:first-of-type {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
