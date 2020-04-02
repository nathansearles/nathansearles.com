import styles from "./navigation.module.scss";
import Button from "../Button";

const Navigation = props => {
  return (
    <nav className={styles.Navigation}>
      <Button href="/resume" classes="solid">
        Resume
      </Button>
    </nav>
  );
};

export default Navigation;
