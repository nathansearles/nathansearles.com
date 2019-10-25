import { motion } from "framer-motion";
import { pageTransitions } from "../utilities";
import Title from "../components/Head";
import Nav from "../components/Nav";

import { styledPage, styledTech } from "../styles/styles.js";

const Tech = () => (
  <>
    <Title title="Tech" />

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
          Tech stack used for front-end, back-end services, and deployments.
        </p>
      </div>

      <div className="page-body">
        <div className="boxed-lists">
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
          </dl>
          <dl>
            <dt>DevOps</dt>
            <dd>LAMP</dd>
            <dd>Bash</dd>
            <dd>SSH</dd>
            <dd>Ubuntu</dd>
            <dd>Git</dd>
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
            <dd>Wordpress</dd>
            <dd>Shopify</dd>
            <dd>Prismic</dd>
            <dd>DigitalOcean</dd>
          </dl>
        </div>
      </div>
    </motion.div>
    <style jsx>{styledPage}</style>
    <style jsx>{styledTech}</style>
  </>
);

export default Tech;
