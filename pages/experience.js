import { motion } from "framer-motion";
import { pageTransition } from "../utilities";
import Title from "../components/Head";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Nav from "../components/Nav";
import theme from "../styles/_variables";

const Experience = () => (
  <>
    <Title title="Experience" />

    <Nav />

    <Page>
      <Hero>
        <p className="larger">
          A background in frontend engineering,{" "}
          <span className="nowrap">user experience</span> and design.
        </p>
        <p>
          Focusing on the complete digital project lifecycle including planning,
          strategy, design, frontend engineering, backend services, and
          deployments.
        </p>
      </Hero>

      <Body>
        <h3>Past experience</h3>
        <div className="boxes">
          <div className="box">
            <h2>Cinco</h2>
            <p>Technical Director</p>
            <p>
              Supported digital projects across a design-led studio, from
              proposals and SOWs, to project planning, strategy and hands on
              development. This included complete website rebuilds to working
              with existing code bases and platforms. Clients included The James
              Brand, Nike, Gogoro, and Nextbit.
            </p>
          </div>

          <div className="box">
            <h2>Fuzzco</h2>
            <p>Director of Technology</p>
            <p>
              Managed team of developers and established a technology process.
              Oversaw a roster of existing Wordpress websites, supported new
              business, day-to-day engineering and project/account management of
              new and existing clients. Worked with Obey, Hugh &amp; Crye and
              range of small to medium-sized business.
            </p>
          </div>

          <div className="box">
            <h2>The Brigade</h2>
            <p>Partner &amp; Director of Technology</p>
            <p>
              Co-founded and helped run all aspects of a newly-formed digital
              agency. Oversaw new business, project, account, and team
              management, to hands-on engineering for clients including Spotify,
              Intel, and Mindjet.
            </p>
          </div>

          <div className="box">
            <h2>Pollinate</h2>
            <p>Sr. Frontend Developer</p>
            <p>
              Led frontend engineering for projects with Yakima, Hollywood
              Theaters, and Umpqua Bank, among others.
            </p>
          </div>
        </div>
      </Body>
    </Page>
    <style jsx>{`
      .boxes {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 24px;
        row-gap: 24px;
        margin-top: 24px;
        @media (${theme.breakpoint.lg}) {
          grid-template-columns: repeat(2, 1fr);
        }
        .box {
          padding: 24px 24px 36px;
          display: block;
          text-align: left;

          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.025),
            0 2px 2px rgba(0, 0, 0, 0.025), 0 4px 4px rgba(0, 0, 0, 0.025),
            0 6px 8px rgba(0, 0, 0, 0.025), 0 8px 16px rgba(0, 0, 0, 0.025);
          background-color: var(--background-secondary);
          :global(h2:first-of-type) {
            margin-top: 0;
          }
          p {
            margin-bottom: 24px;
          }
          p:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    `}</style>
  </>
);

export default Experience;
