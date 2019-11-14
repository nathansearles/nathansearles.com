import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { pageTransitions } from "../utilities";
import Title from "../components/Head";
import Nav from "../components/Nav";
import Image from "../components/Image";

import { styledPage, styledInfo } from "../styles/styles.js";

const Info = () => (
  <>
    <Title title="Info" />

    <Nav />

    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransitions}
      className="site-wrapper"
    >
      <div className="page-hero">
        <p className="lead">
          A Portland, Oregon based developer that uses technology to elevate
          user experience and design of digital experiences.
        </p>
      </div>

      <div className="page-body layout-info">
        <div className="portrait">
          <div className="aspect aspect__portrait shadow">
            <LazyLoadComponent>
              <Image
                src="nathan-searles_zmyp5o.jpg"
                alt="Nathan Searles"
                aspectRatio={"portrait"}
              />
            </LazyLoadComponent>
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
    </motion.div>
    <style jsx>{styledPage}</style>
    <style jsx>{styledInfo}</style>
  </>
);

export default Info;
