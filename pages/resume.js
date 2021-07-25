import Head from "../components/Head";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Container, Row, Column } from "../components/Grid";
import Image from "../components/Image";

const Resume = () => {
  return (
    <>
      <Head title="Projects" />
      <Navigation subpage />
      <Main>
        <Container>
          <Row>
            <Column xs={12} sm={10} md={8}>
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={fadeIn}
              >
                <div className="portrait">
                  <Image
                    src="nathan-searles-2018-square_o8pgtt.jpg"
                    alt="A photo of Nathan Searles"
                    aspectRatio="square"
                    className="rounded"
                  />
                </div>

                <h1>Nathan Searles</h1>

                <h2>Front-end developer and technical leader</h2>

                <p>
                  Working through the complete project lifecycle including
                  planning, strategy, prototyping, design, front-end
                  development, backend services, and deployments. Taking a
                  component-based approach to building responsive experiences
                  with a focus on design, user experience and accessability.
                </p>

                <p>
                  I'm currently the Technical Director at{" "}
                  <a href="https://studiomega.com/">Studio Mega</a> where I lead
                  all things digital.
                </p>

                <h5>Experience</h5>

                <h3>Cinco</h3>
                <h4>Technical Director</h4>
                <p>
                  Supported digital projects across a design-led studio, from
                  proposals and SOWs, to project planning, strategy and hands on
                  development. This included complete website rebuilds to
                  working with existing code bases and platforms. Clients
                  included The James Brand, Nike, Gogoro, and Nextbit.
                </p>

                <h3>Fuzzco</h3>
                <h4>Director of Technology</h4>
                <p>
                  Managed team of developers and established a technology
                  process. Oversaw a roster of existing WordPress websites,
                  supported new business, day-to-day development and
                  project/account management of new and existing clients. Worked
                  with Obey, Hugh & Crye and a range of small to medium-sized
                  businesses.
                </p>

                <h3>The Brigade</h3>
                <h4>Partner &amp; Director of Technology</h4>
                <p>
                  Co-founded and helped run all aspects of a newly-formed
                  digital agency. Oversaw new business, project, account, and
                  team management, to hands-on development for clients including
                  Spotify, Intel, and Mindjet.
                </p>

                <h3>Pollinate</h3>
                <h4>Sr. Front-end Developer</h4>
                <p>
                  Led front-end development for projects with Yakima, Hollywood
                  Theaters, and Umpqua Bank, among others.
                </p>

                <h5>Technology</h5>

                <p>
                  Building responsive interfaces using the latest in{" "}
                  <strong>HTML</strong>, <strong>CSS</strong> and{" "}
                  <strong>JavaScript</strong>.
                </p>

                <p>
                  Working with modern front-end frameworks and libraries like{" "}
                  <strong>React</strong> and <strong>Next.js</strong>, versioned
                  with <strong>Git</strong>, built with <strong>NPM</strong> and{" "}
                  <strong>Webpack</strong>. And powered by a{" "}
                  <strong>headless CMS</strong> or an <strong>API</strong>.
                </p>

                <p>
                  Interested in how this site was built? You can review the
                  source on{" "}
                  <a href="https://github.com/nathansearles/nathansearles.com">
                    GitHub
                  </a>
                  .
                </p>
              </motion.div>
            </Column>
          </Row>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Resume;
