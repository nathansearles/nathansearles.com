import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Title from "../../components/Head";
import { absoluteUrl } from "../../utilities";
import Error from "../_error";
import Image from "../../components/Image";
import Nav from "../../components/Nav";

import { styledProject } from "../../styles/styles.js";

const Project = ({ project, status }) => {
  return status === 200 ? (
    <>
      <Title title={project.name}></Title>

      <Nav />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { scale: 0.975, opacity: 0 },
          enter: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }
          },
          exit: {
            scale: 0.975,
            opacity: 0,
            transition: { duration: 0.35, ease: [0.4, 0.0, 1, 1] }
          }
        }}
        id="siteWrapper"
      >
        <div>
          <div className="project-hero">
            <div className="aspect aspect__square aspect__wide--md shadow">
              <Image src={project.image} alt={project.name} />
            </div>
          </div>
          <div
            className="project-body"
            dangerouslySetInnerHTML={{ __html: project.body }}
          />
        </div>
      </motion.div>
      <style jsx>{styledProject}</style>
    </>
  ) : (
    <Error />
  );
};

Project.getInitialProps = async ({ query: { slug }, req }) => {
  const { origin } = absoluteUrl(req);
  const response = await fetch(`${origin}/api/projects/${slug}`);
  const project = await response.json();

  return { project, status: response.status };
};

export default Project;
