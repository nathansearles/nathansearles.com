import theme from "../styles/_variables";

const Hero = props => {
  return (
    <section>
      {props.children}
      <style jsx>{`
        section {
          padding: ${props.project ? "36px 0" : "24px 0 48px"};
          text-align: center;
          @media (${theme.breakpoint.lg}) {
            margin: ${props.project ? "0" : "15vh 0"};
            padding: ${props.project ? "36px 0" : "0 calc(100vw / 16)"};
          }
          h3:first-of-type {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
