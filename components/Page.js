import { motion } from "framer-motion";
import { pageTransition, projectTransition } from "../utilities";
import theme from "../styles/_variables";

const Page = props => {
  const transition = props.project ? projectTransition : pageTransition;
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={transition}
    >
      <div className="wrapper">
        <div className="content">{props.children}</div>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: [leftGutter] 1fr [content] 10fr [rightGutter] 1fr;
          max-width: ${theme.maxWidth};
          margin: 0 auto;
          position: relative;
          padding-bottom: 96px;
        }
        .content {
          grid-column: content;
        }
      `}</style>
    </motion.div>
  );
};

export default Page;
