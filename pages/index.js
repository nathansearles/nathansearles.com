import fetch from "node-fetch";
import Head from "../components/Head";
import Main from "../components/Main";
import { Container, Row, Column } from "../components/Grid";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = ({ projects }) => {
  return (
    <>
      <Head title="Projects" />
      <Main>
        <Container>
          <Row>
            <Column xs={12} sm={10}>
              <h1 className="larger">
                Hey, I'm Nathan,
                <br />I build dynamic interfaces and experiences.
              </h1>
            </Column>
          </Row>
          <Row marginBottom={5}>
            <Column xs={12} sm={10} md={8}>
              <p className="larger">
                I have a background in frontend development and technical
                leadership with a focus on design and user experience.
              </p>

              <p className="larger">
                I'm available for frontend development and technical leadership
                opportunities.
              </p>

              <Button href="/resume" classes="solid">
                Resume
              </Button>
            </Column>
          </Row>
          <Row className="projects-grid">
            {projects.map((project) => (
              <Column xs={12} sm={6} key={project.id}>
                <Card {...project} />
              </Column>
            ))}
          </Row>
        </Container>
      </Main>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch(
    `https://nathansearles-f3c20.firebaseio.com/projects.json`
  );

  const projects = await res.json();

  return { props: { projects } };
}

export default Home;
