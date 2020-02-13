import { motion } from "framer-motion";
import { pageTransition } from "../utilities";
import Title from "../components/Head";
import Nav from "../components/Nav";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Image from "../components/Image";

import theme from "../styles/_variables";

const Info = () => (
  <>
    <Title title="Info" />

    <Nav />

    <Page>
      <Hero>
        <p className="lead">
          A Portland, Oregon based developer that uses technology to elevate
          user experience and design of digital experiences.
        </p>
      </Hero>

      <Body>
        <div className="layout-info">
          <div className="portrait">
            <div className="aspect aspect__portrait shadow">
              <Image
                src="nathan-searles_zmyp5o.jpg"
                alt="Nathan Searles"
                aspectRatio={"portrait"}
              />
            </div>
            <p className="caption">
              Photo by{" "}
              <a href="http://www.pavlinasummers.com/" target="_blank">
                Pavlina Summers
              </a>
            </p>
          </div>

          <div className="content">
            <div>
              <h2>Nathan Searles</h2>
              <p>Technical director, developer</p>
              <p>
                I'm available for full-time opportunities within a team that's
                passionate about UX and design.
              </p>
              <p>
                Feel free to get in touch{" "}
                <a href="mailto:nsearles@gmail.com">nsearles@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </Body>
    </Page>
    <style jsx>{`
      .layout-info {
        display: grid;
        grid-template-columns: 1fr;

        @media (${theme.breakpoint.md}) {
          display: grid;
          grid-template-columns: [image] 5fr [content] 5fr;
          row-gap: 24px;
          column-gap: 24px;
        }

        @media (${theme.breakpoint.lg}) {
          display: grid;
          grid-template-columns: [gutter] 1fr [image] 3fr [content] 4fr [gutter] 1fr;
          row-gap: 24px;
          column-gap: 24px;
        }

        & > div {
          display: flex;
        }

        .portrait {
          grid-column: image;
          display: flex;
          flex-direction: column;
        }

        .content {
          grid-column: content;
          padding-top: 24px;
          @media (${theme.breakpoint.md}) {
            padding-left: 24px;
          }
          h2 {
            margin-top: 0;
            margin-bottom: 0;
          }
          p:last-of-type {
            margin-bottom: 0;
          }
        }

        img {
          width: 100%;
          height: auto;
        }
      }
      .caption {
        font-size: 0.6rem;
        text-align: center;
        color: ${theme.color.secondary};
        a {
          text-decoration: none;
          color: ${theme.color.secondary};
        }
      }
    `}</style>
  </>
);

export default Info;
