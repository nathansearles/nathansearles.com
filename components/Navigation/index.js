import Link from "next/link";
import styles from "./navigation.module.scss";

const Navigation = props => {
  return (
    <nav className={styles.Navigation}>
      <div className="col-12 align-center">
        <p>
          👋 <Link href="/resume">Available for new opportunities</Link>
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
