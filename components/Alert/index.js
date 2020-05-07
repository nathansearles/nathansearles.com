import Link from "next/link";
import { Row, Column } from "../Grid";
import { motion } from "framer-motion";
import { dropInTransition } from "../../utilities";
import styles from "./alert.module.scss";

const Alert = (props) => {
  return (
    <Row className={styles.Alert}>
      <Column xs={12}>
        <motion.p
          initial="initial"
          animate="enter"
          exit="exit"
          variants={dropInTransition}
        >
          <span
            className="emoji"
            aria-hidden="true"
            aria-label="Hey!"
            role="img"
          >
            👋
          </span>{" "}
          <Link href="/resume">
            <a>Available for new opportunities</a>
          </Link>
        </motion.p>
      </Column>
    </Row>
  );
};

export default Alert;
