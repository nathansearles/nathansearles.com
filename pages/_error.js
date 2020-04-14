import Link from "next/link";
import Head from "../components/Head";
import Main from "../components/Main";
import { Container, Row, Column } from "../components/Grid";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const Error = ({ projects }) => {
  return (
    <>
      <Head title={"Error"} />
      <TopBar />
      <Main>
        <Container>
          <Row>
            <Column xs={12} sm={10} md={8}>
              <div className="emoji emoji--larger">🤦‍♂️</div>
              <h1 className="larger">This page isn't here.</h1>
              <p className="larger">
                Let's head back to the{" "}
                <Link href="/resume">
                  <a>main page</a>
                </Link>
                .
              </p>
            </Column>
          </Row>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Error;
