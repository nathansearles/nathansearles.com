import { useEffect } from "react";
import Link from "next/link";
import Head from "../components/Head";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import { Container, Row, Column } from "../components/Grid";

const Error = ({ projects }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head title={"Error"} />
      <Navigation />
      <Main>
        <Container>
          <Row>
            <Column xs={12} sm={10} md={8}>
              <div
                className="emoji emoji--larger"
                aria-hidden="true"
                aria-label="Facepalm"
                role="img"
              >
                🤦‍♂️
              </div>
              <h1 className="larger">This page isn't here.</h1>
              <p className="larger">
                Let's head back to the{" "}
                <Link href="/">
                  <a>projects page</a>
                </Link>
                .
              </p>
            </Column>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default Error;
