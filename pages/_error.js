import { motion } from "framer-motion";
import { pageTransition } from "../utilities";
import Title from "../components/Head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

import { styledPage } from "../styles/styles.js";

const Error = ({ projects }) => {
  return (
    <>
      <Title title={"Error"} />

      <Nav />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageTransition}
        className="site-wrapper"
      >
        <Hero>
          <p className="lead">Hmm, this page isn't here. ¯\_(ツ)_/¯</p>
        </Hero>
      </motion.div>
      <style jsx>{styledPage}</style>
    </>
  );
};

export default Error;
