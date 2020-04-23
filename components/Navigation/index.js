import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../Button";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
  return (
    <div className={styles.Navigation}>
      <nav>
        <h1>
          <Link href="/" scroll={false}>
            <a>Nathan Searles</a>
          </Link>
        </h1>
        <div>
          <Button href="/resume" classes="solid">
            Resume
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
