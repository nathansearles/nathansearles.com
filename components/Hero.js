import theme from "../styles/_variables";

const Hero = props => {
  return (
    <div className="page-hero">
      <div>{props.children}</div>
      <style jsx>{`
        .page-hero {
          padding: 24px 0 48px;
          margin: 10vh 0;
          text-align: center;
          @media (${theme.breakpoint.lg}) {
            padding: 0 calc(100vw / 16) 48px;
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
