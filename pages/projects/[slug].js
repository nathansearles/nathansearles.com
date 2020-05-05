import { useEffect } from "react";
import fetch from "node-fetch";
import Head from "../../components/Head";
import Navigation from "../../components/Navigation";
import Main from "../../components/Main";
import { Container, Row, Column } from "../../components/Grid";
import Image from "../../components/Image";

const Project = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    project && (
      <>
        <Head title={project.name} />
        <Navigation subpage />
        <Main classes="main-project">
          <Container>
            <Row justify="center" text="left">
              <Column xs={12} sm={10} md={8}>
                <div dangerouslySetInnerHTML={{ __html: project.body }} />
              </Column>
              <Column xs={12}>
                <div className="project-image">
                  <Image src={project.image} alt={project.name} />
                </div>
              </Column>
              <Column xs={12} sm={10} md={8}>
                <div dangerouslySetInnerHTML={{ __html: project.details }} />
              </Column>
            </Row>
          </Container>
        </Main>
      </>
    )
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get projects
  const res = await fetch(
    "https://nathansearles-f3c20.firebaseio.com/projects.json"
  );
  const projects = await res.json();

  // Get the paths we want to pre-render based on projects
  const paths = projects.map((project) => `/projects/${project.slug}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the project `id`.
  // If the route is like /projects/1, then params.id is 1
  const res = await fetch(
    `https://nathansearles-f3c20.firebaseio.com/projects.json?orderBy=%22slug%22&equalTo=%22${params.slug}%22`
  );

  const projectData = await res.json();

  // Cleanup Firebase data
  const project = Object.values(projectData)[0];

  // Pass project data to the page via props
  return { props: { project } };
}

export default Project;
