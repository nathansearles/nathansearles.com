import React from "react";
import fetch from "isomorphic-unfetch";
import { absoluteUrl, pageTransitions } from "../utilities";
import { motion } from "framer-motion";
import Link from "next/link";
import Title from "../components/Head";
import Nav from "../components/nav";

import "../styles/styles.scss";

const Home = ({ projects }) => {
  return (
    <>
      <Title title={"Projects"} />

      <Nav />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageTransitions}
        id="siteWrapper"
      >
        <div className="page-hero">
          <div>
            <p className="lead">
              Web developer focused on technology that drives great user
              experience and design.
            </p>
          </div>
        </div>

        <div className="page-body">
          <h3>Select projects</h3>
          <div id="projects">
            {projects.map(project => (
              <div className="project" key={project.slug}>
                <Link
                  scroll={false}
                  href="/projects/[slug]"
                  as={`/projects/${project.slug}`}
                >
                  <a>
                    <div className="thumbnail">
                      <div className="image">
                        <img src={project.thumbnail} />
                      </div>
                    </div>
                    <h2>{project.name}</h2>
                    <p>{project.desc}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const response = await fetch(`${origin}/api/projects`);
  const projects = await response.json();
  return { projects };
};

export default Home;