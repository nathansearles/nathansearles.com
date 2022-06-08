import { FocusOn } from "react-focus-on";
import { motion } from "framer-motion";
import styles from "./splash.module.scss";

export default function Splash() {
  const containerVariants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
      transition: { type: "spring", damping: 80, stiffness: 400 },
    },
    exit: {
      opacity: 0,
      transition: { type: "spring", damping: 80, stiffness: 400, delay: 0.35 },
    },
  };
  const textVariants = {
    initial: {
      scale: 1.25,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 80, stiffness: 400, delay: 0.5 },
    },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: {
        scale: { type: "spring", damping: 80, stiffness: 400 },
        opacity: { type: "spring", bounce: 0.1, duration: 0.35 },
      },
    },
  };
  return (
    <FocusOn>
      <motion.div
        className={styles.splash}
        variants={containerVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div className={styles.text} variants={textVariants}>
          Nathan Searles
        </motion.div>
      </motion.div>
    </FocusOn>
  );
}
