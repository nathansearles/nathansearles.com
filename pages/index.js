import fetch from "isomorphic-unfetch";
import { absoluteUrl } from "../utilities";

import Title from "../components/Head";
import Nav from "../components/Nav";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Projects from "../components/Projects";

const Home = ({ projects }) => {
  return (
    <>
      <Title title={"Projects"} />

      <Nav />

      <Page>
        <Hero>
          <p className="larger">
            Developer focused on technology that drives great user experience
            and design.
          </p>
        </Hero>

        <Body>
          <h3>Select projects</h3>
          <Projects projects={projects} />
        </Body>
      </Page>
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
