import fetch from "isomorphic-unfetch";
import { absoluteUrl } from "../utilities";
import Link from "next/link";
import Title from "../components/Head";
import Nav from "../components/Nav";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Image from "../components/Image";

import { styledProjects } from "../styles/styles.js";

const Home = ({ projects }) => {
  return (
    <>
      <Title title={"Projects"} />

      <Nav />

      <Page>
        <Hero>
          <p className="lead">
            Web developer focused on technology that drives great user
            experience and design.
          </p>
        </Hero>

        <Body>
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
                    <div className="thumbnail aspect aspect__square">
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        aspectRatio={"square"}
                      />
                    </div>
                    <h2>{project.name}</h2>
                    <p>{project.desc}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </Body>
      </Page>
      <style jsx>{styledProjects}</style>
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
