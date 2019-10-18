import React from "react";
import { motion } from "framer-motion";
import { pageTransitions } from "../utilities";
import Title from "../components/Head";
import Nav from "../components/Nav";

import "../styles/styles.scss";

const Error = ({ projects }) => {
  return (
    <>
      <Title title={"Error"} />

      <Nav />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageTransitions}
        id="siteWrapper"
      >
        <div className="page-hero">
          <div>
            <p className="lead">Hmm, this page isn't here. ¯\_(ツ)_/¯</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Error;
