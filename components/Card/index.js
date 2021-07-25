import Link from "next/link";
import { motion } from "framer-motion";
import Image from "../../components/Image";
import styles from "./card.module.scss";

const Card = (props) => {
  const hoverVariant = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -2,
      transition: { duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <Link href={`/projects/${props.slug}`}>
      <a className={styles.Card}>
        <motion.div
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
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
      </a>
    </Link>
  );
};

export default Card;
