import { motion } from "framer-motion";

export default function ScrollAnimation({ children }) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.25,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
