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
        <p className="larger">
          Tech stack used for front-end, back-end services, and deployments.
        </p>
        <p>
          High-level overview of my go-to tool set for development projects,
          back-end services, and deployments. Taking a component-based approach
          to building responsive websites with a focus on design and user
          experience.
        </p>
      </Hero>

      <Body>
        <div className="boxes">
          <dl>
            <dt>Front-end</dt>
            <dd>React</dd>
            <dd>Next.js</dd>
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
            <dd>SSH</dd>
          </dl>
          <dl>
            <dt>DevOps</dt>
            <dd>Git</dd>
            <dd>NPM/Yarn</dd>
            <dd>Webpack</dd>
            <dd>Babel</dd>
            <dd>Continuous Deployment</dd>
          </dl>
          <dl>
            <dt>Platforms</dt>
            <dd>GitHub</dd>
            <dd>Craft CMS</dd>
            <dd>WordPress</dd>
            <dd>Shopify</dd>
            <dd>Prismic</dd>
            <dd>Firebase</dd>
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
          grid-template-columns: repeat(2, 1fr);
        }
        dl {
          background-color: ${theme.color.white};
          padding: 24px;
          display: inline-block;
          text-align: center;

          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.025),
            0 2px 2px rgba(0, 0, 0, 0.025), 0 4px 4px rgba(0, 0, 0, 0.025),
            0 6px 8px rgba(0, 0, 0, 0.025), 0 8px 16px rgba(0, 0, 0, 0.025);
          dt {
            font-weight: ${theme.font.regular};
            font-size: 1.5rem;
            line-height: 2.2rem;
            margin-top: 0;
            margin-bottom: 0.5rem;
            color: ${theme.color.black};
          }
          dd {
            display: inline-block;
            margin: 0 6px;
            font-size: 1rem;
            line-height: 1.6rem;
            // color: ${theme.color.black};
          }
        }
      }
    `}</style>
  </>
);

export default Tech;
