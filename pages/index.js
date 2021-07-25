import Airtable from "airtable";
import { motion } from "framer-motion";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Project from "../components/Project";
import styles from "../styles/Projects.module.scss";

export default function Projects({ projects }) {
  return (
    <>
      <Head title="Projects" />
      <Navigation />
      <Main>
        <div className={styles.intro}>
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
            I have a background in front-end development and technical
            leadership with a focus on design, user experience and
            accessability.
          </motion.p>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
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
              <Project {...project} />
            </motion.div>
          ))}
        </div>
      </Main>
      <Footer />
    </>
  );
}

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
