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

  // Offset the content layer based on viewport height
  // bottom = window height - element height
  const handleContentOffset = () => {
    const content = lowerLayerRef.current.querySelectorAll("div")[0];
    console.log("[handleContentOffset]: ", content);
    lowerLayerRef.current.style.bottom = `${
      window.innerHeight - lowerLayerRef.current.offsetHeight
    }px`;

    lowerLayerRef.current.style.height = `${content.offsetHeight + 4 * 16}px`;
  };

  // Handles back button use case
  // If scrolled past window height set opacity layer to 0
  const handleBackButton = () => {
    if (window.pageYOffset >= window.innerHeight) {
      // Set CSS variable property to 0
      lowerLayerRef.current.style.setProperty(
        "--content-layer-mask-opacity",
        0
      );
    }
  };

  const handelScroll = () => {
    if (window.pageYOffset <= window.innerHeight) {
      // Calculate scroll amount and convert to a percentage
      // (scroll Y amount - window height) / window height
      const scrollPercentage =
        Math.abs(window.pageYOffset - window.innerHeight) / window.innerHeight;

      // Set CSS variables as properties based on scrollPercentage
      lowerLayerRef.current.style.setProperty(
        "--content-layer-mask-opacity",
        scrollPercentage
      );
    }
  };

  useEffect(() => {
    handleContentOffset();
    handleBackButton();

    window.addEventListener("scroll", handelScroll);
    window.addEventListener("resize", handleContentOffset);

    return () => {
      window.removeEventListener("scroll", handelScroll);
      window.removeEventListener("resize", handleContentOffset);
    };
  }, []);

  return (
    <>
      <Head title="Projects" />
      <TopBar />
      <Main>
        <div className="topLayer">
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
                  I'm available for frontend development and technical
                  leadership opportunities.
                </p>

                <Button href="/resume" classes="solid">
                  Resume
                </Button>
              </Column>
            </Row>
          </Container>
        </div>
        <div className="lowerLayer" ref={lowerLayerRef}>
          <Container>
            <Row className="projects-grid">
              {projects.map((project) => (
                <Column xs={12} sm={6} md={5} key={project.id}>
                  <Card {...project} />
                </Column>
              ))}
            </Row>
          </Container>
        </div>
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
