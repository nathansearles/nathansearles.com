import fetch from "node-fetch";
import Link from "next/link";
import Head from "../components/Head";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = ({ projects }) => {
  return (
    <>
      <Head title="Projects" />
      <Navigation />
      <Main>
        <div className="col-10 align-center">
          <h1 className="larger">
            Hey, I'm Nathan,
            <br />I build dynamic interfaces and experiences.
          </h1>
        </div>

        <div className="col-8 mb5 align-center">
          <p className="larger">
            I have a background in frontend development and technical leadership
            with a focus on design and user experience.
          </p>

          <p className="larger">
            I'm available for frontend development and technical leadership
            opportunities.
          </p>

          <Button href="/resume" classes="solid">
            Resume
          </Button>
        </div>

        <div className="col-12">
          <div className="grid">
            {projects.map(project => (
              <Card {...project} key={project.id}></Card>
            ))}
          </div>
        </div>
      </Main>
      <Footer />
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
