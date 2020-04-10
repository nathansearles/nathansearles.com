import { motion } from "framer-motion";
import { pageTransition } from "../../utilities";
import styles from "./main.module.scss";

const Main = (props) => {
  return (
    <motion.main
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
      className={[styles.Main, props.classes].join(" ")}
    >
      {props.children}
    </motion.main>
  );
};

export default Main;
