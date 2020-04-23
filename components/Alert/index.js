import Link from "next/link";
import { Container, Row, Column } from "../Grid";
import { motion } from "framer-motion";
import styles from "./alert.module.scss";

const Alert = (props) => {
  const transition = {
    initial: { opacity: 0, scale: 1.1 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, type: "spring", damping: 100, mass: 1 },
    },
    exit: {
      // opacity: 0,
      // y: "-100%",
      // transition: { type: "spring", damping: 100, mass: 1 },
    },
  };
  return (
    <Row className={styles.Alert}>
      <Column xs={12}>
        <motion.p
          initial="initial"
          animate="enter"
          exit="exit"
          variants={transition}
        >
          👋{" "}
          <Link href="/resume">
            <a>Available for new opportunities</a>
          </Link>
        </motion.p>
      </Column>
    </Row>
  );
};

export default Alert;
