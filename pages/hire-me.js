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
          <Image
            src="nathan-searles.jpg"
            alt="Nathan Searles"
            aspectRatio={"square"}
            circle
          />
        </div>
        <h1>
          Hey, I'm Nathan, a Portland, Oregon based engineer and technical
          leader.
        </h1>
        <p className="larger">
          I'm currently available for frontend engineering and technical
          leadership opportunities. Have a great opportunity? Shoot me an email
          and let's chat.{" "}
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
    `}</style>
  </>
);

export default Info;
