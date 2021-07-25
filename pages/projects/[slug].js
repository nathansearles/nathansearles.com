import Airtable from "airtable";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities";
import Head from "../../components/Head";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import { Container, Row, Column } from "../../components/Grid";
import Image from "../../components/Image";

const Project = ({ project }) => {
  return (
    project && (
      <>
        <Head title={project.name} />
        <Navigation subpage />
        <Main classes="main-project">
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeIn}
          >
            <Container>
              <Row justify="center" text="left">
                <Column xs={12} sm={10} md={8}>
                  <ReactMarkdown>{project.body}</ReactMarkdown>
                </Column>
                <Column xs={12}>
                  <div className="project-image">
                    <Image
                      src={project.feature}
                      alt={`Preview image for the ${project.name.replace(
                        /^t|The./,
                        ""
                      )} project`}
                    />
                  </div>
                </Column>
                <Column xs={12} sm={10} md={8}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {project.details}
                  </ReactMarkdown>
                </Column>
              </Row>
            </Container>
          </motion.div>
        </Main>
        <Footer />
      </>
    )
  );
};

export async function getStaticPaths() {
  const airtable = new Airtable({
    apiKey: "keyhQSCW2r12XG1Cq",
  });

  const records = await airtable
    .base("appzSbuz48Xw3C6UV")("Projects")
    .select({
      fields: ["Slug"],
      sort: [{ field: "Id", direction: "asc" }],
    })
    .all();

  const paths = records.map((project) => `/projects/${project.get("Slug")}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const airtable = new Airtable({
    apiKey: "keyhQSCW2r12XG1Cq",
  });

  const record = await airtable
    .base("appzSbuz48Xw3C6UV")("Projects")
    .select({
      filterByFormula: `({Slug}="${params.slug}")`,
      fields: ["Name", "Description", "Feature", "Body", "Details"],
    })
    .all();

  const projectRecord = record[0];

  const project = {
    name: projectRecord.get("Name"),
    description: projectRecord.get("Description"),
    feature: projectRecord.get("Feature"),
    body: projectRecord.get("Body"),
    details: projectRecord.get("Details"),
  };

  return {
    props: {
      project,
    },
    revalidate: 1,
  };
}

export default Project;
