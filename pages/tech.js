import Title from "../components/Head";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Nav from "../components/Nav";
import theme from "../styles/_variables";

const Tech = () => (
  <>
    <Title title="Tech" />

    <Nav />

    <Page>
      <Hero>
        <p className="lead">
          Tech stack used for front-end, back-end services, and deployments.
        </p>
      </Hero>

      <Body>
        <div className="boxes">
          <dl>
            <dt>Front-end</dt>
            <dd>React</dd>
            <dd>HTML5</dd>
            <dd>CSS3</dd>
            <dd>JavaScript ES6</dd>
          </dl>
          <dl>
            <dt>Server-side</dt>
            <dd>Node.js</dd>
            <dd>PHP</dd>
            <dd>MySQL</dd>
            <dd>Bash</dd>
            <dd>LAMP</dd>
          </dl>
          <dl>
            <dt>DevOps</dt>
            <dd>Git</dd>
            <dd>SSH</dd>
            <dd>CI/CD</dd>
          </dl>
          <dl>
            <dt>Build</dt>
            <dd>NPM/Yarn</dd>
            <dd>Gulp</dd>
            <dd>Webpack</dd>
            <dd>Babel</dd>
          </dl>
          <dl>
            <dt>Platforms</dt>
            <dd>GitHub</dd>
            <dd>Craft CMS</dd>
            <dd>WordPress</dd>
            <dd>Shopify</dd>
            <dd>Prismic</dd>
            <dd>DigitalOcean</dd>
          </dl>
        </div>
      </Body>
    </Page>
    <style jsx>{`
      .boxes {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 16px;
        row-gap: 24px;
        @media (${theme.breakpoint.md}) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (${theme.breakpoint.lg}) {
          grid-template-columns: repeat(3, 1fr);
        }
        dl {
          background-color: ${theme.color.white};
          padding: 24px;
          display: inline-block;
          text-align: center;
          border-radius: 4px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.025),
            0 2px 2px rgba(0, 0, 0, 0.025), 0 4px 4px rgba(0, 0, 0, 0.025),
            0 6px 8px rgba(0, 0, 0, 0.025), 0 8px 16px rgba(0, 0, 0, 0.025);
          dt {
            font-weight: ${theme.font.bold};
            font-size: 0.75rem;
            line-height: 1rem;
            margin: 0 0 0.5rem;
            color: ${theme.color.black};
            text-transform: uppercase;
          }
          dd {
            display: inline-block;
            margin: 0 6px;
            font-size: 0.9rem;
            line-height: 1.6rem;
            color: ${theme.color.black};
          }
        }
      }
    `}</style>
  </>
);

export default Tech;
