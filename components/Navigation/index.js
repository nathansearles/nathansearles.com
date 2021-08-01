import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./navigation.module.scss";

export default function Navigation() {
  const { pathname } = useRouter();
  const BackButton = () => (
    <div className={styles.backButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrowLeft}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span>Projects</span>
    </div>
  );
  return (
    <nav className={styles.navigation}>
      <div>
        <Link href="/" scroll={false}>
          <a>{pathname === "/" ? `Nathan Searles` : <BackButton />}</a>
        </Link>
        <Link href="/resume">
          <a className={styles.button}>resume</a>
        </Link>
      </div>
    </nav>
  );
}
