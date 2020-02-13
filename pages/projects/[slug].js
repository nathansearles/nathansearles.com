import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Title from "../../components/Head";
import Page from "../../components/Page";
import Hero from "../../components/Hero";
import Body from "../../components/Body";

import { absoluteUrl } from "../../utilities";
import Error from "../_error";
import Image from "../../components/Image";
import Nav from "../../components/Nav";

const Project = ({ project, status }) => {
  return status === 200 ? (
    <>
      <Title title={project.name}></Title>

      <Nav />

      <Page project>
        <Hero project>
          <div className="aspect aspect__square aspect__wide--md shadow">
            <Image src={project.image} alt={project.name} />
          </div>
        </Hero>
        <Body project>
          <div dangerouslySetInnerHTML={{ __html: project.body }} />
        </Body>
      </Page>
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
