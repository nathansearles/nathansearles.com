import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { pageTransitions } from "../utilities";
import Title from "../components/Head";
import Nav from "../components/Nav";
import "../styles/styles.scss";

const Experience = () => (
  <>
    <Title title="Experience" />

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
          A background in front-end development,{" "}
          <span className="nowrap">user experience</span> and design.
        </p>
        <p>
          Focusing on the complete digital project lifecycle including planning,
          strategy, design, development, back-end services, and deployments.
          Taking a component-based approach to building responsive web sites
          with a focus on design and user experience.
          {/* ,
          utilizing RESTful APIs,  */}
        </p>
      </div>

      <div className="page-body">
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
            <p>Directory of Technology</p>
            <p>
              Managed team of developers and established a technology process.
              Oversaw a roster of existing Wordpress websites, supported new
              business, day-to-day development and project/account management of
              new and existing clients. Worked with Obey, Hugh &amp; Crye and
              range of small to medium-sized business.
            </p>
          </div>

          <div className="box">
            <h2>The Brigade</h2>
            <p>Partner &amp; Directory of Technology</p>
            <p>
              Co-founded and helped run all aspects of a newly-formed digital
              agency. Oversaw new business, project, account, and team
              management, to hands-on development for clients including Spotify,
              Intel, and Mindjet.
            </p>
          </div>

          <div className="box">
            <h2>Pollinate</h2>
            <p>Sr. Front-end Developer</p>
            <p>
              Led front-end development for projects with Yakima, Hollywood
              Theaters, and Umpqua Bank, among others.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </>
);

export default Experience;
