import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { pageTransitions } from "../utilities";
import Title from "../components/Head";
import Nav from "../components/nav";
import "../styles/styles.scss";

const Tech = () => (
  <>
    <Title title="Tech" />

    <Nav />

    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransitions}
      id="siteWrapper"
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
  </>
);

export default Tech;
