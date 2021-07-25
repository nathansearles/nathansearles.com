import Airtable from "airtable";
import { motion } from "framer-motion";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Container, Row, Column } from "../components/Grid";
import Card from "../components/Card";

const Home = ({ projects }) => {
  return (
    <>
      <Head title="Projects" />
      <Navigation />
      <Main>
        <Container classes="intro">
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

        <Container>
          <Row className="projects-grid">
            {projects.map((project) => (
              <Column xs={12} sm={6} md={5} key={project.id}>
                <motion.div
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
                  transition={{ delay: 3 }}
                >
                  <Card {...project} />
                </motion.div>
              </Column>
            ))}
          </Row>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: "keyhQSCW2r12XG1Cq",
  });

  const records = await airtable
    .base("appzSbuz48Xw3C6UV")("Projects")
    .select({
      fields: ["Id", "Slug", "Name", "Description", "Preview"],
      sort: [{ field: "Id", direction: "asc" }],
    })
    .all();

  const projects = records.map((project) => {
    return {
      id: project.get("Id"),
      slug: project.get("Slug"),
      name: project.get("Name"),
      description: project.get("Description"),
      preview: project.get("Preview"),
    };
  });

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}

export default Home;
