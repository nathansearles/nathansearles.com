import Link from "next/link";
import { motion } from "framer-motion";
import Image from "../../components/Image";

import styles from "./card.module.scss";

const Card = (props) => {
  const hoverVariant = {
    initial: { scale: 0.99, y: 0 },
    hover: {
      scale: 1.01,
      y: -2,
      transition: { type: "spring", damping: 300, mass: 2 },
    },
  };
  return (
    <Link href="/projects/[slug]" as={`/projects/${props.slug}`} scroll={false}>
      <motion.a initial="initial" whileHover="hover" className={styles.Card}>
        <motion.div variants={hoverVariant}>
          <Image
            src={props.thumbnail}
            alt={props.name}
            aspectRatio={"square"}
            ripple
          />
        </motion.div>
        <div className={styles.title}>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
        </div>
      </motion.a>
    </Link>
  );
};

export default Card;
