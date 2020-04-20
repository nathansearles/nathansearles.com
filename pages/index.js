import { useRef, useEffect } from "react";
import fetch from "node-fetch";
import Head from "../components/Head";
import TopBar from "../components/TopBar";
import Main from "../components/Main";
import { Container, Row, Column } from "../components/Grid";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = ({ projects }) => {
  const lowerLayerRef = useRef();
  useEffect(() => {
    handleContentOffset();

    window.addEventListener("scroll", handelScroll);
    window.addEventListener("resize", handleContentOffset);

    return () => {
      window.removeEventListener("scroll", handelScroll);
      window.removeEventListener("resize", handelScroll);
    };
  }, []);

  // Offset the content layer based on viewport height
  // bottom = window height - element height
  const handleContentOffset = () => {
    lowerLayerRef.current.style.bottom = `${
      window.innerHeight - lowerLayerRef.current.offsetHeight
    }px`;
  };

  const handelScroll = () => {
    if (window.pageYOffset <= window.innerHeight) {
      // Calculate scroll amount and convert to a percentage
      // (scroll Y amount - window height) / window height
      const srollPercentage =
        Math.abs(window.pageYOffset - window.innerHeight) / window.innerHeight;

      // Set CSS variables as properties based on scrollPercentage
      lowerLayerRef.current.style.setProperty(
        "--content-layer-mask-opacity",
        srollPercentage
      );
    }
  };
  return (
    <>
      <Head title="Projects" />
      <TopBar />
      <Main>
        <Container>
          <div className="topLayer">
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
                  I'm available for frontend development and technical
                  leadership opportunities.
                </p>

                <Button href="/resume" classes="solid">
                  Resume
                </Button>
              </Column>
            </Row>
          </div>
          <div className="lowerLayer" ref={lowerLayerRef}>
            <Row className="projects-grid">
              {projects.map((project) => (
                <Column xs={12} sm={6} key={project.id}>
                  <Card {...project} />
                </Column>
              ))}
            </Row>
          </div>
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
