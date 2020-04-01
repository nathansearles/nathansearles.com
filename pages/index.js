import fetch from "node-fetch";
import Head from "../components/Head";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Image from "../components/Image";

const Home = ({ projects }) => {
  return (
    <>
      <Head title="Projects" />
      <Container>
        <Navigation />
        <h1 className="larger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          adipisci, fugiat exercitationem.
        </h1>

        <p className="larger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          unde doloribus omnis voluptates, quae porro officia sunt excepturi
          commodi! Fugit alias unde ducimus ex, corrupti voluptas perferendis
          ipsam repudiandae qui.
        </p>

        <h3>Select projects</h3>
        <div className="grid">
          {projects.map(project => (
            <Card href={`/projects/${project.slug}`} key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <Image
                src={project.thumbnail}
                alt={project.name}
                aspectRatio={"square"}
              />
            </Card>
          ))}
        </div>
        <Footer />
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
