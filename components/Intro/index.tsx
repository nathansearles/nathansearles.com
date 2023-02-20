import { FocusOn } from "react-focus-on";
import { motion } from "framer-motion";
import styles from "./intro.module.css";

export default function Intro() {
  const containerVariants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { type: "spring", damping: 80, stiffness: 400, delay: 0.35 },
    },
  };

  const textVariants = {
    initial: {},
    enter: {},
    exit: {
      scale: 0.75,
      opacity: 0,
      transition: {
        scale: { type: "spring", damping: 80, stiffness: 400 },
        opacity: { type: "spring", bounce: 0.1, duration: 0.35 },
      },
    },
  };

  const letterVariants = {
    initial: (custom: number) => ({
      opacity: 0,
      x: 100 * custom * 5,
      rotateY: custom * 45,
    }),
    enter: {
      opacity: 1,
      x: "0%",
      rotateY: 0,
      transition: {
        opacity: { type: "spring", damping: 80, stiffness: 100 },
        x: { type: "spring", damping: 80, stiffness: 200 },
        rotateY: { type: "spring", damping: 60, stiffness: 100 },
      },
    },
    exit: {},
  };

  return (
    <FocusOn>
      <motion.div
        className={styles.intro}
        variants={containerVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div variants={textVariants} className={styles.text}>
          <motion.span variants={letterVariants} custom={-1}>
            N
          </motion.span>
          <motion.span variants={letterVariants} custom={-0.833}>
            a
          </motion.span>
          <motion.span variants={letterVariants} custom={-0.6664}>
            t
          </motion.span>
          <motion.span variants={letterVariants} custom={-0.4998}>
            h
          </motion.span>
          <motion.span variants={letterVariants} custom={-0.3332}>
            a
          </motion.span>
          <motion.span variants={letterVariants} custom={-0.1666}>
            n
          </motion.span>
          &nbsp;
          {/* 14.2857142857 */}
          <motion.span variants={letterVariants} custom={0.1428}>
            S
          </motion.span>
          <motion.span variants={letterVariants} custom={0.2856}>
            e
          </motion.span>
          <motion.span variants={letterVariants} custom={0.4284}>
            a
          </motion.span>
          <motion.span variants={letterVariants} custom={0.5712}>
            r
          </motion.span>
          <motion.span variants={letterVariants} custom={0.714}>
            l
          </motion.span>
          <motion.span variants={letterVariants} custom={0.8568}>
            e
          </motion.span>
          <motion.span variants={letterVariants} custom={1}>
            s
          </motion.span>
        </motion.div>
      </motion.div>
    </FocusOn>
  );
}
