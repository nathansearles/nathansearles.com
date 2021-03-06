import Link from "next/link";
import { motion } from "framer-motion";
import Image from "../../components/Image";

import styles from "./card.module.scss";

const Card = (props) => {
  const hoverVariant = {
    initial: { scale: 0.99, y: 0 },
    hover: {
      scale: 1.02,
      y: -2,
      transition: { type: "spring", damping: 50, mass: 2 },
    },
    tap: {
      scale: 1.02,
      y: -2,
      transition: { type: "spring", damping: 100, mass: 2 },
    },
  };
  return (
    <Link href="/projects/[slug]" as={`/projects/${props.slug}`} scroll={false}>
      <motion.a className={styles.Card}>
        <motion.div
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <Image
            src={props.preview}
            alt={props.name}
            aspectRatio={"square"}
            ripple
          />
        </motion.div>
        <div className={styles.title}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </motion.a>
    </Link>
  );
};

export default Card;
