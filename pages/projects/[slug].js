import { useEffect } from "react";
import Airtable from "airtable";
const ReactMarkdown = require("react-markdown/with-html");
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
                <ReactMarkdown source={project.body} />
              </Column>
              <Column xs={12}>
                <div className="project-image">
                  <Image src={project.feature} alt={project.name} />
                </div>
              </Column>
              <Column xs={12} sm={10} md={8}>
                <ReactMarkdown source={project.details} escapeHtml={false} />
              </Column>
            </Row>
          </Container>
        </Main>
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
  };
}

export default Project;
