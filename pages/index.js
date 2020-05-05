import { useRef, useEffect, useContext } from "react";
import fetch from "node-fetch";
import { motion } from "framer-motion";
import { fadeUpInTransition } from "../utilities";
import Head from "../components/Head";
import Alert from "../components/Alert";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import { Container, Row, Column } from "../components/Grid";
import Card from "../components/Card";
import ScrollContext from "../components/ScrollContext";

const Home = ({ projects }) => {
  const lowerLayerRef = useRef();

  const { currentScroll, updateScroll } = useContext(ScrollContext);

  // Offset the content layer based on viewport height
  // bottom = window height - element height
  const handleContentOffset = () => {
    const content = lowerLayerRef.current.querySelectorAll("div")[0];
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

  useEffect(() => {
    if (currentScroll >= window.innerHeight / 1.75) {
      // Set CSS variable property to 0
      lowerLayerRef.current.style.setProperty(
        "--content-layer-mask-opacity",
        0
      );
    }

    if (
      currentScroll >= window.innerHeight / 2 &&
      currentScroll <= window.innerHeight
    ) {
      // if .topLayer is scrolled past middle point
      window.scrollTo(0, window.innerHeight);
    } else if (currentScroll < window.innerHeight / 2) {
      // if .topLayer is scrolled less than middle point
      window.scrollTo(0, 0);
    } else {
      // Scroll to currentScroll value
      window.scrollTo(0, currentScroll);
    }

    return () => {
      console.log("[update scroll]", window.scrollY);
      updateScroll(window.scrollY);
    };
  }, []);

  return (
    <>
      <Head title="Projects" />
      <Navigation />
      <Main>
        <div className="topLayer">
          <Container>
            <Alert />
            <Row>
              <Column xs={12} sm={10}>
                <motion.h1
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0, y: -15 },
                    enter: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.25,
                        type: "spring",
                        damping: 100,
                        mass: 4,
                      },
                    },
                    exit: {},
                  }}
                  className="larger"
                >
                  Hey, I'm Nathan,
                  <br />I build dynamic interfaces and experiences.
                </motion.h1>
              </Column>
            </Row>
            <Row marginBottom={5}>
              <Column xs={12} sm={10} md={8}>
                <motion.p
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0, y: -15 },
                    enter: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.5,
                        type: "spring",
                        damping: 100,
                        mass: 4,
                      },
                    },
                    exit: {},
                  }}
                  transition={{ delay: 2 }}
                  className="larger"
                >
                  I have a background in frontend development and technical
                  leadership with a focus on design and user experience.
                </motion.p>
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
