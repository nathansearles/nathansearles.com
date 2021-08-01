import Head from "../components/Head";
import { getLayout } from "../components/Layout/PageLayout";
import { getAllProjects } from "../lib/api";
import Project from "../components/Project";
import styles from "../styles/Home.module.scss";

export default function Home({ allProjects }) {
  return (
    <>
      <Head />

      <div className={styles.intro}>
        <div>
          <h1>
            Hey, I'm Nathan,
            <br />I build dynamic interfaces and experiences.
          </h1>

          <p>
            My background is in front-end development and technical leadership
            with a focus on design, user experience and accessability.
          </p>
        </div>
      </div>

      <div className={styles.projects}>
        {allProjects.map((project) => (
          <Project key={project.slug} {...project} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "previewImage",
    "description",
    "order",
  ]);

  return {
    props: { allProjects },
  };
}

Home.getLayout = getLayout;
