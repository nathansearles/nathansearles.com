import styles from "./navigation.module.scss";
import Link from "../Link";

const Navigation = props => {
  return (
    <nav className={styles.Navigation}>
      <Link href="/resume" activeClassName="active">
        <a>Resume</a>
      </Link>
    </nav>
  );
};

export default Navigation;
