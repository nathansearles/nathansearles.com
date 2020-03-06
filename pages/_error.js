import { motion } from "framer-motion";
import { pageTransition } from "../utilities";
import Page from "../components/Page";
import Title from "../components/Head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Error = ({ projects }) => {
  return (
    <>
      <Title title={"Error"} />

      <Nav />

      <Page>
        <Hero>
          <h1>Hmm, this page isn't here. ¯\_(ツ)_/¯</h1>
        </Hero>
      </Page>
    </>
  );
};

export default Error;
