import fetch from "node-fetch";
import Head from "../../components/Head";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "../../components/Image";

const Project = ({ project, status }) => {
  return project ? (
    <>
      <Head title={project.name} />
      <Container>
        <Navigation />
        <h1>{project.name}</h1>

        <Image src={project.image} alt={project.name} />
        {/* <Page project> */}
        {/* <Hero project>
          <div className="aspect aspect__square aspect__wide--md shadow">
            <Image src={project.image} alt={project.name} />
          </div>
        </Hero> */}
        {/* <Body project> */}
        <div dangerouslySetInnerHTML={{ __html: project.body }} />
        {/* </Body> */}
        {/* </Page> */}
        <Footer />
      </Container>
    </>
  ) : (
    <h1>error!!</h1>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get projects
  const res = await fetch("http://localhost:3000/api/projects");
  const projects = await res.json();

  // Get the paths we want to pre-render based on projects
  const paths = projects.map(project => `/projects/${project.slug}`);
  console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log("[params]", params);
  // params contains the project `id`.
  // If the route is like /projects/1, then params.id is 1
  const res = await fetch(`http://localhost:3000/api/projects/${params.slug}`);

  const project = await res.json();
  console.log("[project]", project);
  // Pass project data to the page via props
  return { props: { project } };
}

export default Project;
