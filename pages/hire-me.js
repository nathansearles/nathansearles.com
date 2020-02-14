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
    <Title title="Hire Me" />

    <Nav />

    <Page>
      <Hero>
        <div className="aspect aspect__square shadow circle">
          <div className="portrait-mask"></div>
          <Image
            src="nathan-searles-2018-square_o8pgtt.jpg"
            alt="Nathan Searles"
            aspectRatio={"square"}
            circle
          />
        </div>
        <p className="larger">
          Hey, I'm Nathan, a Portland, Oregon based developer and technical
          leader.
        </p>

        <p className="large">
          I'm currently looking for technical leadership and development
          opportunities with a team that's passionate about UX and design.
        </p>

        <p className="large">
          Have a great opportunity? Shoot me an email and let's chat.{" "}
          <a href="mailto:nsearles@gmail.com">nsearles@gmail.com</a>
        </p>
      </Hero>
    </Page>
    <style jsx>{`
      .circle {
        width: 225px;
        padding-bottom: 225px;
        border-radius: 225px;
        margin: 0 auto 3rem;
      }
      .portrait-mask {
        background: #3433ff;
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        mix-blend-mode: color;
        opacity: 0.75;
      }
    `}</style>
  </>
);

export default Info;
