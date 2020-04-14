import Link from "next/link";
import { Container, Row, Column } from "../Grid";
import { motion } from "framer-motion";
import styles from "./topbar.module.scss";

const TopBar = (props) => {
  const transition = {
    initial: { opacity: 0, y: "-100%" },
    enter: {
      opacity: 1,
      y: "0%",
      transition: { delay: 0.5, duration: 0.35, ease: [0.0, 0.0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: [0.4, 0.0, 1, 1] },
    },
  };
  return (
    <Container classes={styles.TopBar}>
      <Row>
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
    </Container>
  );
};

export default TopBar;
