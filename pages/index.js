import fetch from "node-fetch";
import Link from "next/link";
import Head from "../components/Head";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = ({ projects }) => {
  return (
    <>
      <Head title="Projects" />
      <Container>
        <div className="col-12">
          <Navigation />
        </div>

        <div className="col-10 mb5">
          <h1 className="larger">
            Hey, I'm Nathan,
            <br />I build dynamic interfaces and experiences.
          </h1>

          <p className="larger">
            I have a background in frontend developent, technical leadership and
            design. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className="larger">
            I'm currently available for frontend development and technical
            leadership opportunities.
          </p>

          <p className="larger">
            <Button href="/resume" classes="underline">
              Resume
            </Button>
          </p>
        </div>

        <div className="col-12">
          <h3>Select projects</h3>
          <div className="grid">
            {projects.map(project => (
              <Card {...project} key={project.id}></Card>
            ))}
          </div>
        </div>
        <div className="col-12">
          <Footer />
        </div>
      </Container>
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
